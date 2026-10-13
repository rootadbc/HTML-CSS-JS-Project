// Default filters installed with the extension
/*
const DEFAULT_KEYWORDS = [
  "ai",
  "artificial intelligence",
  "chatgpt",
  "openai",
  "deepfake",
  "ai-generated",
  "ai generated"
];

const DEFAULT_SETTINGS = {
  mode: "flag",
  selectedGif: "img/flag.png",
  keywords: DEFAULT_KEYWORDS
};

*/


const DEFAULT_SETTINGS = {
  mode: "flag",
  selectedGif: "img/flag.png",
  keywords: [
    "ai",
    "artificial intelligence",
    "chatgpt",
    "openai",
    "deepfake",
    "ai-generated",
    "ai generated"
  ]
};

const keywordList = document.getElementById("keywordList");
const newKeywordInput = document.getElementById("newKeyword");
const addKeywordButton = document.getElementById("addKeywordButton");
const gifSelector = document.getElementById("gifSelector");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const statusText = document.getElementById("status");

// Load saved settings when popup opens
async function loadSettings() {
  const result = await chrome.storage.local.get("humanSignalSettings");

  const settings = result.humanSignalSettings || DEFAULT_SETTINGS;

  // Set selected mode
  const modeInputs = document.querySelectorAll('input[name="mode"]');

  modeInputs.forEach(function (input) {
    input.checked = input.value === settings.mode;
  });

  // Set selected GIF
  gifSelector.value = settings.selectedGif;

  // Show keywords
  renderKeywords(settings.keywords);
}

// Save settings
async function saveSettings(settings) {
  await chrome.storage.local.set({
    humanSignalSettings: settings
  });

  statusText.textContent = "Saved!";
}

// Show keyword list in popup
function renderKeywords(keywords) {
  keywordList.innerHTML = "";

  keywords.forEach(function (keyword, index) {
    const item = document.createElement("div");
    item.className = "keyword-item";

    const text = document.createElement("span");
    text.textContent = keyword;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.className = "remove-keyword";

    removeButton.addEventListener("click", async function () {
      const result = await chrome.storage.local.get("humanSignalSettings");
      const settings = result.humanSignalSettings || DEFAULT_SETTINGS;

      settings.keywords.splice(index, 1);

      await saveSettings(settings);
      renderKeywords(settings.keywords);
    });

    item.appendChild(text);
    item.appendChild(removeButton);
    keywordList.appendChild(item);
  });
}

// Add a new keyword
addKeywordButton.addEventListener("click", async function () {
  const keyword = newKeywordInput.value.trim().toLowerCase();

  if (!keyword) return;

  const result = await chrome.storage.local.get("humanSignalSettings");
  const settings = result.humanSignalSettings || DEFAULT_SETTINGS;

  if (!settings.keywords.includes(keyword)) {
    settings.keywords.push(keyword);
  }

  newKeywordInput.value = "";

  await saveSettings(settings);
  renderKeywords(settings.keywords);
});

// Change filter mode
document.querySelectorAll('input[name="mode"]').forEach(function (input) {
  input.addEventListener("change", async function () {
    const result = await chrome.storage.local.get("humanSignalSettings");
    const settings = result.humanSignalSettings || DEFAULT_SETTINGS;

    settings.mode = input.value;

    await saveSettings(settings);
  });
});

// Change selected GIF
gifSelector.addEventListener("change", async function () {
  const result = await chrome.storage.local.get("humanSignalSettings");
  const settings = result.humanSignalSettings || DEFAULT_SETTINGS;

  settings.selectedGif = gifSelector.value;

  await saveSettings(settings);
});

// Search YouTube
searchButton.addEventListener("click", function () {
  const query = searchInput.value.trim();

  if (!query) return;

  const youtubeSearchUrl =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(query);

  chrome.tabs.create({ url: youtubeSearchUrl });
});

loadSettings();