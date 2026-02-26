// data.js
// ====== Place info (for place-details page) ======
const PLACES_DATA = {

  // Telangana
  "Warangal Fort": {
    category: "Forts",
    video: "videos/warangal.mp4",
    tagline: "Capital of Kakatiya dynasty",
    about: "Famous for stone gateways and medieval architecture.",
    guides: ["Ravi (₹500)", "Suresh (₹700)"],
    hospitals: ["MGM Hospital", "Lifeline Hospital"],
    hotels: [
      { name: "Haritha Kakatiya Hotel", price: 2500 },
      { name: "Hotel Ashoka", price: 1800 },
      { name: "City Grand Hotel", price: 2200 }
    ],
    map: "https://maps.google.com/maps?q=Warangal%20Fort&output=embed",
    reviews: ["Amazing history ⭐⭐⭐⭐⭐", "Very peaceful ⭐⭐⭐⭐"]
  },

  "Charminar": {
    category: "Heritage",
    video: "videos/charminar.mp4",
    tagline: "Icon of Hyderabad",
    about: "Historic monument with Indo-Islamic architecture.",
    guides: ["Ali (₹600)", "Sameer (₹800)"],
    hospitals: ["Care Hospital"],
    map: "https://maps.google.com/maps?q=Charminar&output=embed",
    reviews: ["Crowded but beautiful ⭐⭐⭐⭐"]
  },

  "Golconda Fort": {
    category: "Forts",
    video: "videos/golconda.mp4",
    tagline: "Echoes of Ancient Glory",
    about: "Historic fort famous for acoustics and palaces.",
    guides: ["Imran (₹700)", "Sohail (₹900)"],
    hospitals: ["Apollo Hospital Jubilee Hills"],
    map: "https://maps.google.com/maps?q=Golconda%20Fort&output=embed",
    reviews: ["Amazing architecture ⭐⭐⭐⭐⭐"]
  },

  "Ramappa Temple": {
    category: "Temples",
    video: "videos/ramappa.mp4",
    tagline: "Timeless Kakatiya Architecture",
    about: "UNESCO site known for floating bricks.",
    guides: ["Srinivas (₹600)"],
    hospitals: ["Warangal MGM Hospital"],
    map: "https://maps.google.com/maps?q=Ramappa%20Temple&output=embed",
    reviews: ["Architectural masterpiece ⭐⭐⭐⭐⭐"]
  },

  "Chowmahalla Palace": {
    category: "Heritage",
    video: "videos/chowmahalla.mp4",
    tagline: "Palace of the Nizams",
    about: "Royal palace complex.",
    guides: ["Naveen (₹600)"],
    hospitals: ["Yashoda Hospital"],
    map: "https://maps.google.com/maps?q=Chowmahalla+Palace&output=embed",
    reviews: ["Royal experience ⭐⭐⭐⭐⭐"]
  },

  "Nehru Zoological Park": {
    category: "Wildlife",
    video: "videos/zoo.mp4",
    tagline: "Wildlife in Hyderabad",
    about: "One of the largest zoos in India.",
    guides: ["Ramesh (₹500)"],
    hospitals: ["Osmania General Hospital"],
    map: "https://maps.google.com/maps?q=Nehru%20Zoological%20Park&output=embed",
    reviews: ["Kids will love it ⭐⭐⭐⭐"]
  },

  // Tamil Nadu
  "Meenakshi Temple": {
    category: "Temples",
    video: "videos/meenakshi.mp4",
    tagline: "Temple City of Madurai",
    about: "Famous for gopurams.",
    guides: ["Arun (₹500)"],
    hospitals: ["Apollo Madurai"],
    map: "https://maps.google.com/maps?q=Meenakshi%20Temple&output=embed",
    reviews: ["Colorful & vibrant ⭐⭐⭐⭐"]
  },

  "Mahabalipuram": {
    category: "Heritage",
    video: "videos/mahabalipuram.mp4",
    tagline: "UNESCO Shore Temple Town",
    about: "Ancient rock-cut temples by sea.",
    guides: ["Ramesh (₹500)"],
    hospitals: ["Chengalpattu Medical College"],
    map: "https://maps.google.com/maps?q=Mahabalipuram&output=embed",
    reviews: ["Historic sculptures ⭐⭐⭐⭐⭐"]
  },

  "Vellore Fort": {
    category: "Forts",
    video: "videos/vellore.mp4",
    tagline: "Granite Fort Marvel",
    about: "Historic fort with temple inside.",
    guides: ["Aravind (₹400)"],
    hospitals: ["CMC Vellore"],
    map: "https://maps.google.com/maps?q=Vellore%20Fort&output=embed",
    reviews: ["Unique fort ⭐⭐⭐⭐"]
  },

  // Karnataka
  "Hampi": {
    category: "Heritage",
    video: "videos/hampi.mp4",
    tagline: "Ruins of Vijayanagara Empire",
    about: "UNESCO heritage ruins.",
    guides: ["Raghav (₹800)"],
    hospitals: ["Vijayanagar Hospital"],
    map: "https://maps.google.com/maps?q=Hampi&output=embed",
    reviews: ["Breathtaking ⭐⭐⭐⭐⭐"]
  },

  "Mysore Palace": {
    category: "Heritage",
    video: "videos/mysore.mp4",
    tagline: "Royal Palace",
    about: "Magnificent palace.",
    guides: ["Vinod (₹600)"],
    hospitals: ["KR Hospital Mysore"],
    map: "https://maps.google.com/maps?q=Mysore%20Palace&output=embed",
    reviews: ["Royal experience ⭐⭐⭐⭐⭐"]
  },

  "Badami Caves": {
    category: "Heritage",
    video: "videos/badami.mp4",
    tagline: "Rock Cut Caves",
    about: "Ancient cave temples.",
    guides: ["Mahesh (₹500)"],
    hospitals: ["Badami GH"],
    map: "https://maps.google.com/maps?q=Badami%20Caves&output=embed",
    reviews: ["Historic caves ⭐⭐⭐⭐"]
  },

  "Chitradurga Fort": {
    category: "Forts",
    video: "videos/chitradurga.mp4",
    tagline: "Seven Layered Fort",
    about: "Massive fort on rocky hills.",
    guides: ["Karthik (₹500)"],
    hospitals: ["Chitradurga GH"],
    map: "https://maps.google.com/maps?q=Chitradurga%20Fort&output=embed",
    reviews: ["Adventurous trek ⭐⭐⭐⭐"]
  },

  // Kerala
  "Athirappilly Falls": {
    category: "Nature",
    video: "videos/athirappilly.mp4",
    tagline: "Niagara of India",
    about: "Largest waterfall in Kerala.",
    guides: ["Manoj (₹600)"],
    hospitals: ["Thrissur GH"],
    map: "https://maps.google.com/maps?q=Athirappilly%20Falls&output=embed",
    reviews: ["Breathtaking waterfall ⭐⭐⭐⭐⭐"]
  },

  "Wayanad": {
    category: "Nature",
    video: "videos/wayanad.mp4",
    tagline: "Hill Station Paradise",
    about: "Green hills and wildlife.",
    guides: ["Shyam (₹700)"],
    hospitals: ["Wayanad Medical College"],
    map: "https://maps.google.com/maps?q=Wayanad&output=embed",
    reviews: ["Very peaceful ⭐⭐⭐⭐⭐"]
  },

  "Bekal Fort": {
    category: "Forts",
    video: "videos/bekal.mp4",
    tagline: "Sea Facing Fort",
    about: "Largest fort in Kerala.",
    guides: ["Rahul (₹500)"],
    hospitals: ["Kasaragod District Hospital"],
    map: "https://maps.google.com/maps?q=Bekal%20Fort&output=embed",
    reviews: ["Amazing sea view ⭐⭐⭐⭐⭐"]
  },

  // Andhra Pradesh
  "Tirupati Temple": {
    category: "Temples",
    video: "videos/tirupati.mp4",
    tagline: "Spiritual Capital",
    about: "Most visited temple in India.",
    guides: ["Raghav (₹800)"],
    hospitals: ["SVIMS Hospital"],
    map: "https://maps.google.com/maps?q=Tirupati%20Temple&output=embed",
    reviews: ["Very divine ⭐⭐⭐⭐⭐"]
  },

  "Gandikota Fort": {
    category: "Forts",
    video: "videos/gandikota.mp4",
    tagline: "Grand Canyon of India",
    about: "Spectacular gorge view.",
    guides: ["Vamsi (₹600)"],
    hospitals: ["Kadapa GH"],
    map: "https://maps.google.com/maps?q=Gandikota%20Fort&output=embed",
    reviews: ["Stunning views ⭐⭐⭐⭐⭐"]
  },

  "Araku Valley": {
    category: "Nature",
    video: "videos/araku.mp4",
    tagline: "Hill Station of Andhra",
    about: "Scenic valley with coffee plantations.",
    guides: ["Naresh (₹700)"],
    hospitals: ["Araku CHC"],
    map: "https://maps.google.com/maps?q=Araku%20Valley&output=embed",
    reviews: ["Beautiful scenery ⭐⭐⭐⭐⭐"]
  }

};





function addExtra(place, data){
  if(PLACES_DATA[place]){
    Object.assign(PLACES_DATA[place], data);
  }
}


addExtra("Warangal Fort", {
  nearby:[
  { name:"Hanamkonda – 6 km", image:"images/hanamkonda.jpg"},
   { name: "Kazipet – 10 km",image:"images/kazipet.jpg"},
    { name: "Railway Station – 5 km",image:"images/warangal station.jpg"}
  ],
  food:[
    {name:"Pakodi", image:"images/pakodi.jpg"},
    {name:"Sarvapindi", image:"images/sarvapindi.jpg"},
    {name:"Jonna Rotte", image:"images/jonna rotte.jpg"}
  ],
  shopping:[
    "Warangal Sarees",
    "Stone Carving Shops",
    "Local Handicrafts"
  ],
  transport:{ car:2500, bike:800 }
});

addExtra("Charminar", {
  nearby:[
    { name:"Laad Bazaar – 1 km", image:"images/laad.jpg"},
    { name:"Mecca Masjid – 500 m",image:"images/mecca.jpg"},
    { name:"Salar Jung Museum – 2 km",image:"images/salarjung.jpeg"}
  ],
  food:[
    {name:"Hyderabadi Biryani", image:"images/biryani.jpg"},
    {name:"Haleem", image:"images/haleem.jpg"},
    {name:"Irani Chai", image:"images/irani.jpg"}
  ],
  shopping:[
    "Laad Bazaar Bangles",
    "Pearl Jewellery",
    "Attar Shops"
  ],
  transport:{ car:3000, bike:900 }
});

addExtra("Golconda Fort", {
  nearby:[
    "Qutub Shahi Tombs – 2 km",
    "Film Nagar – 5 km"
  ],
  food:[
    {name:"Kebabs", image:"images/kebab.jpg"},
    {name:"Rumali Roti", image:"images/rumali.jpg"}
  ],
  shopping:[
    "Local Souvenir Stalls"
  ],
  transport:{ car:2800, bike:850 }
});

addExtra("Ramappa Temple", {
  nearby:[
    "Ramappa Lake – 1 km",
    "Mulugu – 20 km"
  ],
  food:[
    {name:"Millet Roti", image:"images/jonna rotte.jpg"},
    {name:"Country Veg Curry", image:"images/curry.jpg"}
  ],
  shopping:[
    "Tribal Handicrafts"
  ],
  transport:{ car:2600, bike:750 }
});





addExtra("Meenakshi Temple", {
  nearby:[
    "Thirumalai Nayakkar Palace – 2 km",
    "Vaigai River – 3 km"
  ],
  food:[
    {name:"Jigarthanda", image:"images/jigarthanda.jpg"},
    {name:"Idli Sambar", image:"images/idli.jpg"}
  ],
  shopping:[
    "Madurai Sungudi Sarees",
    "Temple Jewellery"
  ],
  transport:{ car:2800, bike:900 }
});

addExtra("Brihadeeswarar Temple", {
  nearby:[
    "Saraswathi Mahal – 1 km",
    "Thanjavur Palace – 1.5 km"
  ],
  food:[
    {name:"Thalappakatti Meals", image:"images/meals.jpg"},
    {name:"Filter Coffee", image:"images/coffee.jpg"}
  ],
  shopping:[
    "Bronze Statues",
    "Veena Instruments"
  ],
  transport:{ car:2700, bike:850 }
});


addExtra("Mahabalipuram", {
  nearby: [
    "Shore Temple – 0 km",
    "Pancha Rathas – 1 km"
  ],
  food: [
    { name: "Seafood Fry", image: "images/seafood.jpg" },
    { name: "Coconut Rice", image: "images/coconut-rice.jpg" }
  ],
  shopping: [
    "Stone Sculptures",
    "Shell Jewellery"
  ],
  transport: { car: 2900, bike: 900 }
});

addExtra("Rameswaram Temple", {
  nearby: [
    "Dhanushkodi – 20 km",
    "Agni Theertham – 0 km"
  ],
  food: [
    { name: "Temple Meals", image: "images/meals.jpg" },
    { name: "Filter Coffee", image: "images/coffee.jpg" }
  ],
  shopping: [
    "Conch Items",
    "Religious Souvenirs"
  ],
  transport: { car: 3000, bike: 1000 }
});

addExtra("Kanchipuram Temples", {
  nearby: [
    "Ekambareswarar Temple – 1 km",
    "Kamakshi Temple – 1 km"
  ],
  food: [
    { name: "Curd Rice", image: "images/curd-rice.jpg" },
    { name: "Idli", image: "images/idli.jpg" }
  ],
  shopping: [
    "Kanchipuram Silk Sarees"
  ],
  transport: { car: 2700, bike: 850 }
});

addExtra("Vellore Fort", {
  nearby: [
    "Golden Temple – 5 km",
    "Vellore Museum – 0 km"
  ],
  food: [
    { name: "South Indian Meals", image: "images/meals.jpg" }
  ],
  shopping: [
    "Leather Products"
  ],
  transport: { car: 2600, bike: 800 }
});




addExtra("Hampi", {
  nearby:[
    "Virupaksha Temple – 1 km",
    "Vittala Temple – 3 km"
  ],
  food:[
    {name:"Jolada Rotti", image:"images/jolada.jpg"},
    {name:"Bisi Bele Bath", image:"images/bisi.jpg"}
  ],
  shopping:[
    "Stone Artifacts",
    "Local Handicrafts"
  ],
  transport:{ car:3000, bike:1000 }
});


addExtra("Mysore Palace", {
  nearby: [
    "Chamundi Hills – 13 km",
    "Brindavan Gardens – 21 km"
  ],
  food: [
    { name: "Mysore Pak", image: "images/mysore-pak.jpg" },
    { name: "Bisi Bele Bath", image: "images/bisi.jpg" }
  ],
  shopping: [
    "Silk Sarees",
    "Sandalwood Items"
  ],
  transport: { car: 2800, bike: 900 }
});

addExtra("Badami Caves", {
  nearby: [
    "Agastya Lake – 1 km",
    "Pattadakal – 22 km"
  ],
  food: [
    { name: "North Karnataka Meals", image: "images/meals.jpg" }
  ],
  shopping: [
    "Handmade Crafts"
  ],
  transport: { car: 2600, bike: 850 }
});

addExtra("Belur Temple", {
  nearby: [
    "Halebidu – 16 km"
  ],
  food: [
    { name: "Vegetarian Thali", image: "images/meals.jpg" }
  ],
  shopping: [
    "Stone Carvings"
  ],
  transport: { car: 2700, bike: 900 }
});

addExtra("Halebidu Temple", {
  nearby: [
    "Belur – 16 km"
  ],
  food: [
    { name: "South Indian Meals", image: "images/meals.jpg" }
  ],
  shopping: [
    "Temple Souvenirs"
  ],
  transport: { car: 2700, bike: 900 }
});

addExtra("Chitradurga Fort", {
  nearby: [
    "Murugha Matha – 2 km"
  ],
  food: [
    { name: "Jolada Rotti", image: "images/jolada.jpg" }
  ],
  shopping: [
    "Local Handicrafts"
  ],
  transport: { car: 2600, bike: 850 }
});




addExtra("Padmanabhaswamy Temple", {
  nearby:[
    "Kovalam Beach – 15 km",
    "Varkala Cliff – 40 km"
  ],
  food:[
    {name:"Sadya", image:"images/sadya.jpg"},
    {name:"Appam & Stew", image:"images/appam.jpg"}
  ],
  shopping:[
    "Kasavu Sarees",
    "Spices & Handlooms"
  ],
  transport:{ car:3200, bike:1100 }
});

addExtra("Bekal Fort", {
  nearby: [
    "Bekal Beach – 1 km"
  ],
  food: [
    { name: "Fish Curry", image: "images/fish-curry.jpg" },
    { name: "Appam", image: "images/appam.jpg" }
  ],
  shopping: [
    "Spices",
    "Handlooms"
  ],
  transport: { car: 3000, bike: 1000 }
});

addExtra("Mattancherry Palace", {
  nearby: [
    "Jew Town – 1 km",
    "Fort Kochi – 2 km"
  ],
  food: [
    { name: "Kerala Meals", image: "images/sadya.jpg" }
  ],
  shopping: [
    "Antiques",
    "Spice Shops"
  ],
  transport: { car: 2800, bike: 900 }
});

addExtra("Athirappilly Falls", {
  nearby: [
    "Vazhachal Falls – 5 km"
  ],
  food: [
    { name: "Local Snacks", image: "images/snacks.jpg" }
  ],
  shopping: [
    "Forest Honey"
  ],
  transport: { car: 3000, bike: 1000 }
});

addExtra("Wayanad", {
  nearby: [
    "Edakkal Caves – 25 km",
    "Banasura Dam – 20 km"
  ],
  food: [
    { name: "Malabar Meals", image: "images/meals.jpg" }
  ],
  shopping: [
    "Spices",
    "Coffee"
  ],
  transport: { car: 3200, bike: 1100 }
});

addExtra("Alleppey Backwaters", {
  nearby: [
    "Marari Beach – 11 km"
  ],
  food: [
    { name: "Houseboat Meals", image: "images/meals.jpg" }
  ],
  shopping: [
    "Coir Products"
  ],
  transport: { car: 3500, bike: 1200 }
});




addExtra("Tirupati Temple", {
  nearby:[
    "Sri Vari Museum – 2 km",
    "Chandragiri Fort – 15 km"
  ],
  food:[
    {name:"Laddu Prasadam", image:"images/laddu.jpg"},
    {name:"South Indian Meals", image:"images/south india meals.jpg"}
  ],
  shopping:[
    "Religious Souvenirs",
    "Wooden Toys"
  ],
  transport:{ car:3500, bike:1200 }
});

addExtra("Lepakshi Temple", {
  nearby: [
    "Veerabhadra Temple – 0 km",
    "Nandi Statue – 1 km"
  ],
  food: [
    { name: "Ragi Sangati", image: "images/ragi.jpg" },
    { name: "Vegetable Curry", image: "images/curry.jpg" }
  ],
  shopping: [
    "Stone Sculptures",
    "Handmade Crafts"
  ],
  transport: { car: 2600, bike: 800 }
});

addExtra("Amaravati Stupa", {
  nearby: [
    "Amaravati Museum – 1 km",
    "Krishna River – 3 km"
  ],
  food: [
    { name: "Pulihora", image: "images/pulihora.jpg" },
    { name: "South Indian Meals", image: "images/south india meals.jpg" }
  ],
  shopping: [
    "Buddhist Souvenirs",
    "Local Handicrafts"
  ],
  transport: { car: 2800, bike: 900 }
});

addExtra("Gandikota Fort", {
  nearby: [
    "Pennar Gorge – 1 km",
    "Belum Caves – 60 km"
  ],
  food: [
    { name: "Rayalaseema Meals", image: "images/meals.jpg" },
    { name: "Spicy Chicken Curry", image: "images/chicken.jpg" }
  ],
  shopping: [
    "Local Stone Items"
  ],
  transport: { car: 3000, bike: 1000 }
});

addExtra("Araku Valley", {
  nearby: [
    "Borra Caves – 35 km",
    "Coffee Plantations – 5 km"
  ],
  food: [
    { name: "Bamboo Chicken", image: "images/bamboo-chicken.jpg" },
    { name: "Tribal Meals", image: "images/meals.jpg" }
  ],
  shopping: [
    "Araku Coffee",
    "Tribal Handicrafts"
  ],
  transport: { car: 3200, bike: 1100 }
});

addExtra("Undavalli Caves", {
  nearby: [
    "Krishna River – 1 km",
    "Prakasam Barrage – 6 km"
  ],
  food: [
    { name: "Pulihora", image: "images/pulihora.jpg" },
    { name: "Idli Sambar", image: "images/idli.jpg" }
  ],
  shopping: [
    "Local Handicrafts"
  ],
  transport: { car: 2600, bike: 800 }
});



// ====== Hotels data (for hotels.html) ======
window.HOTELS_DATA = {
  // hotels by place name
  "Warangal Fort": [
    { name: "Hotel City Grand", price: 2500, image: "images/hotel1.jpeg" },
    { name: "Haritha Kakatiya", price: 1800, image: "images/hotel13.jpg" },
    { name: "Hotel Ashoka", price: 1200, image: "images/hotel3.jpeg" }
  ],
  "Charminar": [
    { name: "Hotel Pearl", price: 2200, image: "images/hotel5.jpg" },
    { name: "Taj Deccan", price: 4500, image: "images/hotel4.jpg" }
  ],
  "Golconda Fort": [
    { name: "Fort View Inn", price: 2000, image: "images/hotel5.jpg" }
  ],
  "Hampi": [
    { name: "Hampi Heritage Resort", price: 3500, image: "images/hotel6.jpg" }
  ],
  "Padmanabhaswamy Temple": [
    { name: "Hilton Garden Inn", price: 4200, image: "images/hotel7.jpg" },
    { name: "Keys Select", price: 2800, image: "images/hotel8.jpg" }
  ],
  "Meenakshi Temple": [
    { name: "Heritage Madurai", price: 3000, image: "images/hotel9.jpg" }
  ],
  "Brihadeeswarar Temple": [
    { name: "Sangam Hotel", price: 2500, image: "images/hotel10.jpg" }
  ],
  "Tirupati Temple": [
    { name: "Marasa Sarovar", price: 4000, image: "images/hotel11.jpg" },
    { name: "Pai Viceroy", price: 2200, image: "images/hotel12.jpg" }
  ]
};

// ====== State + place budget data (for plan.html) ======
const STATE_DATA = {
  telangana: {
    places: {
      "Charminar": {
        image: "images/charminar.jpg",
        hotelCost: 1500,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Warangal Fort": {
        image: "images/warangal.jpg",
        hotelCost: 1300,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      },
      "Golconda Fort": {
        image: "images/golconda.jpeg",
        hotelCost: 1400,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Ramappa Temple": {
        image: "images/ramappa.jpeg",
        hotelCost: 1200,
        guideCost: 300,
        foodCost: 300,
        localTravel: 200
      },
      "Chowmahalla Palace": {
        image: "images/chowmahalla.jpg",
        hotelCost: 1600,
        guideCost: 500,
        foodCost: 450,
        localTravel: 300
      },
      "Thousand Pillar Temple": {
        image: "images/thousand-pillar.jpg",
        hotelCost: 1100,
        guideCost: 300,
        foodCost: 300,
        localTravel: 200
      }
    }
  },

  tamilnadu: {
    places: {
      "Meenakshi Temple": {
        image: "images/meenakshi.jpg",
        hotelCost: 1600,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Brihadeeswarar Temple": {
        image: "images/brihadeeswarar.jpg",
        hotelCost: 1800,
        guideCost: 600,
        foodCost: 450,
        localTravel: 350
      },
      "Mahabalipuram": {
        image: "images/mahabalipuram.webp",
        hotelCost: 1700,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Rameswaram Temple": {
        image: "images/rameswaram.jpg",
        hotelCost: 1500,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      },
      "Kanchipuram Temples": {
        image: "images/kanchipuram.jpg",
        hotelCost: 1400,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      },
      "Vellore Fort": {
        image: "images/vellore.jpg",
        hotelCost: 1300,
        guideCost: 300,
        foodCost: 300,
        localTravel: 200
      }
    }
  },

  kerala: {
    places: {
      "Padmanabhaswamy Temple": {
        image: "images/padmanabha.jpg",
        hotelCost: 2000,
        guideCost: 600,
        foodCost: 450,
        localTravel: 350
      },
      "Bekal Fort": {
        image: "images/bekal.jpeg",
        hotelCost: 1500,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      },
      "Mattancherry Palace": {
        image: "images/mattancherry.jpeg",
        hotelCost: 1600,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Athirappilly Falls": {
        image: "images/athirappilly.jpg",
        hotelCost: 1700,
        guideCost: 400,
        foodCost: 350,
        localTravel: 300
      },
      "Wayanad": {
        image: "images/wayanad.jpg",
        hotelCost: 1800,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Alleppey Backwaters": {
        image: "images/alleppey.jpg",
        hotelCost: 2200,
        guideCost: 600,
        foodCost: 450,
        localTravel: 350
      }
    }
  },

  karnataka: {
    places: {
      "Hampi": {
        image: "images/hampi.jpg",
        hotelCost: 1800,
        guideCost: 600,
        foodCost: 450,
        localTravel: 350
      },
      "Mysore Palace": {
        image: "images/mysore.jpg",
        hotelCost: 2000,
        guideCost: 600,
        foodCost: 500,
        localTravel: 350
      },
      "Badami Caves": {
        image: "images/Badami.jpg",
        hotelCost: 1500,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      },
      "Belur Temple": {
        image: "images/belur.jpg",
        hotelCost: 1600,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Halebidu Temple": {
        image: "images/halebidu.jpg",
        hotelCost: 1600,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Chitradurga Fort": {
        image: "images/chitradurga.jpg",
        hotelCost: 1400,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      }
    }
  },

  andhrapradesh: {
    places: {
      "Tirupati Temple": {
        image: "images/tirupati.jpg",
        hotelCost: 2200,
        guideCost: 700,
        foodCost: 500,
        localTravel: 400
      },
      "Lepakshi Temple": {
        image: "images/lepakshi.jpg",
        hotelCost: 1500,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      },
      "Amaravati Stupa": {
        image: "images/amaravati.jpg",
        hotelCost: 1600,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Gandikota Fort": {
        image: "images/gandikota.jpg",
        hotelCost: 1700,
        guideCost: 500,
        foodCost: 400,
        localTravel: 300
      },
      "Araku Valley": {
        image: "images/araku.jpg",
        hotelCost: 1800,
        guideCost: 500,
        foodCost: 450,
        localTravel: 350
      },
      "Undavalli Caves": {
        image: "images/undavalli.jpg",
        hotelCost: 1400,
        guideCost: 400,
        foodCost: 350,
        localTravel: 250
      }
    }
  }
};
const CULTURE_DATA = [
  {
    state: "Telangana",
    image: "images/telangana-culture.jpeg",
    description: "Telangana culture is rich with folk dances like Perini and Lambadi, traditional festivals such as Bathukamma and Bonalu, vibrant handloom textiles, unique dialect, historic forts, temples, and a strong rural-artistic heritage deeply rooted in the Deccan region."
  },
  {
    state: "Andhra Pradesh",
    image: "images/andhra-culture.jpeg",
    description: "Andhra Pradesh is known for classical Kuchipudi dance, colorful festivals, temple architecture, Carnatic music, traditional arts, coastal lifestyle, and a cuisine rich in spices, rice, and cultural rituals passed through generations."
  },
  {
    state: "Tamil Nadu",
    image: "images/tamilnadu-culture.jpeg",
    description: "Tamil Nadu culture reflects ancient Dravidian traditions, Bharatanatyam dance, grand temples, classical Tamil literature, Pongal festival, traditional silk sarees, and strong spiritual and artistic values."
  },
  {
    state: "Kerala",
    image: "images/kerala-culture.jpeg",
    description: "Kerala culture is a blend of Ayurveda, Kathakali and Mohiniyattam dances, boat races, Onam festival, scenic backwaters, traditional architecture, and a peaceful lifestyle rooted in nature."
  },
  {
    state: "Karnataka",
    image: "images/karnataka-culture.jpeg",
    description: "Karnataka showcases diverse traditions including Yakshagana, Mysore Dasara, ancient temples, royal heritage, classical music, rich literature, and a mix of coastal and plateau cultural influences."
  }
];
// ===============================
// ADD TRAVEL TIPS FOR ALL PLACES
// ===============================

// Telangana
addExtra("Warangal Fort", {
  tips: [
    "Visit early morning for less crowd",
    "Carry water bottle",
    "Hire local guide for history",
    "Best photography at sunset"
  ]
});

addExtra("Charminar", {
  tips: [
    "Visit in the evening or night",
    "Beware of crowds",
    "Explore Laad Bazaar nearby",
    "Keep belongings safe"
  ]
});

addExtra("Golconda Fort", {
  tips: [
    "Wear comfortable footwear",
    "Attend evening light & sound show",
    "Carry water",
    "Best views from the top at sunset"
  ]
});

addExtra("Ramappa Temple", {
  tips: [
    "Visit early morning for peace",
    "Respect temple rules",
    "Combine visit with Ramappa Lake",
    "Carry sun protection"
  ]
});

addExtra("Chowmahalla Palace", {
  tips: [
    "Allocate at least 1–2 hours",
    "Photography allowed in most areas",
    "Visit museums inside palace",
    "Avoid peak afternoon hours"
  ]
});

addExtra("Nehru Zoological Park", {
  tips: [
    "Visit in the morning",
    "Use battery vehicle inside zoo",
    "Carry cap and water",
    "Ideal for families and kids"
  ]
});

// Tamil Nadu
addExtra("Meenakshi Temple", {
  tips: [
    "Dress modestly",
    "Visit early morning or late night",
    "Hire official temple guide",
    "Beware of crowd during festivals"
  ]
});

addExtra("Brihadeeswarar Temple", {
  tips: [
    "Visit during morning hours",
    "Observe architectural details",
    "Carry water bottle",
    "Maintain silence inside temple"
  ]
});

// Karnataka
addExtra("Hampi", {
  tips: [
    "Plan for at least 2 days",
    "Rent a bicycle or scooter",
    "Wear comfortable shoes",
    "Carry sunscreen and hat"
  ]
});

// Kerala
addExtra("Padmanabhaswamy Temple", {
  tips: [
    "Strict dress code compulsory",
    "Men must wear dhoti",
    "No photography inside",
    "Visit early morning"
  ]
});

// Andhra Pradesh
addExtra("Tirupati Temple", {
  tips: [
    "Book darshan tickets in advance",
    "Follow temple dress code",
    "Avoid weekends if possible",
    "Carry minimal belongings"
  ]
});