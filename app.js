const STORAGE_KEY = "holiday-itinerary-v5";

const ja = {
  templateSchool: "\u3057\u304a\u308a\u98a8",
  templatePop: "\u30dd\u30c3\u30d7",
  templateChic: "\u30b7\u30c3\u30af",
  templateTravel: "\u65c5\u306e\u3057\u304a\u308a",
  defaultTitle: "\u3057\u304a\u308a",
  sampleTitle: "\u65e5\u5e30\u308a\u30d7\u30e9\u30f3",
  sampleArea: "\u304a\u3067\u304b\u3051\u30a8\u30ea\u30a2",
  sampleParticipants: "\u9ad8\u6821\u306e\u53cb\u4eba4\u4eba",
  stationEast: "\u96c6\u5408\u5834\u6240",
  station: "\u89e3\u6563\u5834\u6240",
  packingSample: "\u6b69\u304d\u3084\u3059\u3044\u9774\n\u30e2\u30d0\u30a4\u30eb\u30d0\u30c3\u30c6\u30ea\u30fc\n\u6298\u308a\u305f\u305f\u307f\u5098",
  notesSample: "\u663c\u98df\u306f\u6df7\u307f\u3084\u3059\u3044\u306e\u3067\u65e9\u3081\u306b\u79fb\u52d5\u3002\u5199\u771f\u5171\u6709\u7528\u306e\u30a2\u30eb\u30d0\u30e0\u3092\u3042\u3068\u3067\u4f5c\u308b\u3002",
  meet: "\u96c6\u5408",
  walk: "\u5f92\u6b69",
  komachi: "\u6563\u7b56\u30a8\u30ea\u30a2",
  stroll: "\u6563\u7b56\u3068\u98df\u3079\u6b69\u304d",
  cafe: "\u98df\u4e8b\u306e\u5834\u6240",
  lunch: "\u663c\u98df",
  hachimangu: "\u89b3\u5149\u30b9\u30dd\u30c3\u30c8",
  sightseeing: "\u89b3\u5149",
  participants: "\u53c2\u52a0\u8005",
  meeting: "\u96c6\u5408",
  dismissal: "\u89e3\u6563",
  place: "\u5834\u6240",
  move: "\u79fb\u52d5",
  packing: "\u6301\u3061\u7269",
  memo: "\u30e1\u30e2",
  unfilled: "\u672a\u5165\u529b",
  newItem: "\u65b0\u3057\u3044\u4e88\u5b9a",
  empty: "\u4e88\u5b9a\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044",
  saved: "\u4fdd\u5b58\u3057\u307e\u3057\u305f",
  exported: "\u51fa\u529b\u3057\u307e\u3057\u305f",
  failed: "\u51fa\u529b\u306b\u5931\u6557\u3057\u307e\u3057\u305f",
  resetConfirm: "\u5165\u529b\u5185\u5bb9\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u304b\uff1f",
};

const templates = [
  { id: "school", label: ja.templateSchool, color: "#d8bd84" },
  { id: "pop", label: ja.templatePop, color: "#e8558c" },
  { id: "chic", label: ja.templateChic, color: "#76614f" },
  { id: "travel", label: ja.templateTravel, color: "#207568" },
];

const iconAtlas = {
  auto: { col: 3, row: 2, label: "集合" },
  star: { col: 3, row: 2, label: "特別" },
  meet: { col: 1, row: 1, label: "集合" },
  walk: { col: 2, row: 0, label: "walk" },
  train: { col: 0, row: 0, label: "train" },
  bus: { col: 1, row: 0, label: "bus" },
  car: { col: 0, row: 2, label: "car" },
  food: { col: 3, row: 0, label: "food" },
  camera: { col: 0, row: 1, label: "camera" },
  pin: { col: 1, row: 1, label: "pin" },
  cafe: { col: 1, row: 2, label: "cafe" },
  hotel: { col: 2, row: 1, label: "suitcase" },
  ticket: { col: 2, row: 2, label: "ticket" },
  tree: { col: 3, row: 1, label: "tree" },
};

const figmaIconFiles = {
  auto: "item-icon-1.svg",
  star: "item-icon-1.svg",
  meet: "item-icon-1.svg",
  pin: "item-icon-1.svg",
  walk: "item-icon-4.svg",
  train: "item-icon-2.svg",
  bus: "item-icon-3.svg",
  car: "item-icon-5.svg",
  food: "item-icon-7.svg",
  camera: "item-icon-10.svg",
  cafe: "item-icon-7.svg",
  hotel: "item-icon-11.svg",
  ticket: "item-icon-12.svg",
  tree: "item-icon-11.svg",
};

const iconChoices = [
  ["auto", "集合"],
  ["walk", "散策"],
  ["food", "食事"],
  ["camera", "観光"],
  ["train", "電車"],
  ["bus", "バス"],
  ["hotel", "買い物"],
  ["cafe", "カフェ"],
  ["pin", "名所"],
  ["car", "海岸"],
  ["tree", "山"],
  ["star", "特別"],
];

const iconSymbolMap = {
  auto: "pin",
  meet: "pin",
  pin: "pin",
  walk: "walk",
  food: "food",
  camera: "camera",
  train: "train",
  bus: "bus",
  cafe: "food",
  car: "car",
  hotel: "bag",
  ticket: "plus",
  tree: "mountain",
  star: "star",
};

const itemAccentColors = ["#207568", "#ec7e7d", "#d6a642", "#5f8f7b", "#63a9b5"];

const sheet = document.querySelector("#itinerarySheet");
const templatePicker = document.querySelector("#templatePicker");
const statusText = document.querySelector("#statusText");
const headerImageInput = document.querySelector("#headerImageInput");
const headerImageButton = document.querySelector("#headerImageButton");
const headerImageResetButton = document.querySelector("#headerImageResetButton");

let state = loadState();

function createId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") return globalThis.crypto.randomUUID();
  return `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function makeItem(start, end, place, activity, memo = "", transport = "", url = "") {
  return {
    id: createId(),
    start,
    end,
    place,
    activity,
    memo,
    transport,
    url,
    icon: "auto",
    accent: "",
    addMenuOpen: false,
    detailVisible: {
      place: Boolean(place),
      transport: Boolean(transport),
      memo: Boolean(memo),
      url: Boolean(url),
    },
    timeMenuOpen: false,
    iconMenuOpen: false,
    colorMenuOpen: false,
  };
}

function createBlankState() {
  return {
    title: ja.defaultTitle,
    date: new Date().toISOString().slice(0, 10),
    area: "",
    headerImageDataUrl: "",
    participants: "",
    meeting: "",
    dismissal: "",
    metaVisible: {
      participants: false,
      meeting: false,
      dismissal: false,
    },
    packing: "",
    notes: "",
    template: "travel",
    items: [makeItem("10:00", "11:00", "", `${ja.meeting}\u30fb${ja.move}`)],
  };
}

function createSampleState() {
  return {
    title: ja.sampleTitle,
    date: "2026-06-13",
    area: ja.sampleArea,
    participants: ja.sampleParticipants,
    meeting: ja.stationEast,
    dismissal: ja.station,
    metaVisible: {
      participants: true,
      meeting: true,
      dismissal: true,
    },
    packing: ja.packingSample,
    notes: ja.notesSample,
    template: "travel",
    items: [
      makeItem("10:00", "10:20", ja.stationEast, ja.meet, "\u6539\u672d\u3092\u51fa\u305f\u3068\u3053\u308d\u3067\u96c6\u5408", ja.walk),
      makeItem("10:30", "12:00", ja.komachi, ja.stroll, "\u6c17\u306b\u306a\u308b\u5e97\u3092\u898b\u306a\u304c\u3089\u3086\u3063\u304f\u308a\u79fb\u52d5", ja.walk),
      makeItem("12:15", "13:30", ja.cafe, ja.lunch, "\u4e88\u7d04\u540d\u3092\u78ba\u8a8d", ja.walk),
      makeItem("14:00", "15:30", ja.hachimangu, ja.sightseeing, "\u96c6\u5408\u5199\u771f\u3092\u64ae\u308b", ja.walk),
    ],
  };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("holiday-itinerary-v4") || localStorage.getItem("holiday-itinerary-v3");
  if (!saved) return createBlankState();
  try {
    const parsed = { ...createBlankState(), ...JSON.parse(saved) };
    if (parsed.title === "\u4f11\u65e5\u304a\u3067\u304b\u3051\u30d7\u30e9\u30f3") parsed.title = ja.defaultTitle;
    parsed.headerImageDataUrl = isImageDataUrl(parsed.headerImageDataUrl) ? parsed.headerImageDataUrl : "";
    parsed.items = parsed.items.map(normalizeItem);
    parsed.metaVisible = normalizeMetaVisibility(parsed);
    return parsed;
  } catch {
    return createBlankState();
  }
}

function normalizeMetaVisibility(schedule) {
  const visibility = schedule.metaVisible || {};
  return {
    participants: Boolean(visibility.participants ?? schedule.participants),
    meeting: Boolean(visibility.meeting ?? schedule.meeting),
    dismissal: Boolean(visibility.dismissal ?? schedule.dismissal),
  };
}

function normalizeItem(item) {
  const existingVisibility = item.detailVisible || {};
  return {
    ...makeItem("10:00", "11:00", "", ja.newItem),
    ...item,
    addMenuOpen: Boolean(item.addMenuOpen),
    timeMenuOpen: Boolean(item.timeMenuOpen),
    iconMenuOpen: Boolean(item.iconMenuOpen),
    colorMenuOpen: Boolean(item.colorMenuOpen),
    icon: item.icon || "auto",
    accent: item.accent || "",
    detailVisible: {
      place: Boolean(existingVisibility.place ?? item.place),
      transport: Boolean(existingVisibility.transport ?? item.transport),
      memo: Boolean(existingVisibility.memo ?? item.memo),
      url: Boolean(existingVisibility.url ?? item.url),
    },
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showStatus(ja.saved);
}

function showStatus(message) {
  statusText.textContent = message;
  window.clearTimeout(showStatus.timer);
  showStatus.timer = window.setTimeout(() => (statusText.textContent = ""), 1800);
}

function renderAll() {
  renderTemplates();
  renderSheet();
}

function renderTemplates() {
  templatePicker.innerHTML = templates
    .map(
      (template) => `
        <button class="template-button ${state.template === template.id ? "active" : ""}" type="button" data-template="${template.id}">
          <span class="swatch" style="background:${template.color}"></span>${escapeHtml(template.label)}
        </button>`,
    )
    .join("");

  templatePicker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.template = button.dataset.template;
      saveState();
      renderAll();
    });
  });
}

function renderSheet() {
  const metaOptions = ["participants", "meeting", "dismissal"].filter((field) => !state.metaVisible?.[field]);
  sheet.className = `itinerary-sheet template-${state.template}`;
  sheet.innerHTML = `
    <header class="sheet-hero">
      <div class="sheet-date-line">
        <input class="sheet-date-input" type="date" data-field="date" value="${escapeAttr(state.date)}" />
        <input class="sheet-area-input" type="text" data-field="area" value="${escapeAttr(state.area)}" placeholder="\u30a8\u30ea\u30a2" />
      </div>
      <textarea class="sheet-title-input" rows="2" data-field="title">${escapeHtml(state.title)}</textarea>
    </header>

    <div class="sheet-meta-panel">
      <div class="meta-add-row">
        ${metaOptions.length ? metaOptions.map((field) => `<button type="button" data-meta-add="${field}">+ ${metaLabel(field)}</button>`).join("") : ""}
      </div>
      <div class="sheet-meta">
        ${state.metaVisible?.participants ? renderMetaInput(ja.participants, "participants", state.participants) : ""}
        ${state.metaVisible?.meeting ? renderMetaInput(ja.meeting, "meeting", state.meeting) : ""}
        ${state.metaVisible?.dismissal ? renderMetaInput(ja.dismissal, "dismissal", state.dismissal) : ""}
      </div>
    </div>

    <section class="sheet-section">
      <h3>Time Schedule</h3>
      <div class="sheet-timeline">${state.items.length ? state.items.map(renderSheetItem).join("") : `<div class="empty-state">${ja.empty}</div>`}</div>
      <button class="sheet-add-item-button" type="button" data-sheet-action="add-item">+ ${ja.newItem}</button>
    </section>

    <section class="sheet-section">
      <h3>${ja.packing}</h3>
      <div class="note-frame">
        <textarea class="note-box sheet-textarea" data-field="packing" rows="4">${escapeHtml(state.packing)}</textarea>
      </div>
    </section>

    <section class="sheet-section memo-section">
      <h3>${ja.memo}</h3>
      <textarea class="note-box sheet-textarea" data-field="notes" rows="4">${escapeHtml(state.notes)}</textarea>
    </section>
  `;

  applyHeaderImage();
  bindSheetInputs();
}

function applyHeaderImage() {
  const hero = sheet.querySelector(".sheet-hero");
  if (!hero) return;
  if (isImageDataUrl(state.headerImageDataUrl)) {
    hero.style.setProperty("--hero-image", `url("${state.headerImageDataUrl}")`);
  } else {
    hero.style.removeProperty("--hero-image");
  }
}

function renderMetaInput(label, field, value) {
  return `
    <div class="meta-row">
      <span class="meta-label">${escapeHtml(label)}</span>
      <input class="sheet-input" type="text" data-field="${field}" value="${escapeAttr(value)}" />
      <button class="meta-hide-button" type="button" data-meta-hide="${field}" aria-label="hide ${field}">&#8722;</button>
    </div>`;
}

function metaLabel(field) {
  return { participants: ja.participants, meeting: ja.meeting, dismissal: ja.dismissal }[field] || field;
}

function renderSheetItem(item, index) {
  const availableDetails = ["place", "transport", "memo", "url"].filter((field) => !item.detailVisible?.[field]);
  const isOverlapping = hasTimeOverlap(item);
  const icon = resolveItemIcon(item);
  const accent = item.accent || travelAccent(state.items.findIndex((entry) => entry.id === item.id));
  const hasDetails = hasVisibleDetails(item);
  return `
    <div class="sheet-item editable-item ${isOverlapping ? "time-overlap" : ""} ${hasDetails ? "has-details" : "no-details"} ${item.addMenuOpen ? "add-menu-open" : ""}" data-id="${item.id}" style="--item-accent:${escapeAttr(accent)}" draggable="true">
      <button class="rail-dot" type="button" data-action="color-menu" aria-label="color"></button>
      <div class="color-popover" ${item.colorMenuOpen ? "" : "hidden"}>
        ${renderColorChoices(item, accent)}
      </div>
      <div class="item-card">
        <div class="item-card-head">
          <div class="item-time">
            <button class="time-range-button" type="button" data-action="time-menu" data-start="${escapeAttr(item.start || "--:--")}" data-end="${escapeAttr(item.end || "--:--")}">${escapeHtml(formatTimeRange(item.start, item.end))}</button>
            <div class="time-popover" ${item.timeMenuOpen ? "" : "hidden"}>
              <label><span>START</span><input type="time" data-item-field="start" value="${escapeAttr(item.start)}" /></label>
              <label><span>END</span><input type="time" data-item-field="end" value="${escapeAttr(item.end)}" /></label>
            </div>
          </div>
          <button class="item-icon-button" type="button" data-action="icon-menu" aria-label="icon">
            ${renderIcon(icon)}
          </button>
          <div class="icon-popover" ${item.iconMenuOpen ? "" : "hidden"}>
            ${renderIconChoices(item)}
          </div>
          <span class="drag-handle" title="drag">::</span>
          <input class="item-title-input" type="text" data-item-field="activity" value="${escapeAttr(item.activity)}" />
          <span class="duration-pill">${escapeHtml(formatDuration(item.start, item.end))}</span>
          <div class="item-tools">
            <button type="button" data-action="add-menu" aria-label="add details">+</button>
            <button type="button" data-action="up" aria-label="up">&#8593;</button>
            <button type="button" data-action="down" aria-label="down">&#8595;</button>
            <button type="button" data-action="delete" aria-label="delete">&#215;</button>
          </div>
        </div>
        <div class="item-dots"></div>
        ${isOverlapping ? '<div class="overlap-alert">Time overlap</div>' : ""}
        <div class="detail-add-menu" ${item.addMenuOpen ? "" : "hidden"}>
          ${availableDetails.length ? availableDetails.map((field) => `<button type="button" data-action="add-detail" data-detail="${field}">+ ${detailAddLabel(field)}</button>`).join("") : '<span class="detail-empty">All details added</span>'}
        </div>
        <div class="item-details-inline">
          ${renderDetailField(item, "place")}
          ${renderDetailField(item, "transport")}
          ${renderDetailField(item, "memo")}
          ${renderDetailField(item, "url")}
        </div>
      </div>
    </div>`;
}

function renderIcon(name) {
  const icon = iconAtlas[name] ? name : "auto";
  return `<span class="figma-item-icon figma-item-icon-${escapeAttr(icon)}">${renderLineIcon(icon)}</span>`;
}

function renderIconChoices(item) {
  return `
    <p class="icon-popover-title">アイコンを選択</p>
    <div class="icon-choice-grid">
      ${iconChoices
        .map(([icon, label]) => `<button type="button" class="${item.icon === icon ? "active" : ""}" data-action="set-icon" data-icon="${icon}">${renderIcon(icon)}<span>${escapeHtml(label)}</span></button>`)
        .join("")}
    </div>`;
}

function renderColorChoices(item, currentAccent) {
  return itemAccentColors
    .map((color) => `<button type="button" class="${currentAccent === color ? "active" : ""}" data-action="set-color" data-color="${color}" style="--choice-color:${color}" aria-label="color ${color}"></button>`)
    .join("");
}

function renderLineIcon(name) {
  const icon = iconSymbolMap[name] || "pin";
  const paths = {
    pin: '<path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11z"/><circle cx="12" cy="10" r="2.4"/>',
    walk: '<path d="M9.5 20l1.8-5.4"/><path d="M14.8 20l-1.5-4.6-3-2.7 1.8-4.2 3.2 1.7 1.7 3"/><path d="M9.2 12.6l-3.4 1.8"/><circle cx="12.4" cy="4.6" r="1.8"/>',
    food: '<path d="M7 3v8"/><path d="M10 3v8"/><path d="M5 3v6a4 4 0 0 0 4 4v8"/><path d="M17 3v18"/><path d="M17 3c2.2 1.5 3.3 3.3 3.3 5.5S19.3 12 17 12"/>',
    camera: '<rect x="4" y="7" width="16" height="12" rx="2.4"/><path d="M9 7l1.2-2h3.6L15 7"/><circle cx="12" cy="13" r="3.1"/>',
    train: '<rect x="5" y="3.5" width="14" height="14" rx="3"/><path d="M8 7h8"/><path d="M8 11h8"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/><path d="M8.5 21l2-3"/><path d="M15.5 21l-2-3"/>',
    bus: '<rect x="4" y="5" width="16" height="12" rx="2.5"/><path d="M7 8h10"/><path d="M7 12h10"/><circle cx="8" cy="17" r="1.2"/><circle cx="16" cy="17" r="1.2"/>',
    car: '<path d="M5 12l2-5h10l2 5"/><rect x="4" y="11" width="16" height="6" rx="2"/><circle cx="8" cy="17" r="1.2"/><circle cx="16" cy="17" r="1.2"/>',
    bag: '<rect x="6" y="7" width="12" height="13" rx="2"/><path d="M9 7V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7"/><path d="M9 11h6"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    mountain: '<path d="M4 19l6.5-11 4 6 2-3 3.5 8z"/><path d="M10.5 8l1.7 4.2"/>',
    star: '<path d="M12 3l2.4 5.6 6 .5-4.5 3.9 1.4 5.9L12 15.8 6.7 19l1.4-5.9-4.5-3.9 6-.5z"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[icon]}</svg>`;
}

function resolveItemIcon(item) {
  if (item.icon && item.icon !== "auto") return item.icon;
  const text = `${item.activity || ""} ${item.transport || ""} ${item.place || ""}`.toLowerCase();
  if (/train|rail|station/.test(text)) return "train";
  if (/bus/.test(text)) return "bus";
  if (/car|taxi/.test(text)) return "car";
  if (/walk/.test(text)) return "walk";
  if (/restaurant|food|lunch|dinner/.test(text)) return "food";
  if (/coffee|cafe/.test(text)) return "cafe";
  if (/camera|photo/.test(text)) return "camera";
  if (/hotel/.test(text)) return "hotel";
  if (/meet/.test(text)) return "meet";
  if (/spot|pin/.test(text)) return "pin";
  return "star";
}

function renderItemSummary(item) {
  const values = [
    item.detailVisible?.place && item.place,
    item.detailVisible?.transport && item.transport,
    item.detailVisible?.memo && item.memo,
    item.detailVisible?.url && item.url,
  ].filter(Boolean);
  if (!values.length) return "";
  return escapeHtml(values.join(" / "));
}

function hasVisibleDetails(item) {
  return Boolean(
    (item.detailVisible?.place && item.place) ||
      (item.detailVisible?.transport && item.transport) ||
      (item.detailVisible?.memo && item.memo) ||
      (item.detailVisible?.url && item.url) ||
      item.detailVisible?.place ||
      item.detailVisible?.transport ||
      item.detailVisible?.memo ||
      item.detailVisible?.url,
  );
}

function renderDetailField(item, field) {
  if (!item.detailVisible?.[field]) return "";
  const input =
    field === "memo"
      ? `<textarea class="inline-detail-input inline-detail-memo" rows="1" data-item-field="memo" placeholder="${detailLabel(field)}">${escapeHtml(item.memo)}</textarea>`
      : `<input class="inline-detail-input" type="${field === "url" ? "url" : "text"}" data-item-field="${field}" value="${escapeAttr(item[field])}" placeholder="${detailLabel(field)}" />`;
  return `
    <div class="inline-detail-row" data-label="${escapeAttr(detailLabel(field))}">
      ${input}
      <button type="button" data-action="hide-detail" data-detail="${field}" aria-label="hide ${field}">&#8722;</button>
    </div>`;
}

function detailLabel(field) {
  return { place: ja.place, transport: ja.move, memo: ja.memo, url: "URL" }[field] || field;
}

function detailAddLabel(field) {
  return { place: ja.place, transport: "移動手段", memo: ja.memo, url: "URL" }[field] || field;
}

function bindSheetInputs() {
  document.removeEventListener("click", closeTimeMenusOnOutsideClick);
  document.removeEventListener("keydown", closeTimeMenusOnEscape);
  document.addEventListener("click", closeTimeMenusOnOutsideClick);
  document.addEventListener("keydown", closeTimeMenusOnEscape);

  sheet.querySelectorAll("[data-field]").forEach((input) => {
    input.addEventListener("input", () => {
      state[input.dataset.field] = input.value;
      saveState();
    });
  });

  sheet.querySelectorAll("[data-meta-add]").forEach((button) => {
    button.addEventListener("click", () => {
      state.metaVisible = { ...state.metaVisible, [button.dataset.metaAdd]: true };
      saveState();
      renderSheet();
    });
  });

  sheet.querySelectorAll("[data-meta-hide]").forEach((button) => {
    button.addEventListener("click", () => {
      state.metaVisible = { ...state.metaVisible, [button.dataset.metaHide]: false };
      saveState();
      renderSheet();
    });
  });

  sheet.querySelectorAll("[data-sheet-action='add-item']").forEach((button) => {
    button.addEventListener("click", addItem);
  });

  sheet.querySelectorAll(".editable-item").forEach((itemEl) => {
    const id = itemEl.dataset.id;
    itemEl.querySelectorAll("[data-item-field]").forEach((input) => {
      input.addEventListener("change", () => {
        state.items = state.items.map((item) => (item.id === id ? { ...item, [input.dataset.itemField]: input.value } : item));
        state.items = state.items.map((item) => (item.id === id ? { ...item, timeMenuOpen: false } : item));
        saveState();
        renderSheet();
      });
    });

    itemEl.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => handleItemAction(id, button.dataset.action, button.dataset.detail || button.dataset.icon || button.dataset.color));
    });

    itemEl.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", id);
      itemEl.classList.add("dragging");
    });
    itemEl.addEventListener("dragend", () => itemEl.classList.remove("dragging"));
    itemEl.addEventListener("dragover", (event) => {
      event.preventDefault();
      itemEl.classList.toggle("drop-before", isDropBefore(event, itemEl));
      itemEl.classList.toggle("drop-after", !isDropBefore(event, itemEl));
    });
    itemEl.addEventListener("dragleave", () => {
      itemEl.classList.remove("drop-before", "drop-after");
    });
    itemEl.addEventListener("drop", (event) => {
      event.preventDefault();
      itemEl.classList.remove("drop-before", "drop-after");
      moveDraggedItem(event.dataTransfer.getData("text/plain"), id, isDropBefore(event, itemEl));
    });
  });
}

function closeTimeMenusOnOutsideClick(event) {
  if (event.target.closest(".item-time") || event.target.closest(".item-icon-button") || event.target.closest(".icon-popover") || event.target.closest(".rail-dot") || event.target.closest(".color-popover")) return;
  if (!state.items.some((item) => item.timeMenuOpen || item.iconMenuOpen || item.colorMenuOpen)) return;
  state.items = state.items.map((item) => ({ ...item, timeMenuOpen: false, iconMenuOpen: false, colorMenuOpen: false }));
  saveState();
  renderSheet();
}

function closeTimeMenusOnEscape(event) {
  if (event.key !== "Escape") return;
  if (!state.items.some((item) => item.timeMenuOpen || item.iconMenuOpen || item.colorMenuOpen)) return;
  state.items = state.items.map((item) => ({ ...item, timeMenuOpen: false, iconMenuOpen: false, colorMenuOpen: false }));
  saveState();
  renderSheet();
}

function handleItemAction(id, action, detail) {
  const index = state.items.findIndex((item) => item.id === id);
  if (index < 0) return;
  if (action === "delete") state.items = state.items.filter((item) => item.id !== id);
  if (action === "add-menu") state.items = state.items.map((item) => (item.id === id ? { ...item, addMenuOpen: !item.addMenuOpen } : item));
  if (action === "time-menu") state.items = state.items.map((item) => (item.id === id ? { ...item, timeMenuOpen: !item.timeMenuOpen, iconMenuOpen: false, colorMenuOpen: false } : { ...item, timeMenuOpen: false }));
  if (action === "icon-menu") state.items = state.items.map((item) => (item.id === id ? { ...item, iconMenuOpen: !item.iconMenuOpen, timeMenuOpen: false, colorMenuOpen: false } : { ...item, iconMenuOpen: false }));
  if (action === "color-menu") state.items = state.items.map((item) => (item.id === id ? { ...item, colorMenuOpen: !item.colorMenuOpen, timeMenuOpen: false, iconMenuOpen: false } : { ...item, colorMenuOpen: false }));
  if (action === "set-icon" && detail) state.items = state.items.map((item) => (item.id === id ? { ...item, icon: detail, iconMenuOpen: false } : item));
  if (action === "set-color" && detail) state.items = state.items.map((item) => (item.id === id ? { ...item, accent: detail, colorMenuOpen: false } : item));
  if (action === "add-detail" && detail) state.items = state.items.map((item) => (item.id === id ? { ...item, addMenuOpen: false, detailVisible: { ...item.detailVisible, [detail]: true } } : item));
  if (action === "hide-detail" && detail) state.items = state.items.map((item) => (item.id === id ? { ...item, detailVisible: { ...item.detailVisible, [detail]: false } } : item));
  if (action === "up" && index > 0) {
    [state.items[index - 1], state.items[index]] = [state.items[index], state.items[index - 1]];
    recalcTimelineAroundMove(id, index - 1, "before");
  }
  if (action === "down" && index < state.items.length - 1) {
    [state.items[index], state.items[index + 1]] = [state.items[index + 1], state.items[index]];
    recalcTimelineAroundMove(id, index + 1, "after");
  }
  saveState();
  renderSheet();
}

function getItem(id) {
  return state.items.find((item) => item.id === id);
}

function hasTimeOverlap(item) {
  const start = timeToMinutes(item.start);
  const end = timeToMinutes(item.end);
  if (end <= start) return true;
  return state.items.some((other) => {
    if (other.id === item.id) return false;
    const otherStart = timeToMinutes(other.start);
    const otherEnd = timeToMinutes(other.end);
    return start < otherEnd && end > otherStart;
  });
}

function formatTimeRange(start, end) {
  return `${start || ""}-${end || ""}`;
}

function parseTimeRange(value) {
  const match = String(value).trim().match(/^(\d{1,2}):?(\d{2})\s*(?:-|~|to)\s*(\d{1,2}):?(\d{2})$/i);
  if (!match) return null;
  const start = normalizeTimeParts(match[1], match[2]);
  const end = normalizeTimeParts(match[3], match[4]);
  if (!start || !end) return null;
  return { start, end };
}

function normalizeTimeParts(hour, minute) {
  const h = Number(hour);
  const m = Number(minute);
  if (!Number.isFinite(h) || !Number.isFinite(m) || h < 0 || h > 23 || m < 0 || m > 59) return null;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function addItem() {
  const start = latestEndTime(state.items) || "10:00";
  const end = addMinutesToTime(start, 60);
  state.items.push(makeItem(start, end, "", ja.newItem));
  saveState();
  renderSheet();
}

function isDropBefore(event, element) {
  const rect = element.getBoundingClientRect();
  return event.clientY < rect.top + rect.height / 2;
}

function moveDraggedItem(draggedId, targetId, beforeTarget) {
  if (!draggedId || draggedId === targetId) return;
  const draggedIndex = state.items.findIndex((item) => item.id === draggedId);
  const targetIndex = state.items.findIndex((item) => item.id === targetId);
  if (draggedIndex < 0 || targetIndex < 0) return;

  const [dragged] = state.items.splice(draggedIndex, 1);
  let insertIndex = state.items.findIndex((item) => item.id === targetId);
  if (!beforeTarget) insertIndex += 1;
  state.items.splice(insertIndex, 0, dragged);
  recalcTimelineAroundMove(draggedId, insertIndex, beforeTarget ? "before" : "after");
  saveState();
  renderSheet();
}

function recalcTimelineAroundMove(id, index, direction) {
  const item = state.items[index];
  if (!item || item.id !== id) return;
  const previous = state.items[index - 1];

  const start = previous?.end ? timeToMinutes(previous.end) : timeToMinutes(item.start);
  setItemStartKeepingDuration(item, start);
  recalcForwardFrom(index);
}

function setItemStartKeepingDuration(item, startMinutes) {
  const duration = itemDuration(item);
  item.start = minutesToTime(startMinutes);
  item.end = minutesToTime(startMinutes + duration);
}

function setItemEndKeepingDuration(item, endMinutes) {
  const duration = itemDuration(item);
  item.end = minutesToTime(endMinutes);
  item.start = minutesToTime(endMinutes - duration);
}

function recalcForwardFrom(index) {
  for (let i = index + 1; i < state.items.length; i += 1) {
    setItemStartKeepingDuration(state.items[i], timeToMinutes(state.items[i - 1].end));
  }
}

function itemDuration(item) {
  return Math.max(1, timeToMinutes(item.end) - timeToMinutes(item.start));
}

function latestEndTime(items) {
  const latest = items.reduce((max, item) => Math.max(max, timeToMinutes(item.end)), -1);
  return latest >= 0 ? minutesToTime(latest) : "";
}

function formatDuration(start, end) {
  const diff = Math.max(0, timeToMinutes(end) - timeToMinutes(start));
  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;
  return `${hours}:${String(minutes).padStart(2, "0")}`;
}

function addMinutesToTime(time, minutes) {
  return minutesToTime(timeToMinutes(time) + minutes);
}

function timeToMinutes(time) {
  const [hours, minutes] = String(time || "00:00").split(":").map(Number);
  return (Number.isFinite(hours) ? hours : 0) * 60 + (Number.isFinite(minutes) ? minutes : 0);
}

function minutesToTime(totalMinutes) {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function sortItems() {
  state.items.sort((a, b) => `${a.start}`.localeCompare(`${b.start}`));
  saveState();
  renderSheet();
}

async function exportImage(type) {
  try {
    const canvas = await drawScheduleCanvas(type);
    const mime = type === "jpeg" ? "image/jpeg" : "image/png";
    const extension = type === "jpeg" ? "jpg" : "png";
    downloadDataUrl(canvas.toDataURL(mime, 0.92), `${safeFileName(state.title)}.${extension}`);
    showStatus(ja.exported);
  } catch (error) {
    console.error(error);
    showStatus(ja.failed);
  }
}

async function drawScheduleCanvas(type) {
  if (state.template === "travel") return drawTravelScheduleCanvas(type);

  const width = 1080;
  const padding = 78;
  const colors = getTemplateColors();
  const ctxMeasure = document.createElement("canvas").getContext("2d");
  ctxMeasure.font = "30px sans-serif";

  const items = state.items;
  let height = 520 + items.length * 178 + textHeight(ctxMeasure, state.packing || ja.unfilled, width - padding * 2, 30) + textHeight(ctxMeasure, state.notes || ja.unfilled, width - padding * 2, 30);
  height = Math.max(1400, height);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = type === "jpeg" ? "#ffffff" : colors.bg;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = colors.bg;
  roundRect(ctx, 0, 0, width, height, 0, true);

  if (state.template === "travel") {
    await drawTravelHeaderAsset(ctx, width, padding);
    drawTravelExportDecorations(ctx, width, height, padding);
  }
  const exportIconAtlas = await loadImage("./assets/figma/item-icon-1.svg").catch(() => null);

  let y = state.template === "travel" ? padding + 66 : padding;
  ctx.fillStyle = colors.text;
  ctx.font = "700 30px sans-serif";
  ctx.fillText(`${formatDate(state.date)}${state.area ? ` / ${state.area}` : ""}`, padding, y);
  y += 64;

  ctx.font = "800 66px sans-serif";
  y = drawWrappedText(ctx, state.title || ja.defaultTitle, padding, y, width - padding * 2, 78);
  y += 28;

  ctx.strokeStyle = colors.line;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(padding, y);
  ctx.lineTo(width - padding, y);
  ctx.stroke();
  y += 50;

  ctx.font = "700 30px sans-serif";
  y = drawMeta(ctx, ja.participants, state.participants, padding, y, width - padding * 2);
  y = drawMeta(ctx, ja.meeting, state.meeting, padding, y, width - padding * 2);
  y = drawMeta(ctx, ja.dismissal, state.dismissal, padding, y, width - padding * 2);
  y += 34;

  ctx.font = "800 38px sans-serif";
  ctx.fillText("Time Schedule", padding, y);
  y += 34;

  items.forEach((item) => {
    const overlap = hasTimeOverlap(item);
    ctx.strokeStyle = overlap ? "#c73646" : colors.line;
    ctx.lineWidth = 4;
    ctx.setLineDash([2, 12]);
    ctx.beginPath();
    ctx.moveTo(padding + 36, y + 78);
    ctx.lineTo(padding + 36, y + 178);
    if (item !== items[items.length - 1]) ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = overlap ? "#c73646" : colors.text;
    ctx.beginPath();
    ctx.arc(padding + 36, y + 42, 13, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = overlap ? "#8a2530" : colors.text;
    ctx.font = "800 34px sans-serif";
    ctx.fillText(item.start || "--:--", padding + 72, y + 36);
    ctx.font = "700 22px sans-serif";
    ctx.fillText(item.end || "--:--", padding + 72, y + 70);
    ctx.font = "800 22px sans-serif";
    ctx.fillText(formatDuration(item.start, item.end), padding + 72, y + 106);

    const cardX = padding + 250;
    const cardW = width - padding - cardX;
    drawCanvasIcon(ctx, resolveItemIcon(item), cardX, y + 14, overlap ? "#c73646" : colors.line, exportIconAtlas);
    ctx.fillStyle = overlap ? "#8a2530" : colors.text;
    ctx.font = "800 42px sans-serif";
    ctx.fillText(item.activity || ja.newItem, cardX + 50, y + 42);
    ctx.strokeStyle = overlap ? "#c73646" : colors.text;
    ctx.lineWidth = 6;
    ctx.setLineDash([2, 14]);
    ctx.beginPath();
    ctx.moveTo(cardX + 50, y + 66);
    ctx.lineTo(Math.min(cardX + 390, width - padding), y + 66);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.font = "26px sans-serif";
    const detail = [
      item.detailVisible?.place && item.place && `${ja.place}: ${item.place}`,
      item.detailVisible?.transport && item.transport && `${ja.move}: ${item.transport}`,
      item.detailVisible?.memo && item.memo,
      item.detailVisible?.url && item.url,
    ]
      .filter(Boolean)
      .join(" / ");
    drawWrappedText(ctx, detail, cardX + 50, y + 104, cardW - 50, 32, 2);
    y += 178;
  });

  y += 18;
  y = drawNoteSection(ctx, ja.packing, state.packing || ja.unfilled, padding, y, width - padding * 2, colors);
  y = drawNoteSection(ctx, ja.memo, state.notes || ja.unfilled, padding, y + 34, width - padding * 2, colors);
  return canvas;
}

async function drawTravelScheduleCanvas(type) {
  const width = 1080;
  const scale = width / 900;
  const padding = 24 * scale;
  const contentW = width - padding * 2;
  const colors = getTemplateColors();
  const items = state.items;
  const measure = document.createElement("canvas").getContext("2d");
  measure.font = `${16 * scale}px sans-serif`;
  const noteHeight = Math.max(180 * scale, textHeight(measure, state.packing || ja.unfilled, contentW - 56 * scale, 30 * scale) + 86 * scale);
  const memoHeight = state.notes ? Math.max(150 * scale, textHeight(measure, state.notes, contentW - 56 * scale, 30 * scale) + 86 * scale) : 0;
  const itemGap = 16 * scale;
  const itemHeights = items.map((item) => (hasVisibleDetails(item) ? 164 * scale : 84 * scale));
  const timelineTop = 392 * scale;
  const itemsHeight = itemHeights.reduce((sum, value) => sum + value, 0) + Math.max(0, items.length - 1) * itemGap;
  const height = Math.max(1547 * scale, timelineTop + 72 * scale + itemsHeight + noteHeight + memoHeight + 104 * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = Math.ceil(height);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = type === "jpeg" ? "#ffffff" : colors.bg;
  ctx.fillRect(0, 0, width, canvas.height);

  await drawTravelPageBackground(ctx, width, canvas.height);
  await drawTravelExportHero(ctx, padding, 32 * scale, contentW, 230 * scale);
  drawTravelExportMeta(ctx, padding, 312 * scale, contentW, scale);

  let y = timelineTop;
  ctx.fillStyle = colors.text;
  ctx.font = `800 ${26 * scale}px Georgia, serif`;
  ctx.fillText("Time Schedule", padding, y);
  y += 55 * scale;

  let offsetY = 0;
  items.forEach((item, index) => {
    const itemH = itemHeights[index];
    const cardY = y + offsetY;
    const dotX = padding + 18 * scale;
    const dotY = cardY + 36 * scale;
    const cardX = padding + 48 * scale;
    const cardW = contentW - 48 * scale;
    const overlap = hasTimeOverlap(item);
    const accent = overlap ? "#c73646" : item.accent || travelAccent(index);
    const hasDetails = hasVisibleDetails(item);

    if (index < items.length - 1) {
      ctx.strokeStyle = overlap ? "#c73646" : "#207568";
      ctx.lineWidth = 2 * scale;
      ctx.setLineDash([2 * scale, 8 * scale]);
      ctx.beginPath();
      ctx.moveTo(dotX, dotY + 25 * scale);
      ctx.lineTo(dotX, cardY + itemH + itemGap - 8 * scale);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(dotX, dotY, 8 * scale, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = overlap ? "rgba(199,54,70,0.08)" : "rgba(255,249,232,0.97)";
    ctx.strokeStyle = overlap ? "rgba(199,54,70,0.34)" : colorWithAlpha(accent, 0.22);
    ctx.lineWidth = 1.2 * scale;
    roundRect(ctx, cardX, cardY, cardW, itemH, 16 * scale, true, true);

    ctx.save();
    ctx.translate(cardX + 24 * scale, cardY - 8 * scale);
    ctx.rotate((index % 2 ? -3 : 3) * Math.PI / 180);
    ctx.fillStyle = colorWithAlpha(accent, 0.32);
    roundRect(ctx, 0, 0, 66 * scale, 14 * scale, 3 * scale, true);
    ctx.restore();

    drawTravelCanvasTime(ctx, item, cardX + 12 * scale, cardY + 22 * scale, scale, accent);
    drawCanvasFigmaIcon(ctx, resolveItemIcon(item), cardX + 221 * scale, cardY + 14 * scale, overlap ? "#c73646" : accent, 44 * scale);

    ctx.fillStyle = overlap ? "#8a2530" : colors.text;
    ctx.font = `800 ${20 * scale}px Georgia, serif`;
    ctx.fillText(item.activity || ja.newItem, cardX + 273 * scale, cardY + 42 * scale);

    ctx.fillStyle = colorWithAlpha(index % 3 === 2 ? "#d6a642" : accent, 0.38);
    roundRect(ctx, cardX + cardW - 52 * scale, cardY + 27 * scale, 38 * scale, 19 * scale, 9.5 * scale, true);
    ctx.fillStyle = colors.text;
    ctx.font = `800 ${10 * scale}px Consolas, monospace`;
    ctx.fillText(formatDuration(item.start, item.end), cardX + cardW - 44 * scale, cardY + 41 * scale);

    if (hasDetails) {
      ctx.strokeStyle = colorWithAlpha(accent, 0.45);
      ctx.lineWidth = 3 * scale;
      ctx.setLineDash([1.5 * scale, 10 * scale]);
      ctx.beginPath();
      ctx.moveTo(cardX + 12 * scale, cardY + 72 * scale);
      ctx.lineTo(cardX + cardW - 14 * scale, cardY + 72 * scale);
      ctx.stroke();
      ctx.setLineDash([]);
      drawTravelCanvasDetails(ctx, item, cardX + 12 * scale, cardY + 92 * scale, cardW - 24 * scale, scale);
    }
    offsetY += itemH + itemGap;
  });

  y += itemsHeight + 28 * scale;
  y = await drawTravelCanvasNote(ctx, ja.packing, state.packing || ja.unfilled, padding, y, contentW, noteHeight, scale);
  if (state.notes) await drawTravelCanvasNote(ctx, ja.memo, state.notes, padding, y + 28 * scale, contentW, memoHeight, scale);
  return canvas;
}

async function drawTravelPageBackground(ctx, width, height) {
  ctx.fillStyle = "#fffdf6";
  ctx.fillRect(0, 0, width, height);
  try {
    const paper = await loadImage("./assets/figma/paper-pattern.png");
    const pattern = ctx.createPattern(paper, "repeat");
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = 1;
  } catch {
    ctx.globalAlpha = 1;
  }
  const glow = ctx.createRadialGradient(130, 150, 10, 130, 150, 240);
  glow.addColorStop(0, "rgba(219,238,242,0.28)");
  glow.addColorStop(1, "rgba(219,238,242,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);
}

async function drawTravelExportHero(ctx, x, y, w, h) {
  let image = null;
  try {
    image = await loadImage(getHeaderImageSrc());
    ctx.save();
    roundRect(ctx, x, y, w, h, 16 * (w / 852), false);
    ctx.clip();
    ctx.drawImage(image, x, y, w, h);
    const gradient = ctx.createLinearGradient(x, y, x + w, y);
    gradient.addColorStop(0, "rgba(219,238,242,0.86)");
    gradient.addColorStop(0.62, "rgba(219,238,242,0.46)");
    gradient.addColorStop(1, "rgba(219,238,242,0.18)");
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
  } catch {
    drawTravelHeaderFallback(ctx, w + x * 2, x + 12);
  }

  const scale = w / 852;
  ctx.fillStyle = "rgba(236,126,125,0.4)";
  roundRect(ctx, x + 72 * scale, y + 14 * scale, 90 * scale, 23 * scale, 6 * scale, true);
  ctx.fillStyle = "rgba(221,199,125,0.55)";
  roundRect(ctx, x + w - 170 * scale, y + 30 * scale, 112 * scale, 21 * scale, 6 * scale, true);
  ctx.fillStyle = "#1f3330";
  ctx.font = `700 ${16 * scale}px sans-serif`;
  ctx.fillText(`${formatDate(state.date)}${state.area ? ` / ${state.area}` : ""}`, x + 32 * scale, y + 64 * scale);
  ctx.font = `800 ${50 * scale}px Georgia, serif`;
  ctx.fillText(state.title || ja.defaultTitle, x + 32 * scale, y + 128 * scale);

}

function drawTravelExportMeta(ctx, x, y, w, scale) {
  ctx.strokeStyle = "#207568";
  ctx.lineWidth = 2 * scale;
  ctx.beginPath();
  ctx.moveTo(x, y - 22 * scale);
  ctx.lineTo(x + w, y - 22 * scale);
  ctx.stroke();
  const rows = [
    [ja.participants, state.participants],
    [ja.meeting, state.meeting],
    [ja.dismissal, state.dismissal],
  ].filter(([, value]) => value);
  const colW = w / 3;
  rows.forEach(([label, value], index) => {
    const cx = x + colW * index;
    ctx.fillStyle = "#1f3330";
    ctx.font = `800 ${14 * scale}px Georgia, serif`;
    ctx.fillText(label, cx, y + 16 * scale);
    ctx.fillStyle = "#5f7060";
    ctx.font = `400 ${14 * scale}px sans-serif`;
    drawWrappedText(ctx, value, cx + 66 * scale, y + 16 * scale, colW - 76 * scale, 20 * scale, 2);
  });
}

function drawTravelCanvasTime(ctx, item, x, y, scale, accent) {
  ctx.fillStyle = "rgba(255,249,232,0.8)";
  ctx.strokeStyle = "rgba(32,117,104,0.25)";
  ctx.lineWidth = 1 * scale;
  roundRect(ctx, x, y, 82 * scale, 29 * scale, 10 * scale, true, true);
  roundRect(ctx, x + 110 * scale, y, 82 * scale, 29 * scale, 10 * scale, true, true);
  ctx.fillStyle = "#5f7060";
  ctx.font = `400 ${12 * scale}px sans-serif`;
  ctx.fillText("→", x + 91 * scale, y + 20 * scale);
  ctx.fillStyle = "#1f3330";
  ctx.font = `800 ${13 * scale}px Consolas, monospace`;
  ctx.fillText(item.start || "--:--", x + 13 * scale, y + 20 * scale);
  ctx.fillText(item.end || "--:--", x + 123 * scale, y + 20 * scale);
  ctx.fillStyle = colorWithAlpha(accent, 0.24);
  ctx.fillRect(x + 200 * scale, y + 3 * scale, 1 * scale, 24 * scale);
}

function drawTravelCanvasDetails(ctx, item, x, y, width, scale) {
  const details = [
    item.detailVisible?.place && item.place && [ja.place, item.place],
    item.detailVisible?.transport && item.transport && [ja.move, item.transport],
    item.detailVisible?.memo && item.memo && [ja.memo, item.memo],
    item.detailVisible?.url && item.url && ["URL", item.url],
  ].filter(Boolean);
  details.slice(0, 4).forEach(([label, value], index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const dx = x + col * 256 * scale;
    const dy = y + row * 42 * scale;
    ctx.fillStyle = "#5f7060";
    ctx.font = `700 ${10 * scale}px sans-serif`;
    ctx.fillText(label, dx, dy);
    ctx.fillStyle = "#1f3330";
    ctx.font = `400 ${13 * scale}px sans-serif`;
    drawWrappedText(ctx, value, dx, dy + 18 * scale, Math.min(240 * scale, width - col * 256 * scale), 18 * scale, 1);
  });
}

async function drawTravelCanvasNote(ctx, title, body, x, y, w, h, scale) {
  ctx.fillStyle = "#fff9e8";
  ctx.strokeStyle = "rgba(214,166,66,0.22)";
  ctx.lineWidth = 1 * scale;
  roundRect(ctx, x, y, w, h, 16 * scale, true, true);
  ctx.save();
  ctx.translate(x + 32 * scale, y - 8 * scale);
  ctx.rotate(-1 * Math.PI / 180);
  ctx.fillStyle = "rgba(221,199,125,0.55)";
  roundRect(ctx, 0, 0, 80 * scale, 14 * scale, 6 * scale, true);
  ctx.restore();
  ctx.fillStyle = "#1f3330";
  ctx.font = `800 ${24 * scale}px Georgia, serif`;
  ctx.fillText(title, x + 24 * scale, y + 46 * scale);
  ctx.font = `400 ${14 * scale}px sans-serif`;
  const lines = body.split("\n").map((line) => `繝ｻ${line}`).join("\n");
  drawWrappedText(ctx, lines, x + 24 * scale, y + 82 * scale, w - 48 * scale, 28 * scale);
  return y + h;
}

async function loadFigmaIconImages() {
  const entries = await Promise.all(
    Object.entries(figmaIconFiles).map(async ([key, file]) => [key, await loadImage(`./assets/figma/${file}`).catch(() => null)])
  );
  return Object.fromEntries(entries.filter(([, image]) => image));
}

function drawCanvasFigmaIcon(ctx, iconName, x, y, color, size = 44) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = "rgba(255,249,232,0.97)";
  ctx.lineWidth = 1.2;
  roundRect(ctx, x, y, size, size, size * 0.32, true, true);
  drawCanvasLineIcon(ctx, iconName, x + size * 0.25, y + size * 0.25, size * 0.5, color);
  ctx.restore();
}

function drawCanvasLineIcon(ctx, iconName, x, y, size, color) {
  const icon = iconSymbolMap[iconName] || "pin";
  const s = size / 24;
  const px = (value) => x + value * s;
  const py = (value) => y + value * s;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = "transparent";
  ctx.lineWidth = Math.max(1.6, 2 * s);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const line = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(px(x1), py(y1));
    ctx.lineTo(px(x2), py(y2));
    ctx.stroke();
  };
  const circle = (cx, cy, r) => {
    ctx.beginPath();
    ctx.arc(px(cx), py(cy), r * s, 0, Math.PI * 2);
    ctx.stroke();
  };
  const rect = (rx, ry, rw, rh, rr = 2) => {
    roundRect(ctx, px(rx), py(ry), rw * s, rh * s, rr * s, false, true);
  };
  if (icon === "pin") {
    ctx.beginPath();
    ctx.moveTo(px(12), py(21));
    ctx.bezierCurveTo(px(18), py(15.6), px(18), py(12), px(18), py(10));
    ctx.bezierCurveTo(px(18), py(6.7), px(15.3), py(4), px(12), py(4));
    ctx.bezierCurveTo(px(8.7), py(4), px(6), py(6.7), px(6), py(10));
    ctx.bezierCurveTo(px(6), py(12), px(6), py(15.6), px(12), py(21));
    ctx.stroke();
    circle(12, 10, 2.4);
  } else if (icon === "walk") {
    circle(12.4, 4.6, 1.8);
    line(12, 7, 10.3, 12.7);
    line(12, 8.5, 15.3, 10.2);
    line(15.3, 10.2, 17, 13.2);
    line(10.3, 12.7, 6, 14.4);
    line(10.3, 12.7, 13.3, 15.4);
    line(13.3, 15.4, 14.8, 20);
    line(10.3, 12.7, 8.8, 20);
  } else if (icon === "food") {
    line(7, 3, 7, 11);
    line(10, 3, 10, 11);
    line(5, 3, 5, 9);
    line(9, 13, 9, 21);
    line(17, 3, 17, 21);
    ctx.beginPath();
    ctx.moveTo(px(17), py(3));
    ctx.bezierCurveTo(px(20), py(5), px(20.5), py(10), px(17), py(12));
    ctx.stroke();
  } else if (icon === "camera") {
    rect(4, 7, 16, 12, 2.4);
    line(9, 7, 10.2, 5);
    line(10.2, 5, 13.8, 5);
    line(13.8, 5, 15, 7);
    circle(12, 13, 3.1);
  } else if (icon === "train" || icon === "bus") {
    rect(icon === "train" ? 5 : 4, icon === "train" ? 3.5 : 5, icon === "train" ? 14 : 16, icon === "train" ? 14 : 12, 3);
    line(8, 8, 16, 8);
    line(8, 12, 16, 12);
    circle(8.8, 16.5, 1);
    circle(15.2, 16.5, 1);
    if (icon === "train") {
      line(8.5, 21, 10.5, 18);
      line(15.5, 21, 13.5, 18);
    }
  } else if (icon === "car") {
    line(5, 12, 7, 7);
    line(7, 7, 17, 7);
    line(17, 7, 19, 12);
    rect(4, 11, 16, 6, 2);
    circle(8, 17, 1.2);
    circle(16, 17, 1.2);
  } else if (icon === "bag") {
    rect(6, 7, 12, 13, 2);
    line(9, 7, 9, 5.5);
    line(15, 7, 15, 5.5);
    line(9, 5.5, 15, 5.5);
    line(9, 11, 15, 11);
  } else if (icon === "mountain") {
    line(4, 19, 10.5, 8);
    line(10.5, 8, 14.5, 14);
    line(14.5, 14, 16.5, 11);
    line(16.5, 11, 20, 19);
    line(4, 19, 20, 19);
  } else if (icon === "star") {
    ctx.beginPath();
    [[12, 3], [14.4, 8.6], [20.4, 9.1], [15.9, 13], [17.3, 18.9], [12, 15.8], [6.7, 18.9], [8.1, 13], [3.6, 9.1], [9.6, 8.6]].forEach(([vx, vy], index) => {
      if (index === 0) ctx.moveTo(px(vx), py(vy));
      else ctx.lineTo(px(vx), py(vy));
    });
    ctx.closePath();
    ctx.stroke();
  } else {
    line(12, 5, 12, 19);
    line(5, 12, 19, 12);
  }
  ctx.restore();
}

function travelAccent(index) {
  return ["#207568", "#ec7e7d", "#d6a642", "#5f8f7b"][index % 4];
}

function colorWithAlpha(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function drawCanvasIcon(ctx, icon, x, y, color, image, size = 34) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = "rgba(255,249,232,0.97)";
  ctx.lineWidth = 3;
  roundRect(ctx, x, y, size, size, Math.max(8, size * 0.32), true, true);
  if (image && iconAtlas[icon]) {
    const cellW = image.width / 4;
    const cellH = image.height / 3;
    const source = iconAtlas[icon];
    const inset = size * 0.18;
    ctx.drawImage(image, source.col * cellW, source.row * cellH, cellW, cellH, x + inset, y + inset, size - inset * 2, size - inset * 2);
  } else {
    ctx.fillStyle = color;
    ctx.font = `800 ${size * 0.58}px sans-serif`;
    ctx.fillText("★", x + size * 0.29, y + size * 0.7);
  }
  ctx.restore();
}

async function drawTravelHeaderAsset(ctx, width, padding) {
  try {
    const image = await loadImage(getHeaderImageSrc());
    ctx.save();
    ctx.globalAlpha = 0.78;
    roundRect(ctx, padding - 12, padding - 34, width - padding * 2 + 24, 212, 22, false);
    ctx.clip();
    ctx.drawImage(image, padding - 12, padding - 34, width - padding * 2 + 24, 212);
    ctx.globalAlpha = 0.74;
    const gradient = ctx.createLinearGradient(padding - 12, 0, width - padding, 0);
    gradient.addColorStop(0, "#f3fbf7");
    gradient.addColorStop(0.42, "rgba(243,251,247,0.78)");
    gradient.addColorStop(1, "rgba(243,251,247,0.08)");
    ctx.fillStyle = gradient;
    ctx.fillRect(padding - 12, padding - 34, width - padding * 2 + 24, 212);
    ctx.restore();
  } catch {
    drawTravelHeaderFallback(ctx, width, padding);
  }
}

function drawTravelHeaderFallback(ctx, width, padding) {
  const x = padding - 12;
  const y = padding - 34;
  const w = width - padding * 2 + 24;
  const h = 212;

  ctx.save();
  roundRect(ctx, x, y, w, h, 22, false);
  ctx.clip();

  const bg = ctx.createLinearGradient(x, y, x + w, y + h);
  bg.addColorStop(0, "#fff9e8");
  bg.addColorStop(0.55, "#e7f4ef");
  bg.addColorStop(1, "#dbeef2");
  ctx.fillStyle = bg;
  ctx.fillRect(x, y, w, h);

  ctx.globalAlpha = 0.28;
  ctx.strokeStyle = "#207568";
  ctx.lineWidth = 2;
  for (let i = 0; i < 9; i += 1) {
    ctx.beginPath();
    ctx.moveTo(x + 70 + i * 84, y + 30);
    ctx.bezierCurveTo(x + 120 + i * 64, y + 70, x + 52 + i * 92, y + 138, x + 136 + i * 84, y + 188);
    ctx.stroke();
  }

  ctx.globalAlpha = 0.9;
  ctx.fillStyle = "rgba(255,255,255,0.72)";
  roundRect(ctx, x + 48, y + 42, 190, 118, 10, true);
  ctx.strokeStyle = "rgba(31,51,48,0.18)";
  ctx.stroke();

  ctx.fillStyle = "rgba(236,126,125,0.45)";
  roundRect(ctx, x + 78, y + 20, 90, 22, 3, true);
  ctx.fillStyle = "rgba(221,199,125,0.72)";
  roundRect(ctx, x + w - 196, y + 34, 118, 26, 4, true);

  ctx.strokeStyle = "rgba(32,117,104,0.32)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(x + w - 122, y + 132, 44, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

function drawTravelExportDecorations(ctx, width, height, padding) {
  ctx.save();
  ctx.globalAlpha = 0.36;
  ctx.fillStyle = "#ec7e7d";
  roundRect(ctx, width - padding - 158, padding - 42, 118, 28, 5, true);
  ctx.fillStyle = "#ddc77d";
  roundRect(ctx, width - padding - 242, padding + 132, 146, 28, 5, true);

  ctx.globalAlpha = 0.52;
  ctx.strokeStyle = "#207568";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(width - padding - 74, padding + 120, 42, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = 0.24;
  ctx.strokeStyle = "#1f3330";
  ctx.lineWidth = 3;
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(padding + 40 + i * 190, height - 130);
    ctx.bezierCurveTo(padding + 90 + i * 160, height - 176, padding + 170 + i * 140, height - 88, padding + 238 + i * 160, height - 132);
    ctx.stroke();
  }
  ctx.restore();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = resolveCanvasAssetSrc(src);
  });
}

function getHeaderImageSrc() {
  return isImageDataUrl(state.headerImageDataUrl) ? state.headerImageDataUrl : "./assets/figma/hero-landscape.png";
}

function isImageDataUrl(value) {
  return typeof value === "string" && /^data:image\/(?:png|jpe?g|webp|gif);base64,/i.test(value);
}

function resolveCanvasAssetSrc(src) {
  if (!src || !window.FIGMA_ASSET_DATA_URLS) return src;
  const normalized = String(src).replace(/\\/g, "/").replace(/^\.\//, "");
  const figmaPrefix = "assets/figma/";
  if (!normalized.startsWith(figmaPrefix)) return src;
  const fileName = normalized.slice(figmaPrefix.length);
  return window.FIGMA_ASSET_DATA_URLS[fileName] || src;
}

function getTemplateColors() {
  const map = {
    school: { bg: "#fffdf6", text: "#2a2823", line: "#2a2823", card: "#f4ebd8", cardLine: "#d6c7af" },
    pop: { bg: "#fff7fb", text: "#2d2738", line: "#e8558c", card: "#e8f6ff", cardLine: "#91c9e8" },
    chic: { bg: "#f8f7f2", text: "#252525", line: "#76614f", card: "#ffffff", cardLine: "#c9c2b8" },
    travel: { bg: "#f3fbf7", text: "#1f3330", line: "#207568", card: "#fff9e8", cardLine: "#ddc77d" },
  };
  return map[state.template] || map.school;
}

function drawMeta(ctx, label, value, x, y, maxWidth) {
  if (!value) return y;
  ctx.font = "800 27px sans-serif";
  ctx.fillText(label, x, y);
  ctx.font = "30px sans-serif";
  return drawWrappedText(ctx, value, x + 160, y, maxWidth - 160, 36) + 6;
}

function drawNoteSection(ctx, title, body, x, y, width, colors) {
  ctx.fillStyle = colors.text;
  ctx.font = "800 38px sans-serif";
  ctx.fillText(title, x, y);
  y += 28;
  const bodyHeight = Math.max(96, textHeight(ctx, body, width - 48, 32) + 48);
  ctx.fillStyle = colors.card;
  ctx.strokeStyle = colors.cardLine;
  ctx.lineWidth = 2;
  roundRect(ctx, x, y, width, bodyHeight, 18, true, true);
  ctx.fillStyle = colors.text;
  ctx.font = "28px sans-serif";
  drawWrappedText(ctx, body, x + 24, y + 42, width - 48, 34);
  return y + bodyHeight;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const lines = wrapText(ctx, text || "", maxWidth, maxLines);
  lines.forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
  return y + Math.max(1, lines.length) * lineHeight;
}

function textHeight(ctx, text, maxWidth, lineHeight) {
  return wrapText(ctx, text || "", maxWidth).length * lineHeight;
}

function wrapText(ctx, text, maxWidth, maxLines = Infinity) {
  const result = [];
  String(text)
    .split(/\r?\n/)
    .forEach((paragraph) => {
      let line = "";
      Array.from(paragraph).forEach((char) => {
        const next = line + char;
        if (line && ctx.measureText(next).width > maxWidth) {
          result.push(line);
          line = char;
        } else {
          line = next;
        }
      });
      result.push(line);
    });
  if (result.length > maxLines) {
    return [...result.slice(0, maxLines - 1), `${result[maxLines - 1].slice(0, 32)}...`];
  }
  return result;
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  radius = Math.min(radius, Math.abs(width) / 2, Math.abs(height) / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function exportPdf() {
  document.body.classList.add("printing");
  window.print();
  setTimeout(() => document.body.classList.remove("printing"), 500);
}

function exportIcs() {
  const blob = new Blob([buildIcs(state)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  downloadDataUrl(url, `${safeFileName(state.title)}.ics`);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showStatus(ja.exported);
}

function buildIcs(schedule) {
  const events = schedule.items
    .filter((item) => schedule.date && item.start && item.end)
    .map((item) => {
      const description = [schedule.title, item.memo && `${ja.memo}: ${item.memo}`, item.transport && `${ja.move}: ${item.transport}`, item.url && `URL: ${item.url}`].filter(Boolean).join("\\n");
      return [
        "BEGIN:VEVENT",
        `UID:${item.id}@holiday-itinerary.local`,
        `DTSTAMP:${toIcsDateTime(new Date())}`,
        `DTSTART:${toIcsLocalDateTime(schedule.date, item.start)}`,
        `DTEND:${toIcsLocalDateTime(schedule.date, item.end)}`,
        `SUMMARY:${escapeIcs(item.activity || schedule.title)}`,
        `LOCATION:${escapeIcs(item.place || schedule.area || "")}`,
        `DESCRIPTION:${escapeIcs(description)}`,
        "END:VEVENT",
      ].join("\r\n");
    });
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Holiday Itinerary Builder//JP", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", ...events, "END:VCALENDAR"].join("\r\n");
}

function toIcsLocalDateTime(date, time) {
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return `${year}${month}${day}T${hour}${minute}00`;
}

function toIcsDateTime(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeIcs(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

function downloadDataUrl(url, fileName) {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function safeFileName(value) {
  return (value || "itinerary").replace(/[\\/:*?"<>|]/g, "_").trim() || "itinerary";
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric", weekday: "short" }).format(date);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function readHeaderImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Invalid image file"));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const maxSize = 1800;
        const ratio = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * ratio));
        const height = Math.max(1, Math.round(image.height * ratio));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.88));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

document.querySelector("#sampleButton").addEventListener("click", () => {
  state = createSampleState();
  saveState();
  renderAll();
});
document.querySelector("#clearButton").addEventListener("click", () => {
  if (!confirm(ja.resetConfirm)) return;
  state = createBlankState();
  saveState();
  renderAll();
});
document.querySelector("#addItemButton").addEventListener("click", addItem);
document.querySelector("#sortButton").addEventListener("click", sortItems);
headerImageButton.addEventListener("click", () => headerImageInput.click());
headerImageResetButton.addEventListener("click", () => {
  state.headerImageDataUrl = "";
  headerImageInput.value = "";
  saveState();
  renderSheet();
});
headerImageInput.addEventListener("change", async () => {
  const file = headerImageInput.files?.[0];
  if (!file) return;
  try {
    state.headerImageDataUrl = await readHeaderImageFile(file);
    saveState();
    renderSheet();
  } catch (error) {
    console.error(error);
    showStatus("画像の読み込みに失敗しました");
  }
});
document.querySelector("#pngButton").addEventListener("click", () => exportImage("png"));
document.querySelector("#jpegButton").addEventListener("click", () => exportImage("jpeg"));
document.querySelector("#pdfButton").addEventListener("click", exportPdf);
document.querySelector("#icsButton").addEventListener("click", exportIcs);

renderAll();

