
// Helper functions
function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phoneNumbers) {
  const voice = phoneNumbers.find((phone) => phone.type === "Voice");
  return voice ? voice.phoneNumber : "Phone number not available";
}

// Template functions
export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="footer-content">
    <h2>Contact Info</h2>
    <div class="footer-section">
      <h3>Mailing Address:</h3>
      <p>${mailing.line1}<br>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
    </div>
    <div class="footer-section">
      <h3>Phone:</h3>
      <p>${voice}</p>
    </div>
  </section>`;
}

export function parkInfoTemplate(info) {
  return `<img src="${info.images[0].url}" alt="${info.images[0].altText}" /> 
    <div class="hero-banner__content"> 
      <a href="#" class="hero-banner__title">${info.fullName}</a>
      <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
      </p>
    </div>`;
}

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="/images/sprite.symbol.svg#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}