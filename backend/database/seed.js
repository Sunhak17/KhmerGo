const fs = require("fs");
const path = require("path");
const { pool } = require("../src/db");

const destinationDataPath = path.resolve(__dirname, "./source/destinationData.source.js");

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseProvinceData(source) {
  const importRegex = /^import\s+([a-zA-Z0-9_]+)\s+from\s+"([^"]+)";/gm;
  const provinceRegex =
    /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*type:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*image:\s*([a-zA-Z0-9_]+),\s*places:\s*\[([\s\S]*?)\],\s*\},/g;

  const placeRegex =
    /\{\s*name:\s*"([^"]+)",\s*detail:\s*"([^"]+)",\s*image:\s*placeImages\.([a-zA-Z0-9_]+),\s*tag:\s*"([^"]+)",\s*bestFor:\s*"([^"]+)"\s*\}/g;

  const provinces = [];
  const imageImportMap = new Map();

  for (const importMatch of source.matchAll(importRegex)) {
    const alias = importMatch[1];
    const importPath = importMatch[2];
    const normalized = importPath.replace(/^\.\.\/assets/, "/assets");
    imageImportMap.set(alias, normalized);
  }

  for (const provinceMatch of source.matchAll(provinceRegex)) {
    const provinceId = Number(provinceMatch[1]);
    const name = provinceMatch[2];
    const provinceType = provinceMatch[3];
    const description = provinceMatch[4];
    const imageAlias = provinceMatch[5];
    const placesRaw = provinceMatch[6];

    const places = [];

    for (const placeMatch of placesRaw.matchAll(placeRegex)) {
      places.push({
        name: placeMatch[1],
        detail: placeMatch[2],
        imageAlias: placeMatch[3],
        tag: placeMatch[4],
        bestFor: placeMatch[5],
      });
    }

    provinces.push({
      id: provinceId,
      name,
      provinceType,
      description,
      imageAlias,
      imagePath: imageImportMap.get(imageAlias) || "/assets/images/slider/1.jpg",
      places,
    });
  }

  return provinces;
}

function buildStaysForProvince(province, index) {
  const imagePool = [
    province.imagePath,
    "/assets/images/slider/1.jpg",
    "/assets/images/slider/2.jpg",
    "/assets/images/slider/3.jpg",
    "/assets/images/slider/4.jpg",
    "/assets/images/slider/5.jpg",
  ];
  const getImage = (offset) => imagePool[offset % imagePool.length];

  const hotelNames = ["Grand Hotel", "Riverside Hotel", "Boutique Suites", "Skyline Hotel"];
  const hotelBestFor = ["Family & business", "City explorers", "Couples", "Work trips"];

  const hotels = hotelNames.map((suffix, hotelIndex) => ({
    name: `${province.name} ${suffix}`,
    stayType: "Hotel",
    imageUrl: getImage(hotelIndex),
    detail: `Comfort-focused stay in ${province.name} with modern rooms, local transport support, and easy access to main attractions.`,
    bestFor: hotelBestFor[hotelIndex],
    priceMin: 75 + (index % 6) * 10 + hotelIndex * 9,
    priceMax: 120 + (index % 6) * 12 + hotelIndex * 14,
  }));

  const homestays = [
    {
      name: `${province.name} Local Homestay`,
      stayType: "Homestay",
      imageUrl: getImage(1),
      detail: `Authentic host-family stay in ${province.name} with Khmer meals, local neighborhood walks, and a warm community feel.`,
      bestFor: "Culture seekers",
      priceMin: 28 + (index % 5) * 5,
      priceMax: 48 + (index % 5) * 7,
    },
    {
      name: `${province.name} Garden Homestay`,
      stayType: "Homestay",
      imageUrl: getImage(2),
      detail: `Quiet homestay in ${province.name} with garden setting, home-cooked breakfast, and optional countryside activities.`,
      bestFor: "Slow travel",
      priceMin: 32 + (index % 5) * 5,
      priceMax: 56 + (index % 5) * 7,
    },
  ];

  return [...hotels, ...homestays].map((stay) => ({
    ...stay,
    slug: slugify(stay.name),
  }));
}

async function seed() {
  const source = fs.readFileSync(destinationDataPath, "utf8");
  const provinces = parseProvinceData(source);

  if (!provinces.length) {
    throw new Error("Could not parse province data from database/source/destinationData.source.js");
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    for (let i = 0; i < provinces.length; i += 1) {
      const province = provinces[i];

      await connection.query(
        `INSERT INTO provinces (id, name, slug, province_type, description, image_url)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
           name = VALUES(name),
           slug = VALUES(slug),
           province_type = VALUES(province_type),
           description = VALUES(description),
           image_url = VALUES(image_url)`,
        [
          province.id,
          province.name,
          slugify(province.name),
          province.provinceType,
          province.description,
          province.imagePath,
        ]
      );

      for (const place of province.places) {
        await connection.query(
          `INSERT INTO places (province_id, name, slug, tag, best_for, detail, image_url)
           VALUES (?, ?, ?, ?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE
             name = VALUES(name),
             tag = VALUES(tag),
             best_for = VALUES(best_for),
             detail = VALUES(detail),
             image_url = VALUES(image_url)`,
          [
            province.id,
            place.name,
            slugify(place.name),
            place.tag,
            place.bestFor,
            place.detail,
            province.imagePath,
          ]
        );
      }

      const stays = buildStaysForProvince(province, i);

      for (const stay of stays) {
        await connection.query(
          `INSERT INTO stays (province_id, name, slug, stay_type, best_for, detail, price_min, price_max, currency_code, image_url)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'USD', ?)
           ON DUPLICATE KEY UPDATE
             name = VALUES(name),
             stay_type = VALUES(stay_type),
             best_for = VALUES(best_for),
             detail = VALUES(detail),
             price_min = VALUES(price_min),
             price_max = VALUES(price_max),
             currency_code = VALUES(currency_code),
             image_url = VALUES(image_url)`,
          [
            province.id,
            stay.name,
            stay.slug,
            stay.stayType,
            stay.bestFor,
            stay.detail,
            stay.priceMin,
            stay.priceMax,
            stay.imageUrl,
          ]
        );
      }
    }

    await connection.commit();
    console.log(`Seed complete: ${provinces.length} provinces imported.`);
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
    await pool.end();
  }
}

seed()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seed failed:", error.message);
    process.exit(1);
  });
