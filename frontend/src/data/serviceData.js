import { getProvinceById, provinceData, slugify } from "./destinationData";

export const serviceByProvince = provinceData.map((province, index) => {
  const imagePool = [province.image, ...province.places.map((place) => place.image)];
  const getImage = (offset) => imagePool[offset % imagePool.length];

  const hotelNames = ["Grand Hotel", "Riverside Hotel", "Boutique Suites", "Skyline Hotel"];
  const hotelBestFor = ["Family & business", "City explorers", "Couples", "Work trips"];

  const hotels = hotelNames.map((suffix, hotelIndex) => ({
    id: `${province.id}-hotel-${hotelIndex + 1}`,
    name: `${province.name} ${suffix}`,
    type: "Hotel",
    image: getImage(hotelIndex),
    detail: `Comfort-focused stay in ${province.name} with modern rooms, local transport support, and easy access to main attractions.`,
    bestFor: hotelBestFor[hotelIndex],
    range: `$${75 + (index % 6) * 10 + hotelIndex * 9} - $${120 + (index % 6) * 12 + hotelIndex * 14} / night`,
  }));

  const homestays = [
    {
      id: `${province.id}-homestay-1`,
      name: `${province.name} Local Homestay`,
      type: "Homestay",
      image: getImage(1),
      detail: `Authentic host-family stay in ${province.name} with Khmer meals, local neighborhood walks, and a warm community feel.`,
      bestFor: "Culture seekers",
      range: `$${28 + (index % 5) * 5} - $${48 + (index % 5) * 7} / night`,
    },
    {
      id: `${province.id}-homestay-2`,
      name: `${province.name} Garden Homestay`,
      type: "Homestay",
      image: getImage(2),
      detail: `Quiet homestay in ${province.name} with garden setting, home-cooked breakfast, and optional countryside activities.`,
      bestFor: "Slow travel",
      range: `$${32 + (index % 5) * 5} - $${56 + (index % 5) * 7} / night`,
    },
  ];

  const stays = [...hotels, ...homestays];

  return {
    id: province.id,
    province: province.name,
    intro: province.description,
    stays,
  };
});

export function getServiceProvince(provinceId) {
  return serviceByProvince.find((section) => String(section.id) === String(provinceId));
}

export function getServiceStay(provinceId, staySlug) {
  const section = getServiceProvince(provinceId);
  if (!section) {
    return { section: null, stay: null };
  }

  const stay = section.stays.find((item) => slugify(item.name) === String(staySlug));
  return { section, stay: stay ?? null };
}

export function getHotelStaysByProvince(provinceId) {
  const section = getServiceProvince(provinceId);
  if (!section) {
    return { section: null, hotels: [] };
  }

  const hotels = section.stays.filter((stay) => stay.type === "Hotel");
  return { section, hotels };
}

export { getProvinceById, slugify };