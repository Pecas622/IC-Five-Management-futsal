const PLAYERS=[
  {id:1,name:"Mateus Oliveira",age:26,position:"Pivot",club:"Barça Futsal",nationality:"🇧🇷 Brasil",foot:"Derecho",available:true,eu:true,image:"https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=400&h=500&fit=crop&crop=face",bio:"Pivot explosivo con capacidad goleadora de élite y fuerte lectura posicional. Formado en el sistema de academias de Brasil antes de dejar huella en el futsal europeo.",video:"https://www.youtube.com/embed/dQw4w9WgXcQ",stats:{goals:34,assists:18,matches:42,rating:8.7},career:["Joinville EC (2018–2020)","Cascavel Futsal (2020–2022)","Barça Futsal (2022–presente)"],strengths:["Juego de retención","Pase de enlace","Definición clínica","Duelos aéreos"],achievements:["Campeón Liga Nacional 2023","Goleador LNFS 2023–24","Selección Nacional Brasileña"],testimonial:"IC Five abrió puertas que nunca creí posibles. Venir a Europa era un sueño — ellos lo hicieron realidad."},
  {id:2,name:"Aleksander Nowak",age:24,position:"Ala",club:"Sporting CP Futsal",nationality:"🇵🇱 Polonia",foot:"Izquierdo",available:false,eu:true,image:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=500&fit=crop&crop=face",bio:"Ala versátil con velocidad explosiva y regate técnico. Un ala moderno que aporta tanto en fase ofensiva como defensiva con alta intensidad.",video:"https://www.youtube.com/embed/dQw4w9WgXcQ",stats:{goals:22,assists:31,matches:38,rating:8.4},career:["Rekord Bielsko-Biała (2019–2021)","Kairat Almaty (2021–2023)","Sporting CP (2023–presente)"],strengths:["Transiciones veloces","1vs1","Presión alta","Tiros libres"],achievements:["Finalista UEFA Futsal Champions League 2024","Capitán Selección Polonia"],testimonial:"El profesionalismo de IC Five es de otro nivel. Gestionan todo para que yo me enfoque en el futsal."},
  {id:3,name:"Carlos Medina",age:29,position:"Portero",club:"Inter Movistar",nationality:"🇨🇴 Colombia",foot:"Derecho",available:false,eu:false,image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",bio:"Portero de clase mundial con reflejos extraordinarios y presencia dominante. Reconocido por su lectura del juego y distribución que lanza contraataques letales.",video:"https://www.youtube.com/embed/dQw4w9WgXcQ",stats:{goals:8,assists:14,matches:44,rating:9.1},career:["Atlético Bucaramanga (2015–2018)","Magnus Futsal (2018–2021)","Inter Movistar (2021–presente)"],strengths:["Paradas de reflejos","Barrido","Distribución","Liderazgo"],achievements:["Campeón LNFS 2022, 2023","Mejor Portero LNFS 2023","Selección Nacional Colombia"],testimonial:"IC Five entendió mis ambiciones y encontró el club perfecto para mi etapa de carrera."},
  {id:4,name:"Diogo Ferreira",age:22,position:"Poste",club:"Benfica Futsal",nationality:"🇵🇹 Portugal",foot:"Derecho",available:true,eu:true,image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",bio:"Joven figura con visión increíble y lectura defensiva. Uno de los postes jóvenes más prometedores del futsal europeo en este momento.",video:"https://www.youtube.com/embed/dQw4w9WgXcQ",stats:{goals:12,assists:26,matches:31,rating:8.2},career:["Academia Benfica (2019–2022)","Benfica Futsal (2022–presente)"],strengths:["Recuperación de balón","Inteligencia posicional","Largo alcance","Liderazgo"],achievements:["Campeón Liga Portuguesa 2024","Selección Sub-23"],testimonial:"Guiaron cada paso de mi debut profesional. Socios de verdad, no solo agentes."},
  {id:5,name:"Ivan Petrov",age:27,position:"Ala",club:"KPRF Moscú",nationality:"🇷🇸 Serbia",foot:"Derecho",available:true,eu:true,image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",bio:"Maestro técnico cuya creatividad en espacios reducidos no tiene rival. Excepcional creando ocasiones bajo presión en el futsal europeo de alta intensidad.",video:"https://www.youtube.com/embed/dQw4w9WgXcQ",stats:{goals:19,assists:28,matches:36,rating:8.5},career:["FK Novi Sad (2017–2019)","Sibenka Sibenik (2019–2021)","KPRF Moscú (2021–presente)"],strengths:["Habilidad técnica","Creación de espacios","Presión","Tiros libres"],achievements:["Campeón Liga Serbia 2020","Selección Nacional Serbia"],testimonial:"IC Five me encontró oportunidades que nunca imaginé. Son operadores de verdadera élite."},
  {id:6,name:"Felipe Santos",age:25,position:"Pivot",club:"Palma Futsal",nationality:"🇧🇷 Brasil",foot:"Ambos",available:false,eu:false,image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",bio:"Pivot ambidiestro con excepcional juego de retención y capacidad de definir desde cualquier ángulo. Una pesadilla para defensores en espacios reducidos.",video:"https://www.youtube.com/embed/dQw4w9WgXcQ",stats:{goals:28,assists:22,matches:40,rating:8.6},career:["Carlos Barbosa (2018–2021)","Magnus Futsal (2021–2022)","Palma Futsal (2022–presente)"],strengths:["Ambos pies","Espaldas al arco","Remate","Pantallas"],achievements:["Goleador LNFS 2023","Convocado Selección Brasileña"],testimonial:"La transición de Brasil a España fue perfecta gracias al sistema de apoyo de IC Five."},
];

let players=[...PLAYERS];
let activeFilter="All";
let currentPlayer=null;
let formType="player";

// NAV scroll effect
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40);
});

// Count-up animation
function animateCount(el){
  const target=parseInt(el.dataset.target);
  const suffix=el.dataset.suffix||"";
  let start=0;const dur=2000;const startTime=performance.now();
  function step(t){
    const p=Math.min((t-startTime)/dur,1);
    const ease=1-Math.pow(1-p,3);
    el.textContent=Math.floor(ease*target)+suffix;
    if(p<1)requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('[data-target]').forEach(animateCount);
      statsObs.unobserve(e.target);
    }
  });
},{threshold:0.3});
statsObs.observe(document.getElementById('stats-grid'));

// PAGE NAVIGATION
function toggleMobileMenu(){
  const navLinks = document.getElementById('nav-links');
  const isOpen = navLinks.classList.contains('show');
  
  navLinks.classList.toggle('show');
  
  if (!isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

function showPage(name){
  document.getElementById('nav-links').classList.remove('show');
  document.body.style.overflow = 'auto';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(name+'-page').classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  const nl=document.getElementById('nav-'+name);
  if(nl)nl.classList.add('active');
  document.getElementById('main-footer').style.display=name==='admin'?'none':'block';
  window.scrollTo(0,0);
  if(name==='players')renderPlayers();
  if(name==='admin')renderAdmin();
}

// PLAYER CARD
function createPlayerCard(player,isHome=false){
  const card=document.createElement('div');
  card.className='player-card';
  card.innerHTML=`
    <div class="player-img-wrap">
      <img class="player-img" src="${player.image}" alt="${player.name}" loading="lazy"/>
      <div class="player-img-overlay"></div>
      <div class="player-badges">
        ${player.available?'<span class="badge badge-gold">Disponible</span>':''}
        ${player.eu?'<span class="badge badge-blue">Pasaporte UE</span>':''}
      </div>
      <div class="player-position-label">${player.position}</div>
      <div class="player-name-label">${player.name}</div>
    </div>
    <div class="player-info">
      <div class="player-meta">
        <span>${player.nationality}</span>
        <span>Edad ${player.age}</span>
      </div>
      <div class="player-club-row">
        <span class="player-club">${player.club}</span>
        <span class="player-foot">Pie ${player.foot}</span>
      </div>
      <p class="player-bio">${player.bio}</p>
      <button class="btn-card">Ver Perfil →</button>
    </div>
  `;
  card.addEventListener('click',()=>openProfile(player));
  return card;
}

// FEATURED PLAYERS (home)
function renderFeatured(){
  const grid=document.getElementById('featured-players');
  grid.innerHTML='';
  players.slice(0,3).forEach(p=>grid.appendChild(createPlayerCard(p,true)));
}
renderFeatured();

// PLAYERS PAGE
const POSITIONS=["All","Portero","Ala","Pivot","Poste"];
function renderFilterBar(){
  const bar=document.getElementById('filter-bar');
  bar.innerHTML='';
  POSITIONS.forEach(pos=>{
    const btn=document.createElement('button');
    btn.className='filter-btn'+(pos===activeFilter?' active':'');
    btn.textContent=pos;
    btn.onclick=()=>{activeFilter=pos;renderPlayers();renderFilterBar();};
    bar.appendChild(btn);
  });
}
function renderPlayers(){
  renderFilterBar();
  const grid=document.getElementById('players-grid');
  grid.innerHTML='';
  const filtered=activeFilter==='All'?players:players.filter(p=>p.position===activeFilter);
  document.getElementById('no-players').style.display=filtered.length?'none':'block';
  filtered.forEach(p=>grid.appendChild(createPlayerCard(p)));
}

// PROFILE PAGE
function openProfile(player){
  currentPlayer=player;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('profile-page').classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  window.scrollTo(0,0);
  renderProfile(player);
}
function renderProfile(p){
  document.getElementById('profile-content').innerHTML=`
    <div class="profile-hero">
      <img class="profile-hero-img" src="${p.image}" alt="${p.name}"/>
      <div class="profile-hero-overlay"></div>
      <button class="profile-back" onclick="showPage('players')">← Volver a Jugadores</button>
      <div class="profile-hero-content">
        <div class="profile-badges">
          ${p.available?'<span class="badge badge-gold">Disponible para Transferencia</span>':''}
          ${p.eu?'<span class="badge badge-blue">Ciudadanía UE</span>':''}
        </div>
        <div class="profile-pos">${p.position}</div>
        <h1 class="profile-name">${p.name}</h1>
        <div class="profile-club">${p.nationality} · ${p.club}</div>
      </div>
    </div>
    <div class="profile-body">
      <div class="stats-row">
        <div class="stat-box"><div class="stat-box-num">${p.stats.goals}</div><div class="stat-box-label">Goles</div></div>
        <div class="stat-box"><div class="stat-box-num">${p.stats.assists}</div><div class="stat-box-label">Asistencias</div></div>
        <div class="stat-box"><div class="stat-box-num">${p.stats.matches}</div><div class="stat-box-label">Partidos</div></div>
        <div class="stat-box"><div class="stat-box-num">${p.stats.rating}</div><div class="stat-box-label">Valoración</div></div>
      </div>
      <div class="tabs">
        <button class="tab-btn active" onclick="setTab('overview',this)">Perfil</button>
        <button class="tab-btn" onclick="setTab('career',this)">Carrera</button>
        <button class="tab-btn" onclick="setTab('achievements',this)">Logros</button>
        <button class="tab-btn" onclick="setTab('contact',this)">Contacto</button>
      </div>
      <div id="tab-overview" class="tab-content active">
        <div class="profile-two-col">
          <div>
            <div class="profile-section-label">Perfil del Jugador</div>
            <p class="profile-bio">${p.bio}</p>
            <div class="strengths-list">
              ${p.strengths.map(s=>`<span class="strength-tag">${s}</span>`).join('')}
            </div>
          </div>
          <div>
            <div class="profile-section-label">Highlights</div>
            <div class="video-wrap">
              <iframe src="${p.video}" title="Highlight video" allowfullscreen></iframe>
            </div>
            <div class="testimonial-box">
              <p class="testimonial-text">"${p.testimonial}"</p>
              <p class="testimonial-author">— ${p.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="tab-career" class="tab-content">
        <div class="profile-section-label">Historial de Carrera</div>
        <div class="timeline">
          ${p.career.map(c=>`
            <div class="timeline-item">
              <div class="timeline-line"><div class="timeline-dot"></div></div>
              <div class="timeline-text">${c}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div id="tab-achievements" class="tab-content">
        <div class="profile-section-label">Honores y Logros</div>
        ${p.achievements.map(a=>`
          <div class="achievement-item">
            <span class="achievement-icon">🏆</span>
            <span class="achievement-text">${a}</span>
          </div>
        `).join('')}
        <div class="download-bar">
          <div>
            <div class="download-bar-title">Descargar Informe del Jugador</div>
            <div class="download-bar-sub">PDF completo con estadísticas, videos y análisis de scouting</div>
          </div>
          <button class="btn-gold">Descargar PDF</button>
        </div>
      </div>
      <div id="tab-contact" class="tab-content">
        <div class="profile-section-label">Consultar Sobre Este Jugador</div>
        <p style="color:var(--muted);margin-bottom:1.5rem;line-height:1.75;max-width:480px">¿Interesado en ${p.name}? Contactá IC Five Management directamente para consultas de transferencia, cesiones o solicitudes de scouting.</p>
        <a href="https://wa.me/+1234567890" class="contact-channel channel-wa" style="color:#25D366;max-width:420px">
          <span class="channel-icon">💬</span>
          <div><div class="channel-name">WhatsApp — Respuesta Rápida</div></div>
        </a>
        <a href="mailto:info@icfivemanagement.com" class="contact-channel channel-em" style="max-width:420px;margin-top:0.75rem">
          <span class="channel-icon">✉️</span>
          <div><div class="channel-name">info@icfivemanagement.com</div></div>
        </a>
      </div>
    </div>
  `;
}
function setTab(name,btn){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-'+name).classList.add('active');
}

// CONTACT FORM
function setFormTab(type,btn){
  formType=type;
  document.querySelectorAll('.form-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function submitForm(){
  const name=document.getElementById('form-name').value.trim();
  const email=document.getElementById('form-email').value.trim();
  if(!name||!email)return;
  document.getElementById('form-container').style.display='none';
  document.getElementById('form-success').style.display='block';
}
function resetForm(){
  document.getElementById('form-name').value='';
  document.getElementById('form-email').value='';
  document.getElementById('form-msg').value='';
  document.getElementById('form-container').style.display='block';
  document.getElementById('form-success').style.display='none';
}

// ADMIN
function renderAdmin(){
  renderAdminTable();
  renderPositionBars();
  renderScoutingList();
}
function renderAdminTable(){
  const tbody=document.getElementById('admin-table-body');
  tbody.innerHTML='';
  players.forEach(p=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <img src="${p.image}" class="table-avatar" alt="${p.name}"/>
          <div><div class="table-player-name">${p.name}</div><div class="table-player-nat">${p.nationality}</div></div>
        </div>
      </td>
      <td><span class="pos-badge">${p.position}</span></td>
      <td class="table-club">${p.club}</td>
      <td><span class="${p.available?'status-available':'status-contracted'}">${p.available?'Disponible':'Contratado'}</span></td>
      <td>
        <button class="action-edit">Editar</button>
        <button class="action-del" onclick="removePlayer(${p.id})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
function renderPositionBars(){
  const positions=["Portero","Ala","Pivot","Poste"];
  const container=document.getElementById('position-bars');
  container.innerHTML='';
  positions.forEach(pos=>{
    const count=players.filter(p=>p.position===pos).length;
    const pct=players.length?Math.round(count/players.length*100):0;
    container.innerHTML+=`
      <div class="bar-row">
        <div class="bar-row-header"><span class="bar-pos">${pos}</span><span class="bar-count">${count}</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>`;
  });
}
function renderScoutingList(){
  const container=document.getElementById('scouting-list');
  container.innerHTML='';
  players.forEach(p=>{
    const stars='★★★★☆';
    container.innerHTML+=`
      <div class="scout-card">
        <img src="${p.image}" class="scout-avatar" alt="${p.name}"/>
        <div style="flex:1">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div><div class="scout-name">${p.name}</div><div class="scout-pos">${p.position} · ${p.club}</div></div>
            <div class="scout-stars">${stars.split('').map(s=>`<span class="scout-star">${s}</span>`).join('')}</div>
          </div>
          <textarea class="scout-textarea" rows="2">Informe — ${p.name}: ${p.strengths.slice(0,2).join(', ')}. Valoración: ${p.stats.rating}/10.</textarea>
        </div>
      </div>`;
  });
}
function removePlayer(id){
  players=players.filter(p=>p.id!==id);
  renderAdminTable();
  renderPositionBars();
  renderFeatured();
}
function toggleAddForm(){
  const w=document.getElementById('add-form-wrap');
  w.style.display=w.style.display==='none'?'block':'none';
}
function addPlayer(){
  const name=document.getElementById('new-name').value.trim();
  if(!name)return;
  const newP={
    id:Date.now(),name,
    age:parseInt(document.getElementById('new-age').value)||22,
    position:document.getElementById('new-pos').value,
    club:document.getElementById('new-club').value||'—',
    nationality:document.getElementById('new-nat').value||'—',
    foot:document.getElementById('new-foot').value,
    available:document.getElementById('new-available').checked,
    eu:document.getElementById('new-eu').checked,
    image:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=500&fit=crop&crop=face",
    bio:document.getElementById('new-bio').value||"Jugador profesional de futsal.",
    video:"https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats:{goals:0,assists:0,matches:0,rating:0},
    career:[],strengths:[],achievements:[],testimonial:""
  };
  players.push(newP);
  document.getElementById('new-name').value='';
  document.getElementById('new-age').value='';
  document.getElementById('new-club').value='';
  document.getElementById('new-nat').value='';
  document.getElementById('new-bio').value='';
  document.getElementById('new-available').checked=false;
  document.getElementById('new-eu').checked=false;
  document.getElementById('add-form-wrap').style.display='none';
  renderAdminTable();
  renderPositionBars();
  renderFeatured();
}
function setAdminTab(name,btn){
  document.querySelectorAll('.admin-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  ['players','stats','scouting'].forEach(t=>{
    document.getElementById('admin-'+t+'-tab').style.display=t===name?'block':'none';
  });
}
