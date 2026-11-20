export default function createHome() {
  const home = document.createElement("div");
  home.classList.add("tab-page", "home");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Breakfast Bar";

  const text = document.createElement("p");
  text.textContent =
    "Fresh breakfast, warm coffee, and a cozy place to start your day.";

  const image = document.createElement("img");
  image.src =
  "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/fb9f0a29-7d88-5300-9960-4a9cb8156b74/7da5f5dc-e8dd-52de-a1a7-c2d22f6563c3.jpg";
  image.alt = "Breakfast food on a table";

  home.appendChild(heading);
  home.appendChild(text);
  home.appendChild(image);

  // The module appends itself to #content
  document.querySelector("#content").appendChild(home);
}