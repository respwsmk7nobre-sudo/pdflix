const titles = [
  {
    "id": 1,
    "title": "Duna: Parte Dois",
    "type": "Filme",
    "year": 2024,
    "genre": "Ficção",
    "rating": "Ficção científica",
    "desc": "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.",
    "search": "duna parte dois trailer oficial",
    "theme": "desert"
  },
  {
    "id": 2,
    "title": "Interestelar",
    "type": "Filme",
    "year": 2014,
    "genre": "Ficção",
    "rating": "Ficção científica",
    "desc": "Uma equipe de exploradores viaja além desta galáxia para descobrir se a humanidade tem futuro entre as estrelas.",
    "search": "interestelar trailer oficial",
    "theme": "space"
  },
  {
    "id": 3,
    "title": "Batman",
    "type": "Filme",
    "year": 2022,
    "genre": "Ação",
    "rating": "Suspense / ação",
    "desc": "Em seu segundo ano combatendo o crime, Batman investiga assassinatos que revelam a corrupção de Gotham.",
    "search": "The Batman 2022 trailer oficial",
    "theme": "noir"
  },
  {
    "id": 4,
    "title": "Divertida Mente 2",
    "type": "Filme",
    "year": 2024,
    "genre": "Animação",
    "rating": "Animação",
    "desc": "Riley entra na adolescência e novas emoções chegam para mudar a rotina da mente dela.",
    "search": "Divertida Mente 2 trailer oficial",
    "theme": "color"
  },
  {
    "id": 5,
    "title": "The Last of Us",
    "type": "Série",
    "year": 2023,
    "genre": "Drama",
    "rating": "Drama pós-apocalíptico",
    "desc": "Joel recebe a missão de acompanhar Ellie por um mundo perigoso após uma pandemia devastadora.",
    "search": "The Last of Us trailer oficial",
    "theme": "forest"
  },
  {
    "id": 6,
    "title": "Stranger Things",
    "type": "Série",
    "year": 2016,
    "genre": "Ficção",
    "rating": "Mistério / ficção",
    "desc": "O desaparecimento de um garoto revela segredos e forças sobrenaturais em uma pequena cidade.",
    "search": "Stranger Things trailer oficial",
    "theme": "red"
  },
  {
    "id": 7,
    "title": "John Wick 4",
    "type": "Filme",
    "year": 2023,
    "genre": "Ação",
    "rating": "Ação",
    "desc": "John Wick descobre um caminho para derrotar a Alta Cúpula, mas precisa enfrentar adversários poderosos.",
    "search": "John Wick 4 trailer oficial",
    "theme": "blue"
  },
  {
    "id": 8,
    "title": "The Office",
    "type": "Série",
    "year": 2005,
    "genre": "Comédia",
    "rating": "Comédia",
    "desc": "O cotidiano de funcionários de um escritório é registrado em um falso documentário cheio de situações constrangedoras.",
    "search": "The Office trailer",
    "theme": "office"
  },
  {
    "id": 9,
    "title": "Arcane",
    "type": "Série",
    "year": 2021,
    "genre": "Animação",
    "rating": "Animação / aventura",
    "desc": "Duas irmãs ficam em lados opostos de um conflito entre uma cidade rica e seu submundo industrial.",
    "search": "Arcane trailer oficial",
    "theme": "neon"
  },
  {
    "id": 10,
    "title": "Oppenheimer",
    "type": "Filme",
    "year": 2023,
    "genre": "Drama",
    "rating": "Drama histórico",
    "desc": "A história do cientista J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.",
    "search": "Oppenheimer trailer oficial",
    "theme": "fire"
  },
  {
    "id": 11,
    "title": "Brooklyn Nine-Nine",
    "type": "Série",
    "year": 2013,
    "genre": "Comédia",
    "rating": "Comédia policial",
    "desc": "Detetives de uma delegacia de Nova York resolvem casos enquanto lidam com situações absurdas no trabalho.",
    "search": "Brooklyn Nine Nine trailer oficial",
    "theme": "teal"
  },
  {
    "id": 12,
    "title": "Homem-Aranha: Através do Aranhaverso",
    "type": "Filme",
    "year": 2023,
    "genre": "Animação",
    "rating": "Animação / ação",
    "desc": "Miles Morales atravessa o multiverso e encontra uma equipe de pessoas-aranha que protege sua existência.",
    "search": "Homem Aranha Através do Aranhaverso trailer",
    "theme": "spider"
  },
  {
    "id": 13,
    "title": "Top Gun: Maverick",
    "type": "Filme",
    "year": 2022,
    "genre": "Ação",
    "rating": "Ação / drama",
    "desc": "Maverick treina uma nova geração de pilotos para uma missão extremamente perigosa.",
    "search": "Top Gun Maverick trailer oficial",
    "theme": "sky"
  },
  {
    "id": 14,
    "title": "Wandinha",
    "type": "Série",
    "year": 2022,
    "genre": "Suspense",
    "rating": "Mistério / comédia",
    "desc": "Wandinha Addams investiga mistérios sobrenaturais em uma escola cheia de segredos.",
    "search": "Wandinha trailer oficial",
    "theme": "goth"
  },
  {
    "id": 15,
    "title": "The Boys",
    "type": "Série",
    "year": 2019,
    "genre": "Ação",
    "rating": "Ação / sátira",
    "desc": "Um grupo tenta expor super-heróis corruptos que abusam do poder e da fama.",
    "search": "The Boys trailer oficial",
    "theme": "darkred"
  },
  {
    "id": 16,
    "title": "Cobra Kai",
    "type": "Série",
    "year": 2018,
    "genre": "Ação",
    "rating": "Drama / artes marciais",
    "desc": "Rivalidades antigas voltam à tona quando antigos adversários reabrem escolas de karatê.",
    "search": "Cobra Kai trailer oficial",
    "theme": "dojo"
  },
  {
    "id": 17,
    "title": "Viva: A Vida é uma Festa",
    "type": "Filme",
    "year": 2017,
    "genre": "Animação",
    "rating": "Animação / aventura",
    "desc": "Um jovem músico embarca em uma jornada extraordinária pelo mundo dos mortos.",
    "search": "Viva A Vida é uma Festa trailer oficial",
    "theme": "orange"
  },
  {
    "id": 18,
    "title": "Um Lugar Silencioso",
    "type": "Filme",
    "year": 2018,
    "genre": "Suspense",
    "rating": "Terror / suspense",
    "desc": "Uma família tenta sobreviver em um mundo onde fazer qualquer ruído pode ser fatal.",
    "search": "Um Lugar Silencioso trailer oficial",
    "theme": "fog"
  },
  {
    "id": 19,
    "title": "The Mandalorian",
    "type": "Série",
    "year": 2019,
    "genre": "Ficção",
    "rating": "Aventura espacial",
    "desc": "Um caçador de recompensas atravessa a galáxia e assume uma missão inesperada.",
    "search": "The Mandalorian trailer oficial",
    "theme": "galaxy"
  },
  {
    "id": 20,
    "title": "Super Mario Bros. O Filme",
    "type": "Filme",
    "year": 2023,
    "genre": "Animação",
    "rating": "Animação / aventura",
    "desc": "Mario embarca em uma aventura fantástica para salvar um reino e enfrentar um inimigo poderoso.",
    "search": "Super Mario Bros O Filme trailer oficial",
    "theme": "mario"
  }
];

let activeType = "Todos", activeGenre = "Todos", query = "", selected = null;
let saved = new Set();
try { saved = new Set(JSON.parse(localStorage.getItem("pdflix-list") || "[]")); } catch (_) {}
const grid = document.querySelector("#catalogGrid");
const count = document.querySelector("#resultCount");
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const themeClass = t => "theme-" + (t.theme || "purple");

function render() {
  const items = titles.filter(t =>
    (activeType === "Todos" || activeType === "Minha lista" || t.type === activeType) &&
    (activeType !== "Minha lista" || saved.has(t.id)) &&
    (activeGenre === "Todos" || t.genre === activeGenre) &&
    (`${t.title} ${t.genre} ${t.type} ${t.year} ${t.rating}`.toLowerCase().includes(query.toLowerCase()))
  );
  grid.innerHTML = items.map(t => `
    <article class="movie-card" data-id="${t.id}" tabindex="0" aria-label="Ver detalhes de ${escapeHtml(t.title)}">
      <div class="poster ${themeClass(t)}">
        <span class="poster-orbit"></span><span class="poster-kicker">PD FLIX • CATÁLOGO</span>
        <span class="poster-symbol">${symbolFor(t.theme)}</span>
        <strong class="poster-title">${escapeHtml(t.title)}</strong>
        <span class="poster-type">${t.type.toUpperCase()} · ${t.year}</span>
        <button class="save-icon ${saved.has(t.id) ? "saved" : ""}" data-save="${t.id}" aria-label="${saved.has(t.id) ? "Remover da" : "Adicionar à"} minha lista">${saved.has(t.id) ? "✓" : "+"}</button>
      </div>
      <div class="movie-title">${escapeHtml(t.title)}</div><div class="movie-meta">${t.type} <span>·</span> ${t.year} <span>·</span> ${t.genre}</div>
    </article>`).join("");
  count.textContent = `${items.length} ${items.length === 1 ? "título" : "títulos"}`;
  document.querySelector("#emptyState").classList.toggle("hidden", items.length > 0);
  grid.classList.toggle("hidden", items.length === 0);
  document.querySelector("#catalogTitle").textContent = activeType === "Minha lista" ? "Sua lista" : activeType === "Filme" ? "Filmes para descobrir" : activeType === "Série" ? "Séries para maratonar" : "Explore o catálogo";
  document.querySelectorAll(".nav-link").forEach(b => b.classList.toggle("active", b.dataset.filter === activeType));
  document.querySelectorAll(".chip").forEach(b => b.classList.toggle("selected", b.dataset.genre === activeGenre));
  document.querySelector("#savedCount").textContent = saved.size;
}
function symbolFor(theme) {
  return ({desert:"✦",space:"◉",noir:"⬟",color:"✿",forest:"❧",red:"✦",blue:"◆",office:"▦",neon:"✧",fire:"☼",teal:"◈",spider:"✳",sky:"✈",goth:"☾",darkred:"✦",dojo:"拳",orange:"☼",fog:"◌",galaxy:"✧",mario:"★"})[theme] || "✦";
}
function toggleSave(id) {
  id = Number(id);
  saved.has(id) ? saved.delete(id) : saved.add(id);
  try { localStorage.setItem("pdflix-list", JSON.stringify([...saved])); } catch (_) {}
  render();
  if (selected?.id === id) document.querySelector("#saveBtn").textContent = saved.has(id) ? "✓ Na minha lista" : "＋ Minha lista";
}
function openDetails(id) {
  selected = titles.find(t => t.id === Number(id)); if (!selected) return;
  document.querySelector("#modalTitle").textContent = selected.title;
  document.querySelector("#modalMeta").textContent = `${selected.type.toUpperCase()} · ${selected.year} · ${selected.rating.toUpperCase()}`;
  document.querySelector("#modalDescription").textContent = selected.desc;
  const poster = document.querySelector("#modalPoster");
  poster.className = `modal-poster ${themeClass(selected)}`;
  poster.innerHTML = `<span class="modal-symbol">${symbolFor(selected.theme)}</span><strong>${escapeHtml(selected.title)}</strong><small>${selected.type.toUpperCase()} · ${selected.year}</small>`;
  document.querySelector("#saveBtn").textContent = saved.has(selected.id) ? "✓ Na minha lista" : "＋ Minha lista";
  document.querySelector("#detailModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeDetails() { document.querySelector("#detailModal").classList.add("hidden"); document.body.style.overflow = ""; selected = null; }

grid.addEventListener("click", e => {
  const save = e.target.closest("[data-save]");
  if (save) { e.stopPropagation(); toggleSave(save.dataset.save); return; }
  const card = e.target.closest("[data-id]"); if (card) openDetails(card.dataset.id);
});
grid.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches(".movie-card")) { e.preventDefault(); openDetails(e.target.dataset.id); } });
document.querySelectorAll(".nav-link").forEach(b => b.addEventListener("click", () => { activeType = b.dataset.filter; render(); document.querySelector("#catalog").scrollIntoView({behavior:"smooth"}); }));
document.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => { activeGenre = b.dataset.genre; render(); }));
document.querySelector("#searchInput").addEventListener("input", e => { query = e.target.value; render(); });
document.querySelector("#exploreBtn").addEventListener("click", () => document.querySelector("#catalog").scrollIntoView({behavior:"smooth"}));
document.querySelector("#clearFilters").addEventListener("click", () => { activeType = "Todos"; activeGenre = "Todos"; query = ""; document.querySelector("#searchInput").value = ""; render(); });
document.querySelector("#closeModal").addEventListener("click", closeDetails);
document.querySelector("#closeBackdrop").addEventListener("click", closeDetails);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDetails(); });
document.querySelector("#saveBtn").addEventListener("click", () => selected && toggleSave(selected.id));
document.querySelector("#trailerBtn").addEventListener("click", () => { if (selected) window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(selected.search), "_blank", "noopener,noreferrer"); });
render();
