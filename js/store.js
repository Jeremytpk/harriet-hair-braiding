// Product display & cart logic
// Displaying Styles with Promo Labels
function displayStyles(style) {
  const promoBadge = style.isPromo ? `<span class="badge">PROMO</span>` : '';
  return `
    <div class="style-card">
      ${promoBadge}
      <img src="${style.imageURL}" alt="${style.name}">
      <h3>${style.name}</h3>
      <p>$${style.price} | ${style.duration} mins</p>
      <button onclick="bookStyle('${style.id}')">Book Now</button>
    </div>
  `;
}
// ...other store logic...
