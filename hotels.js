const params = new URLSearchParams(window.location.search);
const placeName = params.get("place");

const title = document.getElementById("hotelTitle");
const container = document.getElementById("hotelsContainer");

// safety
if (!placeName || !PLACES_DATA[placeName]) {
  title.innerText = "Hotels not found";
  return;
}

title.innerText = `🏨 Hotels near ${placeName}`;

// 🔴 VERY IMPORTANT → clear old content
container.innerHTML = "";

// get correct hotels
const hotels = PLACES_DATA[placeName].hotels;

// render
hotels.forEach(hotel => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card shadow h-100">
        <img src="${hotel.image}" class="card-img-top" height="200">
        <div class="card-body text-center">
          <h5>${hotel.name}</h5>
          <p>₹${hotel.price} / night</p>
          <a href="hotel-details.html?name=${encodeURIComponent(hotel.name)}&price=${hotel.price}"
             class="btn btn-primary">
             View Details & Book
          </a>
        </div>
      </div>
    </div>
  `;
});
