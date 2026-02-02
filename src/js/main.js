import { getParkData, parklinks } from "./parkService.mjs";
import { footerTemplate, parkInfoTemplate } from "./template.mjs";
import { setHeaderInfo } from "./setting.mjs";

async function init() {
  const parkData = await getParkData();

  setHeaderInfo(parkData);
  setParkIntro(parkData);
  
  document.querySelector("#park-footer").innerHTML = footerTemplate(parkData);
  document.querySelector(".park-info-links").innerHTML = parklinks(parkData);
  document.querySelector("#park-header").innerHTML = parkInfoTemplate(parkData);

}

init();



function setParkIntro(data) {
  const introSection = document.querySelector(".park-name"); 
  introSection.innerHTML = `<h1>${data.fullName}</h1><p>${data.description}</p>`
}


