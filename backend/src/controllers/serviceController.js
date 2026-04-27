const { toNumber } = require("../utils/helpers");
const {
  getStaysByProvinceId,
  getServiceProvinceSections,
  getStayById,
  getStayByProvinceAndSlug,
} = require("../model/stayModel");

async function listStaysByProvince(req, res, next) {
  try {
    const provinceId = toNumber(req.params.provinceId);
    if (provinceId == null) {
      return res.status(400).json({ message: "Invalid provinceId" });
    }

    const typeFilter = String(req.query.type || "").trim();
    const stays = await getStaysByProvinceId(provinceId, typeFilter || null);
    return res.json(stays);
  } catch (error) {
    return next(error);
  }
}

async function listServiceProvinceSections(_req, res, next) {
  try {
    const sections = await getServiceProvinceSections();
    return res.json(sections);
  } catch (error) {
    return next(error);
  }
}

async function getStay(req, res, next) {
  try {
    const stayId = toNumber(req.params.stayId);
    if (stayId == null) {
      return res.status(400).json({ message: "Invalid stayId" });
    }

    const stay = await getStayById(stayId);
    if (!stay) {
      return res.status(404).json({ message: "Stay not found" });
    }

    return res.json(stay);
  } catch (error) {
    return next(error);
  }
}

async function getStayBySlug(req, res, next) {
  try {
    const provinceId = toNumber(req.params.provinceId);
    const staySlug = String(req.params.staySlug || "").trim();

    if (provinceId == null || !staySlug) {
      return res.status(400).json({ message: "Invalid provinceId or staySlug" });
    }

    const stay = await getStayByProvinceAndSlug(provinceId, staySlug);
    if (!stay) {
      return res.status(404).json({ message: "Stay not found" });
    }

    return res.json(stay);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  listStaysByProvince,
  listServiceProvinceSections,
  getStay,
  getStayBySlug,
};
