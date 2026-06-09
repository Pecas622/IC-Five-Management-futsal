const PLAYERS = [
  {
    name:"Mateus Oliveira",
    position:"Pivot",
    club:"Barça Futsal",
    image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
  },
  {
    name:"Aleksander Nowak",
    position:"Ala",
    club:"Sporting CP",
    image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
  },
  {
    name:"Carlos Medina",
    position:"Portero",
    club:"Inter Movistar",
    image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
  }
];

const playersGrid = document.getElementById("playersGrid");

PLAYERS.forEach(player => {

  const card = document.createElement("div");

  card.classList.add("player-card");

  card.innerHTML = `
  
    <img src="${player.image}" alt="${player.name}">

    <div class="player-content">

      <h3>${player.name}</h3>

      <p>${player.position}</p>

      <p>${player.club}</p>

    </div>
  
  `;

  playersGrid.appendChild(card);

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){

      counter.innerText = `${Math.ceil(count + increment)}`;

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});