import { createFooter } from "./home-page.js"

function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.className = "menu-page";

    createHero(content);
    createContactForm(content);
    createFooter(content);
}

function createHero(container) {
    const heroContainer = document.createElement("div");
    heroContainer.id = "contactHero";
    
    const overlay = document.createElement("div");
    overlay.id = "overlay";

    const heroHeader = document.createElement("h1");
    const heroText = document.createElement("p");

    heroHeader.textContent = "Contact Us";
    heroText.textContent = "We’d love to hear from you!";

    overlay.append(heroHeader, heroText);
    heroContainer.appendChild(overlay);
    container.appendChild(heroContainer);
}

function createContactForm(container) {
  const contactDetails = document.createElement("div");
  contactDetails.id = "contact-details";

  const form = document.createElement("form");
  form.id = "contact-form";
  form.action = "#";
  form.method = "post";

  const heading = document.createElement("h2");
  heading.textContent = "Send Us A Message";
  form.appendChild(heading);

  function createField(tag, type, id, name, placeholder, required = true) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = placeholder;

    let input;
    if (tag === "textarea") {
      input = document.createElement("textarea");
      input.rows = 6;
    } else {
      input = document.createElement("input");
      input.type = type;
    }

    input.id = id;
    input.name = name;
    input.placeholder = placeholder;
    if (required) input.required = true;

    form.append(label, input);
  }

  createField("input", "text", "formName", "formName", "Name");
  createField("input", "email", "email", "email", "Email");
  createField("input", "text", "subject", "subject", "Subject");
  createField("textarea", null, "message", "message", "Message");

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Send Message";
  form.appendChild(button);

  contactDetails.appendChild(form);
  container.appendChild(contactDetails);
}

export { loadContact };