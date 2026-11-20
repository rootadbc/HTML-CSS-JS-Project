import "./styles.css";

import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("site-footer");

  const text = document.createElement("p");
  text.textContent = "Created by rootadbc";

  const links = document.createElement("div");
  links.classList.add("social-links");

  const socials = [
    { name: "GitHub", url: "https://github.com/rootadbc" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rootadbc" },
    { name: "X", url: "https://x.com/rootadbc" },
    { name: "Instagram", url: "https://www.instagram.com/rootadbc" },
  ];

  socials.forEach((social) => {
    const link = document.createElement("a");
    link.href = social.url;
    link.textContent = social.name;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    links.appendChild(link);
  });

  footer.appendChild(text);
  footer.appendChild(links);

  return footer;
}

function switchTab(tabFunction) {
  document.querySelector("#content").innerHTML = "";
  tabFunction();
}

// Show the Home tab when the page first loads
createHome();

document.querySelector("#home").addEventListener("click", () => {
  switchTab(createHome);
});

document.querySelector("#menu").addEventListener("click", () => {
  switchTab(createMenu);
});

document.querySelector("#contact").addEventListener("click", () => {
  switchTab(createContact);
});

// Add the footer once, outside #content, so it stays on every tab
document.body.appendChild(createFooter());