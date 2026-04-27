const { toNumber } = require("../utils/helpers");
const {
  getProvinces,
  getProvinceById,
  getPlacesByProvinceId,
} = require("../model/provinceModel");

async function health(_req, res) {
  res.json({ ok: true, message: "Backend and database are connected" });
}

async function listProvinces(_req, res, next) {
  try {
    const provinces = await getProvinces();
    res.json(provinces);
  } catch (error) {
    next(error);
  }
}

async function getProvince(req, res, next) {
  try {
    const provinceId = toNumber(req.params.provinceId);
    if (provinceId == null) {
      return res.status(400).json({ message: "Invalid provinceId" });
    }

    const province = await getProvinceById(provinceId);
    if (!province) {
      return res.status(404).json({ message: "Province not found" });
    }

    return res.json(province);
  } catch (error) {
    return next(error);
  }
}

async function listPlacesByProvince(req, res, next) {
  try {
    const provinceId = toNumber(req.params.provinceId);
    if (provinceId == null) {
      return res.status(400).json({ message: "Invalid provinceId" });
    }

    const places = await getPlacesByProvinceId(provinceId);
    return res.json(places);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  health,
  listProvinces,
  getProvince,
  listPlacesByProvince,
};
