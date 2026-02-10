
const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

export async function getParkData() {
  let data = {};
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  const response = await fetch(baseUrl + "parks?parkCode=yell", options);
  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data.data[0];
}

export async function getParkAlerts(parkCode) {
  let data = {};
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  const response = await fetch(baseUrl + "alerts?parkCode=" + parkCode, options);
  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data.data;
}

export function parklinks(parkData) {
  const parkInfoLinks = [
    {
      name: "Current Conditions ›",
      link: "conditions.html",
      image: parkData.images[2].url,
      description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
      name: "Fees and Passes ›",
      link: "fees.html",
      image: parkData.images[3].url,
      description: "Learn about the fees and passes that are available."
    },
    {
      name: "Visitor Centers ›",
      link: "visitor_centers.html",
      image: parkData.images[9].url,
      description: "Learn about the visitor centers in the park."
    }
  ];

  return `<section class="info"> 
    <img src="${parkInfoLinks[0].image}" alt="Current Conditions Image"/>
    <a href="${parkInfoLinks[0].link}">${parkInfoLinks[0].name}</a>
    <p>${parkInfoLinks[0].description}</p>
  </section>
  <section class="info"> 
    <img src="${parkInfoLinks[1].image}" alt="Fees and Passes Image"/>
    <a href="${parkInfoLinks[1].link}">${parkInfoLinks[1].name}</a>
    <p>${parkInfoLinks[1].description}</p>
  </section>
  <section class="info"> 
    <img src="${parkInfoLinks[2].image}" alt="Visitor Centers Image"/>
    <a href="${parkInfoLinks[2].link}">${parkInfoLinks[2].name}</a>
    <p>${parkInfoLinks[2].description}</p>
  </section>`;
}