
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

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
      return mailing;
  };

  function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find((phone) => phone.type === "Voice");
      return voice ? voice.phoneNumber : "Phone number not available";
  };

export function parkInfoTemplate(info) {
  return `<div class="hero-banner">
          <img src="${info.images[0].url}" alt="${info.images[0].alttext}" /> 
          <div class="hero-banner__content"> 
          <a href="#" class="hero-banner__title">${info.fullName}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>
  </div></div>`;
  // <div class="hero-banner">
  //         <img src="" alt="" />
  //         <div class="hero-banner__content">
  //           <a href="#" class="hero-banner__title">Yellowstone</a>
  //           <p class="hero-banner__subtitle">
  //             <span>National Park</span>
  //             <span>ID, MT, WY</span>
  //           </p>
  //         </div>
  //       </div>
}


