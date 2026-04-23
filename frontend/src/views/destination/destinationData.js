import angkorWat from "../../assets/images/slider/1.jpg";
import phnom from "../../assets/images/slider/2.jpg";
import beach from "../../assets/images/slider/3.jpg";
import mountain from "../../assets/images/slider/4.jpg";
import sunset from "../../assets/images/slider/5.jpg";

export const provinceData = [
  {
    id: 1,
    name: "Phnom Penh",
    type: "Capital city",
    description: "Cambodia's capital blends riverfront energy, royal landmarks, and vibrant food streets.",
    image: phnom,
    places: [
      { name: "Royal Palace", detail: "A golden landmark of Khmer architecture and the official residence of the monarchy.", image: phnom, tag: "Heritage", bestFor: "Architecture" },
      { name: "Sisowath Quay", detail: "A lively riverside promenade for sunset walks, cafes, and local evening life.", image: sunset, tag: "Riverfront", bestFor: "Sunset" },
      { name: "Central Market", detail: "An iconic market for shopping, local snacks, and classic Phnom Penh city atmosphere.", image: beach, tag: "Market", bestFor: "Shopping" },
    ],
  },
  {
    id: 2,
    name: "Siem Reap",
    type: "Tourism hub",
    description: "The gateway to Angkor with temple sunrise experiences and a strong cultural scene.",
    image: angkorWat,
    places: [
      { name: "Angkor Wat Sunrise", detail: "The classic Cambodia experience with iconic reflection views and world-famous stone reliefs.", image: angkorWat, tag: "Temple", bestFor: "Sunrise" },
      { name: "Pub Street", detail: "A busy night-time district with food, music, and easy access to local tours.", image: sunset, tag: "Nightlife", bestFor: "Food" },
      { name: "Tonle Sap Lake", detail: "Floating village life and water landscapes that show another side of Siem Reap travel.", image: beach, tag: "Lake", bestFor: "Boat tour" },
    ],
  },
  {
    id: 3,
    name: "Battambang",
    type: "Art city",
    description: "A relaxed riverside city known for countryside rides, heritage buildings, and creative spaces.",
    image: sunset,
    places: [
      { name: "Bamboo Train", detail: "A unique open-air ride through villages and rice fields on a simple rail platform.", image: beach, tag: "Local", bestFor: "Adventure" },
      { name: "Ek Phnom", detail: "An atmospheric temple site with a calm setting and rich historical presence.", image: mountain, tag: "Temple", bestFor: "History" },
      { name: "Colonial Quarter", detail: "A heritage street area with old buildings, cafes, and a slow city rhythm.", image: phnom, tag: "Urban", bestFor: "Walks" },
    ],
  },
  {
    id: 4,
    name: "Preah Sihanouk",
    type: "Coastal province",
    description: "Cambodia's beach gateway with island access, turquoise water, and resort escapes.",
    image: beach,
    places: [
      { name: "Otres Beach", detail: "A laid-back beach strip for relaxed swimming, sunset bars, and soft sand walks.", image: beach, tag: "Beach", bestFor: "Relaxing" },
      { name: "Koh Rong Pier", detail: "The departure point to island adventures, snorkeling, and overnight sea trips.", image: sunset, tag: "Island", bestFor: "Boating" },
      { name: "Serendipity Beach", detail: "A classic stop for coastal dining, sea views, and easy evening movement.", image: phnom, tag: "Shore", bestFor: "Dining" },
    ],
  },
  {
    id: 5,
    name: "Kampot",
    type: "Riverside province",
    description: "A scenic stop with pepper farms, river views, and mountain escapes nearby.",
    image: mountain,
    places: [
      { name: "Bokor Hill Station", detail: "A misty highland escape with colonial ruins, cool weather, and panoramic views.", image: mountain, tag: "Highland", bestFor: "Day trip" },
      { name: "Pepper Plantation", detail: "Learn how Kampot pepper is grown and harvest fresh flavors at source.", image: beach, tag: "Farm", bestFor: "Local taste" },
      { name: "Kampot River", detail: "Calm waters, sunset cruises, and a relaxed town edge for visitors.", image: sunset, tag: "River", bestFor: "Cruise" },
    ],
  },
  {
    id: 6,
    name: "Kep",
    type: "Small coastal town",
    description: "A quiet seaside area known for crab markets, fresh seafood, and a gentle coastline.",
    image: sunset,
    places: [
      { name: "Kep Crab Market", detail: "Fresh seafood stalls and the best place to try the province's signature crab dishes.", image: sunset, tag: "Market", bestFor: "Seafood" },
      { name: "Kep National Park", detail: "A breezy walking area with viewpoints, forest paths, and wildlife moments.", image: mountain, tag: "Nature", bestFor: "Walking" },
      { name: "Koh Tonsay", detail: "A small island escape with quiet beaches and simple overnight stays.", image: beach, tag: "Island", bestFor: "Relaxing" },
    ],
  },
  {
    id: 7,
    name: "Koh Kong",
    type: "Eco province",
    description: "A wild green province with rivers, mangroves, and deep-forest escapes.",
    image: beach,
    places: [
      { name: "Tatai Waterfall", detail: "A scenic river-and-waterfall stop surrounded by jungle and calm water activities.", image: mountain, tag: "Waterfall", bestFor: "Nature" },
      { name: "Cardamom Mountains", detail: "One of Southeast Asia's major rainforest regions for trekking and eco-lodges.", image: beach, tag: "Jungle", bestFor: "Trekking" },
      { name: "Mangrove Channel", detail: "A quiet ecological route with boat rides and river wildlife along the coast.", image: sunset, tag: "Eco", bestFor: "Boating" },
    ],
  },
  {
    id: 8,
    name: "Takeo",
    type: "Historical province",
    description: "An easygoing region with ancient temples, canals, and countryside heritage.",
    image: phnom,
    places: [
      { name: "Phnom Chisor", detail: "A hilltop temple complex with long stairways and sweeping farmland views.", image: mountain, tag: "Temple", bestFor: "Viewpoint" },
      { name: "Angkor Borei", detail: "A historical area tied to early Khmer civilization and river routes.", image: beach, tag: "Archaeology", bestFor: "Culture" },
      { name: "Tonle Bati", detail: "A calm lakeside stop with local food, temple visits, and easy day-trip energy.", image: sunset, tag: "Lake", bestFor: "Picnic" },
    ],
  },
  {
    id: 9,
    name: "Kandal",
    type: "River province",
    description: "A surrounding province with easy access to island villages and hilltop pagodas.",
    image: beach,
    places: [
      { name: "Silk Island", detail: "Traditional weaving villages, local crafts, and quiet Mekong-side scenery.", image: beach, tag: "Craft", bestFor: "Day trip" },
      { name: "Udong Mountain", detail: "A former royal capital area with stupas, views, and a peaceful climb.", image: mountain, tag: "Royal", bestFor: "History" },
      { name: "Mekong Village", detail: "A soft rural route near the capital for river scenery and local life.", image: sunset, tag: "Village", bestFor: "Exploring" },
    ],
  },
  {
    id: 10,
    name: "Prey Veng",
    type: "Mekong province",
    description: "A river-fed region with old temples, village culture, and agricultural scenery.",
    image: sunset,
    places: [
      { name: "Ba Phnom", detail: "A historic hill area with temple ruins and a significant local spiritual role.", image: mountain, tag: "Temple", bestFor: "Pilgrimage" },
      { name: "Mekong Riverside", detail: "A simple and peaceful route to experience rural river life and sunsets.", image: sunset, tag: "River", bestFor: "Evening" },
      { name: "Rice Fields", detail: "A seasonal landscape that shows the province's farming side and open horizon.", image: beach, tag: "Rural", bestFor: "Photography" },
    ],
  },
  {
    id: 11,
    name: "Svay Rieng",
    type: "Border province",
    description: "A lowland province near Vietnam with strong market culture and practical travel links.",
    image: phnom,
    places: [
      { name: "Bavet Market", detail: "A lively border town stop with shopping, food, and quick local movement.", image: phnom, tag: "Market", bestFor: "Border stop" },
      { name: "Svay Rieng Pagoda", detail: "A calm local temple visit with traditional design and community atmosphere.", image: beach, tag: "Pagoda", bestFor: "Short visit" },
      { name: "Village Canal", detail: "A relaxed waterway route through the province's farming and residential zones.", image: sunset, tag: "Canal", bestFor: "Local life" },
    ],
  },
  {
    id: 12,
    name: "Kampong Cham",
    type: "Riverside province",
    description: "A classic stop on the Mekong with bridges, temples, and village scenery.",
    image: sunset,
    places: [
      { name: "Ko Paen Bamboo Bridge", detail: "A seasonal bamboo crossing that gives a memorable local travel experience.", image: sunset, tag: "Bridge", bestFor: "Photo stop" },
      { name: "Wat Nokor", detail: "A temple complex combining old ruins with active worship spaces.", image: angkorWat, tag: "Temple", bestFor: "Heritage" },
      { name: "Mekong Island", detail: "A peaceful island side of the river with cycling and local homes.", image: beach, tag: "Island", bestFor: "Cycling" },
    ],
  },
  {
    id: 13,
    name: "Kampong Chhnang",
    type: "Water province",
    description: "Known for floating communities and pottery villages along the lake routes.",
    image: beach,
    places: [
      { name: "Floating Village", detail: "Homes, boats, and daily life on the water create a distinct travel scene.", image: beach, tag: "Lake", bestFor: "Boat tour" },
      { name: "Pottery Village", detail: "Traditional clay work and local craftmaking using methods passed through generations.", image: phnom, tag: "Craft", bestFor: "Workshop" },
      { name: "Lake Road", detail: "A scenic route for photography and observing the province's water-based life.", image: sunset, tag: "Scenic", bestFor: "Drive" },
    ],
  },
  {
    id: 14,
    name: "Kampong Speu",
    type: "Mountain province",
    description: "A green province with waterfalls, hill scenery, and easy routes from the capital.",
    image: mountain,
    places: [
      { name: "Phnom Aural", detail: "The highest peak in Cambodia, popular for trekking and cool-weather camping.", image: mountain, tag: "Peak", bestFor: "Trekking" },
      { name: "Phnom Sruoch", detail: "A hilly retreat for scenic drives, forest stops, and fresh mountain air.", image: sunset, tag: "Highland", bestFor: "Road trip" },
      { name: "Waterfall Trail", detail: "Short nature stops and weekend treks through the province's greener side.", image: beach, tag: "Nature", bestFor: "Hiking" },
    ],
  },
  {
    id: 15,
    name: "Pursat",
    type: "Nature province",
    description: "A quiet province with jungle foothills, reservoir views, and slow-travel appeal.",
    image: sunset,
    places: [
      { name: "Cardamom Foothills", detail: "A greener side of Cambodia with trekking routes and wildlife viewpoints.", image: mountain, tag: "Nature", bestFor: "Eco travel" },
      { name: "Peam Bang", detail: "A waterside village area that feels remote, calm, and photogenic.", image: beach, tag: "Water", bestFor: "Boat ride" },
      { name: "Reservoir View", detail: "Quiet open water views and a peaceful stop for a slow paced day.", image: sunset, tag: "Scenic", bestFor: "Relaxing" },
    ],
  },
  {
    id: 16,
    name: "Banteay Meanchey",
    type: "Gateway province",
    description: "A western gateway province with temple heritage and border-town movement.",
    image: angkorWat,
    places: [
      { name: "Banteay Chhmar", detail: "A large temple complex with impressive carvings and a less crowded experience.", image: angkorWat, tag: "Temple", bestFor: "History" },
      { name: "Poipet Gateway", detail: "A border transit hub where travel, trade, and movement meet.", image: phnom, tag: "Border", bestFor: "Transit" },
      { name: "Rice Border Plains", detail: "Open countryside that frames the province's western horizon.", image: sunset, tag: "Rural", bestFor: "Drive" },
    ],
  },
  {
    id: 17,
    name: "Oddar Meanchey",
    type: "Northern province",
    description: "A quieter border province with historical sites and broad countryside.",
    image: beach,
    places: [
      { name: "Anlong Veng", detail: "A historically significant area tied to Cambodia's recent past and local memory.", image: beach, tag: "History", bestFor: "Learning" },
      { name: "Ta Mok Tomb", detail: "A notable historical site that draws travelers interested in modern Cambodian history.", image: sunset, tag: "Site", bestFor: "Culture" },
      { name: "Forest Road", detail: "A remote-feeling route through northern countryside and low hills.", image: mountain, tag: "Route", bestFor: "Exploring" },
    ],
  },
  {
    id: 18,
    name: "Preah Vihear",
    type: "Temple province",
    description: "A dramatic northern province famous for mountain temples and expansive landscapes.",
    image: mountain,
    places: [
      { name: "Preah Vihear Temple", detail: "A hilltop UNESCO temple with unforgettable cliff-edge views.", image: mountain, tag: "UNESCO", bestFor: "Landmark" },
      { name: "Koh Ker", detail: "A remote temple group with a giant pyramid and forested ruins.", image: angkorWat, tag: "Archaeology", bestFor: "Exploration" },
      { name: "Northern Plateau", detail: "High landscape routes and quiet travel scenes that feel very open and wild.", image: sunset, tag: "Highland", bestFor: "Road trip" },
    ],
  },
  {
    id: 19,
    name: "Stung Treng",
    type: "Mekong province",
    description: "A north-east river province known for wetlands, dolphins, and soft adventure.",
    image: sunset,
    places: [
      { name: "Mekong Wetlands", detail: "A calm area for boat travel, birdwatching, and river ecology.", image: beach, tag: "Wetland", bestFor: "Eco tour" },
      { name: "Dolphin Waters", detail: "Riverside zones where rare freshwater dolphin sightings are possible nearby.", image: sunset, tag: "Wildlife", bestFor: "Boat ride" },
      { name: "Island Channels", detail: "A scenic network of river islands and waterways for a slower experience.", image: phnom, tag: "Island", bestFor: "Cruise" },
    ],
  },
  {
    id: 20,
    name: "Kratie",
    type: "River town",
    description: "A laid-back province with island life, old buildings, and dolphin watching.",
    image: beach,
    places: [
      { name: "Kampi Dolphin Pool", detail: "One of the best places to look for Irrawaddy dolphins on the Mekong.", image: beach, tag: "Wildlife", bestFor: "Boat tour" },
      { name: "Koh Trong", detail: "A peaceful island with bicycle routes, local homestays, and river sunsets.", image: sunset, tag: "Island", bestFor: "Cycling" },
      { name: "French Quarter", detail: "A small historic town area with old facades and slow river-town mood.", image: phnom, tag: "Heritage", bestFor: "Walks" },
    ],
  },
  {
    id: 21,
    name: "Mondulkiri",
    type: "Highland province",
    description: "Cambodia's eastern highlands feature waterfalls, cool air, and outdoor adventure.",
    image: mountain,
    places: [
      { name: "Bou Sra Waterfall", detail: "A powerful waterfall set in a forested highland landscape.", image: mountain, tag: "Waterfall", bestFor: "Nature" },
      { name: "Elephant Valley", detail: "A sanctuary-focused experience centered on ethical wildlife observation.", image: beach, tag: "Sanctuary", bestFor: "Wildlife" },
      { name: "Pine Hills", detail: "Cooler upland scenery with gentle slopes and wide skies.", image: sunset, tag: "Highland", bestFor: "Relaxing" },
    ],
  },
  {
    id: 22,
    name: "Ratanakiri",
    type: "Remote province",
    description: "A wilderness region with crater lakes, ethnic culture, and untouched forest routes.",
    image: sunset,
    places: [
      { name: "Yeak Loam Lake", detail: "A beautiful volcanic lake with clear water and forest surroundings.", image: beach, tag: "Lake", bestFor: "Swimming" },
      { name: "Virachey National Park", detail: "A large protected area for jungle trekking and deep eco travel.", image: mountain, tag: "National park", bestFor: "Trekking" },
      { name: "Brok Village", detail: "A cultural stop to learn about local communities and regional traditions.", image: phnom, tag: "Culture", bestFor: "Learning" },
    ],
  },
  {
    id: 23,
    name: "Tboung Khmum",
    type: "Agricultural province",
    description: "A newer province with quiet roads, farming land, and local temple stops.",
    image: phnom,
    places: [
      { name: "Memot Plantation", detail: "A rural landscape with rubber estates and classic east-Cambodia scenery.", image: phnom, tag: "Rural", bestFor: "Road trip" },
      { name: "Tonle Bet", detail: "A local gateway area with everyday markets and cross-border movement.", image: sunset, tag: "Town", bestFor: "Local stop" },
      { name: "Village Route", detail: "An easy travel loop with fields and local roadside food stops.", image: beach, tag: "Farm", bestFor: "Driving" },
    ],
  },
  {
    id: 24,
    name: "Pailin",
    type: "Gem province",
    description: "A western province with gem history, hills, and a slower provincial rhythm.",
    image: mountain,
    places: [
      { name: "Phnom Yat", detail: "A hillside temple with a panoramic view over the town and nearby hills.", image: mountain, tag: "Hill", bestFor: "Viewpoint" },
      { name: "Pailin Gem Fields", detail: "Historic gemstone areas that shaped the region's identity and trade.", image: beach, tag: "Heritage", bestFor: "Learning" },
      { name: "Border Hills", detail: "A quiet scenic drive that shows the province's soft hilly landscape.", image: sunset, tag: "Scenic", bestFor: "Drive" },
    ],
  },
  {
    id: 25,
    name: "Kampong Thom",
    type: "Central province",
    description: "A central stop with ancient temple complexes and broad countryside drives.",
    image: angkorWat,
    places: [
      { name: "Sambor Prei Kuk", detail: "A pre-Angkor temple complex and UNESCO World Heritage destination.", image: angkorWat, tag: "UNESCO", bestFor: "History" },
      { name: "Stung Sen", detail: "A river region with calm scenery and easy access to local town life.", image: sunset, tag: "River", bestFor: "Relaxing" },
      { name: "Old Market", detail: "A local center where daily life, food, and simple travel meet.", image: phnom, tag: "Market", bestFor: "Walking" },
    ],
  },
];

export function getProvinceById(provinceId) {
  return provinceData.find((province) => String(province.id) === String(provinceId));
}

export function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getPlaceBySlug(province, placeSlug) {
  if (!province) {
    return null;
  }

  return province.places.find((place) => slugify(place.name) === String(placeSlug));
}