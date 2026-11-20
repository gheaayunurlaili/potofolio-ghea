// Tandai JS aktif (untuk animasi reveal)
document.documentElement.classList.add('js');
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement;

// Tema: simpan pilihan, jika belum ada ikuti prefers-color-scheme
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t;}catch(e){}
const dark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
$('#theme').addEventListener('click',()=>{
  root.dataset.theme=dark()?'light':'dark';
  try{localStorage.setItem('theme',root.dataset.theme);}catch(e){}
});

// Menu mobile
const burger=$('#burger'),menu=$('#menu');
const setMenu=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Tutup menu':'Buka menu');};
burger.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));
$$('a',menu).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false);});

// Menu aktif sesuai bagian halaman
const links=$$('#menu a');
if('IntersectionObserver' in window){
  const spy=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){links.forEach(a=>{const on=a.getAttribute('href')==='#'+e.target.id;a.classList.toggle('on',on);on?a.setAttribute('aria-current','true'):a.removeAttribute('aria-current');});}
  }),{rootMargin:'-45% 0px -50% 0px'});
  $$('main section[id]').forEach(s=>spy.observe(s));

  // Scroll reveal
  const rev=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rev.unobserve(e.target);}}),{threshold:.12});
  $$('.card,.collage,h2,.lead').forEach(el=>{el.classList.add('rev');rev.observe(el);});
}

// Tombol kembali ke atas
// Tombol kembali ke atas
const topButton = $('#totop');

addEventListener('scroll', () => {
  topButton.hidden = scrollY < 500;
}, { passive: true });

topButton.addEventListener('click', () => {
  scrollTo({ top: 0 });
});

// Tautan kontak yang belum diisi tidak melakukan apa-apa
$$('a[aria-disabled="true"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));

// Tahun dinamis
$('#year').textContent=new Date().getFullYear();
