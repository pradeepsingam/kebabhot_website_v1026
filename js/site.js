(function(){
/* marquee content (same words/icons as the original widgets) */
var M={pizza:{i:'cg cg-Pizza',t:['Hot Pizza','WOW Flavour','Crispy','Foodie']},
mush:{i:'cg cg-Mushrooms',t:['Hot Pizza','WOW Flavour','Crispy','Foodie']},
tags:{t:['#Herlig','#varm','#Krydret','#Smakfull','#Wow']},
dishes:{t:['Kebab i Pita','Kebabtallerken','Cheeseburgertallerken','Hvitløksdressing']},
flavs:{t:['Hot Pizza','WOW Flavour','Crispy','Foodie']}};
document.querySelectorAll('[data-m]').forEach(function(el){var d=M[el.getAttribute('data-m')],h='';
d.t.forEach(function(t){h+='<span class="icon">'+(d.i?'<i aria-hidden="true" class="'+d.i+'"></i>':'')+'</span><span class="text">'+t+' </span>';});var unit=h+h;el.innerHTML=unit+unit;});
/* one seamless track per band: the 2nd wrapper + spacer are not needed any more (they caused the overlapping text) */
document.querySelectorAll('.xp-text-marquee').forEach(function(m){m.classList.add('kh-marq');});

/* icon-font replacements (inline SVG, drawn with currentColor) */
var S=function(v,b){return '<svg class="kh-ic" viewBox="'+v+'" fill="none" stroke="currentColor" stroke-width="'+(v==='0 0 48 48'?2.6:1.9)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+b+'</svg>';};
var P='<path d="M3 6c6-3.5 12-3.5 18 0L12 21z"/><circle cx="10" cy="9" r="1.2"/><circle cx="14.5" cy="11" r="1.2"/><circle cx="12" cy="14" r="1.2"/>';
var MU='<path d="M3.5 12a8.5 7.5 0 0 1 17 0z"/><path d="M9 12v4.5a3 3 0 0 0 6 0V12"/><circle cx="9" cy="8" r=".8"/><circle cx="14" cy="8" r=".8"/>';
var IC={
'cg-Pizza':'<img class="kh-myicon kh-pizza-img" src="assets/kh-icon-pizza.png" alt="">','cg-Pizza-slice':S('0 0 24 24',P),
'cg-Mushrooms':'<img class="kh-myicon kh-mush-img" src="assets/kh-icon-mushroom.png" alt="">',
'ci-Skewer':S('0 0 48 48','<path d="M5 43L43 5"/><path d="M15 27l6 6-6 6-6-6zM24 18l6 6-6 6-6-6zM33 9l6 6-6 6-6-6z"/>'),
'ci-Group-22':S('0 0 48 48','<circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="12"/><path d="M24 6v36M6 24h36"/>'),
'cg-french-fries':S('0 0 48 48','<path d="M12 22h24l-3 22H15z"/><path d="M16 22l-2-14M22 22l-1-17M28 22l1-17M34 22l2-14"/>'),
'cg-hamburger':S('0 0 48 48','<path d="M8 22a16 12 0 0 1 32 0z"/><path d="M6 28h36"/><path d="M8 34h32"/><path d="M10 34c0 6 4 8 8 8h12c4 0 8-2 8-8"/>'),
'ci-Group-25':S('0 0 48 48','<path d="M6 20l18-12 18 12v20H6z"/><path d="M18 40V28h12v12M6 20h36"/>'),
'cg-Pizzeria-sign':S('0 0 48 48','<path d="M6 20l18-12 18 12v20H6z"/><path d="M18 40V28h12v12M6 20h36"/>'),
'xp-webicon-menu':'<svg class="kh-ic" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
'xp-webicon-left-arrow-2':'<svg class="kh-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20V4M5 11l7-7 7 7"/></svg>',
'xp-webicon-cancel':'<svg class="kh-ic" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
'xp-webicon-arrowsoutline':'<svg class="kh-ic" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
'fa-home':S('0 0 48 48','<path d="M6 22l18-14 18 14M10 20v20h28V20"/>'),
'fa-phone-alt':S('0 0 24 24','<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>'),
'fa-phone-volume':S('0 0 24 24','<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>')};
function paintIcons(){document.querySelectorAll('i').forEach(function(el){if(el.querySelector('svg'))return;for(var k in IC){if(el.classList.contains(k)){el.innerHTML=IC[k];el.classList.add('kh-done');break;}}});}
paintIcons();
/* Elementor lazy-load of container backgrounds */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('e-lazyloaded');io.unobserve(e.target);}});},{rootMargin:'200px 0px 200px 0px'});
document.querySelectorAll('.e-con.e-parent').forEach(function(c){io.observe(c);});
/* cookie banner */
var b=document.getElementById('cky-banner'),m=document.getElementById('cky-modal'),o=document.querySelector('.cky-overlay'),r=document.getElementById('cky-revisit');
var cats=[['Necessary','Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.'],['Functional','Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.'],['Analytics','Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.'],['Performance','Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.'],['Advertisement','Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.']];
document.getElementById('cky-acc').innerHTML=cats.map(function(c){return '<div class="cky-accordion"><h4>'+c[0]+'<span>Always Active</span></h4><p>'+c[1]+'</p></div>';}).join('');
function shut(){m.classList.remove('cky-modal-open');o.classList.add('cky-hide');}
function done(){b.classList.add('cky-hide');shut();r.classList.remove('cky-revisit-hide');try{sessionStorage.setItem('kh-cky','1')}catch(e){}}
try{if(sessionStorage.getItem('kh-cky')){b.classList.add('cky-hide');r.classList.remove('cky-revisit-hide');}}catch(e){}
document.addEventListener('click',function(e){var t=e.target.closest('[data-cky]');if(t){var a=t.getAttribute('data-cky');if(a==='open'){m.classList.add('cky-modal-open');o.classList.remove('cky-hide');}else if(a==='shut')shut();else done();}
if(e.target.closest('.cky-btn-revisit')){b.classList.remove('cky-hide');r.classList.add('cky-revisit-hide');}});
})();

/* navbar: translucent at top, shrinks after scrolling */
(function(){var h=document.getElementById('site-header');if(!h)return;var t=false;
function u(){t=false;h.classList.toggle('kh-shrunk',(window.pageYOffset||document.documentElement.scrollTop)>40);}
window.addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(u);}},{passive:true});u();})();

/* ribbon icon size (pizza + mushroom) - change 40px / 30px to resize */
(function(){
  var s=document.createElement('style');
  s.textContent='.xp-text-marquee .kh-myicon{height:40px!important;width:auto!important;max-width:none!important;vertical-align:middle}'
    +'@media(max-width:768px){.xp-text-marquee .kh-myicon{height:30px!important}}';
  document.head.appendChild(s);
})();

/* mobile header: black background + yellow menu icon (same as laptop) */
(function(){
  var s=document.createElement('style');
  s.textContent='@media(max-width:1024px){'
    +'html body #site-header,'
    +'html body #site-header.header-transparent,'
    +'html body #site-header.kh-shrunk,'
    +'html body #site-header .header-mobile,'
    +'html body #site-header .header-mobile .elementor,'
    +'html body #site-header .header-mobile .elementor-element-171a9f1b,'
    +'html body #site-header .header-mobile .elementor-element-171a9f1b>.e-con-inner,'
    +'html body #site-header .header-mobile .elementor-element-2f03f6,'
    +'html body #site-header .header-mobile .elementor-element-5c8b82b6,'
    +'html body #site-header .header-mobile .elementor-element-4e0b9c51'
    +'{background:#030405!important;background-color:#030405!important;background-image:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}'
    +'html body #site-header .mmenu-toggle button,'
    +'html body #site-header .mmenu-toggle .kh-ic'
    +'{color:#eeee22!important;stroke:#eeee22!important;background:transparent!important}'
    +'}';
  document.head.appendChild(s);
})();

/* mobile menu: open / close (works without Elementor's init hook) */
(function(){
  var t=document.getElementById('mmenu-toggle'),w=document.getElementById('mmenu-wrapper');
  if(!t||!w)return;
  function set(on){
    t.classList.toggle('active',on);
    w.classList.toggle('mmenu-open',on);
    document.body.classList.toggle('mmenu-active',on);
  }
  document.addEventListener('click',function(e){
    var hit=e.target.closest('#mmenu-toggle, .mmenu-close, .mmenu-overlay');
    if(!hit)return;
    e.preventDefault();e.stopPropagation();
    set(hit.id==='mmenu-toggle'?!w.classList.contains('mmenu-open'):false);
  },true);
  var s=document.createElement('style');
  s.textContent='@media(max-width:1024px){'
    +'html body #mmenu-wrapper{position:fixed!important;top:0!important;right:0!important;left:auto!important;bottom:0!important;width:300px!important;max-width:85vw!important;height:100vh!important;background:#030405!important;color:#fff!important;z-index:100001!important;overflow-y:auto!important;transform:translateX(105%)!important;visibility:hidden!important;transition:transform .3s ease,visibility .3s!important}'
    +'html body #mmenu-wrapper.mmenu-open{transform:translateX(0)!important;visibility:visible!important}'
    +'html body .mmenu-overlay{position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,.6)!important;opacity:0!important;visibility:hidden!important;z-index:100000!important;transition:opacity .3s!important}'
    +'html body.mmenu-active .mmenu-overlay{opacity:1!important;visibility:visible!important}'
    +'html body #mmenu-wrapper .mmenu-inner{padding:70px 24px 24px!important}'
    +'html body #mmenu-wrapper .mmenu-close{position:absolute!important;top:18px!important;right:18px!important;color:#eeee22!important;font-size:22px!important}'
    +'html body #mmenu-wrapper .mobile_mainmenu{list-style:none!important;margin:0!important;padding:0!important}'
    +'html body #mmenu-wrapper .mobile_mainmenu li a{display:block!important;padding:14px 0!important;color:#fff!important;font-size:18px!important;border-bottom:1px solid rgba(255,255,255,.15)!important;text-decoration:none!important}'
    +'html body #mmenu-wrapper .mobile_mainmenu li.current-menu-item a{color:#eeee22!important}'
    +'}';
  document.head.appendChild(s);
})();

/* side panel (mobile): add menu links + dark theme with white / yellow text */
(function(){
  var sp=document.querySelector('#side-panel .side-panel-block');
  var src=document.querySelectorAll('#menu-main-menu > li > a');
  if(sp&&src.length&&!sp.querySelector('.kh-sp-nav')){
    var ul=document.createElement('ul');ul.className='kh-sp-nav';
    src.forEach(function(a){
      var li=document.createElement('li'),l=document.createElement('a');
      l.href=a.getAttribute('href');l.textContent=a.textContent;
      if(a.getAttribute('aria-current'))li.className='kh-cur';
      li.appendChild(l);ul.appendChild(li);
    });
    var logoBox=sp.querySelector('.elementor-element-011d488');
    if(logoBox&&logoBox.parentNode)logoBox.parentNode.insertBefore(ul,logoBox.nextSibling);
    else sp.insertBefore(ul,sp.firstChild);
  }
  var s=document.createElement('style');
  s.textContent='@media(max-width:1024px){'
    +'html body #side-panel,html body #side-panel .side-panel-block,html body #side-panel .elementor,html body #side-panel .e-con,html body #side-panel .e-con-inner{background:#030405!important;background-color:#030405!important;background-image:none!important}'
    +'html body #side-panel .kh-sp-nav{list-style:none!important;margin:10px 0 20px!important;padding:0 16px!important}'
    +'html body #side-panel .kh-sp-nav li{margin:0!important;padding:0!important;border-bottom:1px solid rgba(255,255,255,.15)!important}'
    +'html body #side-panel .kh-sp-nav li a{display:block!important;padding:16px 0!important;color:#fff!important;font-size:20px!important;font-weight:700!important;text-decoration:none!important;letter-spacing:.5px}'
    +'html body #side-panel .kh-sp-nav li.kh-cur a{color:#eeee22!important}'
    +'html body #side-panel .elementor-icon-list-text{color:#fff!important;text-shadow:none!important}'
    +'html body #side-panel .elementor-icon-list-icon svg,html body #side-panel .elementor-icon-list-icon i{fill:#eeee22!important;color:#eeee22!important}'
    +'html body #side-panel .title-box,html body #side-panel .title-box a{color:#eeee22!important}'
    +'html body #side-panel .content-box p,html body #side-panel p{color:#fff!important}'
    +'html body #side-panel .elementor-divider-separator{border-color:rgba(255,255,255,.2)!important}'
    +'}';
  document.head.appendChild(s);
})();