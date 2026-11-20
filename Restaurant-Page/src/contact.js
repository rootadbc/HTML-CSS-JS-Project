export default function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("tab-page", "contact");

  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";

  const address = document.createElement("p");
  address.textContent = "123 Breakfast Street, Earth, Universe";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +123 000 000 0000";

  const email = document.createElement("p");
  email.textContent = "Email: restaurant@breakfastbar.com";

  contact.appendChild(heading);
  contact.appendChild(address);
  contact.appendChild(phone);
  contact.appendChild(email);

  document.querySelector("#content").appendChild(contact);
}