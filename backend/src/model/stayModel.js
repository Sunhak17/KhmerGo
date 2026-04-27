const { pool } = require("../db");
const { formatStay } = require("../utils/helpers");

async function getStaysByProvinceId(provinceId, typeFilter) {
  const values = [provinceId];
  let whereTypeClause = "";

  if (typeFilter) {
    whereTypeClause = "AND stay_type = ?";
    values.push(typeFilter);
  }

  const [rows] = await pool.query(
    `SELECT id, province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url
     FROM stays
     WHERE province_id = ? ${whereTypeClause}
     ORDER BY id ASC`,
    values
  );

  return rows.map(formatStay);
}

async function getServiceProvinceSections() {
  const [rows] = await pool.query(
    `SELECT p.id AS province_id,
            p.name AS province_name,
            p.description AS province_description,
            s.id AS stay_id,
            s.slug,
            s.name AS stay_name,
            s.stay_type,
            s.best_for,
            s.detail,
            s.price_min,
            s.price_max,
            s.currency_code,
            s.image_url
     FROM provinces p
     LEFT JOIN stays s ON s.province_id = p.id
     ORDER BY p.id ASC, s.id ASC`
  );

  const sectionMap = new Map();

  for (const row of rows) {
    if (!sectionMap.has(row.province_id)) {
      sectionMap.set(row.province_id, {
        id: row.province_id,
        province: row.province_name,
        intro: row.province_description,
        stays: [],
      });
    }

    if (row.stay_id != null) {
      sectionMap.get(row.province_id).stays.push(
        formatStay({
          id: row.stay_id,
          province_id: row.province_id,
          name: row.stay_name,
          slug: row.slug,
          stay_type: row.stay_type,
          best_for: row.best_for,
          detail: row.detail,
          price_min: row.price_min,
          price_max: row.price_max,
          currency_code: row.currency_code,
          image_url: row.image_url,
        })
      );
    }
  }

  return Array.from(sectionMap.values());
}

async function getStayById(stayId) {
  const [rows] = await pool.query(
    `SELECT id, province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url
     FROM stays
     WHERE id = ?
     LIMIT 1`,
    [stayId]
  );

  return rows.length ? formatStay(rows[0]) : null;
}

async function getStayByProvinceAndSlug(provinceId, staySlug) {
  const [rows] = await pool.query(
    `SELECT id, province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url
     FROM stays
     WHERE province_id = ? AND slug = ?
     LIMIT 1`,
    [provinceId, staySlug]
  );

  return rows.length ? formatStay(rows[0]) : null;
}

async function stayExists(stayId) {
  const [rows] = await pool.query("SELECT id FROM stays WHERE id = ? LIMIT 1", [stayId]);
  return rows.length > 0;
}

module.exports = {
  getStaysByProvinceId,
  getServiceProvinceSections,
  getStayById,
  getStayByProvinceAndSlug,
  stayExists,
};
