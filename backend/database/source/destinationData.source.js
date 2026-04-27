import pp from "../assets/images/destination/province/pp.jpg";
import sr from "../assets/images/destination/province/sr.jpg";
import btb from "../assets/images/destination/province/btb.jpg";
import shv from "../assets/images/destination/province/kps.jpg";
import kp from "../assets/images/destination/province/kp.jpg";
import kep from "../assets/images/destination/province/kep.jpg";
import kk from "../assets/images/destination/province/koh_kong.jpg";
import tk from "../assets/images/destination/province/takeo.jpg";
import kd from "../assets/images/destination/province/kandal.jpg";
import pv from "../assets/images/destination/province/preyveng.jpg";
import svr from "../assets/images/destination/province/svayrieng.jpg";
import kpc from "../assets/images/destination/province/kampong_cham.jpg";
import kc from "../assets/images/destination/province/kampong_chhang.jpg";
import ks from "../assets/images/destination/province/Kampong_Speu.jpg";
import ps from "../assets/images/destination/province/pursat.png";
import btm from "../assets/images/destination/province/Banteay_Meanchey.jpg";
import odm from "../assets/images/destination/province/Oddar_meanchey.jpg";
import ph from "../assets/images/destination/province/Preah_Vihear.jpg";
import st from "../assets/images/destination/province/Stung_treng.jpg";
import kt from "../assets/images/destination/province/kratie.jpg";
import mdk from "../assets/images/destination/province/mondulkiri.jpg";
import rtk from "../assets/images/destination/province/ratanakiri.jpg";
import tb from "../assets/images/destination/province/Tboung_khmum.jpg";
import pl from "../assets/images/destination/province/pailin.jpg";
import kpt from "../assets/images/destination/province/kpt.jpg";

import { placeImages } from "./placeImages";

export const provinceData = [
  {
    id: 1,
    name: "Phnom Penh",
    type: "Capital city",
    description: "Cambodia's capital blends riverfront energy, royal landmarks, and vibrant food streets.",
    image: pp,
    places: [
      { name: "Royal Palace", detail: "A golden landmark of Khmer architecture and the official residence of the monarchy.", image: placeImages.royalPalace, tag: "Heritage", bestFor: "Architecture" },
      { name: "Sisowath Quay", detail: "A lively riverside promenade for sunset walks, cafes, and local evening life.", image: placeImages.sisowathQuay, tag: "Riverfront", bestFor: "Sunset" },
      { name: "Central Market", detail: "An iconic market for shopping, local snacks, and classic Phnom Penh city atmosphere.", image: placeImages.centralMarket, tag: "Market", bestFor: "Shopping" },
    ],
  },
  {
    id: 2,
    name: "Siem Reap",
    type: "Tourism hub",
    description: "The gateway to Angkor with temple sunrise experiences and a strong cultural scene.",
    image: sr,
    places: [
      { name: "Angkor Wat Sunrise", detail: "The classic Cambodia experience with iconic reflection views and world-famous stone reliefs.", image: placeImages.angkorWatSunrise, tag: "Temple", bestFor: "Sunrise" },
      { name: "Pub Street", detail: "A busy night-time district with food, music, and easy access to local tours.", image: placeImages.pubStreet, tag: "Nightlife", bestFor: "Food" },
      { name: "Tonle Sap Lake", detail: "Floating village life and water landscapes that show another side of Siem Reap travel.", image: placeImages.tonleSapLake, tag: "Lake", bestFor: "Boat tour" },
    ],
  },
  {
    id: 3,
    name: "Battambang",
    type: "Art city",
    description: "A relaxed riverside city known for countryside rides, heritage buildings, and creative spaces.",
    image: btb,
    places: [
      { name: "Bamboo Train", detail: "A unique open-air ride through villages and rice fields on a simple rail platform.", image: placeImages.bambooBrain, tag: "Local", bestFor: "Adventure" },
      { name: "Ek Phnom", detail: "An atmospheric temple site with a calm setting and rich historical presence.", image: placeImages.ekPhnom, tag: "Temple", bestFor: "History" },
      { name: "Colonial Quarter", detail: "A heritage street area with old buildings, cafes, and a slow city rhythm.", image: placeImages.colonialQuarter, tag: "Urban", bestFor: "Walks" },
    ],
  },
  {
    id: 4,
    name: "Preah Sihanouk",
    type: "Coastal province",
    description: "Cambodia's beach gateway with island access, turquoise water, and resort escapes.",
    image: shv,
    places: [
      { name: "Otres Beach", detail: "A laid-back beach strip for relaxed swimming, sunset bars, and soft sand walks.", image: placeImages.otresBeach, tag: "Beach", bestFor: "Relaxing" },
      { name: "Koh Rong Pier", detail: "The departure point to island adventures, snorkeling, and overnight sea trips.", image: placeImages.kohRongPier, tag: "Island", bestFor: "Boating" },
      { name: "Serendipity Beach", detail: "A classic stop for coastal dining, sea views, and easy evening movement.", image: placeImages.serendipityBeach, tag: "Shore", bestFor: "Dining" },
    ],
  },
  {
    id: 5,
    name: "Kampot",
    type: "Riverside province",
    description: "A scenic stop with pepper farms, river views, and mountain escapes nearby.",
    image: kp,
    places: [
      { name: "Bokor Hill Station", detail: "A misty highland escape with colonial ruins, cool weather, and panoramic views.", image: placeImages.bokorHillStation, tag: "Highland", bestFor: "Day trip" },
      { name: "Pepper Plantation", detail: "Learn how Kampot pepper is grown and harvest fresh flavors at source.", image: placeImages.pepperPlantation, tag: "Farm", bestFor: "Local taste" },
      { name: "Kampot River", detail: "Calm waters, sunset cruises, and a relaxed town edge for visitors.", image: placeImages.kampotRiver, tag: "River", bestFor: "Cruise" },
    ],
  },
  {
    id: 6,
    name: "Kep",
    type: "Small coastal town",
    description: "A quiet seaside area known for crab markets, fresh seafood, and a gentle coastline.",
    image: kep,
    places: [
      { name: "Kep Crab Market", detail: "Fresh seafood stalls and the best place to try the province's signature crab dishes.", image: placeImages.kepCrabMarket, tag: "Market", bestFor: "Seafood" },
      { name: "Kep National Park", detail: "A breezy walking area with viewpoints, forest paths, and wildlife moments.", image: placeImages.kepNationalPark, tag: "Nature", bestFor: "Walking" },
      { name: "Koh Tonsay", detail: "A small island escape with quiet beaches and simple overnight stays.", image: placeImages.kohTonsay, tag: "Island", bestFor: "Relaxing" },
    ],
  },
  {
    id: 7,
    name: "Koh Kong",
    type: "Eco province",
    description: "A wild green province with rivers, mangroves, and deep-forest escapes.",
    image: kk,
    places: [
      { name: "Tatai Waterfall", detail: "A scenic river-and-waterfall stop surrounded by jungle and calm water activities.", image: placeImages.tataiWaterfall, tag: "Waterfall", bestFor: "Nature" },
      { name: "Cardamom Mountains", detail: "One of Southeast Asia's major rainforest regions for trekking and eco-lodges.", image: placeImages.cardamomMountains, tag: "Jungle", bestFor: "Trekking" },
      { name: "Mangrove Channel", detail: "A quiet ecological route with boat rides and river wildlife along the coast.", image: placeImages.mangroveChannel, tag: "Eco", bestFor: "Boating" },
    ],
  },
  {
    id: 8,
    name: "Takeo",
    type: "Historical province",
    description: "An easygoing region with ancient temples, canals, and countryside heritage.",
    image: tk,
    places: [
      { name: "Phnom Chisor", detail: "A hilltop temple complex with long stairways and sweeping farmland views.", image: placeImages.phnomChisor, tag: "Temple", bestFor: "Viewpoint" },
      { name: "Angkor Borei", detail: "A historical area tied to early Khmer civilization and river routes.", image: placeImages.angkorBorei, tag: "Archaeology", bestFor: "Culture" },
      { name: "Tonle Bati", detail: "A calm lakeside stop with local food, temple visits, and easy day-trip energy.", image: placeImages.tonleBati, tag: "Lake", bestFor: "Picnic" },
    ],
  },
  {
    id: 9,
    name: "Kandal",
    type: "River province",
    description: "A surrounding province with easy access to island villages and hilltop pagodas.",
    image: kd,
    places: [
      { name: "Silk Island", detail: "Traditional weaving villages, local crafts, and quiet Mekong-side scenery.", image: placeImages.silkIsland, tag: "Craft", bestFor: "Day trip" },
      { name: "Udong Mountain", detail: "A former royal capital area with stupas, views, and a peaceful climb.", image: placeImages.udongMountain, tag: "Royal", bestFor: "History" },
      { name: "Mekong Village", detail: "A soft rural route near the capital for river scenery and local life.", image: placeImages.mekongVillage, tag: "Village", bestFor: "Exploring" },
    ],
  },
  {
    id: 10,
    name: "Prey Veng",
    type: "Mekong province",
    description: "A river-fed region with old temples, village culture, and agricultural scenery.",
    image: pv,
    places: [
      { name: "Ba Phnom", detail: "A historic hill area with temple ruins and a significant local spiritual role.", image: placeImages.baPhnom, tag: "Temple", bestFor: "Pilgrimage" },
      { name: "Mekong Riverside", detail: "A simple and peaceful route to experience rural river life and sunsets.", image: placeImages.mekongRiverside, tag: "River", bestFor: "Evening" },
      { name: "Rice Fields", detail: "A seasonal landscape that shows the province's farming side and open horizon.", image: placeImages.riceFields, tag: "Rural", bestFor: "Photography" },
    ],
  },
  {
    id: 11,
    name: "Svay Rieng",
    type: "Border province",
    description: "A lowland province near Vietnam with strong market culture and practical travel links.",
    image: svr,
    places: [
      { name: "Bavet Market", detail: "A lively border town stop with shopping, food, and quick local movement.", image: placeImages.bavetMarket, tag: "Market", bestFor: "Border stop" },
      { name: "Svay Rieng Pagoda", detail: "A calm local temple visit with traditional design and community atmosphere.", image: placeImages.svayRiengPagoda, tag: "Pagoda", bestFor: "Short visit" },
      { name: "Village Canal", detail: "A relaxed waterway route through the province's farming and residential zones.", image: placeImages.villageCanal, tag: "Canal", bestFor: "Local life" },
    ],
  },
  {
    id: 12,
    name: "Kampong Cham",
    type: "Riverside province",
    description: "A classic stop on the Mekong with bridges, temples, and village scenery.",
    image: kpc,
    places: [
      { name: "Ko Paen Bamboo Bridge", detail: "A seasonal bamboo crossing that gives a memorable local travel experience.", image: placeImages.koPaenBambooBridge, tag: "Bridge", bestFor: "Photo stop" },
      { name: "Wat Nokor", detail: "A temple complex combining old ruins with active worship spaces.", image: placeImages.watNokor, tag: "Temple", bestFor: "Heritage" },
      { name: "Mekong Island", detail: "A peaceful island side of the river with cycling and local homes.", image: placeImages.mekongIsland, tag: "Island", bestFor: "Cycling" },
    ],
  },
  {
    id: 13,
    name: "Kampong Chhnang",
    type: "Water province",
    description: "Known for floating communities and pottery villages along the lake routes.",
    image: kc,
    places: [
      { name: "Floating Village", detail: "Homes, boats, and daily life on the water create a distinct travel scene.", image: placeImages.floatingVillage, tag: "Lake", bestFor: "Boat tour" },
      { name: "Pottery Village", detail: "Traditional clay work and local craftmaking using methods passed through generations.", image: placeImages.potteryVillage, tag: "Craft", bestFor: "Workshop" },
      { name: "Lake Road", detail: "A scenic route for photography and observing the province's water-based life.", image: placeImages.lakeRoad, tag: "Scenic", bestFor: "Drive" },
    ],
  },
  {
    id: 14,
    name: "Kampong Speu",
    type: "Mountain province",
    description: "A green province with waterfalls, hill scenery, and easy routes from the capital.",
    image: ks,
    places: [
      { name: "Phnom Aural", detail: "The highest peak in Cambodia, popular for trekking and cool-weather camping.", image: placeImages.phnomAural, tag: "Peak", bestFor: "Trekking" },
      { name: "Phnom Sruoch", detail: "A hilly retreat for scenic drives, forest stops, and fresh mountain air.", image: placeImages.phnomSruoch, tag: "Highland", bestFor: "Road trip" },
      { name: "Waterfall Trail", detail: "Short nature stops and weekend treks through the province's greener side.", image: placeImages.waterfallTrail, tag: "Nature", bestFor: "Hiking" },
    ],
  },
  {
    id: 15,
    name: "Pursat",
    type: "Nature province",
    description: "A quiet province with jungle foothills, reservoir views, and slow-travel appeal.",
    image: ps,
    places: [
      { name: "Cardamom Foothills", detail: "A greener side of Cambodia with trekking routes and wildlife viewpoints.", image: placeImages.cardamomFoothills, tag: "Nature", bestFor: "Eco travel" },
      { name: "Peam Bang", detail: "A waterside village area that feels remote, calm, and photogenic.", image: placeImages.peamBang, tag: "Water", bestFor: "Boat ride" },
      { name: "Reservoir View", detail: "Quiet open water views and a peaceful stop for a slow paced day.", image: placeImages.reservoirView, tag: "Scenic", bestFor: "Relaxing" },
    ],
  },
  {
    id: 16,
    name: "Banteay Meanchey",
    type: "Gateway province",
    description: "A western gateway province with temple heritage and border-town movement.",
    image: btm,
    places: [
      { name: "Banteay Chhmar", detail: "A large temple complex with impressive carvings and a less crowded experience.", image: placeImages.banteayChomar, tag: "Temple", bestFor: "History" },
      { name: "Poipet Gateway", detail: "A border transit hub where travel, trade, and movement meet.", image: placeImages.poipetGateway, tag: "Border", bestFor: "Transit" },
      { name: "Rice Border Plains", detail: "Open countryside that frames the province's western horizon.", image: placeImages.riceBorderPlains, tag: "Rural", bestFor: "Drive" },
    ],
  },
  {
    id: 17,
    name: "Oddar Meanchey",
    type: "Northern province",
    description: "A quieter border province with historical sites and broad countryside.",
    image: odm,
    places: [
      { name: "Anlong Veng", detail: "A historically significant area tied to Cambodia's recent past and local memory.", image: placeImages.alongVeng, tag: "History", bestFor: "Learning" },
      { name: "Ta Mok Tomb", detail: "A notable historical site that draws travelers interested in modern Cambodian history.", image: placeImages.taMokTomb, tag: "Site", bestFor: "Culture" },
      { name: "Forest Road", detail: "A remote-feeling route through northern countryside and low hills.", image: placeImages.forestRoad, tag: "Route", bestFor: "Exploring" },
    ],
  },
  {
    id: 18,
    name: "Preah Vihear",
    type: "Temple province",
    description: "A dramatic northern province famous for mountain temples and expansive landscapes.",
    image: ph,
    places: [
      { name: "Preah Vihear Temple", detail: "A hilltop UNESCO temple with unforgettable cliff-edge views.", image: placeImages.preahVihearTemple, tag: "UNESCO", bestFor: "Landmark" },
      { name: "Koh Ker", detail: "A remote temple group with a giant pyramid and forested ruins.", image: placeImages.kohKer, tag: "Archaeology", bestFor: "Exploration" },
      { name: "Northern Plateau", detail: "High landscape routes and quiet travel scenes that feel very open and wild.", image: placeImages.northernPlateau, tag: "Highland", bestFor: "Road trip" },
    ],
  },
  {
    id: 19,
    name: "Stung Treng",
    type: "Mekong province",
    description: "A north-east river province known for wetlands, dolphins, and soft adventure.",
    image: st,
    places: [
      { name: "Mekong Wetlands", detail: "A calm area for boat travel, birdwatching, and river ecology.", image: placeImages.mekongWetlands, tag: "Wetland", bestFor: "Eco tour" },
      { name: "Dolphin Waters", detail: "Riverside zones where rare freshwater dolphin sightings are possible nearby.", image: placeImages.dolphinWaters, tag: "Wildlife", bestFor: "Boat ride" },
      { name: "Island Channels", detail: "A scenic network of river islands and waterways for a slower experience.", image: placeImages.islandChannels, tag: "Island", bestFor: "Cruise" },
    ],
  },
  {
    id: 20,
    name: "Kratie",
    type: "River town",
    description: "A laid-back province with island life, old buildings, and dolphin watching.",
    image: kt,
    places: [
      { name: "Kampi Dolphin Pool", detail: "One of the best places to look for Irrawaddy dolphins on the Mekong.", image: placeImages.kampiDolphinPool, tag: "Wildlife", bestFor: "Boat tour" },
      { name: "Koh Trong", detail: "A peaceful island with bicycle routes, local homestays, and river sunsets.", image: placeImages.kohTrong, tag: "Island", bestFor: "Cycling" },
      { name: "French Quarter", detail: "A small historic town area with old facades and slow river-town mood.", image: placeImages.frenchQuarter, tag: "Heritage", bestFor: "Walks" },
    ],
  },
  {
    id: 21,
    name: "Mondulkiri",
    type: "Highland province",
    description: "Cambodia's eastern highlands feature waterfalls, cool air, and outdoor adventure.",
    image: mdk,
    places: [
      { name: "Bou Sra Waterfall", detail: "A powerful waterfall set in a forested highland landscape.", image: placeImages.bouSraWaterfall, tag: "Waterfall", bestFor: "Nature" },
      { name: "Elephant Valley", detail: "A sanctuary-focused experience centered on ethical wildlife observation.", image: placeImages.elephantValley, tag: "Sanctuary", bestFor: "Wildlife" },
      { name: "Pine Hills", detail: "Cooler upland scenery with gentle slopes and wide skies.", image: placeImages.pineHills, tag: "Highland", bestFor: "Relaxing" },
    ],
  },
  {
    id: 22,
    name: "Ratanakiri",
    type: "Remote province",
    description: "A wilderness region with crater lakes, ethnic culture, and untouched forest routes.",
    image: rtk,
    places: [
      { name: "Yeak Loam Lake", detail: "A beautiful volcanic lake with clear water and forest surroundings.", image: placeImages.yeakLoamLake, tag: "Lake", bestFor: "Swimming" },
      { name: "Virachey National Park", detail: "A large protected area for jungle trekking and deep eco travel.", image: placeImages.viracheyNationalPark, tag: "National park", bestFor: "Trekking" },
      { name: "Brok Village", detail: "A cultural stop to learn about local communities and regional traditions.", image: placeImages.brokVillage, tag: "Culture", bestFor: "Learning" },
    ],
  },
  {
    id: 23,
    name: "Tboung Khmum",
    type: "Agricultural province",
    description: "A newer province with quiet roads, farming land, and local temple stops.",
    image: tb,
    places: [
      { name: "Memot Plantation", detail: "A rural landscape with rubber estates and classic east-Cambodia scenery.", image: placeImages.memotPlantation, tag: "Rural", bestFor: "Road trip" },
      { name: "Tonle Bet", detail: "A local gateway area with everyday markets and cross-border movement.", image: placeImages.tonleBet, tag: "Town", bestFor: "Local stop" },
      { name: "Village Route", detail: "An easy travel loop with fields and local roadside food stops.", image: placeImages.villageRoute, tag: "Farm", bestFor: "Driving" },
    ],
  },
  {
    id: 24,
    name: "Pailin",
    type: "Gem province",
    description: "A western province with gem history, hills, and a slower provincial rhythm.",
    image: pl,
    places: [
      { name: "Phnom Yat", detail: "A hillside temple with a panoramic view over the town and nearby hills.", image: placeImages.phnomYat, tag: "Hill", bestFor: "Viewpoint" },
      { name: "Pailin Gem Fields", detail: "Historic gemstone areas that shaped the region's identity and trade.", image: placeImages.pailinGemFields, tag: "Heritage", bestFor: "Learning" },
      { name: "Border Hills", detail: "A quiet scenic drive that shows the province's soft hilly landscape.", image: placeImages.borderHills, tag: "Scenic", bestFor: "Drive" },
    ],
  },
  {
    id: 25,
    name: "Kampong Thom",
    type: "Central province",
    description: "A central stop with ancient temple complexes and broad countryside drives.",
    image: kpt,
    places: [
      { name: "Sambor Prei Kuk", detail: "A pre-Angkor temple complex and UNESCO World Heritage destination.", image: placeImages.samborPreiKuk, tag: "UNESCO", bestFor: "History" },
      { name: "Stung Sen", detail: "A river region with calm scenery and easy access to local town life.", image: placeImages.stungSen, tag: "River", bestFor: "Relaxing" },
      { name: "Old Market", detail: "A local center where daily life, food, and simple travel meet.", image: placeImages.oldMarket, tag: "Market", bestFor: "Walking" },
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