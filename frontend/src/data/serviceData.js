import { getProvinceById, provinceData, slugify } from "./destinationData";

export const serviceByProvince = provinceData.map((province, index) => {
  const primaryImage = province.image;
  const secondaryImage = province.places[1]?.image ?? province.image;

  const stays = [
    {
      id: `${province.id}-hotel`,
      name: `${province.name} Grand Hotel`,
      type: "Hotel",
      image: primaryImage,
      detail: `Premium city-center stay in ${province.name} with airport transfer, breakfast, and 24/7 front desk support.`,
      bestFor: "Family & business",
      range: `$${120 + (index % 6) * 15} - $${170 + (index % 6) * 20} / night`,
    },
    {
      id: `${province.id}-homestay`,
      name: `${province.name} Local Homestay`,
      type: "Homestay",
      image: secondaryImage,
      detail: `Authentic local host experience in ${province.name} including Khmer meals and neighborhood cultural activities.`,
      bestFor: "Culture seekers",
      range: `$${35 + (index % 5) * 8} - $${65 + (index % 5) * 10} / night`,
    },
  ];

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

export { getProvinceById, slugify };