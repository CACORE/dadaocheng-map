const SHEET_CSV_URL = "";
const GOOGLE_MAPS_API_KEY = "AIzaSyANPuChxlV2-tGscDtYPaYM2JIeGDPpHrM";
const USE_GOOGLE_MAPS = Boolean(GOOGLE_MAPS_API_KEY);
const MAP_CENTER = { lat: 25.0589, lng: 121.5095 };
const MAP_MIN_ZOOM = 15;
const MAP_MAX_ZOOM = 19;
const PLACE_FOCUS_ZOOM = 18;
const MAP_BOUNDS = {
  south: 25.046,
  west: 121.495,
  north: 25.071,
  east: 121.523,
};
const CLEAN_MAP_STYLES = [
  {
    featureType: "poi.business",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.medical",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit.station.bus",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
];

const fallbackPlaces = [
  {
    id: "xiahai",
    name: "霞海城隍廟",
    category: "view",
    label: "廟",
    lat: 25.05574,
    lng: 121.51022,
    address: "台北市大同區迪化街一段61號",
    instagram: "",
    stroke: 17,
    note: "來大稻埕先打個招呼。香火、人聲、紅磚騎樓，老街的節奏一下就進來了。",
    tags: ["拜一下", "老街氣味"],
    reel_url: "https://www.instagram.com/reel/DXQdQhAzqkE/",
    featured: true,
  },
  {
    id: "huitong",
    name: "惠通行",
    category: "home",
    label: "惠",
    lat: 25.05873,
    lng: 121.50952,
    address: "台北市大同區迪化街一段175號",
    instagram: "huitong.1929",
    stroke: 12,
    note: "我的基地。想知道今天迪化街怎麼逛，先來這裡問老闆。",
    tags: ["老闆在這", "南北貨", "Reels"],
    reel_url: "https://www.instagram.com/reel/DW3dbjKTyzC/",
    image_url: "images/huitong1929.jpg",
    featured: true,
  },
  {
    id: "carp",
    name: "鯉魚 The Carp",
    category: "food",
    label: "鯉",
    lat: 25.05876,
    lng: 121.50952,
    address: "台北市大同區迪化街一段177號",
    instagram: "thecarp169",
    stroke: 18,
    note: "把南北貨食材變成台菜料理，想坐下來好好吃一餐可以來這裡。",
    tags: ["台菜", "烏魚子"],
  },
  {
    id: "lilysun",
    name: "李日勝",
    category: "gift",
    label: "李",
    lat: 25.059444,
    lng: 121.50953,
    address: "台北市大同區迪化街一段203號",
    instagram: "leerihsheng1986",
    stroke: 7,
    note: "烏魚子老店，貨架和包裝都很有迪化街的硬派美感。",
    tags: ["烏魚子", "老派好貨"],
    reel_url: "https://www.instagram.com/p/DUmpYMhErok/",
    featured: true,
  },
  {
    id: "lelabo",
    name: "LE LABO",
    category: "craft",
    label: "L",
    lat: 25.059344,
    lng: 121.50952,
    address: "台北市大同區迪化街一段199號",
    instagram: "lelabofragrances",
    stroke: 0,
    note: "走進老街屋裡的香氛實驗室，適合慢慢試香、挑一個屬於大稻埕的氣味。",
    tags: ["香氛", "老屋"],
  },
  {
    id: "fullmountain",
    name: "富自山中",
    category: "gift",
    label: "富",
    lat: 25.059453,
    lng: 121.509411,
    address: "台北市大同區迪化街一段220號",
    instagram: "fullmountain",
    stroke: 12,
    note: "果乾、山產、店面細節都好拍。適合邊逛邊買一包路上吃。",
    tags: ["果乾", "邊走邊吃"],
    reel_url: "https://www.instagram.com/p/DUmpYMhErok/",
    featured: true,
  },
  {
    id: "hoshing1947",
    name: "合興壹玖肆柒",
    category: "gift",
    label: "合",
    lat: 25.05956,
    lng: 121.50943,
    address: "台北市大同區迪化街一段223號",
    instagram: "hoshing1947_bashihbating",
    stroke: 6,
    note: "老字號漢餅與甜點，適合買一盒把大稻埕的甜味帶走。",
    tags: ["漢餅", "甜點"],
  },
  {
    id: "dachun",
    name: "大春煉皂",
    category: "craft",
    label: "大",
    lat: 25.059002,
    lng: 121.50946,
    address: "台北市大同區迪化街一段190號",
    instagram: "dachuns1923",
    stroke: 3,
    note: "香氣很有記憶點，從南北貨轉到生活選物，畫面會突然變得很乾淨。",
    tags: ["香皂", "生活感"],
  },
  {
    id: "mac",
    name: "M.A.C 大稻埕旗艦店",
    category: "craft",
    label: "M",
    lat: 25.057407,
    lng: 121.50972,
    address: "台北市大同區迪化街一段121號",
    instagram: "",
    stroke: 0,
    note: "彩妝品牌進駐百年宅邸，復古建築和前衛美妝放在一起很有反差。",
    tags: ["彩妝", "百年宅邸"],
  },
  {
    id: "leecake",
    name: "李亭香",
    category: "gift",
    label: "餅",
    lat: 25.062119,
    lng: 121.50928,
    address: "台北市大同區迪化街一段309號",
    instagram: "leecake_1895",
    stroke: 7,
    note: "糕餅香是大稻埕的另一種老派浪漫。買一盒回去，故事就帶走了。",
    tags: ["糕餅", "帶故事回家"],
    reel_url: "https://www.instagram.com/p/DUmpYMhErok/",
    featured: true,
  },
  {
    id: "chiang",
    name: "江記華隆",
    category: "gift",
    label: "江",
    lat: 25.06216,
    lng: 121.50928,
    address: "台北市大同區迪化街一段311號",
    instagram: "",
    stroke: 6,
    note: "經典肉紙與肉乾名店，年節送禮或自己買回家都很可以。",
    tags: ["肉紙", "肉乾"],
  },
  {
    id: "wagashi",
    name: "滋養製菓",
    category: "gift",
    label: "滋",
    lat: 25.06037,
    lng: 121.5094,
    address: "台北市大同區迪化街一段247號",
    instagram: "lins.wagashi",
    stroke: 12,
    note: "日式和菓子老店，草莓大福、最中都很適合當作甜甜的伴手禮。",
    tags: ["和菓子", "草莓大福"],
  },
  {
    id: "nature",
    name: "Vin Nature 45 自然埕",
    category: "bar",
    label: "酒",
    lat: 25.06058,
    lng: 121.50975,
    address: "台北市大同區涼州街45號",
    instagram: "vin.nature45",
    stroke: 6,
    note: "自然酒小酒吧，適合把腳步放慢。不是趕景點，是來大稻埕坐一下。",
    tags: ["自然酒", "微醺", "私房點"],
  },
  {
    id: "comotu",
    name: "Como Tú",
    category: "bar",
    label: "C",
    lat: 25.06072,
    lng: 121.50937,
    address: "台北市大同區迪化街一段259號1樓",
    instagram: "como_tu259",
    stroke: 0,
    note: "藏在迪化街上的跑吧口袋名單，適合把夜晚留給一杯酒。",
    tags: ["酒吧", "夜晚"],
  },
  {
    id: "zou",
    name: "奏 ZOU Listening Bar",
    category: "bar",
    label: "奏",
    lat: 25.06235,
    lng: 121.50922,
    address: "台北市大同區迪化街一段322號",
    instagram: "zou.listening.bar",
    stroke: 9,
    note: "喜愛古典樂的你，與店內富藏的威士忌，交織出一場屬於你的交響曲。",
    tags: ["Listening Bar", "音樂"],
  },
  {
    id: "faqin",
    name: "發琴吧",
    category: "bar",
    label: "發",
    lat: 25.0561,
    lng: 121.50986,
    address: "台北市大同區迪化街一段76號",
    instagram: "ginspirationbar",
    stroke: 12,
    note: "迪化街上琴酒專長的酒吧，適合喜歡喝琴酒的你。",
    tags: ["酒吧", "夜晚"],
  },
  {
    id: "pier",
    name: "大稻埕碼頭",
    category: "view",
    label: "河",
    lat: 25.056511,
    lng: 121.507419,
    address: "台北市大同區民生西路底五號水門",
    instagram: "",
    stroke: 3,
    note: "傍晚去就對了。風、夕陽、河邊人潮，拿來收尾很漂亮。",
    tags: ["夕陽", "貨櫃市集"],
    reel_url: "https://www.instagram.com/reel/DXThgbEEWGP/",
    featured: true,
  },
  {
    id: "tenhouses",
    name: "迪化街十連棟",
    category: "view",
    label: "十",
    lat: 25.062802,
    lng: 121.50919,
    address: "台北市大同區迪化街一段362號",
    instagram: "",
    stroke: 2,
    note: "紅磚連棟街屋很有畫面，是北段散步時很適合停下來拍的景點。",
    tags: ["紅磚", "街屋"],
  },
  {
    id: "dadaochengpark",
    name: "大稻埕公園",
    category: "view",
    label: "園",
    lat: 25.058629,
    lng: 121.510338,
    address: "台北市大同區歸綏街241號隔壁",
    instagram: "",
    stroke: 3,
    note: "藏在老街旁的小公園，適合散步途中休息一下，也能感覺大稻埕的日常。",
    tags: ["公園", "散步"],
  },
  {
    id: "modernmode",
    name: "Modern Mode & Modern Mode Café",
    category: "food",
    label: "M",
    lat: 25.06124,
    lng: 121.50932,
    address: "台北市大同區迪化街一段278號",
    instagram: "modern_mode2001",
    stroke: 0,
    note: "老屋裡的餐飲與生活風格空間，肚子餓又想坐久一點可以來。",
    tags: ["老屋", "餐食"],
  },
  {
    id: "directortofu",
    name: "導演的豆花店",
    category: "food",
    label: "導",
    lat: 25.05972,
    lng: 121.50872,
    address: "台北市大同區迪化街一段224巷24號",
    instagram: "director_douhua",
    stroke: 16,
    note: "巷弄裡的豆花店，適合散步中間插入一碗甜的。",
    tags: ["豆花", "巷弄"],
  },
  {
    id: "grandpang",
    name: "老阿伯胖魷焿",
    category: "food",
    label: "魷",
    lat: 25.05962,
    lng: 121.5094,
    address: "台北市大同區迪化街一段226號",
    instagram: "",
    stroke: 6,
    note: "一碗胖魷焿配油蔥飯，是很大稻埕的古早味午餐。",
    tags: ["魷魚焿", "油蔥飯"],
  },
  {
    id: "jiaerzui",
    name: "呷二嘴",
    category: "food",
    label: "呷",
    lat: 25.0593589,
    lng: 121.5127596,
    address: "臺北市大同區延平里甘州街34號",
    instagram: "",
    stroke: 8,
    note: "顆粒分明的米糕，微辣回甘的甜辣醬，在配碗米苔目冰，完美！",
    tags: ["古早味", "小吃"],
  },
  {
    id: "jinxian",
    name: "金仙魚丸",
    category: "food",
    label: "金",
    lat: 25.05435,
    lng: 121.51072,
    address: "103臺北市大同區永樂里南京西路233巷19號",
    instagram: "",
    stroke: 8,
    note: "黑金的滷肉飯，配上台式天婦羅、招牌炸蝦捲，就是滿足！",
    tags: ["古早味", "小吃"],
  },
  {
    id: "okogreen",
    name: "生態綠咖啡 OKO cafe",
    category: "cafe",
    label: "生",
    lat: 25.05862,
    lng: 121.50956,
    address: "台北市大同區迪化街一段167號",
    instagram: "",
    stroke: 5,
    note: "公平貿易咖啡品牌，適合跑咖時停下來喝一杯。",
    tags: ["咖啡", "公平貿易"],
  },
  {
    id: "wooo",
    name: "窩窩 Wooo",
    category: "cafe",
    label: "窩",
    lat: 25.05704,
    lng: 121.50848,
    address: "台北市大同區民生西路404號",
    instagram: "wooo.acs",
    stroke: 14,
    note: "老宅裡的港式咖啡與餐食，靠近碼頭，適合把下午留給復古窗花。",
    tags: ["老宅", "港式"],
  },
  {
    id: "twatutia",
    name: "TWATUTIA Coffee & Co.",
    category: "cafe",
    label: "T",
    lat: 25.05341,
    lng: 121.50927,
    address: "台北市大同區南京西路279號",
    instagram: "twatutia",
    stroke: 0,
    note: "大稻埕台語音譯的咖啡店，老宅裡喝咖啡，樓上還能逛選物。",
    tags: ["咖啡", "老宅"],
  },
  {
    id: "watsons",
    name: "屈臣氏大藥房",
    category: "view",
    label: "屈",
    lat: 25.0546552,
    lng: 121.5099947,
    address: "台北市大同區迪化街一段34號",
    instagram: "",
    stroke: 8,
    note: "百年巴洛克洋樓，也是大稻埕很有代表性的歷史建築。",
    tags: ["百年建築", "巴洛克"],
  },
  {
    id: "jomalone",
    name: "Jo Malone London",
    category: "craft",
    label: "J",
    lat: 25.0536656,
    lng: 121.5100757,
    address: "台北市大同區南京西路251號",
    instagram: "jomalonelondon",
    stroke: 0,
    note: "英倫香氛走進百年古宅，適合從迪化街入口開始聞一點優雅。",
    tags: ["香氛", "古宅"],
  },
  {
    id: "designlife",
    name: "A Design&Life Project",
    category: "craft",
    label: "A",
    lat: 25.05341,
    lng: 121.50927,
    address: "台北市大同區南京西路279號",
    instagram: "designandlife",
    stroke: 0,
    note: "老屋裡的生活選物空間，從器皿、配件到日常美感都能慢慢看。",
    tags: ["選物", "生活風格"],
  },
  {
    id: "olympus",
    name: "OLYMPUS PLAZA TAIPEI 大稻埕旗艦店",
    category: "craft",
    label: "O",
    lat: 25.05786,
    lng: 121.50954,
    address: "台北市大同區迪化街一段142號",
    instagram: "olympus.plaza.tpe",
    stroke: 0,
    note: "相機品牌旗艦店，適合把大稻埕散步和影像感放在一起。",
    tags: ["相機", "影像"],
  },
  {
    id: "adidas",
    name: "adidas Originals 大稻埕",
    category: "craft",
    label: "愛",
    lat: 25.054744,
    lng: 121.51002,
    address: "台北市大同區迪化街一段36號",
    instagram: "originals_tw",
    stroke: 13,
    note: "三葉草走進老街，店面細節把運動潮流和大稻埕元素混得很有記憶點。",
    tags: ["潮流", "三葉草"],
  },
];

let places = [...fallbackPlaces];

const categoryNames = {
  home: "惠通行",
  gift: "伴手禮",
  craft: "風格選物",
  view: "景點",
  cafe: "跑咖",
  bar: "跑吧",
  food: "肚子餓",
};

let map;
let infoWindow;
const markers = new Map();
let activeFilter = "all";
let activePlaceId = "huitong";
let searchTerm = "";

function loadGoogleMapsApi() {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const callbackName = "__initDadaochengGoogleMap";
    window[callbackName] = () => {
      delete window[callbackName];
      resolve();
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY)}&language=zh-TW&region=TW&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("Google Maps JavaScript API 載入失敗"));
    document.head.append(script);
  });
}

async function initMapProvider() {
  if (USE_GOOGLE_MAPS) {
    await loadGoogleMapsApi();
    map = new google.maps.Map(document.querySelector("#map"), {
      center: MAP_CENTER,
      zoom: 16,
      minZoom: MAP_MIN_ZOOM,
      maxZoom: MAP_MAX_ZOOM,
      restriction: {
        latLngBounds: MAP_BOUNDS,
        strictBounds: false,
      },
      gestureHandling: "greedy",
      styles: CLEAN_MAP_STYLES,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });
    infoWindow = new google.maps.InfoWindow();
    document.body.classList.add("uses-google-map");
    return;
  }

  map = L.map("map", {
    zoomControl: false,
    scrollWheelZoom: true,
    minZoom: MAP_MIN_ZOOM,
    maxZoom: MAP_MAX_ZOOM,
    maxBounds: [
      [MAP_BOUNDS.south, MAP_BOUNDS.west],
      [MAP_BOUNDS.north, MAP_BOUNDS.east],
    ],
    maxBoundsViscosity: 0.7,
  }).setView([MAP_CENTER.lat, MAP_CENTER.lng], 16);

  L.control.zoom({ position: "bottomright" }).addTo(map);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: MAP_MAX_ZOOM,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(field);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  row.push(field);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function normalizeHeader(value) {
  return value.trim().toLowerCase();
}

function placeFromSheetRow(row) {
  const visible = String(row.visible ?? "TRUE").trim().toLowerCase();
  if (["false", "0", "no", "否"].includes(visible)) return null;

  const lat = Number(row.lat);
  const lng = Number(row.lng);
  if (!row.name || Number.isNaN(lat) || Number.isNaN(lng)) return null;

  return {
    id: row.id || row.name.toLowerCase().replace(/\s+/g, "-"),
    name: row.name,
    category: row.category || "craft",
    label: row.label || row.name.slice(0, 1),
    lat,
    lng,
    address: row.address || row.name,
    instagram: row.instagram || "",
    stroke: Number(row.stroke) || undefined,
    note: row.note || "",
    tags: row.tags ? row.tags.split(/[，,]/).map((tag) => tag.trim()).filter(Boolean) : [],
    reel_url: row.reel_url || "",
    reel_title: row.reel_title || "",
    reel_cover: row.reel_cover || "",
    image_url: row.image_url || "",
    featured: ["true", "1", "yes", "是"].includes(String(row.featured ?? "").trim().toLowerCase()),
  };
}

async function loadPlacesFromSheet() {
  if (!SHEET_CSV_URL) return fallbackPlaces;

  const response = await fetch(`${SHEET_CSV_URL}${SHEET_CSV_URL.includes("?") ? "&" : "?"}t=${Date.now()}`);
  if (!response.ok) throw new Error(`Google Sheet CSV failed: ${response.status}`);

  const rows = parseCsv(await response.text());
  const headers = rows.shift().map(normalizeHeader);
  const sheetPlaces = rows
    .map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index]?.trim() ?? ""])))
    .map(placeFromSheetRow)
    .filter(Boolean);

  return sheetPlaces.length ? sheetPlaces : fallbackPlaces;
}

function mapsUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`;
}

function hasReel(place) {
  return Boolean(place.reel_url);
}

function instagramUrl(handle) {
  return `https://www.instagram.com/${handle.replace(/^@/, "")}/`;
}

function instagramLink(place, compact = false) {
  if (!place.instagram) return "";
  const handle = place.instagram.replace(/^@/, "");
  return `
    <a class="ig-link ${compact ? "compact" : ""}" href="${instagramUrl(handle)}" target="_blank" rel="noreferrer">
      IG：@${handle}
    </a>
  `;
}

function reelLink(place, compact = false) {
  if (!hasReel(place)) return "";
  return `
    <a class="reel-link ${compact ? "compact" : ""}" href="${place.reel_url}" target="_blank" rel="noreferrer">
      ${compact ? "看 Reels" : place.reel_title || "看這支 Reels"}
    </a>
  `;
}

function locationOf(place) {
  return USE_GOOGLE_MAPS ? { lat: Number(place.lat), lng: Number(place.lng) } : [place.lat, place.lng];
}

function assetUrl(path) {
  if (!path) return "";
  try {
    return new URL(path, window.location.href).href;
  } catch {
    return path;
  }
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function placeImageUrl(place) {
  return assetUrl(place.image_url);
}

function placeMarkHtml(place) {
  const image = placeImageUrl(place);
  return image
    ? `<span class="place-mark has-image"><img src="${escapeAttr(image)}" alt="" loading="lazy" /></span>`
    : `<span class="place-mark">${place.label}</span>`;
}

function imageMarkerIcon(place) {
  const image = placeImageUrl(place);
  if (!image) return null;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
      <defs>
        <clipPath id="avatarClip"><circle cx="23" cy="23" r="17"/></clipPath>
      </defs>
      <circle cx="25" cy="25" r="18" fill="rgba(36,40,42,.92)"/>
      <circle cx="23" cy="23" r="19" fill="#fff9eb" stroke="#24282a" stroke-width="3"/>
      <image href="${escapeAttr(image)}" x="6" y="6" width="34" height="34" preserveAspectRatio="xMidYMid slice" clip-path="url(#avatarClip)"/>
    </svg>
  `.trim();
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(46, 46),
    anchor: new google.maps.Point(23, 23),
  };
}

function googleMarkerIcon(place) {
  const colors = {
    home: "#b8442f",
    gift: "#c48322",
    craft: "#d65e58",
    view: "#1d7f98",
    cafe: "#2f7356",
    bar: "#24282a",
    food: "#c48322",
  };

  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: colors[place.category] || "#2f7356",
    fillOpacity: 1,
    strokeColor: "#24282a",
    strokeWeight: 2,
    scale: 15,
    labelOrigin: new google.maps.Point(0, 0),
  };
}

function createIcon(place) {
  const image = placeImageUrl(place);
  return L.divIcon({
    className: "",
    html: `<div class="map-pin ${place.category} ${image ? "has-image" : ""}">${image ? `<img src="${escapeAttr(image)}" alt="" />` : `<span>${place.label}</span>`}</div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -38],
  });
}

function popupHtml(place) {
  return `
    <div class="popup-card">
      <p class="popup-title">${place.name}</p>
      <p class="popup-copy">${place.note}</p>
      <a class="map-link compact" href="${mapsUrl(place)}" target="_blank" rel="noreferrer">Google Maps</a>
    </div>
  `;
}

function initMarkers() {
  markers.forEach((marker) => {
    if (USE_GOOGLE_MAPS) marker.setMap(null);
    else marker.remove();
  });
  markers.clear();

  places.forEach((place) => {
    let marker;
    if (USE_GOOGLE_MAPS) {
      const imageIcon = imageMarkerIcon(place);
      marker = new google.maps.Marker({
        position: locationOf(place),
        map,
        title: place.name,
        label: imageIcon ? null : {
          text: place.label,
          color: "#fff9eb",
          fontWeight: "900",
        },
        icon: imageIcon || googleMarkerIcon(place),
      });
      marker.addListener("click", () => {
        setActivePlace(place.id, true);
      });
    } else {
      marker = L.marker(locationOf(place), { icon: createIcon(place) })
        .bindPopup(popupHtml(place))
        .addTo(map);
      marker.on("click", () => setActivePlace(place.id, true));
    }
    markers.set(place.id, marker);
  });
}

function sortedByStroke(items) {
  return [...items].sort((first, second) => {
    const strokeDiff = (first.stroke ?? 999) - (second.stroke ?? 999);
    if (strokeDiff !== 0) return strokeDiff;
    return first.name.localeCompare(second.name, "zh-Hant");
  });
}

function filteredPlaces() {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visible = places.filter((place) => {
    const matchesCategory =
      activeFilter === "all" ||
      place.category === activeFilter ||
      (activeFilter === "featured" && (place.featured || hasReel(place)));
    if (!matchesCategory) return false;
    if (!normalizedSearch) return true;

    const searchableText = [
      place.name,
      place.address,
      place.instagram,
      place.note,
      place.reel_title,
      categoryNames[place.category],
      ...place.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });
  return sortedByStroke(visible);
}

function renderPlaces() {
  const list = document.querySelector("#places");
  const visiblePlaces = filteredPlaces();
  if (!visiblePlaces.length) {
    list.innerHTML = `<p class="empty-state">找不到符合的地點，換個關鍵字試試。</p>`;
    return;
  }

  list.innerHTML = visiblePlaces
    .map((place) => {
      const tags = place.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
      return `
        <article class="place ${place.id === activePlaceId ? "is-active" : ""}" data-id="${place.id}" data-category="${place.category}" tabindex="0">
          ${placeMarkHtml(place)}
          <div>
            <h3>${place.name}</h3>
            ${instagramLink(place, true)}
            ${reelLink(place, true)}
            <p>${place.note}</p>
            <div class="meta">
              <span class="tag">${categoryNames[place.category]}</span>
              ${tags}
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  list.querySelectorAll(".place").forEach((card) => {
    card.addEventListener("click", () => {
      const placeId = card.dataset.id;
      setActivePlace(placeId, false);
      setPanelCollapsed(true);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const placeId = card.dataset.id;
        setActivePlace(placeId, false);
        setPanelCollapsed(true);
      }
    });
  });
}

function renderSelectedPlace() {
  const place = places.find((item) => item.id === activePlaceId);
  if (!place) return;
  const tags = place.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const image = placeImageUrl(place);
  document.querySelector("#selectedPlace").innerHTML = `
    <button class="selected-close" type="button" aria-label="關閉店家資訊">×</button>
    ${image ? `<img class="selected-image" src="${escapeAttr(image)}" alt="" />` : ""}
    <div class="selected-kicker">${hasReel(place) ? "老闆拍過" : categoryNames[place.category]}</div>
    <h2>${place.name}</h2>
    <p>${place.note}</p>
    <div class="meta">${tags}</div>
    ${instagramLink(place)}
    ${reelLink(place)}
    <div class="follow-box">
      <span>看更多大稻埕私房點</span>
      <a href="https://www.instagram.com/ca.core_daily/" target="_blank" rel="noreferrer">追蹤 @ca.core_daily</a>
      <a href="https://www.instagram.com/huitong.1929/" target="_blank" rel="noreferrer">追蹤 @huitong.1929</a>
    </div>
    <a class="map-link" href="${mapsUrl(place)}" target="_blank" rel="noreferrer">用 Google Maps 打開</a>
  `;
  document.querySelector("#selectedPlace").classList.remove("is-hidden");
}

function setActivePlace(id, openPopup = false, updateHash = true) {
  if (!places.some((item) => item.id === id)) return;
  activePlaceId = id;
  renderPlaces();
  renderSelectedPlace();
  const place = places.find((item) => item.id === id);
  const marker = markers.get(id);
  if (USE_GOOGLE_MAPS) {
    const targetZoom = Math.max(map.getZoom() ?? MAP_MIN_ZOOM, PLACE_FOCUS_ZOOM);
    if (map.getZoom() !== targetZoom) map.setZoom(targetZoom);
    map.panTo(locationOf(place));
    if (openPopup) {
      infoWindow.setContent(popupHtml(place));
      infoWindow.open({ map, anchor: marker });
    } else {
      closeActivePlacePopup();
    }
  } else {
    map.flyTo(locationOf(place), Math.max(map.getZoom(), PLACE_FOCUS_ZOOM), { duration: 0.55 });
    if (openPopup) marker.openPopup();
    else closeActivePlacePopup();
  }
  if (updateHash) history.replaceState(null, "", `#${place.id}`);
}

function fitVisibleMarkers() {
  const visible = filteredPlaces();
  if (!visible.length) return;
  if (USE_GOOGLE_MAPS) {
    const bounds = new google.maps.LatLngBounds();
    visible.forEach((place) => bounds.extend(locationOf(place)));
    map.fitBounds(bounds, 80);
    return;
  }

  const bounds = L.latLngBounds(visible.map((place) => locationOf(place)));
  map.fitBounds(bounds, { padding: [80, 80], maxZoom: 17 });
}

function updateMarkerVisibility() {
  const visibleIds = new Set(filteredPlaces().map((place) => place.id));
  places.forEach((place) => {
    const marker = markers.get(place.id);
    if (!marker) return;
    if (USE_GOOGLE_MAPS) marker.setMap(visibleIds.has(place.id) ? map : null);
    else if (visibleIds.has(place.id)) marker.addTo(map);
    else marker.remove();
  });
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  const visible = filteredPlaces();
  if (!visible.some((place) => place.id === activePlaceId)) {
    activePlaceId = visible[0]?.id ?? "huitong";
  }

  updateMarkerVisibility();
  renderPlaces();
  renderSelectedPlace();
  fitVisibleMarkers();
}

const panel = document.querySelector(".guide-panel");
const panelToggle = document.querySelector(".panel-toggle");
const experience = document.querySelector(".experience");

function closeActivePlacePopup() {
  if (!map) return;
  if (USE_GOOGLE_MAPS) {
    infoWindow?.close();
  } else {
    map.closePopup();
  }
}

function refreshMapLayout() {
  if (!map) return;
  if (USE_GOOGLE_MAPS) {
    map.setCenter(map.getCenter());
  } else {
    map.invalidateSize();
  }
}

function setPanelCollapsed(isCollapsed) {
  panel.classList.toggle("is-collapsed", isCollapsed);
  experience.classList.toggle("is-panel-collapsed", isCollapsed);
  panelToggle.setAttribute("aria-expanded", String(!isCollapsed));
  panelToggle.querySelector("span").textContent = isCollapsed ? "想去哪看這裡" : "收合";
  if (!isCollapsed) closeActivePlacePopup();
  requestAnimationFrame(refreshMapLayout);
  setTimeout(refreshMapLayout, 120);
  setTimeout(refreshMapLayout, 320);
  if (isCollapsed && map) {
    setTimeout(() => {
      if (panel.classList.contains("is-collapsed")) {
        setActivePlace(activePlaceId, true, false);
      }
    }, 340);
  }
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

document.querySelector("#placeSearch").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  const visible = filteredPlaces();
  if (visible.length && !visible.some((place) => place.id === activePlaceId)) {
    activePlaceId = visible[0].id;
  }
  updateMarkerVisibility();
  renderPlaces();
  renderSelectedPlace();
  fitVisibleMarkers();
});

panelToggle.addEventListener("click", () => {
  setPanelCollapsed(!panel.classList.contains("is-collapsed"));
});

document.querySelector("#selectedPlace").addEventListener("click", (event) => {
  if (!event.target.closest(".selected-close")) return;
  document.querySelector("#selectedPlace").classList.add("is-hidden");
  closeActivePlacePopup();
});

window.matchMedia("(max-width: 920px)").addEventListener("change", (event) => {
  setPanelCollapsed(event.matches);
});

window.addEventListener("hashchange", () => {
  const hashPlaceId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (hashPlaceId) setActivePlace(hashPlaceId, true, false);
});

window.addEventListener("resize", () => {
  refreshMapLayout();
});

if (window.matchMedia("(max-width: 920px)").matches) {
  setPanelCollapsed(true);
}

async function init() {
  try {
    places = await loadPlacesFromSheet();
  } catch (error) {
    console.warn(error);
    places = fallbackPlaces;
  }

  try {
    await initMapProvider();
  } catch (error) {
    console.warn(error);
    if (USE_GOOGLE_MAPS) {
      document.querySelector("#map").innerHTML = `<div class="map-error">Google Maps API 載入失敗，請確認 API key、網域限制與帳單設定。</div>`;
      return;
    }
    throw error;
  }

  const hashPlaceId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (hashPlaceId && places.some((place) => place.id === hashPlaceId)) {
    activePlaceId = hashPlaceId;
  }

  if (!places.some((place) => place.id === activePlaceId)) {
    activePlaceId = places[0]?.id ?? "huitong";
  }

  initMarkers();
  updateMarkerVisibility();
  renderPlaces();
  renderSelectedPlace();
  fitVisibleMarkers();
  requestAnimationFrame(refreshMapLayout);
  setTimeout(refreshMapLayout, 250);

  if (hashPlaceId && places.some((place) => place.id === hashPlaceId)) {
    setActivePlace(hashPlaceId, true, false);
  }
}

init();
