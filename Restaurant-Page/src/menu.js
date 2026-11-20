export default function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("tab-page", "menu");

  const heading = document.createElement("h2");
  heading.textContent = "Our Menu";

  const menuList = document.createElement("ul");

  const items = [
    "Pancakes — $8",
    "French Toast — $9",
    "Omelette — $10",
    "Breakfast Burrito — $11",
    "Fresh Fruit Bowl — $7",
    "Coffee — $3",
  ];

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });

  menu.appendChild(heading);
  menu.appendChild(menuList);

  document.querySelector("#content").appendChild(menu);
}