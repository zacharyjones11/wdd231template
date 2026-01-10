import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// 1. Update the disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// 2. Update the page title
document.querySelector("title").innerHTML = parkData.fullName;

// 3. Update the hero image
document.querySelector(".hero-banner img").src = parkData.images[0].url;
document.querySelector(".hero-banner img").alt = parkData.images[0].altText;

// 4. Template function for park info (name, designation, states)
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.fullName}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

// Use the template to update the hero content
document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);
