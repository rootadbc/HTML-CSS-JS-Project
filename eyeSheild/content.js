// Words that make us flag a video
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

// Change this to "hide" if you want AI videos removed instead
const MODE = "flag";



// Check whether text contains an AI keyword
function containsAiKeyword(text) {
  if (!text) return false;

  const lowerText = text.toLowerCase();

  return AI_KEYWORDS.some(function (keyword) {
    return lowerText.includes(keyword);
  });
}

// Find the title text inside one video card
function getVideoTitle(videoCard) {
  const titleElement =
    videoCard.querySelector("#video-title") ||
    videoCard.querySelector("a#video-title-link") ||
    videoCard.querySelector("h3");

  return titleElement ? titleElement.textContent : "";
}

// Find description text if YouTube exposes it in the card
function getVideoDescription(videoCard) {
  const descriptionElement =
    videoCard.querySelector(".yt-spec-ellipsized-text") ||
    videoCard.querySelector("#description-text") ||
    videoCard.querySelector("#details");

  return descriptionElement ? descriptionElement.textContent : "";
}

// Flag one video
function flagVideo(videoCard) {
  if (videoCard.dataset.humansignalChecked === "true") {
    return;
  }

  videoCard.dataset.humansignalChecked = "true";

  const title = getVideoTitle(videoCard);
  const description = getVideoDescription(videoCard);

  const isAiVideo =
    containsAiKeyword(title) || containsAiKeyword(description);

  if (!isAiVideo) {
    return;
  }

  console.log("HumanSignal flagged:", title);

  if (MODE === "hide") {
    videoCard.classList.add("humansignal-hidden");
    return;
  }

  // Add red border
  videoCard.classList.add("humansignal-ai-flag");

  // Add AI label
  const label = document.createElement("div");
  label.textContent = "AI CONTENT";
  label.className = "humansignal-label";
  videoCard.appendChild(label);

  // Replace thumbnail image with GIF
  const thumbnailImage =
    videoCard.querySelector("img.ytCinematicContainerViewModelBackgroundImage") ||
    videoCard.querySelector("img");

  if (thumbnailImage) {
    thumbnailImage.src = FLAG_GIF_URL;
    thumbnailImage.srcset = "";
  }
}

// Check every video currently on the page
function scanVideos() {
  const videoCards = document.querySelectorAll(
    "ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer"
  );

  videoCards.forEach(flagVideo);
}

// Watch for new videos loaded while scrolling
const observer = new MutationObserver(function () {
  scanVideos();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Run once when the page first loads
scanVideos();