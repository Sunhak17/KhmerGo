function toNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

function formatStay(row) {
  const priceMin = row.price_min == null ? null : Number(row.price_min);
  const priceMax = row.price_max == null ? null : Number(row.price_max);

  return {
    id: row.id,
    provinceId: row.province_id,
    name: row.name,
    slug: row.slug,
    type: row.stay_type,
    bestFor: row.best_for,
    detail: row.detail,
    priceMin,
    priceMax,
    currencyCode: row.currency_code,
    range:
      priceMin != null && priceMax != null
        ? `${row.currency_code} ${priceMin.toFixed(2)} - ${row.currency_code} ${priceMax.toFixed(2)} / night`
        : null,
    image_url: row.image_url,
    imageUrl: row.image_url,
  };
}

module.exports = {
  toNumber,
  isValidEmail,
  formatStay,
};
