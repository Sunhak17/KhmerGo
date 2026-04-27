const { pool } = require("../db");

function mapProvince(row) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    type: row.province_type,
    description: row.description,
    image_url: row.image_url,
    imageUrl: row.image_url,
  };
}

function mapPlace(row) {
  return {
    id: row.id,
    provinceId: row.province_id,
    name: row.name,
    slug: row.slug,
    tag: row.tag,
    bestFor: row.best_for,
    detail: row.detail,
    image_url: row.image_url,
    imageUrl: row.image_url,
  };
}

async function getProvinces() {
  const [rows] = await pool.query(
    `SELECT id, name, slug, province_type, description, image_url
     FROM provinces
     ORDER BY id ASC`
  );

  return rows.map(mapProvince);
}

async function getProvinceById(provinceId) {
  const [rows] = await pool.query(
    `SELECT id, name, slug, province_type, description, image_url
     FROM provinces
     WHERE id = ?
     LIMIT 1`,
    [provinceId]
  );

  return rows.length ? mapProvince(rows[0]) : null;
}

async function getPlacesByProvinceId(provinceId) {
  const [rows] = await pool.query(
    `SELECT id, province_id, name, slug, tag, best_for, detail, image_url
     FROM places
     WHERE province_id = ?
     ORDER BY id ASC`,
    [provinceId]
  );

  return rows.map(mapPlace);
}

module.exports = {
  getProvinces,
  getProvinceById,
  getPlacesByProvinceId,
};
