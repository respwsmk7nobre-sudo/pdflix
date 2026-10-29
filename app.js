const titles = [
 {id:1,title:"Duna: Parte Dois",type:"Filme",year:2024,genre:"Ficção",rating:"Ficção científica",desc:"Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.",bg:"linear-gradient(145deg,#b27b49,#39221d 58%,#0d0b10)",search:"Duna Parte Dois trailer"},
 {id:2,title:"Interestelar",type:"Filme",year:2014,genre:"Ficção",rating:"Ficção científica",desc:"Uma equipe de exploradores viaja além desta galáxia para descobrir se a humanidade tem futuro entre as estrelas.",bg:"linear-gradient(145deg,#627d92,#1c2839 60%,#090b12)",search:"Interestelar trailer oficial"},
 {id:3,title:"Batman",type:"Filme",year:2022,genre:"Ação",rating:"Suspense / ação",desc:"Em seu segundo ano combatendo o crime, Batman investiga uma série de assassinatos que revela a corrupção de Gotham.",bg:"linear-gradient(145deg,#58606a,#20242c 55%,#09090c)",search:"The Batman 2022 trailer"},
 {id:4,title:"Divertida Mente 2",type:"Filme",year:2024,genre:"Animação",rating:"Animação",desc:"Riley entra na adolescência e novas emoções chegam para mudar a rotina da mente dela.",bg:"linear-gradient(145deg,#e4a14c,#6e376e 58%,#1b1429)",search:"Divertida Mente 2 trailer"},
 {id:5,title:"The Last of Us",type:"Série",year:2023,genre:"Drama",rating:"Drama pós-apocalíptico",desc:"Anos após uma pandemia devastadora, Joel recebe a missão de acompanhar Ellie por um mundo perigoso.",bg:"linear-gradient(145deg,#7e8a57,#35432c 58%,#10120d)",search:"The Last of Us trailer oficial"},
 {id:6,title:"Stranger Things",type:"Série",year:2016,genre:"Ficção",rating:"Mistério / ficção",desc:"O desaparecimento de um garoto revela segredos e forças sobrenaturais em uma pequena cidade.",bg:"linear-gradient(145deg,#b33243,#4c172b 58%,#100a12)",search:"Stranger Things trailer"},
 {id:7,title:"John Wick 4",type:"Filme",year:2023,genre:"Ação",rating:"Ação",desc:"John Wick descobre um caminho para derrotar a Alta Cúpula, mas precisa enfrentar adversários poderosos.",bg:"linear-gradient(145deg,#6d8f9c,#263847 58%,#0b1018)",search:"John Wick 4 trailer"},
 {id:8,title:"The Office",type:"Série",year:2005,genre:"Comédia",rating:"Comédia",desc:"O cotidiano de funcionários de um escritório é registrado em um falso documentário cheio de situações constrangedoras.",bg:"linear-gradient(145deg,#b6a17c,#615640 58%,#17140f)",search:"The Office trailer"},
 {id:9,title:"Arcane",type:"Série",year:2021,genre:"Animação",rating:"Animação / aventura",desc:"Duas irmãs ficam em lados opostos de um conflito entre uma cidade rica e seu submundo industrial.",bg:"linear-gradient(145deg,#568a91,#27394c 58%,#0a1019)",search:"Arcane trailer oficial"},
 {id:10,title:"Oppenheimer",type:"Filme",year:2023,genre:"Drama",rating:"Drama histórico",desc:"A história do cientista J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.",bg:"linear-gradient(145deg,#bc6e39,#5b2a1e 58%,#130c0a)",search:"Oppenheimer trailer"},
 {id:11,title:"Brooklyn Nine-Nine",type:"Série",year:2013,genre:"Comédia",rating:"Comédia policial",desc:"Detetives de uma delegacia de Nova York resolvem casos enquanto lidam com situações absurdas no trabalho.",bg:"linear-gradient(145deg,#6298a7,#31546a 58%,#10151c)",search:"Brooklyn Nine Nine trailer"},
 {id:12,title:"Homem-Aranha: Através do Aranhaverso",type:"Filme",year:2023,genre:"Animação",rating:"Animação / ação",desc:"Miles Morales atravessa o multiverso e encontra uma equipe de pessoas-aranha que protege sua existência.",bg:"linear-gradient(145deg,#b64d82,#57316c 58%,#130d1e)",search:"Homem Aranha Através do Aranhaverso trailer"}
];
let activeType="Todos", activeGenre="Todos", query="", selected=null;
let saved = new Set(JSON.parse(localStorage.getItem("pdflix-list")||"[]"));
const grid=document.querySelector("#catalogGrid"), count=document.querySelector("#resultCount");
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function render(){
 let items=titles.filter(t=>(activeType==="Todos"||activeType==="Minha lista"||t.type===activeType)&&(activeType!=="Minha lista"||saved.has(t.id))&&(activeGenre==="Todos"||t.genre===activeGenre)&&(`${t.title} ${t.genre} ${t.type} ${t.year}`.toLowerCase().includes(query.toLowerCase())));
 grid.innerHTML=items.map(t=>`<article class="movie-card" data-id="${t.id}" tabindex="0"><div class="poster" style="--poster-bg:${t.bg}"><button class="save-icon ${saved.has(t.id)?"saved":""}" data-save="${t.id}" aria-label="${saved.has(t.id)?"Remover da":"Adicionar à"} minha lista">${saved.has(t.id)?"✓":"+"}</button><span class="poster-kicker">PD FLIX ORIGINAL CATALOG</span><strong class="poster-title">${escapeHtml(t.title)}</strong><span class="poster-type">${t.type.toUpperCase()} · ${t.year}</span></div><div class="movie-title">${escapeHtml(t.title)}</div><div class="movie-meta">${t.type} · ${t.year} · ${t.genre}</div></article>`).join("");
 count.textContent=`${items.length} ${items.length===1?"título":"títulos"}`;
 document.querySelector("#emptyState").classList.toggle("hidden",items.length>0);
 document.querySelector("#catalogGrid").classList.toggle("hidden",items.length===0);
 document.querySelector("#catalogTitle").textContent=activeType==="Minha lista"?"Minha lista":activeType==="Filme"?"Filmes":activeType==="Série"?"Séries":"Explorar catálogo";
 document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.filter===activeType));
 document.querySelectorAll(".chip").forEach(b=>b.classList.toggle("selected",b.dataset.genre===activeGenre));
}
function toggleSave(id){id=Number(id);saved.has(id)?saved.delete(id):saved.add(id);localStorage.setItem("pdflix-list",JSON.stringify([...saved]));render();if(selected?.id===id)document.querySelector("#saveBtn").textContent=saved.has(id)?"✓ Na minha lista":"＋ Minha lista";}
function openDetails(id){selected=titles.find(t=>t.id===Number(id));if(!selected)return;document.querySelector("#modalTitle").textContent=selected.title;document.querySelector("#modalMeta").textContent=`${selected.type.toUpperCase()} · ${selected.year} · ${selected.genre.toUpperCase()}`;document.querySelector("#modalDescription").textContent=selected.desc;const p=document.querySelector("#modalPoster");p.style.background=selected.bg;p.textContent=selected.title;document.querySelector("#saveBtn").textContent=saved.has(selected.id)?"✓ Na minha lista":"＋ Minha lista";document.querySelector("#detailModal").classList.remove("hidden");document.body.style.overflow="hidden";}
function closeDetails(){document.querySelector("#detailModal").classList.add("hidden");document.body.style.overflow="";selected=null;}
document.querySelector("#catalogGrid").addEventListener("click",e=>{const save=e.target.closest("[data-save]");if(save){e.stopPropagation();toggleSave(save.dataset.save);return;}const card=e.target.closest("[data-id]");if(card)openDetails(card.dataset.id);});
document.querySelector("#catalogGrid").addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches(".movie-card"))openDetails(e.target.dataset.id);});
document.querySelectorAll(".nav-link").forEach(b=>b.addEventListener("click",()=>{activeType=b.dataset.filter;render();}));
document.querySelectorAll(".chip").forEach(b=>b.addEventListener("click",()=>{activeGenre=b.dataset.genre;render();}));
document.querySelector("#searchInput").addEventListener("input",e=>{query=e.target.value;render();});
document.querySelector("#exploreBtn").addEventListener("click",()=>document.querySelector("#catalog").scrollIntoView({behavior:"smooth"}));
document.querySelector("#clearFilters").addEventListener("click",()=>{activeType="Todos";activeGenre="Todos";query="";document.querySelector("#searchInput").value="";render();});
document.querySelector("#closeModal").addEventListener("click",closeDetails);document.querySelector("#closeBackdrop").addEventListener("click",closeDetails);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDetails();});
document.querySelector("#saveBtn").addEventListener("click",()=>selected&&toggleSave(selected.id));
document.querySelector("#trailerBtn").addEventListener("click",()=>{if(selected)window.open("https://www.youtube.com/results?search_query="+encodeURIComponent(selected.search)," _blank".trim(),"noopener,noreferrer");});
render();
