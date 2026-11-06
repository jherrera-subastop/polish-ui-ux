"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{6270:(e,a,t)=>{let o;t.d(a,{VmcAhoraQa:()=>ed,default:()=>es});var r=t(4568),i=t(7620),n=t(9060);let s=[120,120,180,240,300];function l(e){return s[((x()^Math.imul(e+1,0x9e3779b1))>>>0>>>8)%s.length]}let d=(e,a)=>e>=6&&a>0,p=e=>e<=0?0:Math.min(6,1+Math.floor(e/4)),c=[{lot:"Toyota Yaris 2021",city:"Lima",band:[9800,12800]},{lot:"Kia Rio 2020",city:"Arequipa",band:[7800,10800]},{lot:"Hyundai Tucson 2021",city:"Lima",band:[17500,23e3]},{lot:"Toyota Corolla 2020",city:"Trujillo",band:[17800,21800]},{lot:"Suzuki Swift 2022",city:"Piura",band:[9800,12800]},{lot:"Nissan Sentra 2019",city:"Callao",band:[9e3,12500]},{lot:"Mazda CX-5 2020",city:"Lima",band:[17500,23500]},{lot:"Kia Sportage 2021",city:"Chiclayo",band:[15e3,20500]},{lot:"Honda Civic 2019",city:"Lima",band:[11500,16e3]},{lot:"Volkswagen Tiguan 2020",city:"Arequipa",band:[18e3,25e3]},{lot:"Toyota Hilux 2019",city:"Piura",band:[20500,29e3]},{lot:"Mitsubishi L200 2021",city:"Trujillo",band:[21e3,28500]},{lot:"Hyundai Accent 2022",city:"Lima",band:[9e3,12500]},{lot:"Chevrolet Onix 2021",city:"Callao",band:[7800,10800]},{lot:"Renault Duster 2020",city:"Chiclayo",band:[10500,14500]},{lot:"Ford Ranger 2019",city:"Lima",band:[19500,27e3]},{lot:"Toyota RAV4 2021",city:"Arequipa",band:[22e3,3e4]},{lot:"Subaru Forester 2020",city:"Lima",band:[18500,25e3]},{lot:"Kia Seltos 2022",city:"Trujillo",band:[16500,22500]},{lot:"Hyundai Creta 2021",city:"Piura",band:[12500,17500]},{lot:"Nissan Kicks 2020",city:"Callao",band:[11800,16500]},{lot:"Suzuki Vitara 2021",city:"Lima",band:[14e3,19e3]},{lot:"Mazda 3 2020",city:"Chiclayo",band:[13e3,18e3]},{lot:"Honda HR-V 2021",city:"Arequipa",band:[16e3,22e3]},{lot:"Toyota Avanza 2020",city:"Lima",band:[11e3,15e3]},{lot:"Kia Soluto 2022",city:"Trujillo",band:[8e3,11e3]},{lot:"Hyundai Grand i10 2021",city:"Piura",band:[6200,8500]},{lot:"Volkswagen Jetta 2019",city:"Callao",band:[10500,14500]},{lot:"Jeep Compass 2020",city:"Lima",band:[19e3,26e3]},{lot:"Ford Escape 2021",city:"Arequipa",band:[17e3,24e3]},{lot:"BMW X1 2019",city:"Lima",band:[21e3,29e3]},{lot:"Audi Q3 2020",city:"Chiclayo",band:[23e3,31e3]},{lot:"Mercedes-Benz GLA 2019",city:"Trujillo",band:[24e3,33e3]},{lot:"Volvo XC40 2021",city:"Lima",band:[27e3,36e3]},{lot:"Peugeot 3008 2020",city:"Callao",band:[18e3,25e3]},{lot:"Changan CS55 2022",city:"Piura",band:[13500,18500]}],x=()=>[...new Intl.DateTimeFormat("en-CA",{timeZone:"America/Lima"}).format(new Date)].reduce((e,a)=>31*e+a.charCodeAt(0)>>>0,7),b=(e,a,t,o)=>{let r,i=[20,40,60,80,90];return r=Math.max(a,Math.min(t,100*Math.floor(e/100)+i[(x()+3*o)%i.length])),`US$ ${r.toLocaleString("en-US")}`};function f(e){let a=x(),t=c[(a+e)%c.length],o=t.band[0]+(a+643*e)%(t.band[1]-t.band[0]+1);return{lot:t.lot,price:b(o,t.band[0],t.band[1],e),city:t.city,imageSrc:""}}let g=Array.from({length:6},(e,a)=>{let t=c[(x()+5*a)%c.length],o=t.band[0]+(x()+811*a)%(t.band[1]-t.band[0]+1);return{car:t.lot,value:b(o,t.band[0],t.band[1],a),imageSrc:"/assets/brand/logo-voyager.svg"}}),v=["Autoplan","Mapfre","Pac\xedfico","Trupal S.A."],u=[{title:"C\xf3mo funciona una subasta en VMC, paso a paso",detail:"Gu\xeda",imageSrc:"/banners/vmc/hero-whatsapp-c.jpg",imagePos:"78% 30%"},{title:"\xbfQu\xe9 es \xabRecibe ofertas\xbb y c\xf3mo se env\xeda una propuesta?",detail:"Gu\xeda",imageSrc:"/banners/vmc/hero-negociable-a.jpg",imagePos:"75% 30%"},{title:"5 cosas que revisar antes de ofertar por un auto usado",detail:"Consejos",imageSrc:"/banners/vmc/publica-moto.jpg",imagePos:"72% 22%"},{title:"Documentos para transferir un veh\xedculo en Per\xfa",detail:"Tr\xe1mites",imageSrc:"/banners/vmc/subastop-flota.jpg",imagePos:"62% 40%"},{title:"C\xf3mo se fija el precio base de una subasta",detail:"Gu\xeda",imageSrc:"/banners/vmc/hero-publica-c.jpg",imagePos:"30% 30%"}];function h(e,a){return[...Array.from({length:e},(t,o)=>{let r=d(e+a,e)&&0===o;return{...f(o),id:51015+97*o,mode:"vivo",who:v[o%v.length],isNew:r,viewsCap:o%6==2?600+53*o%200:120+137*o%380,likeRate:.04+7*o%5/100,partRate:.04+3*o%5/100,base:0}}),...Array.from({length:a},(t,o)=>{let r=d(e+a,a)&&0===o;return{...f(e+o),id:67942+113*o,mode:"negociable",who:"SubasCars",isNew:r,viewsCap:o%6==3?600+71*o%200:100+151*o%360,likeRate:.04+3*o%5/100,partRate:0,base:r?0:3*o%4}})]}let m=(e,a)=>Array.from({length:e},(t,o)=>540+(o+a)*900/e),w=e=>"ad-valoriza"===e||"ad-publica"===e||"blog"===e,y="#C2410C",k="#00777A",j="#7B5CE6",_="#3B1782";function C(e,a,t=0){let o=function(e,a){let t=a.find(a=>a.id===e.offerId);switch(e.kind){case"nueva":case"nueva-subascars":case"rotacion":return{author:"VMC",title:"Valorizaci\xf3n realizada",detail:"",pill:"Valorizaci\xf3n",color:j,val:{car:t.lot,value:t.price,imageSrc:"/assets/brand/logo-voyager.svg"}};case"propuesta":return{author:"VMC",title:"Un usuario est\xe1 solicitando una valorizaci\xf3n",detail:"Solicitud en proceso",pill:"Valorizaci\xf3n",color:j};case"registro":return{author:"VMC",title:"Se registr\xf3 un nuevo usuario en VMC",detail:"",pill:"Nuevo usuario",color:j};case"valorizacion":{let a=g[(e.val??0)%g.length];return{author:"VMC",title:`Un usuario acaba de valorizar un ${a.car} por ${a.value}`,detail:"",pill:"Valorizaci\xf3n",color:j,val:a}}case"ad-valoriza":return{author:"VMC",title:"Valoriza tu auto en VMC",detail:"Descubre cu\xe1nto vale tu auto en minutos, gratis.",pill:"Publicidad",color:_,imageSrc:"/banners/vmc/valoriza-auto.jpg",imagePos:"75% 30%",cta:"Valorizar",ad:!0};case"ad-publica":return{author:"VMC",title:"Publica tu auto en VMC y recibe ofertas",detail:"Empresas y compradores verificados.",pill:"Publicidad",color:_,imageSrc:"/banners/vmc/hero-publica-d.jpg",imagePos:"22% 55%",cta:"Publicar",ad:!0};case"blog":return{author:"Blog VMC",...u[e.blog??0],pill:"Blog",color:"#4A2CE0",cta:"Leer"}}}(e,a),r=a.find(a=>a.id===e.offerId),i=function(e,a,t){var o,r;let i,[n,s,l]=(o=e,r=a,i=7919*[...o.key].reduce((e,a)=>(31*e+a.charCodeAt(0))%100003,7)%100003,"rotacion"===o.kind&&r?[30+i%31,r.viewsCap,360]:("nueva"===o.kind||"nueva-subascars"===o.kind)&&r?[0,r.viewsCap,360]:"ad-valoriza"===o.kind||"ad-publica"===o.kind?[8+i%8,120+i%180,240]:"blog"===o.kind?[5+i%8,80+i%120,300]:[0,40+i%160,180]);return n+Math.floor((s-n)*(1-Math.exp(-Math.max(0,t)/l)))}(e,r,t);if(!o.mode||!r)return{...o,views:i};let n={likes:Math.floor(i*r.likeRate),participants:Math.floor(i*r.partRate)};return{...o,views:i,likes:n.likes,count:"vivo"===r.mode?n.participants:e.count??r.base}}let F=[{id:"s0",V:0,N:0,label:"0 ofertas",hint:"Sin inventario"},{id:"n1",V:0,N:1,label:"1 Recibe ofertas",hint:"0 en vivo"},{id:"n5",V:0,N:5,label:"5 Recibe ofertas",hint:"Rotan cada hora"},{id:"v3n2",V:3,N:2,label:"3 + 2",hint:"En vivo + Recibe ofertas"},{id:"v8n2",V:8,N:2,label:"8 + 2",hint:"Ejemplo del documento"},{id:"n10",V:0,N:10,label:"10 Recibe ofertas",hint:"Solo Recibe ofertas"},{id:"v10",V:10,N:0,label:"10 en vivo",hint:"Sin Recibe ofertas"},{id:"v6n6",V:6,N:6,label:"6 + 6",hint:"12 ofertas"},{id:"v15n15",V:15,N:15,label:"15 + 15",hint:"30 ofertas"}],E="v8n2",z={val:"texto",valFx:"contador",ad:"tarjeta",badge:"sin",views:"ojo",share:"caja",acts:"palabra",tags:"sin",scroll:"gris",tone:"oscuro"},S={ds:{[y]:"#FF9639",[k]:"#00D2D3"},medio:{[y]:"#EF852E",[k]:"#00AEB1"},oscuro:{}},M=(e,a)=>({...e,color:S[a.tone][e.color]??e.color}),N={VMC:"/assets/brand/logo-voyager.svg","Blog VMC":"/assets/brand/logo-voyager.svg",Pacífico:"/demo/empresas/pacifico.png",Autoplan:"/demo/empresas/autoplan.png","Trupal S.A.":"/demo/empresas/trupal.svg",Mapfre:"/demo/empresas/mapfre.png"},V=e=>Array.from({length:e},(e,a)=>1e3*l(a)).reduce((e,a)=>e+a,0),B=function(e,a=z){let t=F.find(a=>a.id===e)??F.find(e=>e.id===E),o=function(e,a){let t=h(e,a),o=function(e,a){let t=e+a,o=Number(d(e+a,e))+Number(d(e+a,a)),r=Math.min(t<=0?0:t<=5?3*t:Math.min(t,30),(t<=5?3:1)*(t-o)),i=a<=0?0:Math.min(2*a,a<=4?5:a<=11?8:12),n=p(t),s=p(t),l=Math.max(6,Math.min(15,Math.ceil((r+i+o+n+s)/2))),c=2*(0===a),x=l+c,b=Math.round(l/3)+c,f=r+i+o+n+s+x;return{V:e,N:a,T:t,nuevas:o,rot:r,rotEvery:r?900/r:0,rotRepeat:r&&t-o?r/Math.min(t-o,30):0,prop:i,propEvery:i?900/i:0,reg:n,val:s,ads:x-b,blog:b,promo:x,total:f,promoShare:x/f}}(e,a),r=[],i=new Map,n=(e,a)=>i.set(e,[...i.get(e)??[],a]);t.filter(e=>e.isNew).forEach((e,a)=>{let t=540+(0===a&&"vivo"===e.mode?100:380);r.push({key:`n${e.id}`,min:t,kind:"vivo"===e.mode?"nueva":"nueva-subascars",offerId:e.id}),n(e.id,t)});let s=(function(e){let a=e.filter(e=>"vivo"===e.mode),t=e.filter(e=>"negociable"===e.mode),o=[],r=0,i=0;for(;r<a.length||i<t.length;)i>=t.length||r<a.length&&r/a.length<=i/t.length?o.push(a[r++]):o.push(t[i++]);return o})(t.filter(e=>!e.isNew)).slice(0,30);m(o.rot,.02).forEach((e,a)=>{let t=s[a%s.length];r.push({key:`r${t.id}-${a}`,min:e,kind:"rotacion",offerId:t.id}),n(t.id,e)});let l=new Set(t.map(e=>e.id));m(o.prop,.5).forEach((t,o)=>{let i=62e3+(7919*o+104729*a+31*e)%18e3;for(;l.has(i);)i++;l.add(i),r.push({key:`p${i}`,min:t,kind:"propuesta",code:i,mock:!0})}),m(o.reg,.3).forEach((e,a)=>r.push({key:`u${a}`,min:e,kind:"registro",mock:!0})),m(o.val,.12).forEach((e,a)=>r.push({key:`v${a}`,min:e,kind:"valorizacion",val:a,mock:!0})),m(o.ads,.18).forEach((e,a)=>r.push({key:`a${a}`,min:e,kind:a%2?"ad-publica":"ad-valoriza"})),m(o.blog,.75).forEach((e,a)=>r.push({key:`b${a}`,min:e,kind:"blog",blog:a%u.length})),r.sort((e,a)=>e.min-a.min);for(let e=1;e<r.length;e++){if(!w(r[e].kind)||!w(r[e-1].kind))continue;let a=(r[e-1].min+r[e].min)/2,t=r.findIndex((t,o)=>o>e&&!w(t.kind)&&"propuesta"!==t.kind&&t.min-r[e].min<=30&&!r.some(e=>"propuesta"===e.kind&&null!=e.offerId&&e.offerId===t.offerId&&60>Math.abs(e.min-a)));if(t<0)continue;let[o]=r.splice(t,1);r.splice(e,0,{...o,min:a})}let c=new Map(t.map(e=>[e.id,e])),x=new Map;for(let e of r){let a=null!=e.offerId?c.get(e.offerId):void 0;a&&("propuesta"===e.kind&&x.set(a.id,(x.get(a.id)??0)+1),"negociable"===a.mode&&(e.count=a.base+(x.get(a.id)??0)))}return r}(t.V,t.N),r=Math.min(8,o.length),i=o.slice(0,r).map((e,a)=>({...e,uid:`${e.key}#0`,at:-V(r-1-a)})).reverse(),n=e=>"ad-valoriza"===e.kind||"ad-publica"===e.kind,s=i.findIndex(n),c=o.find((e,a)=>a>=r&&n(e))??o.find(n);return s>0?i.unshift(...i.splice(s,1)):s<0&&c&&i.unshift({...c,uid:`${c.key}#open`}),i.forEach((e,a)=>{e.at=-V(a)}),{scenario:t.id,speed:1,inv:h(t.V,t.N),plan:o,items:i,next:o.length?r%o.length:0,now:0,lastAt:0,seq:1,nextGapS:l(1),skip:{},real:0,skipped:0,design:a}}(E),A=B,$=0,L=new Set,H=()=>L.forEach(e=>e()),D=(e,a,t=!1)=>({...e,items:[{...a,uid:`${a.key}#${e.seq}`,at:e.now,real:t},...e.items].slice(0,24),lastAt:e.now,seq:e.seq+1});function I(){if($>0)return;let e={...A,now:A.now+500*A.speed};if(e.plan.length&&e.now-e.lastAt>=1e3*e.nextGapS){let a=e.next,t={...e.skip},o=e.skipped;for(let r=0;r<e.plan.length;r++){let r=e.plan[a];if(!r.mock||!t[r.kind])break;t[r.kind]-=1,o+=1,a=(a+1)%e.plan.length}let r=D({...e,skip:t,skipped:o},e.plan[a]);e={...r,next:(a+1)%e.plan.length,nextGapS:l(r.seq)}}A=e,H()}function P(e){return L.add(e),o??=setInterval(I,500),()=>{L.delete(e),!L.size&&o&&(clearInterval(o),o=void 0)}}let U={onMouseEnter:()=>{$++},onMouseLeave:()=>{$=Math.max(0,$-1)}};function G(){let e=Math.floor(Math.random()*g.length),a={key:`real-v${A.seq}`,min:0,kind:"valorizacion",val:e},t=D(A,a,!0);A={...t,nextGapS:l(t.seq),skip:{...A.skip,[a.kind]:(A.skip[a.kind]??0)+1},real:A.real+1},H()}let T=e=>e<6e4?"Ahora":e<36e5?`hace ${Math.floor(e/6e4)} min`:`hace ${Math.floor(e/36e5)} h`,O=`
@keyframes va-val-zoom { 0% { opacity: 0; transform: scale(0.7); } 60% { opacity: 1; transform: scale(1.06); } 100% { transform: scale(1); } }
@keyframes va-val-foto { from { transform: scale(1.3); } to { transform: scale(1); } }
@keyframes va-val-brillo { from { transform: translateX(-130%) skewX(-20deg); } to { transform: translateX(340%) skewX(-20deg); } }
.va-val { position: relative; box-sizing: border-box; display: grid; gap: 2px; margin: 6px 0 4px; overflow: hidden; border-radius: 12px; color: #000; font-size: 12.5px; line-height: 1.3; }
.va-val b { font-size: 15px; font-weight: 800; }
.va-val strong { font-size: 22px; font-weight: 800; line-height: 1.15; font-variant-numeric: tabular-nums; }
.va-val--texto, .va-val--post { display: block; border-radius: 0; font-size: inherit; line-height: inherit; }
.va-val--texto p, .va-val--post p { margin: 0; color: #000; }
.va-val--post .va-post__media { background: #fff; }
.va-val--texto b, .va-val--texto strong, .va-val--post b, .va-val--post strong { color: #000; font-size: inherit; font-weight: 700; }
.va-val--tarjeta { padding: 12px 14px; border: 1px solid #E1E3E2; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
.va-val--precio { justify-items: center; padding: 12px; border: 1px solid #E1E3E2; background: #fff; text-align: center; }
.va-val--precio b { font-size: 14px; }
.va-val--precio strong { font-size: 28px; }
.va-val--foto { color: #fff; }
.va-val--foto img { display: block; width: 100%; height: 136px; object-fit: cover; }
.va-val__veil { position: absolute; inset: auto 0 0; display: grid; gap: 1px; padding: 28px 12px 10px; background: linear-gradient(180deg, rgba(20,6,56,0), rgba(20,6,56,0.92) 48%); }
.va-val--foto.va-val-fx--zoom img, .va-val--foto.va-val-fx--brillo img, .va-val--post.va-val-fx--zoom img, .va-val--post.va-val-fx--brillo img { animation: va-val-foto 0.9s cubic-bezier(0.2,0.7,0.2,1) both; }
.va-val--fila { grid-template-columns: 64px minmax(0, 1fr); align-items: center; gap: 10px; padding: 8px; border: 1px solid #E1E3E2; background: #fff; }
.va-val--fila img { width: 64px; height: 52px; border-radius: 8px; object-fit: cover; }
.va-val--fila > span { display: grid; min-width: 0; }
.va-val--fila b { font-size: 13px; }
.va-val--fila strong { font-size: 17px; }
.va-val-fx--zoom, .va-val-fx--brillo { animation: va-val-zoom 0.9s ease-out both; }
.va-val-fx--brillo::after { content: ""; position: absolute; inset: 0 auto 0 0; width: 45%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent); pointer-events: none; animation: va-val-brillo 1s 0.7s ease both; }

@keyframes va-in { from { opacity: 0; transform: translateY(-10px); } }
@keyframes va-flash { from { background: #F3EFFD; } to { background: transparent; } }
@keyframes va-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } }
@keyframes va-pill { 0% { opacity: 0; transform: translate(-50%, -6px); } 15%, 75% { opacity: 1; transform: translate(-50%, 0); } 100% { opacity: 0; transform: translate(-50%, -6px); } }
@keyframes va-ring { to { transform: rotate(360deg); } }
.va { position: relative; box-sizing: border-box; width: 100%; height: 100%; flex: 1; display: flex; flex-direction: column; overflow: hidden; border-radius: 16px;
  font-family: var(--vmc-font-display, 'Plus Jakarta Sans', -apple-system, sans-serif); }
.va-enter { animation: va-in 0.45s cubic-bezier(0.3,0,0,1); }
.va-av { box-sizing: border-box; display: inline-grid; flex: none; border-radius: 50%; }
.va-av__in { display: grid; place-items: center; width: 100%; height: 100%; overflow: hidden; border-radius: 50%; box-shadow: inset 0 0 0 1px rgba(59,23,130,0.1); }
.va-av__in img { max-width: 72%; max-height: 72%; object-fit: contain; }
.va-av__in b { font-size: 12px; font-weight: 800; color: #3B1782; }
.va-verified { flex: none; }
/* Cabecera de la referencia: 68 de alto, padding 0 24, t\xedtulo 20 + bajada 14, \xabEn vivo\xbb a la derecha. */
.va-head { box-sizing: border-box; flex: none; display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 60px; padding: 0 20px; border-bottom: 1px solid #E8DDFF; }
.va-head h3 { margin: 0; font-size: 16px; line-height: 20px; font-weight: 700; letter-spacing: -0.01em; color: #3B1782; white-space: nowrap; }
.va-head p { margin: 0; font-size: 12px; line-height: 16.8px; color: #6B6878; white-space: nowrap; }
.va-live { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #E2531A; }
.va-live i { width: 6px; height: 6px; border-radius: 50%; background: #FF7A1A; animation: va-pulse 1.4s ease-in-out infinite; }
/* Scroll integrado al sistema visual: discreto, redondeado y consistente entre vistas. */
.va-scroll { scrollbar-gutter: stable; }
/* scrollbar-color solo donde no hay ::-webkit-scrollbar (Firefox): en Edge y Chrome, si est\xe1 definido, anula los estilos de abajo. */
@supports not selector(::-webkit-scrollbar) {
  .va-scroll { scrollbar-width: thin; scrollbar-color: #8460E5 transparent; }
  .va-scroll--gris { scrollbar-color: #D9D6E2 transparent; }
  .va-scroll--vidrio { scrollbar-color: rgba(214,210,228,0.8) transparent; }
}
.va-scroll::-webkit-scrollbar { width: 8px; }
.va-scroll::-webkit-scrollbar-track { margin: 8px 0; background: transparent; }
.va-scroll::-webkit-scrollbar-thumb { border: 2px solid transparent; border-radius: 999px; background: linear-gradient(180deg, #CDBBFF, #7B5CE6) padding-box; box-shadow: 0 2px 7px rgba(59,23,130,0.18); }
.va-scroll::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #B295FF, #5A36C9) padding-box; }
/* Gris claro: fino y sin sombra, apenas se nota hasta pasar el puntero. */
.va-scroll--gris::-webkit-scrollbar { width: 7px; }
.va-scroll--gris::-webkit-scrollbar-thumb { background: #DEDBE6 padding-box; box-shadow: none; }
.va-scroll--gris::-webkit-scrollbar-thumb:hover { background: #C4C0D0 padding-box; }
/* Vidrio: blanco transl\xfacido con un filete fino, como los botones de vidrio. */
.va-scroll--vidrio::-webkit-scrollbar { width: 9px; }
.va-scroll--vidrio::-webkit-scrollbar-thumb { background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(236,233,245,0.9)) padding-box;
  box-shadow: inset 0 0 0 1px rgba(59,23,130,0.12), 0 1px 4px rgba(16,0,48,0.12); }
.va-scroll--vidrio::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #fff, rgba(226,222,240,0.95)) padding-box; }

/* Normal */
.va--normal { padding: 0 0 8px; background: #fff; box-shadow: rgba(0,0,0,0.07) 0 0 16px 4px; }
.va-list { flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: space-around; overflow-y: auto; overscroll-behavior: contain; margin: 4px 16px 0; padding: 0; list-style: none; }
.va-row { display: grid; grid-template-columns: 52px minmax(0, 1fr); gap: 10px; align-items: center; padding: 8px 0; }
.va-row + .va-row { border-top: 1px solid #E1E3E2; }
.va-row > img { width: 52px; height: 52px; border-radius: 8px; object-fit: cover; }
.va-row__txt { display: grid; gap: 3px; min-width: 0; }
.va-row__txt strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; color: #3b1782; }
.va-row__detail { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; color: #5b5b66; }

/* Timeline (X / Twitter) */
.va--timeline { background: #fff; box-shadow: rgba(0,0,0,0.07) 0 0 16px 4px; }
.va-live { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #E2531A; }
.va-live i { width: 6px; height: 6px; border-radius: 50%; background: #FF7A1A; animation: va-pulse 1.4s ease-in-out infinite; }
.va-newpill { position: absolute; top: 60px; left: 50%; z-index: 3; display: inline-flex; align-items: center; gap: 5px; padding: 5px 10px; border-radius: 999px;
  font-size: 12px; font-weight: 800; color: #fff; background: linear-gradient(135deg, #8460E5, #3B1782); box-shadow: rgba(59,23,130,0.35) 0 6px 14px;
  opacity: 0; pointer-events: none; animation: va-pill 2.2s ease forwards; }
.va-posts { flex: 1; min-height: 0; overflow-y: auto; overscroll-behavior: contain; margin: 0; padding: 0; list-style: none; }
.va-post { display: grid; grid-template-columns: 32px minmax(0, 1fr); gap: 10px; padding: 12px 20px 2px; }
.va-post.va-enter { animation: va-in 0.45s cubic-bezier(0.3,0,0,1), va-flash 2.4s ease; }
/* Hilo: el avatar y una l\xednea fina que lo une con la publicaci\xf3n siguiente (como Threads). */
.va-post__rail { display: flex; flex-direction: column; align-items: center; }
.va-post__line { flex: 1; width: 2px; min-height: 12px; margin-top: 8px; border-radius: 2px; background: #E4E0F0; }
.va-post:last-child .va-post__line { display: none; }
.va-post__main { min-width: 0; padding-bottom: 12px; }
.va-post__head { display: flex; align-items: center; gap: 5px; min-width: 0; font-size: 13px; line-height: 18px; }
.va-post__head b { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 700; color: #14112B; }
.va-post__head span { flex: none; color: #8A879C; font-size: 12px; font-weight: 400; }
.va-post__text { margin: 2px 0 0; font-size: 13px; line-height: 18px; color: #24203D; }
.va-post__text em { font-style: normal; font-weight: 700; color: #14112B; }
.va-post__media { position: relative; display: block; margin-top: 10px; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 14px; background: #F3EFFD; }
.va-post__media img { display: block; width: 100%; height: 100%; object-fit: cover; }
.va-post__media b { position: absolute; left: 10px; bottom: 10px; padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 700; color: #fff; background: rgba(16,0,48,0.62); }
/* Timeline \xb7 fila tipo listado de eBay (escala de las cards chicas) */
.va-item { display: grid; grid-template-columns: 72px minmax(0, 1fr); gap: 12px; align-items: center; padding: 12px 18px 12px 20px; }
.va-item + .va-item { border-top: 1px solid #EFEDF5; }
.va-item.va-enter { animation: va-in 0.45s cubic-bezier(0.3,0,0,1), va-flash 2.4s ease; }
.va-item__thumb { display: block; width: 72px; height: 72px; overflow: hidden; border-radius: 12px; background: #F3EFFD; }
.va-item__thumb img { display: block; width: 100%; height: 100%; object-fit: cover; }
.va-item__main { display: grid; gap: 3px; min-width: 0; }
.va-item__pill { justify-self: start; display: inline-flex; align-items: center; height: 18px; padding: 0 8px; border-radius: 999px; border: 1.5px solid var(--k);
  font-size: 9px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: var(--k); background: color-mix(in srgb, var(--k) 10%, #fff); }
.va-item__title { margin: 1px 0 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; line-height: 1.2; font-weight: 800; color: #14112B; }
.va-item__value { font-size: 14px; line-height: 1.2; font-weight: 800; letter-spacing: -0.01em; color: #4C1EBC; }
.va-item__meta { display: flex; align-items: center; gap: 3px; min-width: 0; font-size: 11px; color: #6B6880; white-space: nowrap; }
.va-item__meta > span:last-child { overflow: hidden; text-overflow: ellipsis; }
.va-item__who { flex: none; max-width: 84px; overflow: hidden; text-overflow: ellipsis; }
.va-item__meta .va-verified { width: 10px; height: 10px; }


/* Estilo X (feed a pantalla completa en m\xf3vil): la anatom\xeda del post de X. Grises y separadores de X
   (#0F1419 texto, #536471 secundario, #EFF3F4 filete); el acento es el morado de VMC en vez del azul de X. */
.va--x { border-radius: 0; box-shadow: none; color: #0F1419; }
.va--x .va-posts { padding: 0; }
.va--x.va--page { height: auto; flex: none; overflow: visible; }
.va--x.va--page .va-posts { flex: none; overflow: visible; }
.va-x { position: relative; display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 8px; padding: 12px 16px 4px; border-bottom: 1px solid #EFF3F4; cursor: pointer; transition: background 0.2s; }
.va-x:hover { background: #F7F9F9; }
.va-x.va-enter { animation: va-in 0.45s cubic-bezier(0.3,0,0,1), va-flash 2.4s ease; }
.va-x .va-av { margin-top: 2px; }
.va-x__head { display: flex; align-items: center; gap: 4px; min-width: 0; padding-right: 26px; font-size: 15px; line-height: 20px; }
.va-x__head b { flex: none; max-width: 52%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 700; color: #0F1419; }
.va-x__head .va-verified { width: 16px; height: 16px; }
.va-x__head span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #536471; font-weight: 400; }
.va-x__more { position: absolute; top: 8px; right: 8px; display: grid; place-items: center; width: 32px; height: 32px; padding: 0; border: 0; border-radius: 50%;
  background: none; color: #536471; cursor: pointer; }
.va-x__more:hover { background: rgba(59,23,130,0.1); color: #3B1782; }
.va-x__text { margin: 0; font-size: 15px; line-height: 20px; color: #0F1419; overflow-wrap: anywhere; }
.va-x__text em { font-style: normal; font-weight: 700; color: #0F1419; }
.va-hl { font-weight: 700; color: inherit; }
.va-x .va-post__media { margin-top: 12px; border: 1px solid #CFD9DE; border-radius: 16px; }
.va-x__acts { display: flex; align-items: center; justify-content: space-between; margin: 4px 0 0 -8px; max-width: 425px; }
.va-x__acts > span { display: flex; gap: 2px; }
.va-x__acts button { display: inline-flex; align-items: center; gap: 2px; height: 34px; padding: 0 8px 0 0; border: 0; background: none; cursor: pointer;
  font: 400 13px/1 var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif); color: #536471; font-variant-numeric: tabular-nums; white-space: nowrap; }
.va-x__acts button i { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; transition: background 0.2s, color 0.2s; }
.va-x__acts button:hover { color: var(--k); }
.va-x__acts button:hover i { background: color-mix(in srgb, var(--k) 12%, transparent); }
.va-x__acts button[aria-pressed="true"] { color: var(--k); }
.va-x__acts button[aria-pressed="true"] i svg path { fill: currentColor; }
.va-x__acts button[aria-pressed="true"] i { animation: va-pop 0.35s cubic-bezier(0.3,1.6,0.5,1); }
.va-x__acts button:focus-visible { outline: 2px solid #8460E5; outline-offset: 1px; border-radius: 999px; }
@keyframes va-pop { 40% { transform: scale(1.25); } }
/* Aviso de novedades estilo X: p\xedldora con mini avatares que aparece arriba. */
.va--x .va-newpill { position: sticky; top: 10px; display: flex; width: max-content; margin: 0 auto -32px; gap: 6px; padding: 4px 12px 4px 6px; font-size: 13px; background: #3B1782; }
.va-newpill .va-av { margin-left: -6px; box-shadow: 0 0 0 2px #3B1782; }
.va-newpill .va-av:first-of-type { margin-left: 0; }
@media (prefers-reduced-motion: reduce) { .va-x__acts button i { animation: none !important; } }

/* \xabVer m\xe1s\xbb (m\xf3vil, sin scroll): la card crece con su contenido y un bot\xf3n va sumando publicaciones. */
.va--auto { height: auto; flex: none; }
.va--auto .va-posts { flex: none; overflow: visible; }
.va-reveal { animation: va-in 0.45s cubic-bezier(0.3,0,0,1) both; }
.va-more { display: flex; align-items: center; justify-content: center; gap: 6px; width: calc(100% - 32px); height: 40px; margin: 6px 16px 14px; border: 1px solid #ECE8F6;
  border-radius: 999px; background: #fff; color: #3B1782; cursor: pointer; font: 700 13px/1 var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif); transition: background 0.2s, border-color 0.2s; }
.va-more:hover { background: #F8F6FF; border-color: #CDBEFF; }
.va-more:focus-visible { outline: 2px solid #8460E5; outline-offset: 2px; }
.va-more svg { transition: transform 0.25s; }
.va-more[data-less] svg { transform: rotate(180deg); }

/* Insignia del tipo de entrada (nueva / disponible / propuesta / publicidad…), para no hacer pasar la rotaci\xf3n por nueva. */
.va-tag { display: inline-flex; align-items: center; height: 18px; margin: 3px 0 3px; padding: 0 7px; border-radius: 999px; font-size: 9.5px; font-weight: 800;
  letter-spacing: 0.06em; text-transform: uppercase; color: var(--k); background: color-mix(in srgb, var(--k) 11%, #fff); }
.va-x .va-tag { margin-top: 4px; }
/* Propuesta enviada: texto + foto peque\xf1a de la oferta, sin enlace. */
.va-prop { display: grid; grid-template-columns: minmax(0, 1fr) 44px; gap: 10px; align-items: start; }
.va-prop > img { width: 44px; height: 44px; border-radius: 8px; object-fit: cover; background: #F3EFFD; }
/* Acciones de oferta en el timeline: me gusta \xb7 participantes o negociaciones \xb7 compartir. */
.va-acts { display: flex; align-items: center; gap: 2px; margin: 6px 0 0 -6px; font-size: 12px; color: #6B6880; }
.va-acts button, .va-acts__count { display: inline-flex; align-items: center; gap: 5px; min-width: 0; height: 28px; padding: 0 6px; border: 0; border-radius: 999px;
  background: none; font: inherit; color: inherit; white-space: nowrap; }
.va-acts button { flex: none; cursor: pointer; transition: background 0.2s, color 0.2s; }
.va-acts button:hover { background: #F3EFFD; color: var(--k); }
.va-acts button[aria-pressed="true"] { color: var(--k); }
.va-acts button[aria-pressed="true"] svg path { fill: currentColor; }
.va-acts button:focus-visible { outline: 2px solid #8460E5; outline-offset: 1px; }
.va-acts button:last-child { margin-left: auto; }
.va-acts svg { flex: none; width: 16px; height: 16px; }
.va-acts__count { overflow: hidden; text-overflow: ellipsis; }
.va-acts__views { flex: none; }
/* Timeline (columna angosta): fila m\xe1s compacta para que \xab38 participantes\xbb / \xab4 negociaciones\xbb entren completos. */
.va-post .va-acts { gap: 0; margin-left: -3px; font-size: 10.5px; letter-spacing: -0.015em; }
.va-post .va-acts button, .va-post .va-acts__count { gap: 2px; padding: 0 2px; }
.va-post .va-acts svg { width: 13px; height: 13px; }
/* Solo compartir (propuestas, registros, publicidad, blog): el bot\xf3n queda a la derecha, como en las ofertas. */
.va-acts--share { justify-content: flex-end; margin-top: 2px; }
.va-x__acts.va-acts--share { justify-content: flex-end; }
.va-acts__count svg { color: var(--k); }
.va-x__acts > .va-acts__count { display: inline-flex; align-items: center; gap: 2px; min-width: 0; height: 34px; padding-right: 8px; overflow: hidden; text-overflow: ellipsis;
  font: 400 13px/1 var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif); color: #536471; white-space: nowrap; }
.va-x__acts > .va-acts__count i { display: grid; place-items: center; flex: none; width: 34px; height: 34px; color: var(--k); }
/* Listado: t\xedtulos de hasta dos l\xedneas (las propuestas y la publicidad no tienen lote) y avatar cuando no hay foto. */
.va-item__title { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; white-space: normal; }
.va-item__thumb--av { display: grid; place-items: center; background: #F8F6FF; }
/* Publicidad: la foto del banner y su bot\xf3n, para que se lea como anuncio. */
.va-ad { position: relative; display: block; margin-top: 8px; overflow: hidden; border-radius: 14px; }
.va-ad--banner { aspect-ratio: 1 / 1; color: #fff; background: #2A0E6E; }
.va-x .va-ad--banner { aspect-ratio: 4 / 3; }
.va-ad--banner > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.va-ad__veil { position: absolute; z-index: 1; left: 0; right: 0; bottom: 0; display: grid; gap: 3px; justify-items: start; padding: 48px 12px 12px;
  background: linear-gradient(180deg, rgba(42,14,110,0) 0%, rgba(42,14,110,0.78) 48%, #2A0E6E 100%); }
.va-ad--banner b { font-size: 15px; line-height: 1.2; font-weight: 800; text-wrap: balance; }
.va-ad__veil span { font-size: 12px; line-height: 1.3; color: rgba(255,255,255,0.88); }
.va-ad--banner .va-glass { margin-top: 8px; }
.va-ad--card { border: 1px solid #E6E1F5; background: #fff; }
.va-ad__media { position: relative; display: block; aspect-ratio: 16 / 9; background: #F3EFFD; }
.va-ad__media img { display: block; width: 100%; height: 100%; object-fit: cover; }
.va-ad__body { display: grid; gap: 3px; justify-items: start; padding: 10px 12px 12px; }
.va-ad--card b { font-size: 14px; line-height: 1.25; font-weight: 800; color: #14112B; }
.va-ad__body span { font-size: 12px; line-height: 1.3; color: #5B5870; }
/* Bot\xf3n de vidrio del banner principal (hib-glass del design system), en chico: blanco transl\xfacido, blur y borde VYStrokes1.
   Va siempre sobre la foto, donde se lee. */
.va-glass { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 32px; padding: 0 18px; border: 0;
  border-radius: 100px; font: 600 13px/1 var(--vmc-font-display, 'Plus Jakarta Sans', -apple-system, sans-serif); color: #fff; white-space: nowrap; cursor: pointer;
  background-color: transparent;
  background-image: linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 100%), linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.03) 100%);
  -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);
  box-shadow: rgba(0,0,0,0.1) 0 8px 24px, inset 0 1px 6px rgba(255,255,255,0.45); text-shadow: rgba(0,0,0,0.25) 0 1px 3px;
  transition: background-color 0.25s, box-shadow 0.25s, transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1); }
.va-glass::before { content: ""; position: absolute; inset: 0; padding: 1.5px; border-radius: inherit; pointer-events: none;
  background: linear-gradient(94deg, #FFFFFF 0%, #F4AC59 22.1%, #8460E5 74.5%, #FFFFFF 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; }
.va-glass:hover { transform: translateY(-1px); background-color: rgba(255,255,255,0.1); box-shadow: rgba(0,0,0,0.16) 0 12px 28px, inset 0 1px 8px rgba(255,255,255,0.6); }
.va-glass:active { transform: translateY(1px) scale(0.97); background-color: rgba(32,0,104,0.22); }
.va-glass:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
.va-ad__media .va-glass { position: absolute; left: 10px; bottom: 10px; z-index: 2; }
.va-ad__badge { position: absolute; top: 8px; left: 8px; z-index: 3; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 700;
  letter-spacing: 0.03em; color: #3B1782; background: rgba(255,255,255,0.92); box-shadow: rgba(16,0,48,0.18) 0 2px 6px; }
.va-ad__when { font-weight: 600; color: #8A879C; }
/* Visualizaciones en su propia l\xednea (estilos \xabojo-palabra\xbb y \xabtexto\xbb). */
.va-views { display: flex; align-items: center; gap: 4px; margin: 8px 0 0; font-size: 12px; color: #6B6880; }
.va-views b { font-weight: 700; color: #14112B; }
.va-views svg { width: 14px; height: 14px; }
.va-acts--views { justify-content: space-between; }
/* Alineaci\xf3n de la fila (control \xabfila de acciones\xbb): todo a la izquierda o todo a la derecha, sin hueco en el medio. */
.va-acts.va-acts--izquierda, .va-x__acts.va-acts--izquierda { justify-content: flex-start; gap: 10px; }
.va-acts--izquierda button:last-child { margin-left: 0; }
.va-acts.va-acts--derecha, .va-x__acts.va-acts--derecha { justify-content: flex-end; gap: 10px; }
.va-cta, .va-x__cta { display: inline-block; margin-top: 8px; color: #3B1782; font: 700 11px/1.2 var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif); text-decoration: underline; text-underline-offset: 2px; }
.va-cta:hover, .va-x__cta:hover { color: #8460E5; }
.va-cta:focus-visible, .va-x__cta:focus-visible { outline: 2px solid #8460E5; outline-offset: 2px; border-radius: 2px; }
.va-x__cta { margin-top: 10px; font-size: 12px; }
.va-item__thumb--av .va-av__in img { width: auto; height: auto; max-width: 72%; max-height: 72%; object-fit: contain; }
`;function R({who:e,size:a=32}){let t=N[e],o="VMC"===e||"Blog VMC"===e,i="SubasCars"===e?"SC":e.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase();return(0,r.jsx)("span",{className:"va-av",style:{width:a,height:a},children:(0,r.jsx)("span",{className:"va-av__in",style:{background:o?"#3B1782":t?"#fff":"#EEE8FF"},children:t?(0,r.jsx)("img",{src:t,alt:""}):(0,r.jsx)("b",{children:i})})})}let W=()=>(0,r.jsxs)("svg",{className:"va-verified",width:"12",height:"12",viewBox:"0 0 24 24","aria-label":"Verificado",children:[(0,r.jsx)("path",{d:"M12 1.8l2.6 1.9 3.2-.2 1 3 2.6 1.9-1 3.1 1 3-2.6 1.9-1 3.1-3.2-.2L12 22.2l-2.6-1.9-3.2.2-1-3.1L2.6 15.5l1-3-1-3.1 2.6-1.9 1-3 3.2.2z",fill:"url(#va-vg)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"va-vg",x1:"0",y1:"0",x2:"1",y2:"1",children:[(0,r.jsx)("stop",{stopColor:"#8460E5"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#3B1782"})]})}),(0,r.jsx)("path",{d:"M8 12.2l2.6 2.6L16.2 9",fill:"none",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),q={heart:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:(0,r.jsx)("path",{d:"M12 20.5s-8-4.9-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 6.1-8 11-8 11z",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"})}),people:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:(0,r.jsx)("path",{d:"M15.5 19v-1.4a3.6 3.6 0 0 0-3.6-3.6H7.1a3.6 3.6 0 0 0-3.6 3.6V19M9.5 11a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8zM20.5 19v-1.3a3.3 3.3 0 0 0-2.5-3.2M15.3 4.4a3.4 3.4 0 0 1 0 6.4",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),eye:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:[(0,r.jsx)("path",{d:"M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round"}),(0,r.jsx)("circle",{cx:"12",cy:"12",r:"2.6",fill:"none",stroke:"currentColor",strokeWidth:"1.8"})]}),nodos:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:[(0,r.jsx)("circle",{cx:"18",cy:"5.5",r:"2.6",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),(0,r.jsx)("circle",{cx:"6",cy:"12",r:"2.6",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),(0,r.jsx)("circle",{cx:"18",cy:"18.5",r:"2.6",fill:"none",stroke:"currentColor",strokeWidth:"1.8"}),(0,r.jsx)("path",{d:"M8.3 10.8l7.4-4M8.3 13.2l7.4 4",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),caja:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:(0,r.jsx)("path",{d:"M12 3.5v11M8 7.5l4-4 4 4M7 10.5H6a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-1",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),avion:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:(0,r.jsx)("path",{d:"M21 3L10.5 13.5M21 3l-6.5 18-4-7.5L3 9.5z",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinejoin:"round",strokeLinecap:"round"})}),more:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":!0,children:[(0,r.jsx)("circle",{cx:"5",cy:"12",r:"1.7",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"12",cy:"12",r:"1.7",fill:"currentColor"}),(0,r.jsx)("circle",{cx:"19",cy:"12",r:"1.7",fill:"currentColor"})]}),arrowUp:(0,r.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 24 24","aria-hidden":!0,children:(0,r.jsx)("path",{d:"M12 19V5M6 11l6-6 6 6",fill:"none",stroke:"currentColor",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round"})})};function Z(e){let a=e.count??0;return"vivo"===e.mode?a?`${a} participante${1===a?"":"s"}`:"S\xe9 el primero en participar":a?`${a} negociaci${1===a?"\xf3n":"ones"}`:"Sin negociaciones a\xfan"}let Y=e=>e>=1e3?`${(e/1e3).toFixed(1).replace(".0","").replace(".",",")} mil`:String(e),J=e=>1===e?"visualizaci\xf3n":"visualizaciones",X=(e,a)=>e.views?"ojo-palabra"===a.views?(0,r.jsxs)("p",{className:"va-views",children:[q.eye,Y(e.views)," ",1===e.views?"visita":"visitas"]}):"texto"===a.views?(0,r.jsxs)("p",{className:"va-views",children:[(0,r.jsx)("b",{children:Y(e.views)})," ",J(e.views)]}):null:null;function K({t:e,d:a,x:t=!1}){let[o,n]=(0,i.useState)(!1),s=(e.likes??0)+ +!!o,l=e=>a=>{a.stopPropagation(),e?.()},d=e=>t?(0,r.jsx)("i",{children:e}):e,p=(0,r.jsx)("button",{type:"button",style:{"--k":"#4A2CE0"},"aria-label":"Compartir",onClick:l(),children:d(q[a.share])}),c="ojo"===a.views||"completo"===a.views,x=!e.mode&&"palabra"===a.acts,b=c?(0,r.jsxs)("span",{className:"va-acts__count va-acts__views",style:{"--k":"#6B6880"},"aria-label":`${e.views} visualizaciones`,children:[d(q.eye),e.views?x?`${e.views.toLocaleString("es-PE")} ${J(e.views)}`:"completo"===a.views?e.views.toLocaleString("es-PE"):Y(e.views):null]}):null,f=` va-acts--${a.acts}`;return e.mode?(0,r.jsxs)("div",{className:`${t?"va-x__acts":"va-acts"}${f}`,children:[(0,r.jsxs)("button",{type:"button",style:{"--k":"#F91880"},"aria-pressed":o,"aria-label":`Me gusta \xb7 ${s}`,onClick:l(()=>n(e=>!e)),children:[d(q.heart),s||null]}),(0,r.jsxs)("span",{className:"va-acts__count",style:{"--k":"#191C1C"},title:Z(e),children:[d(q.people),Z(e)]}),b,p]}):(0,r.jsxs)("div",{className:`${t?"va-x__acts":"va-acts"} va-acts--share${b?" va-acts--views":""}${f}`,children:[b,p]})}function Q({t:e,d:a,x:t}){let o=(0,r.jsx)("img",{src:e.imageSrc,alt:"",style:{objectPosition:e.imagePos}}),i="foto"===a.badge?(0,r.jsx)("span",{className:"va-ad__badge",children:"Publicidad"}):null,n=(0,r.jsx)("button",{type:"button",className:"va-glass",children:e.cta});return"banner"===a.ad?(0,r.jsxs)("div",{className:"va-ad va-ad--banner",children:[o,i,(0,r.jsxs)("div",{className:"va-ad__veil",children:[(0,r.jsx)("b",{children:e.title}),(0,r.jsx)("span",{children:e.detail}),n]})]}):"tarjeta"===a.ad?(0,r.jsxs)("div",{className:"va-ad va-ad--card",children:[(0,r.jsxs)("span",{className:"va-ad__media",children:[o,i,n]}),(0,r.jsxs)("div",{className:"va-ad__body",children:[(0,r.jsx)("b",{children:e.title}),(0,r.jsx)("span",{children:e.detail})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:t?"va-x__text":"va-post__text",children:[e.title,". ",(0,r.jsx)("em",{children:e.detail})]}),(0,r.jsxs)("span",{className:"va-post__media va-ad__media",children:[o,i,n]})]})}function ee({value:e,run:a}){let t=Number(e.replace(/\D/g,"")),o=Math.round(.92*t),[n,s]=(0,i.useState)(a?o:t);return(0,i.useEffect)(()=>{if(!a)return void s(t);let e=performance.now(),r=requestAnimationFrame(function a(i){let n=Math.min(1,(i-e)/1e3);s(Math.round(o+(t-o)*(1-(1-n)**3))),n<1&&(r=requestAnimationFrame(a))});return()=>cancelAnimationFrame(r)},[]),(0,r.jsxs)(r.Fragment,{children:["US$ ",n.toLocaleString("en-US")]})}function ea({t:e,d:a,fresh:t,x:o=!1}){let i=e.val,n=`va-val va-val--${a.val}${t&&"sin"!==a.valFx?` va-val-fx--${a.valFx}`:""}`,s=(0,r.jsx)(ee,{value:i.value,run:t&&"contador"===a.valFx},`${a.val}-${a.valFx}`),l=(0,r.jsx)("span",{children:"Un usuario acaba de valorizar"});return"texto"===a.val?(0,r.jsx)("div",{className:n,children:(0,r.jsxs)("p",{className:o?"va-x__text":"va-post__text",children:["Un usuario acaba de valorizar un ",(0,r.jsx)("b",{children:i.car})," por ",(0,r.jsx)("strong",{children:s}),"."]})}):"post"===a.val?(0,r.jsxs)("div",{className:n,children:[(0,r.jsxs)("p",{className:o?"va-x__text":"va-post__text",children:["Se valoriz\xf3 un ",(0,r.jsx)("b",{children:i.car})," por ",(0,r.jsx)("strong",{children:s}),"."]}),(0,r.jsx)("span",{className:"va-post__media",children:(0,r.jsx)("img",{src:i.imageSrc,alt:"Logo VMC"})})]}):"foto"===a.val?(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)("img",{src:i.imageSrc,alt:"Logo VMC"}),(0,r.jsxs)("span",{className:"va-val__veil",children:[l,(0,r.jsx)("b",{children:i.car}),(0,r.jsx)("strong",{children:s})]})]}):"fila"===a.val?(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)("img",{src:i.imageSrc,alt:"Logo VMC"}),(0,r.jsxs)("span",{children:[l,(0,r.jsx)("b",{children:i.car}),(0,r.jsx)("strong",{children:s})]})]}):(0,r.jsxs)("div",{className:n,children:[l,(0,r.jsx)("b",{children:i.car}),(0,r.jsx)("strong",{children:s})]})}let et=/(en vivo|recibe ofertas|OFERTA \d+)/,eo=({x:e=!1})=>(0,r.jsx)("a",{className:e?"va-x__cta":"va-cta",href:"https://www.vmcsubastas.com/zona/valorizar",children:"\xa1Valoriza aqu\xed!"});function er({t:e,kind:a,d:t,x:o=!1,fresh:i=!1}){let n,s=(0,r.jsxs)("p",{className:o?"va-x__text":"va-post__text",style:{"--k":e.color},children:[(n=e.title,e.mode||"propuesta"===a?n.split(et).map((e,a)=>a%2?(0,r.jsx)("strong",{className:"va-hl",children:e},a):e):n),".",e.detail?(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)("em",{children:e.detail})]}):null]});return e.val?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ea,{t:e,d:t,x:o,fresh:i}),(0,r.jsx)(eo,{x:o})]}):e.ad?(0,r.jsxs)(r.Fragment,{children:["pill"===t.badge&&"con"===t.tags?(0,r.jsx)("span",{className:"va-tag",style:{"--k":e.color},children:e.pill}):null,(0,r.jsx)(Q,{t:e,d:t,x:o}),X(e,t),(0,r.jsx)(K,{t:e,d:t,x:o})]}):(0,r.jsxs)(r.Fragment,{children:["con"===t.tags?(0,r.jsx)("span",{className:"va-tag",style:{"--k":e.color},children:e.pill}):null,"propuesta"===a&&e.imageSrc?(0,r.jsxs)("div",{className:"va-prop",children:[s,(0,r.jsx)("img",{src:e.imageSrc,alt:""})]}):s,"blog"===a&&e.imageSrc?(0,r.jsxs)("span",{className:"va-post__media va-ad__media",children:[(0,r.jsx)("img",{src:e.imageSrc,alt:"",style:{objectPosition:e.imagePos}}),(0,r.jsx)("button",{type:"button",className:"va-glass",children:e.cta})]}):e.mode&&e.imageSrc?(0,r.jsx)("span",{className:"va-post__media",children:(0,r.jsx)("img",{src:e.imageSrc,alt:""})}):null,"nueva"===a||"nueva-subascars"===a||"rotacion"===a||"propuesta"===a?(0,r.jsx)(eo,{x:o}):(0,r.jsxs)(r.Fragment,{children:[X(e,t),(0,r.jsx)(K,{t:e,d:t,x:o})]})]})}let ei=(e,a,t)=>e.ad&&"texto"===a.badge?(0,r.jsx)("span",{className:"va-ad__when",children:"Publicidad"}):t;function en({live:e}){return(0,r.jsxs)("header",{className:"va-head",children:[(0,r.jsxs)("div",{style:{display:"grid",gap:2,minWidth:0},children:[(0,r.jsx)("h3",{children:"VMC ahora"}),(0,r.jsx)("p",{children:"Actividad en tiempo real"})]}),e?(0,r.jsxs)("span",{className:"va-live",children:[(0,r.jsx)("i",{}),"En vivo"]}):null]})}function es({view:e,live:a=!0,more:t=!1,x:o=!1,head:n=!0,page:s=!1}){let l=(0,i.useSyncExternalStore)(P,()=>A,()=>B),[d,p]=(0,i.useState)(2),[c,x]=(0,i.useState)(1/0),b=t||o?l.items:l.items.slice(0,8),f=t?b.slice(0,d):b,g=t?(0,r.jsxs)("button",{type:"button",className:"va-more","data-less":d>=b.length||void 0,onClick:()=>{d>=b.length?(p(2),x(1/0)):(x(d),p(e=>Math.min(b.length,e+3)))},children:[d>=b.length?"Ver menos":"Ver m\xe1s",(0,r.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 20 20","aria-hidden":!0,children:(0,r.jsx)("path",{d:"M5 7.5l5 5 5-5",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})]}):null,v=e=>0===e?" va-enter":e>=c?" va-reveal":"",u=l.items[0],h=u&&u.at>0;return"timeline"===e&&o?(0,r.jsxs)("aside",{className:`va va--timeline va--x${s?" va--page":""}`,"aria-label":"VMC ahora",...U,children:[n?(0,r.jsx)(en,{live:a}):null,h?(0,r.jsxs)("span",{className:"va-newpill","aria-hidden":!0,children:[q.arrowUp,f.slice(0,3).map(e=>(0,r.jsx)(R,{who:C(e,l.inv).author,size:20},e.uid)),"Ver nuevas"]},u.uid):null,(0,r.jsx)("ol",{className:`va-posts${s?"":` va-scroll va-scroll--${l.design.scroll}`}`,"aria-live":"polite",children:f.map((e,a)=>{let t,o=M(C(e,l.inv,(l.now-e.at)/6e4),l.design);return(0,r.jsxs)("li",{className:`va-x${v(a)}`,children:[(0,r.jsx)(R,{who:o.author,size:40}),(0,r.jsxs)("div",{style:{minWidth:0},children:[(0,r.jsxs)("div",{className:"va-x__head",children:[(0,r.jsx)("b",{children:o.author}),(0,r.jsx)(W,{}),(0,r.jsxs)("span",{children:["@"+o.author.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^A-Za-z0-9]/g,"").toLowerCase()," \xb7 ",ei(o,l.design,(t=l.now-e.at)<6e4?"ahora":T(t).replace("hace ",""))]})]}),(0,r.jsx)("button",{type:"button",className:"va-x__more","aria-label":"M\xe1s opciones",children:q.more}),(0,r.jsx)(er,{t:o,kind:e.kind,d:l.design,x:!0,fresh:0===a})]})]},e.uid)})}),(0,r.jsx)("style",{children:O})]}):"timeline"===e?(0,r.jsxs)("aside",{className:`va va--timeline${t?" va--auto":""}`,"aria-label":"VMC ahora",...U,children:[(0,r.jsx)(en,{live:a}),h?(0,r.jsxs)("span",{className:"va-newpill","aria-hidden":!0,children:[q.arrowUp,"Nuevo"]},u.uid):null,(0,r.jsx)("ol",{className:`va-posts${t?"":` va-scroll va-scroll--${l.design.scroll}`}`,"aria-live":"polite",children:f.map((e,a)=>{let t=M(C(e,l.inv,(l.now-e.at)/6e4),l.design);return(0,r.jsxs)("li",{className:`va-post${v(a)}`,children:[(0,r.jsxs)("div",{className:"va-post__rail",children:[(0,r.jsx)(R,{who:t.author,size:32}),(0,r.jsx)("span",{className:"va-post__line"})]}),(0,r.jsxs)("div",{className:"va-post__main",children:[(0,r.jsxs)("div",{className:"va-post__head",children:[(0,r.jsx)("b",{children:t.author}),(0,r.jsx)(W,{}),(0,r.jsx)("span",{children:ei(t,l.design,T(l.now-e.at))})]}),(0,r.jsx)(er,{t:t,kind:e.kind,d:l.design,fresh:0===a})]})]},e.uid)})}),g,(0,r.jsx)("style",{children:O})]}):(0,r.jsxs)("aside",{className:`va va--normal${t?" va--auto":""}`,"aria-label":"VMC ahora",...U,children:[(0,r.jsx)(en,{live:a}),h?(0,r.jsxs)("span",{className:"va-newpill","aria-hidden":!0,children:[q.arrowUp,"Nuevo"]},u.uid):null,(0,r.jsx)("ol",{className:`va-posts${t?"":` va-scroll va-scroll--${l.design.scroll}`}`,"aria-live":"polite",children:f.map((e,a)=>{let t=M(C(e,l.inv,(l.now-e.at)/6e4),l.design),o=l.inv.find(a=>a.id===e.offerId);return(0,r.jsxs)("li",{className:`va-item${v(a)}`,children:[t.imageSrc?(0,r.jsx)("span",{className:"va-item__thumb",children:(0,r.jsx)("img",{src:t.imageSrc,alt:""})}):(0,r.jsx)("span",{className:"va-item__thumb va-item__thumb--av",children:(0,r.jsx)(R,{who:t.author,size:40})}),(0,r.jsxs)("div",{className:"va-item__main",children:["con"===l.design.tags?(0,r.jsx)("span",{className:"va-item__pill",style:{"--k":t.color},children:t.pill}):null,(0,r.jsx)("p",{className:"va-item__title",children:t.mode&&o?o.lot:t.title}),t.mode&&o?.price?(0,r.jsx)("b",{className:"va-item__value",children:o.price}):null,(0,r.jsxs)("span",{className:"va-item__meta",children:[(0,r.jsx)("span",{className:"va-item__who",children:t.author}),(0,r.jsx)(W,{}),(0,r.jsxs)("span",{children:["\xb7 ",T(l.now-e.at),t.mode?` \xb7 ${Z(t)}`:"",t.views?` \xb7 ${"completo"===l.design.views?t.views.toLocaleString("es-PE"):Y(t.views)} ${"texto"===l.design.views?J(t.views):1===t.views?"visita":"visitas"}`:""]})]})]})]},e.uid)})}),g,(0,r.jsx)("style",{children:O})]})}let el=`
.va-qa { box-sizing: border-box; display: grid; gap: 12px; width: 300px; max-width: 100%; padding: 16px; border-radius: 16px; background: #fff; box-shadow: rgba(0,0,0,0.07) 0 0 16px 4px; color: #3B1782; font-family: var(--vmc-font-display, sans-serif); }
.va-qa h2 { margin: 0; font-size: 14px; }
.va-qa__opts { display: grid; gap: 6px; }
.va-qa__opts > span { font-size: 12.5px; font-weight: 700; }
.va-qa__chip { width: max-content; padding: 6px 10px; border: 1px solid #3B1782; border-radius: 999px; background: #EFEBFB; color: #3B1782; font-size: 13px; font-weight: 600; }
.va-qa__simulate { justify-self: center; margin-top: 2px; }
`;function ed(){return(0,r.jsxs)("section",{className:"va-qa","aria-label":"Reglas de valorizaci\xf3n",children:[(0,r.jsx)("h2",{children:"Valorizaciones"}),(0,r.jsxs)("div",{className:"va-qa__opts",children:[(0,r.jsx)("span",{children:"C\xf3mo se ve"}),(0,r.jsx)("span",{className:"va-qa__chip",children:"Texto"})]}),(0,r.jsxs)("div",{className:"va-qa__opts",children:[(0,r.jsx)("span",{children:"C\xf3mo entra"}),(0,r.jsx)("span",{className:"va-qa__chip",children:"Contador"})]}),(0,r.jsx)(n.$n,{variant:"sm-guest",className:"va-qa__simulate",onClick:G,children:"Simular valorizaci\xf3n"}),(0,r.jsx)("style",{children:el})]})}},9060:(e,a,t)=>{t.d(a,{CJ:()=>Y,$n:()=>p,Y9:()=>c,DC:()=>T,ky:()=>ee,Bx:()=>D,Uj:()=>ed,Fc:()=>ei});var o=t(4568),r=t(7620);let i=`
@property --vbtn-angle { syntax: "<angle>"; inherits: false; initial-value: 135deg; }
@property --vbtn-stop-a { syntax: "<color>"; inherits: false; initial-value: oklch(0.72 0.16 55); }
@property --vbtn-stop-b { syntax: "<color>"; inherits: false; initial-value: oklch(0.55 0.22 285); }
@property --vsec-angle { syntax: "<angle>"; inherits: false; initial-value: 160deg; }
@property --vsec-stop-a { syntax: "<color>"; inherits: false; initial-value: oklch(0.38 0.20 285); }
@property --vsec-stop-b { syntax: "<color>"; inherits: false; initial-value: oklch(0.28 0.18 285); }
@property --vneg-angle { syntax: "<angle>"; inherits: false; initial-value: 135deg; }
@property --vneg-stop-a { syntax: "<color>"; inherits: false; initial-value: #00aeb1; }
@property --vneg-stop-b { syntax: "<color>"; inherits: false; initial-value: #8460e5; }
@property --vss-angle { syntax: "<angle>"; inherits: false; initial-value: 160deg; }
@property --vss-stop-a { syntax: "<color>"; inherits: false; initial-value: #8460e5; }
@property --vss-stop-b { syntax: "<color>"; inherits: false; initial-value: #3b1782; }

/* ── primary ─────────────────────────────────────────────────────────── */
.pvbtn {
  --vbtn-stop-a: var(--vmc-color-orange-600, #ed8936);
  --vbtn-stop-b: var(--vmc-color-vault-500, #8460e5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 56px;
  border-radius: var(--vmc-radius-full, 9999px);
  /* Borde GRADIENTE de Figma (1130:1778): white → #FBC47D 25% → #AE8EFF 75% → white */
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: var(--vmc-color-base-white, #ffffff);
  text-shadow: rgba(0,0,0,0.25) 0 1px 3px;
  background-image:
    linear-gradient(var(--vbtn-angle), var(--vbtn-stop-a) 0%, var(--vbtn-stop-a) 40%, var(--vbtn-stop-b) 100%),
    linear-gradient(135deg, #ffffff 0%, #fbc47d 25%, #ae8eff 75%, #ffffff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow: rgba(255,255,255,0.28) 0 1px 0 2px inset, rgba(237,137,54,0.3) 0 2px 6px;
  transition:
    --vbtn-angle 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    --vbtn-stop-a 0.35s,
    --vbtn-stop-b 0.35s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
.pvbtn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(rgba(255,255,255,0.17) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}
.pvbtn::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(135deg,
    var(--vmc-color-orange-600, oklch(0.72 0.16 55)),
    var(--vmc-color-vault-500, oklch(0.55 0.22 285))
  );
  filter: blur(14px);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s, filter 0.3s;
}
.pvbtn:hover {
  --vbtn-angle: 220deg;
  --vbtn-stop-a: var(--vmc-color-orange-400, #fbc47d);
  --vbtn-stop-b: var(--vmc-color-vault-400, #ae8eff);
  transform: translateY(-2px) scale(1.02);
  box-shadow: rgba(255,255,255,0.22) 0 1px 0 2px inset, rgba(132,96,229,0.35) 0 8px 24px, rgba(237,137,54,0.4) 0 4px 10px;
}
.pvbtn:hover::after { opacity: 0.45; filter: blur(18px); }
.pvbtn:active {
  --vbtn-angle: 135deg;
  --vbtn-stop-a: var(--vmc-color-orange-700, #d46e20);
  --vbtn-stop-b: var(--vmc-color-vault-600, #5a35c2);
  color: #d1d5dc;
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.22) 0 2px 5px 2px inset, rgba(0,0,0,0.12) 0 1px 3px;
}
.pvbtn:active::after { opacity: 0; }
.pvbtn:disabled {
  background-image: none;
  background-color: var(--vmc-color-background-disabled, #e1e3e2);
  color: var(--vmc-color-neutral-700, #99a1af);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
  border-color: transparent;
}
.pvbtn:disabled::after { display: none; }
.pvbtn:focus-visible {
  outline: transparent solid 3px;
  outline-offset: 4px;
  transform: scale(0.98);
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 5px var(--vmc-color-vault-500, oklch(0.55 0.22 285)),
    0 8px 16px -4px rgb(51.76% 37.65% 89.8% / 0.30);
}

/* ── secondary ───────────────────────────────────────────────────────── */
.psec {
  --vsec-stop-a: var(--vmc-color-vault-500, #8460e5);
  --vsec-stop-b: var(--vmc-color-vault-700, #3b1782);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 56px;
  border-radius: var(--vmc-radius-full, 9999px);
  /* Borde GRADIENTE lila de Figma (1133:2294): #CFBAFF → white 35% → #AE8EFF 65% → #CFBAFF */
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: var(--vmc-color-base-white, #ffffff);
  text-shadow: rgba(0,0,0,0.3) 0 1px 3px;
  background-image:
    linear-gradient(var(--vsec-angle), var(--vsec-stop-a) 0%, var(--vsec-stop-b) 100%),
    linear-gradient(135deg, #cfbaff 0%, #ffffff 35%, #ae8eff 65%, #cfbaff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow: rgba(255,255,255,0.22) 0 1px 0 2px inset, rgba(132,96,229,0.3) 0 2px 8px;
  transition:
    --vsec-angle 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    --vsec-stop-a 0.35s,
    --vsec-stop-b 0.35s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
.psec::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(rgba(255,255,255,0.15) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}
.psec::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(135deg,
    var(--vmc-color-vault-500, oklch(0.55 0.22 285)),
    var(--vmc-color-vault-700, oklch(0.38 0.20 285))
  );
  filter: blur(14px);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s, filter 0.3s;
}
.psec:hover {
  --vsec-angle: 219deg;
  --vsec-stop-a: var(--vmc-color-vault-400, #ae8eff);
  --vsec-stop-b: var(--vmc-color-vault-600, #5a35c2);
  transform: translateY(-2px) scale(1.02);
  box-shadow: rgba(255,255,255,0.2) 0 1px 0 2px inset, rgba(132,96,229,0.4) 0 8px 24px, rgba(132,96,229,0.25) 0 4px 10px;
}
.psec:hover::after { opacity: 0.45; filter: blur(18px); }
.psec:active {
  --vsec-angle: 160deg;
  --vsec-stop-a: var(--vmc-color-vault-700, #3b1782);
  --vsec-stop-b: var(--vmc-color-vault-900, #22005c);
  color: #d1d5dc;
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.28) 0 2px 5px 2px inset, rgba(0,0,0,0.14) 0 1px 3px;
}
.psec:active::after { opacity: 0; }
.psec:disabled {
  background-image: none;
  background-color: var(--vmc-color-background-disabled, #e1e3e2);
  color: var(--vmc-color-neutral-700, #99a1af);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
  border-color: transparent;
}
.psec:disabled::after { display: none; }
.psec:focus-visible {
  outline: transparent solid 3px;
  outline-offset: 4px;
  transform: scale(0.98);
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 5px var(--vmc-color-vault-500, oklch(0.55 0.22 285)),
    0 8px 16px -4px rgb(51.76% 37.65% 89.8% / 0.30);
}

/* ── ghost \xb7 "Ver Ofertas relacionadas" ─────────────────────────────────
   Sync SVG Figma (1143:1709/1885/1909): frame 215\xd748 con texto casi al
   borde → padding 12px (antes 28px). Estados ya coincid\xedan exacto. */
.pghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 12px;
  border-radius: var(--vmc-radius-full, 9999px);
  border: 2px solid rgba(255,255,255,0.75);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: var(--vmc-color-base-white, #ffffff);
  background: transparent;
  text-shadow: rgba(0,0,0,0.18) 0 1px 3px;
  box-shadow: rgba(255,255,255,0.2) 0 1px 0 2px inset, rgba(255,255,255,0.15) 0 0 0 1px;
  transition:
    background 0.25s,
    border-color 0.25s,
    color 0.25s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
.pghost::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(rgba(255,255,255,0.1) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}
.pghost::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(135deg,
    var(--vmc-color-orange-600, oklch(0.72 0.16 55)),
    var(--vmc-color-vault-500, oklch(0.55 0.22 285))
  );
  filter: blur(16px);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s, filter 0.3s;
}
.pghost:hover {
  background: linear-gradient(146.64deg, #fff 0%, rgb(255,240,226) 100%);
  border-color: #fff;
  color: #ed8936;
  text-shadow: rgba(0,0,0,0.25) 0 1px 3px;
  transform: translateY(-2px) scale(1.02);
  box-shadow: rgba(255,255,255,0.5) 0 1px 0 2px inset, rgba(0,0,0,0.2) 0 6px 20px;
}
.pghost:hover::after { opacity: 0.4; filter: blur(18px); }
.pghost:active {
  background: linear-gradient(146.56deg, rgb(212,110,32) 0%, rgb(183,55,0) 100%);
  border-color: #d46e20;
  color: var(--vmc-color-icon-disabled, #e1e3e2);
  text-shadow: rgba(0,0,0,0.25) 0 1px 3px;
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.22) 0 2px 5px 2px inset;
}
.pghost:active::after { opacity: 0; }
.pghost:disabled {
  /* SVG Ghost/Disabled (1153:2443): borde white 0.3, glass white 0.1→transparent, texto white 0.35 */
  background: linear-gradient(rgba(255,255,255,0.1) 0%, transparent 55%);
  border: 2px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.35);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
.pghost:focus-visible {
  outline: transparent solid 3px;
  outline-offset: 4px;
  transform: scale(0.98);
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 5px var(--vmc-color-vault-500, oklch(0.55 0.22 285)),
    0 8px 16px -4px rgb(51.76% 37.65% 89.8% / 0.30);
}

/* ── sm-guest ─────────────────────────────────────────────────────────── */
.pvbtn-sm {
  --vbtn-stop-a: var(--vmc-color-orange-600, #ed8936);
  --vbtn-stop-b: var(--vmc-color-vault-500, #8460e5);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  min-width: 116px;
  padding: 0 16px 0 4px;
  border-radius: var(--vmc-radius-full, 9999px);
  /* Borde GRADIENTE de Figma (1159:4466): white → #FBC47D 25% → #AE8EFF 75% → white */
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: var(--vmc-color-base-white, #ffffff);
  text-shadow: rgba(0,0,0,0.2) 0 1px 2px;
  background-image:
    linear-gradient(var(--vbtn-angle), var(--vbtn-stop-a) 0%, var(--vbtn-stop-a) 40%, var(--vbtn-stop-b) 100%),
    linear-gradient(135deg, #ffffff 0%, #fbc47d 25%, #ae8eff 75%, #ffffff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow: rgba(255,255,255,0.25) 0 1px 0 2px inset, rgba(237,137,54,0.25) 0 2px 6px;
  transition:
    --vbtn-angle 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    --vbtn-stop-a 0.35s,
    --vbtn-stop-b 0.35s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
.pvbtn-sm::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(rgba(255,255,255,0.15) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}
.pvbtn-sm:hover {
  --vbtn-angle: 220deg;
  --vbtn-stop-a: var(--vmc-color-orange-400, #fbc47d);
  --vbtn-stop-b: var(--vmc-color-vault-400, #ae8eff);
  transform: translateY(-1px) scale(1.02);
  box-shadow: rgba(255,255,255,0.2) 0 1px 0 2px inset, rgba(132,96,229,0.3) 0 6px 18px, rgba(237,137,54,0.35) 0 3px 8px;
}
.pvbtn-sm:active {
  --vbtn-angle: 135deg;
  --vbtn-stop-a: var(--vmc-color-orange-700, #d46e20);
  --vbtn-stop-b: var(--vmc-color-vault-600, #5a35c2);
  color: #d1d5dc;
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.22) 0 2px 4px 2px inset, rgba(255,255,255,0.28) 0 1px 0 inset, rgba(0,0,0,0.1) 0 1px 2px;
}
.pvbtn-sm:disabled {
  background-image: none;
  background-color: var(--vmc-color-background-disabled, #e1e3e2);
  color: var(--vmc-color-neutral-700, #99a1af);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
.pvbtn-sm:focus-visible {
  outline: transparent solid 2px;
  outline-offset: 3px;
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 4px var(--vmc-color-vault-500, oklch(0.55 0.22 285));
}
.pvbtn-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  /* Figma SVG 1159:4466: c\xedrculo blanco transl\xfacido (no oscuro) */
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

/* ── sm-logged-in ─────────────────────────────────────────────────────── */
.pvbtn-auth-d {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px 0 4px;
  border-radius: var(--vmc-radius-full, 9999px);
  border: 2px solid rgba(255,255,255,0.7);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: var(--vmc-color-base-white, #ffffff);
  text-shadow: rgba(0,0,0,0.22) 0 1px 2px;
  background-image: linear-gradient(var(--vbtn-angle), var(--vbtn-stop-a) 0%, var(--vbtn-stop-a) 40%, var(--vbtn-stop-b) 100%);
  box-shadow: rgba(255,255,255,0.28) 0 1px 0 2px inset, rgba(237,137,54,0.3) 0 2px 6px;
  transition:
    --vbtn-angle 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    --vbtn-stop-a 0.35s,
    --vbtn-stop-b 0.35s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
.pvbtn-auth-d:hover {
  --vbtn-angle: 220deg;
  --vbtn-stop-a: var(--vmc-color-orange-400, #fbc47d);
  --vbtn-stop-b: var(--vmc-color-vault-400, #ae8eff);
  transform: translateY(-2px) scale(1.02);
  box-shadow: rgba(255,255,255,0.22) 0 1px 0 2px inset, rgba(132,96,229,0.35) 0 8px 24px, rgba(237,137,54,0.4) 0 4px 10px;
}
.pvbtn-auth-d:active {
  --vbtn-angle: 135deg;
  --vbtn-stop-a: var(--vmc-color-orange-700, #d46e20);
  --vbtn-stop-b: var(--vmc-color-vault-600, #5a35c2);
  color: #d1d5dc;
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.22) 0 2px 5px 2px inset, rgba(0,0,0,0.12) 0 1px 3px;
}
.pvbtn-auth-d:disabled {
  background-image: none;
  background-color: var(--vmc-color-background-disabled, #e1e3e2);
  color: var(--vmc-color-neutral-700, #99a1af);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
.pvbtn-auth-d:focus-visible {
  outline: transparent solid 3px;
  outline-offset: 4px;
  transform: scale(0.98);
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 5px var(--vmc-color-vault-500, oklch(0.55 0.22 285)),
    0 8px 16px -4px rgb(51.76% 37.65% 89.8% / 0.30);
}
.pvbtn-auth-d-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}
.pvbtn-auth-d-username {
  font-weight: 700;
  opacity: 0.92;
}

/* ── prefers-reduced-motion ──────────────────────────────────────────── */
/* ── negotiable (teal → vault) \xb7 sync EXACTO del SVG export de Figma ────
   Nodos 1807:14907/14943/14957 \xb7 200\xd748 FIJO \xb7 borde gradiente teal→vault
   Spec: .claude/concorde/inbox/figma-ButtonNegotiable-svg-export.json */
.pneg {
  --vneg-stop-a: var(--vmc-color-teal-500, #00aeb1);
  --vneg-stop-b: var(--vmc-color-vault-500, #8460e5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  min-width: 200px;
  padding: 0 24px;
  border-radius: var(--vmc-radius-full, 9999px);
  /* Borde GRADIENTE de Figma (no blanco s\xf3lido): capa border-box bajo el fill */
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: var(--vmc-color-base-white, #ffffff);
  text-shadow: rgba(0,0,0,0.25) 0 1px 3px;
  background-image:
    linear-gradient(var(--vneg-angle), var(--vneg-stop-a) 0%, var(--vneg-stop-a) 40%, var(--vneg-stop-b) 100%),
    linear-gradient(135deg, #ffffff 0%, #4ddcdc 25%, #6445df 75%, #ffffff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow: rgba(255,255,255,0.28) 0 1px 0 2px inset, rgba(0,174,177,0.35) 0 2px 6px;
  transition:
    --vneg-angle 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    --vneg-stop-a 0.35s,
    --vneg-stop-b 0.35s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
.pneg::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(rgba(255,255,255,0.17) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}
.pneg::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(135deg,
    var(--vmc-color-teal-500, #00aeb1),
    var(--vmc-color-vault-500, #8460e5)
  );
  filter: blur(14px);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s, filter 0.3s;
}
.pneg:hover {
  --vneg-angle: 220deg;
  --vneg-stop-a: var(--vmc-color-teal-400, #00cccc);
  --vneg-stop-b: var(--vmc-color-vault-400, #ae8eff);
  transform: translateY(-2px) scale(1.02);
  /* Sombras exactas del SVG hover: teal cercana + glow p\xfarpura #6445DF */
  box-shadow: rgba(255,255,255,0.22) 0 1px 0 2px inset, rgba(0,174,177,0.4) 0 4px 10px, rgba(100,69,223,0.35) 0 8px 24px;
}
.pneg:hover::after { opacity: 0.45; filter: blur(18px); }
.pneg:active {
  --vneg-angle: 135deg;
  --vneg-stop-a: var(--vmc-color-teal-600, #009095);
  --vneg-stop-b: var(--vmc-color-vault-600, #5a35c2);
  color: #d1d5dc; /* exacto del SVG pressed */
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.22) 0 2px 5px 2px inset, rgba(0,0,0,0.12) 0 1px 3px;
}
.pneg:active::after { opacity: 0; }
.pneg:disabled {
  background-image: none;
  background-color: var(--vmc-color-background-disabled, #e1e3e2);
  color: var(--vmc-color-neutral-700, #99a1af);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
  border-color: transparent;
}
.pneg:disabled::after { display: none; }
.pneg:focus-visible {
  outline: transparent solid 3px;
  outline-offset: 4px;
  transform: scale(0.98);
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 5px var(--vmc-color-teal-500, #00aeb1),
    0 8px 16px -4px rgba(0,174,177,0.3);
}

/* ── outline \xb7 "Reg\xedstrate" — RECONSTRUIDO desde cero con SVGs de Figma ──
   Default 1932:10613 \xb7 Hover 1934:10627 \xb7 Pressed 1935:10631 (215\xd748, radius full)
   3 capas Figma por estado: relleno (paint0) + borde 1px gradiente (stroke) + glass white 0.1 (paint2)
   Borde = STROKE de 1px (sin stroke-width = 1px), NO 2px. Glass presente en TODOS los estados. */
.poutline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 56px;
  border-radius: var(--vmc-radius-full, 9999px);
  border: none;
  cursor: pointer;
  position: relative;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: var(--vmc-color-orange-600, #ed8936);
  /* Default: relleno transparente + glass white 0.1 → transparent 55% (paint1) */
  background-image: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 55%);
  box-shadow: none;
  transition:
    background 0.25s,
    color 0.25s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
/* Borde = anillo gradiente de 1px (centro 100% transparente, sin doble borde) — mask trick.
   Default/Hover: naranja diagonal #FF9639 → #EF852E 50% → #BE3D00 (vector ~144deg) */
.poutline::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(144deg, #ff9639 0%, #ef852e 50%, #be3d00 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 1;
  transition: background 0.25s;
}
/* Glow exterior — interacci\xf3n Concorde (no existe en Figma est\xe1tico) */
.poutline::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: linear-gradient(144deg,
    var(--vmc-color-orange-600, #ed8936),
    var(--vmc-color-orange-tint, #fff0e2)
  );
  filter: blur(16px);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s, filter 0.3s;
}
.poutline:hover {
  /* Hover 1934:10627: relleno white→#FFF0E2 horizontal (paint0) + glass (paint2). Un solo borde 1px */
  background-image:
    linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 55%),
    linear-gradient(90deg, #ffffff 0%, var(--vmc-color-orange-tint, #fff0e2) 100%);
  color: var(--vmc-color-orange-600, #ed8936);
  text-shadow: rgba(0,0,0,0.08) 0 1px 2px;
  transform: translateY(-2px) scale(1.02);
  box-shadow: rgba(190,61,0,0.18) 0 6px 18px -4px;
}
.poutline:hover::after { opacity: 0.35; filter: blur(18px); }
.poutline:active {
  /* Pressed 1935:10631: relleno #D46E20→#B73700 (paint0 ~156deg) + glass. Borde oscuro vertical */
  background-image:
    linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 55%),
    linear-gradient(156deg, #d46e20 0%, #b73700 100%);
  color: var(--vmc-color-base-white, #fff);
  text-shadow: rgba(0,0,0,0.22) 0 1px 2px;
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.16) 0 1px 3px;
}
/* Pressed: anillo oscuro #B25614 → #93420A VERTICAL (paint1 vector 180deg) */
.poutline:active::before { background: linear-gradient(180deg, #b25614 0%, #93420a 100%); }
.poutline:active::after { opacity: 0; }
.poutline:disabled {
  background-image: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 55%);
  color: rgba(237,137,54,0.4);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
.poutline:disabled::before { background: rgba(237,137,54,0.3); }
.poutline:disabled::after { opacity: 0; }
.poutline:focus-visible {
  outline: transparent solid 3px;
  outline-offset: 4px;
  transform: scale(0.98);
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 5px var(--vmc-color-orange-600, #ed8936);
}

/* ── secondary-sm \xb7 "Agenda tu visita" ──────────────────────────────────
   Sync EXACTO del SVG export de Figma (Variant=Secondary, Size=Small)
   Nodos 1442:10976 / 1464:19933 / 1464:20511 \xb7 160\xd740 fijo \xb7 \xedcono calendario
   Spec: .claude/concorde/inbox/figma-ButtonGhost-SecondarySm-svg-export.json */
.psec-sm {
  --vss-stop-a: var(--vmc-color-vault-500, #8460e5);
  --vss-stop-b: var(--vmc-color-vault-700, #3b1782);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 40px;
  min-width: 160px;
  padding: 0 12px 0 4px;
  border-radius: var(--vmc-radius-full, 9999px);
  /* Borde GRADIENTE lila de Figma (constante en los 3 estados) */
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", sans-serif);
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: var(--vmc-color-base-white, #ffffff);
  text-shadow: rgba(0,0,0,0.25) 0 1px 3px;
  background-image:
    linear-gradient(var(--vss-angle), var(--vss-stop-a) 0%, var(--vss-stop-b) 100%),
    linear-gradient(135deg, #cfbaff 0%, #ffffff 35%, #ae8eff 65%, #cfbaff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow: rgba(255,255,255,0.22) 0 1px 0 2px inset, rgba(132,96,229,0.3) 0 2px 8px;
  transition:
    --vss-angle 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    --vss-stop-a 0.35s,
    --vss-stop-b 0.35s,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.25s;
  transform: translateZ(0);
}
.psec-sm::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--vmc-radius-full, 9999px);
  background: linear-gradient(rgba(255,255,255,0.16) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}
.psec-sm:hover {
  --vss-angle: 219deg;
  --vss-stop-a: var(--vmc-color-vault-400, #ae8eff);
  --vss-stop-b: var(--vmc-color-vault-600, #5a35c2);
  transform: translateY(-1px) scale(1.02);
  box-shadow: rgba(255,255,255,0.2) 0 1px 0 2px inset, rgba(132,96,229,0.25) 0 4px 10px, rgba(132,96,229,0.4) 0 8px 24px;
}
.psec-sm:active {
  --vss-angle: 160deg;
  --vss-stop-a: var(--vmc-color-vault-700, #3b1782);
  --vss-stop-b: var(--vmc-color-vault-900, #22005c);
  color: #d1d5dc;
  transform: scale(0.97) translateY(1px);
  box-shadow: rgba(0,0,0,0.28) 0 2px 5px 2px inset, rgba(0,0,0,0.14) 0 1px 3px;
}
.psec-sm:disabled {
  background-image: none;
  background-color: var(--vmc-color-background-disabled, #e1e3e2);
  color: var(--vmc-color-neutral-700, #99a1af);
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
  border-color: transparent;
}
.psec-sm:focus-visible {
  outline: transparent solid 2px;
  outline-offset: 3px;
  box-shadow:
    0 0 0 2px var(--vmc-color-base-white, #fff),
    0 0 0 4px var(--vmc-color-vault-500, #8460e5);
}
.psec-sm-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

/* ── prefers-reduced-motion ──────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .pvbtn, .psec, .psec-sm, .pneg, .pghost, .poutline, .pvbtn-sm, .pvbtn-auth-d {
    transition: none;
  }
  .pvbtn::after, .psec::after, .pneg::after, .pghost::after, .poutline::after {
    transition: none;
  }
}
`,n="concorde-button-styles",s=!1;function l(){return(0,o.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,o.jsx)("path",{d:"M15.5412 7.36C15.5412 5.52 13.9765 4 12 4C10.0235 4 8.5412 5.52 8.5412 7.36C8.5412 9.28 10.0235 10.8 12 10.8C13.9765 10.8 15.5412 9.28 15.5412 7.36ZM5 16.4C6.4824 18.56 9.1176 20 12 20C14.8824 20 17.5176 18.56 19 16.4C19 14.16 14.3059 12.88 12 12.88C9.6941 12.88 5 14.16 5 16.4Z"})})}let d={primary:"pvbtn",negotiable:"pneg",secondary:"psec","secondary-sm":"psec-sm",ghost:"pghost",outline:"poutline","sm-guest":"pvbtn-sm","sm-logged-in":"pvbtn-auth-d"},p=(0,r.forwardRef)(function({variant:e="primary",icon:a,username:t,className:r,type:l="button",children:p,...c},x){let b;if("u">typeof document&&!s){if(!document.getElementById(n)){let e=document.createElement("style");e.id=n,e.textContent=i,document.head.appendChild(e)}s=!0}let f=d[e];return b="sm-guest"===e?(0,o.jsxs)(o.Fragment,{children:[a?(0,o.jsx)("span",{className:"pvbtn-icon",children:a}):null,p]}):"secondary-sm"===e?(0,o.jsxs)(o.Fragment,{children:[a?(0,o.jsx)("span",{className:"psec-sm-icon",children:a}):null,p]}):"sm-logged-in"===e?(0,o.jsxs)(o.Fragment,{children:[a?(0,o.jsx)("span",{className:"pvbtn-auth-d-icon",children:a}):null,"Bienvenido,"," ",(0,o.jsx)("span",{className:"pvbtn-auth-d-username",children:t??p})]}):p,(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${n}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:i}}),(0,o.jsx)("button",{ref:x,className:[f,r].filter(Boolean).join(" "),type:l,...c,children:b})]})});function c({width:e=798,logo:a,username:t,compact:r=!1,className:i=""}){return(0,o.jsxs)("header",{className:i,"data-block":"header",style:{width:e,height:64,background:"#2E0F70",display:"flex",alignItems:"center",justifyContent:a?"space-between":"flex-end",padding:"0 16px",flexShrink:0,boxSizing:"border-box"},children:[a,t&&r?(0,o.jsx)("button",{type:"button","aria-label":`Perfil de ${t}`,style:{width:40,height:40,flexShrink:0,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.7)",background:"linear-gradient(135deg, #ED8936 0%, #ED8936 40%, #8460E5 100%)",boxShadow:"rgba(255,255,255,0.28) 0 1px 0 2px inset, rgba(237,137,54,0.3) 0 2px 6px",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",cursor:"pointer",padding:0},children:(0,o.jsx)(l,{})}):t?(0,o.jsx)(p,{variant:"sm-logged-in",username:t,icon:(0,o.jsx)(l,{})}):(0,o.jsx)(p,{variant:"sm-guest",icon:(0,o.jsx)(l,{}),children:"Ingresa"})]})}let x="concorde-sbheader-styles",b=`
.psb-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  flex-shrink: 0;
  transition: background 0.15s;
}
.psb-toggle:hover { background: rgba(255,255,255,0.08); }
.psb-toggle:active { background: rgba(255,255,255,0.14); }
.psb-toggle:focus-visible { outline: 2px solid #8460E5; outline-offset: 2px; }
.sbh-logo {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  /* El logo permanece SIEMPRE visible (tambi\xe9n al colapsar): no se desvanece,
     solo lo recorta el overflow del sidebar (76px) mostrando el isotipo. */
  overflow: visible;
  opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
  .psb-toggle, .sbh-logo { transition: none; }
}
`,f=!1;function g({logo:e,collapsed:a=!1,onToggle:t,height:i=60}){let n=(0,r.useId)().replace(/:/g,"-");if("u">typeof document&&!f){if(!document.getElementById(x)){let e=document.createElement("style");e.id=x,e.textContent=b,document.head.appendChild(e)}f=!0}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${x}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:b}}),(0,o.jsxs)("div",{"data-slot":"sidebar-header",style:{width:"100%",height:i,display:"flex",alignItems:"center",paddingLeft:20,paddingRight:14,gap:8,flexShrink:0,boxSizing:"border-box"},children:[(0,o.jsx)("button",{type:"button",className:"psb-toggle",onClick:t,"aria-label":a?"Expandir men\xfa":"Colapsar men\xfa","aria-expanded":!a,children:(0,o.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,o.jsx)("path",{d:"M2.75 5.5H19.25",stroke:`url(#${n}g0)`,strokeWidth:"1.83333",strokeLinecap:"round"}),(0,o.jsx)("path",{d:"M2.75 11H19.25",stroke:`url(#${n}g1)`,strokeWidth:"1.83333",strokeLinecap:"round"}),(0,o.jsx)("path",{d:"M2.75 16.5H19.25",stroke:`url(#${n}g2)`,strokeWidth:"1.83333",strokeLinecap:"round"}),(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:`${n}g0`,x1:"5.708",y1:"4.866",x2:"6.637",y2:"9.202",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]}),(0,o.jsxs)("linearGradient",{id:`${n}g1`,x1:"5.708",y1:"10.366",x2:"6.637",y2:"14.702",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]}),(0,o.jsxs)("linearGradient",{id:`${n}g2`,x1:"5.708",y1:"15.866",x2:"6.637",y2:"20.202",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]})]})]})}),(0,o.jsx)("div",{className:"sbh-logo",children:e??(0,o.jsx)("img",{src:"/assets/brand/logo-voyager.svg",alt:"VMC Subastas",style:{height:40,width:"auto",display:"block",flexShrink:0}})})]})]})}function v({onCta:e}){return(0,o.jsx)("div",{"data-slot":"sidebar-banner",style:{width:200,height:264,borderRadius:16,background:"rgba(255,255,255,0.07)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{style:{fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)"},children:"Banner"})})}let u="concorde-sbsi-styles",h=`
.sbsi-item {
  width: 100%;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  outline: none;
  position: relative;
  background: rgba(255,255,255,0.10);
  transition: box-shadow 0.15s;
}
/* Hover — borde VYGradientOrange0 (::before) + drop #0A002E 60% (0,6,20,-4) */
.sbsi-item--hover {
  box-shadow: 0px 6px 20px -4px rgba(10,0,46,0.6);
}
/* Press/Active — borde VYStrokes1 (::before) + drop #0A002E 60% (0,12,36,-4) */
.sbsi-item--active {
  box-shadow: 0px 12px 36px -4px rgba(10,0,46,0.6);
}
/* Anillo de borde gradiente — solo visible en la franja del borde */
.sbsi-item--hover::before,
.sbsi-item--active::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  pointer-events: none;
}
.sbsi-item--hover::before {
  padding: 1px;
  /* VYGradientOrange0 — direcci\xf3n exacta del SVG (vector 94.42,127.15 → 143deg) */
  background: linear-gradient(143deg, #FF9639 0%, #EF852E 50%, #BE3D00 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
.sbsi-item--active::before {
  padding: 1.5px;
  /* VYStrokes1 — direcci\xf3n exacta del SVG (vector 94.42,127.15 → 143deg) */
  background: linear-gradient(143deg, #FFFFFF 0%, #F4AC59 22.1%, #8460E5 74.5%, #FFFFFF 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
.sbsi-item:focus-visible {
  outline: 2px solid rgba(255,255,255,0.5);
  outline-offset: 2px;
}
.sbsi-label {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #D1D5DC;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  position: relative;
  z-index: 1;
}
.sbsi-count {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
@media (prefers-reduced-motion: reduce) {
  .sbsi-item { transition: none; }
}
`,m=!1;function w({id:e,label:a,count:t,isActive:i=!1,onClick:n}){let[s,l]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1);if("u">typeof document&&!m){if(!document.getElementById(u)){let e=document.createElement("style");e.id=u,e.textContent=h,document.head.appendChild(e)}m=!0}let c=`sbsi-item${i||d?" sbsi-item--active":s?" sbsi-item--hover":""}`;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${u}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:h}}),(0,o.jsxs)("div",{role:"button",tabIndex:0,className:c,onClick:()=>n?.(e),onKeyDown:a=>{("Enter"===a.key||" "===a.key)&&(a.preventDefault(),n?.(e))},onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),p(!1)},onMouseDown:()=>p(!0),onMouseUp:()=>p(!1),"aria-current":i?"page":void 0,children:[(0,o.jsx)("span",{className:"sbsi-label",children:a}),null!=t&&(0,o.jsxs)("span",{className:"sbsi-count",children:["(",t,")"]})]})]})}let y="concorde-sbi-styles",k=`
.sbi-item {
  width: 100%;
  height: 48px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: 1.5px solid transparent;
  /* Glass fill (paint0: white 0.28 → 0.1 → 0.04) sobre base oscura #0A002E (simula
     el "behind transparent areas" de Figma: la sombra se ve a trav\xe9s del glass) +
     borde VYStrokes3 (white 0.1 → 0 @55%) */
  background:
    linear-gradient(105deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.04) 100%) padding-box,
    linear-gradient(rgba(10,0,46,0.34), rgba(10,0,46,0.34)) padding-box,
    linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 55%) border-box;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  /* Drop #0A002E (0,12,36,-4) reforzado + inner top white 22% + inner bottom black 30% */
  box-shadow:
    0px 12px 36px -4px rgba(10,0,46,0.7),
    0px 4px 14px -2px rgba(10,0,46,0.5),
    inset 0px 1px 0px rgba(255,255,255,0.22),
    inset 0px -1px 6px rgba(0,0,0,0.3);
  transition: box-shadow 0.15s, background 0.12s, border-color 0.12s, padding 0.28s cubic-bezier(0.4,0,0.2,1), gap 0.28s cubic-bezier(0.4,0,0.2,1);
}
.sbi-item--collapsed {
  padding: 0;
  gap: 0;
  justify-content: center;
}
/* Hover — fill #8460E5 38% (sobre base oscura) + borde white 44% + drop #0A0026 55%
   (0,6,18,-6) + inner top white 60% (0,1,4) */
.sbi-item--hover {
  border: 1px solid rgba(255,255,255,0.44);
  background:
    rgba(132,96,229,0.38) padding-box,
    linear-gradient(rgba(10,0,38,0.32), rgba(10,0,38,0.32)) padding-box;
  box-shadow:
    0px 6px 18px -6px rgba(10,0,38,0.55),
    inset 0px 1px 4px rgba(255,255,255,0.6);
}
/* Pressed/Active — VYGradientOrange1 + borde gradiente + drop #ED8936 (0,2,25,-2)
   + background blur 10 */
.sbi-item--active {
  border: 1.5px solid transparent;
  background:
    linear-gradient(180deg, #FF9639 0%, #EF852E 40%, #BE3D00 100%) padding-box,
    linear-gradient(143deg, #FFFFFF 0%, #F4AC59 22.1%, #8460E5 74.5%, #FFFFFF 100%) border-box;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 2px 25px -2px rgba(237,137,54,0.55);
}
.sbi-item:focus-visible {
  outline: 2px solid rgba(255,255,255,0.5);
  outline-offset: 2px;
}
.sbi-trailing {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  overflow: hidden;
  opacity: 1;
  max-width: 200px;
  transition: opacity 0.18s ease, max-width 0.28s cubic-bezier(0.4,0,0.2,1);
}
.sbi-item--collapsed .sbi-trailing {
  opacity: 0;
  max-width: 0;
  flex: 0;
}
.sbi-label {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #D1D5DC;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}
.sbi-item--active .sbi-label {
  color: #FFFFFF;
}
.sbi-sep {
  height: 1px;
  background: rgba(255,255,255,0.4);
  margin: 4px 14px;
  flex-shrink: 0;
}
.sbi-subitems {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 0 0 8px;
  margin-top: 0;
  transition: max-height 0.25s ease, opacity 0.2s ease, margin-top 0.2s ease;
}
.sbi-subitems--open {
  max-height: 400px;
  opacity: 1;
  margin-top: 4px;
}
@media (prefers-reduced-motion: reduce) {
  .sbi-item, .sbi-subitems { transition: none; }
}
`,j=!1;function _({count:e,active:a,uid:t}){return(0,o.jsxs)("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"none",style:{flexShrink:0},"aria-hidden":"true",children:[(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:`${t}bd`,x1:"3.73",y1:"-11.55",x2:"30.06",y2:"-3.04",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.221154",stopColor:"#F4AC59"}),(0,o.jsx)("stop",{offset:"0.745192",stopColor:"#8460E5"}),(0,o.jsx)("stop",{offset:"1",stopColor:"white"})]}),a&&(0,o.jsxs)("linearGradient",{id:`${t}bn`,x1:"11",y1:"6",x2:"11",y2:"16",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#FF9639"}),(0,o.jsx)("stop",{offset:"0.5",stopColor:"#EF852E"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#BE3D00"})]})]}),(0,o.jsx)("circle",{cx:"11",cy:"11",r:"10.5",fill:a?"white":"rgba(34,0,92,0.10)",stroke:`url(#${t}bd)`}),(0,o.jsx)("text",{x:"11",y:"15.2",textAnchor:"middle",fontSize:"10",fontWeight:"600",fill:a?`url(#${t}bn)`:"white",fontFamily:"inherit",children:e})]})}function C(){return(0,o.jsx)("div",{className:"sbi-sep",role:"separator","aria-hidden":"true"})}function F({id:e,icon:a,label:t,count:i,subitems:n,isActive:s=!1,collapsed:l=!1,onClick:d}){let p=(0,r.useId)().replace(/:/g,"-"),[c,x]=(0,r.useState)(!1),[b,f]=(0,r.useState)();if("u">typeof document&&!j){if(!document.getElementById(y)){let e=document.createElement("style");e.id=y,e.textContent=k,document.head.appendChild(e)}j=!0}let g=s?"active":c?"hover":"default",v=`sbi-item${s?" sbi-item--active":c?" sbi-item--hover":""}${l?" sbi-item--collapsed":""}`,u=n&&n.length>0,h=u&&s&&!l;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${y}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:k}}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,o.jsxs)("div",{role:"button",tabIndex:0,className:v,onClick:()=>d?.(e),onKeyDown:a=>{("Enter"===a.key||" "===a.key)&&(a.preventDefault(),d?.(e))},onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),"aria-current":s?"page":void 0,"aria-expanded":u?h:void 0,"aria-label":null!=i?`${t}, ${i} subitems`:t,title:l?t:void 0,children:[a(g),(0,o.jsxs)("div",{className:"sbi-trailing",children:[(0,o.jsx)("span",{className:"sbi-label",children:t}),null!=i&&(0,o.jsx)(_,{count:i,active:s,uid:p})]})]}),u&&(0,o.jsx)("div",{className:`sbi-subitems${h?" sbi-subitems--open":""}`,children:n.map(e=>(0,o.jsx)(w,{...e,isActive:b===e.id,onClick:e=>f(e)},e.id))})]})]})}function E({size:e=24,state:a,title:t,className:i=""}){let n=(0,r.useId)().replace(/:/g,"-"),[s,l]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1),c=a??(d?"active":s?"hover":"default"),x="active"===c,b=x?"white":`url(#${n}g)`;return(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i,role:t?"img":void 0,"aria-hidden":!t||void 0,style:{flexShrink:0},...a?{}:{onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),p(!1)},onMouseDown:()=>p(!0),onMouseUp:()=>p(!1)},children:[t&&(0,o.jsx)("title",{children:t}),!x&&(0,o.jsx)("defs",{children:"hover"===c?(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"12",y1:"1",x2:"12",y2:"21",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#FF9639"}),(0,o.jsx)("stop",{offset:"0.4",stopColor:"#EF852E"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#BE3D00"})]}):(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"5.58549",y1:"-11.674",x2:"29.3422",y2:"-4.95314",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]})}),(0,o.jsx)("path",{d:"M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z",fill:b})]})}function z({size:e=24,state:a,title:t,className:i=""}){let n=(0,r.useId)().replace(/:/g,"-"),[s,l]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1),c=a??(d?"active":s?"hover":"default"),x="active"===c,b=x?"white":`url(#${n}g)`;return(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i,role:t?"img":void 0,"aria-hidden":!t||void 0,style:{flexShrink:0},...a?{}:{onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),p(!1)},onMouseDown:()=>p(!0),onMouseUp:()=>p(!1)},children:[t&&(0,o.jsx)("title",{children:t}),!x&&(0,o.jsx)("defs",{children:"hover"===c?(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"12",y1:"1",x2:"12",y2:"21",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#FF9639"}),(0,o.jsx)("stop",{offset:"0.4",stopColor:"#EF852E"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#BE3D00"})]}):(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"6.03047",y1:"-10.674",x2:"30.1148",y2:"-3.74975",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]})}),(0,o.jsx)("path",{d:"M15.3867 4H9.38672V11H15.3867V4ZM20.3867 4H17.3867V11H20.3867V4ZM14.7617 13H8.38672V19H13.9367C14.2867 19 14.6242 18.9417 14.9492 18.825C15.2742 18.7083 15.5701 18.5333 15.8367 18.3L19.9867 14.875C19.8534 14.7417 19.7034 14.6417 19.5367 14.575C19.3701 14.5083 19.1951 14.4583 19.0117 14.425C18.7284 14.375 18.4534 14.3833 18.1867 14.45C17.9201 14.5167 17.6701 14.6417 17.4367 14.825L14.7367 17H10.3867V15H14.0367L15.1367 14.1C15.2201 14.05 15.2826 13.9833 15.3242 13.9C15.3659 13.8167 15.3867 13.725 15.3867 13.625C15.3867 13.4583 15.3242 13.3125 15.1992 13.1875C15.0742 13.0625 14.9284 13 14.7617 13ZM6.38672 13H4.38672V20H6.38672V13ZM7.38672 13V4C7.38672 3.45 7.58255 2.97917 7.97422 2.5875C8.36589 2.19583 8.83672 2 9.38672 2H20.3867C20.9367 2 21.4076 2.19583 21.7992 2.5875C22.1909 2.97917 22.3867 3.45 22.3867 4V11C22.3867 11.55 22.1909 12.0208 21.7992 12.4125C21.4076 12.8042 20.9367 13 20.3867 13H7.38672ZM6.38672 22H4.38672C3.83672 22 3.36589 21.8042 2.97422 21.4125C2.58255 21.0208 2.38672 20.55 2.38672 20V13C2.38672 12.45 2.58255 11.9792 2.97422 11.5875C3.36589 11.1958 3.83672 11 4.38672 11H14.7617C16.1784 11 17.5451 11.2417 18.8617 11.725C20.1784 12.2083 21.2367 13.025 22.0367 14.175L22.7117 15.2L17.1367 19.85C16.6867 20.2333 16.1867 20.5208 15.6367 20.7125C15.0867 20.9042 14.5201 21 13.9367 21H8.11172C7.92839 21.3 7.68672 21.5417 7.38672 21.725C7.08672 21.9083 6.75339 22 6.38672 22Z",fill:b})]})}function S({size:e=24,state:a,title:t,className:i=""}){let n=(0,r.useId)().replace(/:/g,"-"),[s,l]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1),c=a??(d?"active":s?"hover":"default"),x="active"===c,b=x?"white":`url(#${n}g)`;return(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i,role:t?"img":void 0,"aria-hidden":!t||void 0,style:{flexShrink:0},...a?{}:{onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),p(!1)},onMouseDown:()=>p(!0),onMouseUp:()=>p(!1)},children:[t&&(0,o.jsx)("title",{children:t}),!x&&(0,o.jsx)("defs",{children:"hover"===c?(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"12",y1:"1",x2:"12",y2:"21",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#FF9639"}),(0,o.jsx)("stop",{offset:"0.4",stopColor:"#EF852E"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#BE3D00"})]}):(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"6.48147",y1:"-6.70602",x2:"26.0807",y2:"-1.16134",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]})}),(0,o.jsx)("path",{d:"M9.52344 3.75H5.02344C4.62561 3.75 4.24408 3.90804 3.96278 4.18934C3.68147 4.47064 3.52344 4.85218 3.52344 5.25V9.75C3.52344 10.1478 3.68147 10.5294 3.96278 10.8107C4.24408 11.092 4.62561 11.25 5.02344 11.25H9.52344C9.92126 11.25 10.3028 11.092 10.5841 10.8107C10.8654 10.5294 11.0234 10.1478 11.0234 9.75V5.25C11.0234 4.85218 10.8654 4.47064 10.5841 4.18934C10.3028 3.90804 9.92126 3.75 9.52344 3.75ZM9.52344 9.75H5.02344V5.25H9.52344V9.75ZM18.5234 3.75H14.0234C13.6256 3.75 13.2441 3.90804 12.9628 4.18934C12.6815 4.47064 12.5234 4.85218 12.5234 5.25V9.75C12.5234 10.1478 12.6815 10.5294 12.9628 10.8107C13.2441 11.092 13.6256 11.25 14.0234 11.25H18.5234C18.9213 11.25 19.3028 11.092 19.5841 10.8107C19.8654 10.5294 20.0234 10.1478 20.0234 9.75V5.25C20.0234 4.85218 19.8654 4.47064 19.5841 4.18934C19.3028 3.90804 18.9213 3.75 18.5234 3.75ZM18.5234 9.75H14.0234V5.25H18.5234V9.75ZM9.52344 12.75H5.02344C4.62561 12.75 4.24408 12.908 3.96278 13.1893C3.68147 13.4706 3.52344 13.8522 3.52344 14.25V18.75C3.52344 19.1478 3.68147 19.5294 3.96278 19.8107C4.24408 20.092 4.62561 20.25 5.02344 20.25H9.52344C9.92126 20.25 10.3028 20.092 10.5841 19.8107C10.8654 19.5294 11.0234 19.1478 11.0234 18.75V14.25C11.0234 13.8522 10.8654 13.4706 10.5841 13.1893C10.3028 12.908 9.92126 12.75 9.52344 12.75ZM9.52344 18.75H5.02344V14.25H9.52344V18.75ZM18.5234 12.75H14.0234C13.6256 12.75 13.2441 12.908 12.9628 13.1893C12.6815 13.4706 12.5234 13.8522 12.5234 14.25V18.75C12.5234 19.1478 12.6815 19.5294 12.9628 19.8107C13.2441 20.092 13.6256 20.25 14.0234 20.25H18.5234C18.9213 20.25 19.3028 20.092 19.5841 19.8107C19.8654 19.5294 20.0234 19.1478 20.0234 18.75V14.25C20.0234 13.8522 19.8654 13.4706 19.5841 13.1893C19.3028 12.908 18.9213 12.75 18.5234 12.75ZM18.5234 18.75H14.0234V14.25H18.5234V18.75Z",fill:b})]})}function M({size:e=24,state:a,title:t,className:i=""}){let n=(0,r.useId)().replace(/:/g,"-"),[s,l]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1),c=a??(d?"active":s?"hover":"default"),x="active"===c,b=x?"white":`url(#${n}g)`;return(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i,role:t?"img":void 0,"aria-hidden":!t||void 0,style:{flexShrink:0},...a?{}:{onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),p(!1)},onMouseDown:()=>p(!0),onMouseUp:()=>p(!1)},children:[t&&(0,o.jsx)("title",{children:t}),!x&&(0,o.jsx)("defs",{children:"hover"===c?(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"12",y1:"1",x2:"12",y2:"21",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#FF9639"}),(0,o.jsx)("stop",{offset:"0.4",stopColor:"#EF852E"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#BE3D00"})]}):(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"6.87209",y1:"-8.40656",x2:"26.7061",y2:"-3.26306",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]})}),(0,o.jsx)("path",{d:"M3.91406 21H20.4141M4.66406 3H19.6641M5.41406 3V21M18.9141 3V21M9.16406 6.75H10.6641M9.16406 9.75H10.6641M9.16406 12.75H10.6641M13.6641 6.75H15.1641M13.6641 9.75H15.1641M13.6641 12.75H15.1641M9.16406 21V17.625C9.16406 17.004 9.66806 16.5 10.2891 16.5H14.0391C14.6601 16.5 15.1641 17.004 15.1641 17.625V21",stroke:b,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function N({size:e=24,state:a,title:t,className:i=""}){let n=(0,r.useId)().replace(/:/g,"-"),[s,l]=(0,r.useState)(!1),[d,p]=(0,r.useState)(!1),c=a??(d?"active":s?"hover":"default"),x="active"===c,b=x?"white":`url(#${n}g)`;return(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i,role:t?"img":void 0,"aria-hidden":!t||void 0,style:{flexShrink:0},...a?{}:{onMouseEnter:()=>l(!0),onMouseLeave:()=>{l(!1),p(!1)},onMouseDown:()=>p(!0),onMouseUp:()=>p(!1)},children:[t&&(0,o.jsx)("title",{children:t}),!x&&(0,o.jsx)("defs",{children:"hover"===c?(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"12",y1:"1",x2:"12",y2:"21",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#FF9639"}),(0,o.jsx)("stop",{offset:"0.4",stopColor:"#EF852E"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#BE3D00"})]}):(0,o.jsxs)("linearGradient",{id:`${n}g`,x1:"6.22694",y1:"-11.3077",x2:"28.0368",y2:"-6.01905",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]})}),(0,o.jsx)("path",{d:"M11.9 17C12.25 17 12.5458 16.8792 12.7875 16.6375C13.0292 16.3958 13.15 16.1 13.15 15.75C13.15 15.4 13.0292 15.1042 12.7875 14.8625C12.5458 14.6208 12.25 14.5 11.9 14.5C11.55 14.5 11.2542 14.6208 11.0125 14.8625C10.7708 15.1042 10.65 15.4 10.65 15.75C10.65 16.1 10.7708 16.3958 11.0125 16.6375C11.2542 16.8792 11.55 17 11.9 17ZM11 13.15H12.85C12.85 12.8667 12.8625 12.625 12.8875 12.425C12.9125 12.225 12.9667 12.0333 13.05 11.85C13.1333 11.6667 13.2375 11.4958 13.3625 11.3375C13.4875 11.1792 13.6667 10.9833 13.9 10.75C14.4833 10.1667 14.8958 9.67917 15.1375 9.2875C15.3792 8.89583 15.5 8.45 15.5 7.95C15.5 7.06667 15.2 6.35417 14.6 5.8125C14 5.27083 13.1917 5 12.175 5C11.2583 5 10.4792 5.225 9.8375 5.675C9.19583 6.125 8.75 6.75 8.5 7.55L10.15 8.2C10.2667 7.75 10.5 7.3875 10.85 7.1125C11.2 6.8375 11.6083 6.7 12.075 6.7C12.525 6.7 12.9 6.82083 13.2 7.0625C13.5 7.30417 13.65 7.625 13.65 8.025C13.65 8.30833 13.5583 8.60833 13.375 8.925C13.1917 9.24167 12.8833 9.59167 12.45 9.975C12.1667 10.2083 11.9375 10.4375 11.7625 10.6625C11.5875 10.8875 11.4417 11.125 11.325 11.375C11.2083 11.625 11.125 11.8875 11.075 12.1625C11.025 12.4375 11 12.7667 11 13.15ZM12 23L9 20H5C4.45 20 3.97917 19.8042 3.5875 19.4125C3.19583 19.0208 3 18.55 3 18V4C3 3.45 3.19583 2.97917 3.5875 2.5875C3.97917 2.19583 4.45 2 5 2H19C19.55 2 20.0208 2.19583 20.4125 2.5875C20.8042 2.97917 21 3.45 21 4V18C21 18.55 20.8042 19.0208 20.4125 19.4125C20.0208 19.8042 19.55 20 19 20H15L12 23ZM5 18H9.8L12 20.2L14.2 18H19V4H5V18Z",fill:b})]})}let V="cubic-bezier(0.4,0,0.2,1)",B=[{id:"hoy",icon:e=>(0,o.jsx)(E,{size:22,state:e}),label:"Hoy"},{id:"oferta",icon:e=>(0,o.jsx)(z,{size:22,state:e}),label:"Tipo de oferta",count:2,subitems:[{id:"en-vivo",label:"En Vivo",count:38},{id:"negociable",label:"Recibe ofertas"}]},{id:"categoria",icon:e=>(0,o.jsx)(S,{size:22,state:e}),label:"Categor\xeda",count:2},{id:"empresas",icon:e=>(0,o.jsx)(M,{size:22,state:e}),label:"Empresas",count:2}],A=[{id:"centro",icon:e=>(0,o.jsx)(N,{size:22,state:e}),label:"Centro de Ayuda"}],$="concorde-sidebar-styles",L=`
.sb-root {
  transition: width 0.28s ${V}, height 0.28s ${V};
}
.sb-content-frame {
  border: 1.5px solid transparent;
  /* Borde VYStrokes1 — direcci\xf3n exacta del SVG (paint20: vector 283.9,21.1 → 94deg) */
  background:
    linear-gradient(#2E0F70, #2E0F70) padding-box,
    linear-gradient(94deg, #FFFFFF 0%, #F4AC59 22.1%, #8460E5 74.5%, #FFFFFF 100%) border-box;
  transition: width 0.28s ${V};
}
.sb-banner {
  display: flex;
  justify-content: center;
  padding: 0 7px 4px;
  opacity: 1;
  max-height: 280px;
  overflow: hidden;
  transition: opacity 0.18s ease, max-height 0.28s ${V}, padding 0.28s ${V};
}
.sb-banner--collapsed {
  opacity: 0;
  max-height: 0;
  padding: 0;
  pointer-events: none;
}
@media (prefers-reduced-motion: reduce) {
  .sb-root, .sb-content-frame, .sb-banner { transition: none; }
}
`,H=!1;function D({logo:e,primaryItems:a=B,secondaryItems:t=A,defaultActiveId:i,height:n=1171,contentHeight:s=1171,headerHeight:l=60,collapsed:d,onCollapsedChange:p,onItemClick:c,onBannerCta:x}){let[b,f]=(0,r.useState)(!1),u=d??b,[h,m]=(0,r.useState)(i);if("u">typeof document&&!H){if(!document.getElementById($)){let e=document.createElement("style");e.id=$,e.textContent=L,document.head.appendChild(e)}H=!0}function w(e){m(e),c?.(e)}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${$}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:L}}),(0,o.jsxs)("div",{"data-slot":"sidebar",className:"sb-root",style:{width:u?76:226,height:n,background:"#2E0F70",fontFamily:'var(--vmc-font-display, "Plus Jakarta Sans", -apple-system, sans-serif)',flexShrink:0,position:"relative"},children:[(0,o.jsx)("div",{style:{position:"absolute",top:0,left:0,width:226,height:l,zIndex:2,background:"#2E0F70"},children:(0,o.jsx)(g,{logo:e,collapsed:u,onToggle:function(){let e=!u;void 0===d&&f(e),p?.(e)},height:l})}),(0,o.jsx)("div",{style:{height:s,width:u?76:226,paddingTop:l,boxSizing:"border-box",flexShrink:0,display:"flex",flexDirection:"column",overflow:"hidden",transition:`width 0.28s ${V}`},children:(0,o.jsxs)("div",{className:"sb-content-frame",style:{width:u?66:216,flex:1,margin:"0 5px 47px",display:"flex",flexDirection:"column",overflow:"hidden",borderRadius:17},children:[(0,o.jsxs)("nav",{"aria-label":"Navegaci\xf3n principal",style:{padding:0,display:"flex",flexDirection:"column",gap:6},children:[a.map(e=>(0,o.jsx)(F,{...e,isActive:h===e.id,collapsed:u,onClick:w},e.id)),t.length>0&&(0,o.jsx)(C,{}),t.map(e=>(0,o.jsx)(F,{...e,isActive:h===e.id,collapsed:u,onClick:w},e.id))]}),(0,o.jsx)("div",{style:{flex:1}}),(0,o.jsx)("div",{className:`sb-banner${u?" sb-banner--collapsed":""}`,children:(0,o.jsx)(v,{onCta:x})})]})})]})]})}let I="concorde-offercard-styles",P=`
@keyframes offercard-heart-pop {
  0%   { transform: scale(1); }
  35%  { transform: scale(1.4); }
  65%  { transform: scale(0.85); }
  85%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}
@keyframes offercard-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}

/* \xe2”€\xe2”€ Card base \xe2€” ancho y alto fijo, igual en ambas variantes \xe2”€\xe2”€ */
.pcard {
  width: 170px;
  height: 232px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 0px 16px 4px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transition:
    transform 150ms cubic-bezier(0.3, 0, 0, 1),
    box-shadow 150ms cubic-bezier(0.3, 0, 0, 1);
  cursor: pointer;
}

.pcard:hover:not(.pcard--disabled):not(.pcard--skeleton) {
  transform: translateY(-3px);
  box-shadow: oklch(0.22 0.18 285 / 0.12) 0px 12px 20px;
}

/* \xe2”€\xe2”€ Image \xe2”€\xe2”€ */
.pcard__img {
  width: 100%;
  height: 112px;
  background: oklch(0.93 0.006 220);
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pcard__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pcard__img-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
}

/* \xe2”€\xe2”€ Body \xe2”€\xe2”€ */
.pcard__body {
  display: flex;
  flex-direction: column;
  padding: 12px;
  height: 112px;
  flex-shrink: 0;
  box-sizing: border-box;
}

.pcard__meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pcard__name {
  font-family: var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #4c1ebc;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.pcard__year {
  font-family: var(--vmc-font-display, 'Plus Jakarta Sans', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #191c1c;
  margin: 0;
}

/* Price row \xe2€” pprice + price text + like */
.pcard__price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  flex-shrink: 0;
}

.pcard__price-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pcard__price-text {
  font-family: var(--vmc-font-mono, 'Roboto Mono', monospace);
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  color: #4c1ebc;
  white-space: nowrap;
}

/* Like row \xe2€” solo like (negotiable) */
.pcard__like-row {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  flex-shrink: 0;
}

/* \xe2”€\xe2”€ Variants \xe2€” bottom bars \xe2”€\xe2”€ */
.pcard--live {
  position: relative;
}
.pcard--live::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, #ff9639 0%, #ef852e 50%, #be3d00 100%);
  border-radius: 0 0 var(--vmc-radius-sm, 4px) var(--vmc-radius-sm, 4px);
}

.pcard--negotiable {
  position: relative;
}
.pcard--negotiable::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, #00edee 0%, #00d2d3 50%, #009597 100%);
  border-radius: 0 0 var(--vmc-radius-sm, 4px) var(--vmc-radius-sm, 4px);
}


/* \xe2”€\xe2”€ Price gem (auction diamond, paths exactos de Figma) \xe2”€\xe2”€ */
.pcard-pprice {
  width: 30px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* \xe2”€\xe2”€ Mini like button (self-contained) \xe2”€\xe2”€ */
.pcard-like {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  border: 1.44px solid transparent;
  background-image:
    linear-gradient(#ffffff, #ffffff),
    linear-gradient(135deg, #e8ddff 0%, #ffffff 40%, #cfbaff 75%, #ae8eff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  cursor: pointer;
  padding: 2px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(132, 96, 229, 0.14) 0px 2px 8px;
  transition:
    transform 0.15s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.2s;
  flex-shrink: 0;
  outline: none;
}
/* Glass highlight (white 0.55 → transparent) */
.pcard-like::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: linear-gradient(rgba(255, 255, 255, 0.55) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}
.pcard-like svg { position: relative; z-index: 2; }
.pcard-like:hover {
  transform: scale(1.1) translateY(-1px);
  box-shadow: rgba(32, 0, 104, 0.2) 0px 6px 14px;
}
.pcard-like:active { transform: scale(0.92); }
.pcard-like--active {
  background-image:
    linear-gradient(135deg, #8460e5 0%, #3b1782 100%),
    linear-gradient(135deg, #fbc47d 0%, #fbc47d 100%);
  box-shadow: rgba(132, 96, 229, 0.35) 0px 2px 8px, inset 0px 1px 0px rgba(255,255,255,0.22);
}
.pcard-like--pop svg {
  animation: offercard-heart-pop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) 1;
}
.pcard-like:focus-visible {
  outline: 2px solid oklch(0.62 0.20 285);
  outline-offset: 2px;
}

/* \xe2”€\xe2”€ Sombra elevada \xe2€” token "card" de Figma (X0 Y0 \xc2\xb7 Blur16 \xc2\xb7 Spread4 \xc2\xb7 #000000 10%) \xe2”€\xe2”€ */
.pcard--elevated { box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 16px 4px; }
.pcard--static.pcard--elevated:hover { box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 16px 4px; }

/* \xe2”€\xe2”€ Static showcase (sin hover/press) \xe2”€\xe2”€ */
.pcard--static, .pcard--static .pcard-like { transition: none; cursor: default; }
.pcard--static:hover { transform: none; box-shadow: rgba(0, 0, 0, 0.07) 0px 0px 16px 4px; }
.pcard--static .pcard-like { pointer-events: none; }
.pcard--static .pcard-like:hover { transform: none; box-shadow: rgba(132, 96, 229, 0.14) 0px 2px 8px; }
.pcard--static .pcard-like:active { transform: none; }

/* \xe2”€\xe2”€ Short variant (134\xc3—170) \xe2€” imagen 134\xc3—112 + t\xc3\xadtulo/a\xc3\xb1o 134\xc3—50 + barra 134\xc3—8.
   Precio (99\xc3—24) y like (24\xc3—24) van como overlays SOBRE la imagen. \xe2”€\xe2”€ */
.pcard--short { width: 134px; height: 170px; }
.pcard--short .pcard__img { height: 112px; }
.pcard__body--short {
  height: 50px;
  box-sizing: border-box;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;
}
.pcard--short .pcard__name { font-size: 15px; line-height: 18px; }
.pcard--short .pcard__year { font-size: 10px; line-height: 14px; }

/* Precio como badge (99\xc3—24) \xe2€” arriba a la izquierda de la imagen */
.pcard__price-badge {
  position: absolute;
  top: 8px;
  left: 7px;
  height: 24px;
  box-sizing: border-box;
  padding: 0 10px 0 3px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  border: 1px solid transparent;
  background-image:
    linear-gradient(135deg, #8460e5 0%, #3b1782 100%),
    linear-gradient(135deg, #8776ff 0%, rgba(255,255,255,0.4) 38%, #532bc7 68%, #8776ff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow: rgba(32, 0, 104, 0.5) 0px 2px 6px;
  z-index: 2;
}
.pcard__price-badge::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%);
  pointer-events: none;
}
.pcard__price-badge-gem { width: 20px; height: 22px; display: inline-flex; position: relative; z-index: 1; flex-shrink: 0; }
.pcard__price-badge-text {
  position: relative;
  z-index: 1;
  font-family: var(--vmc-font-mono, 'Roboto Mono', monospace);
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* Like (24\xc3—24) \xe2€” abajo a la derecha de la imagen */
.pcard__img-like { position: absolute; bottom: 8px; right: 9px; z-index: 2; }
.pcard--short .pcard__img-like .pcard-like { width: 22px; height: 22px; }
.pcard--short .pcard__img-like .pcard-like svg { width: 12px; height: 12px; }

/* \xe2”€\xe2”€ Reduced motion \xe2”€\xe2”€ */
@media (prefers-reduced-motion: reduce) {
  .pcard, .pcard-like { transition: none; }
  .pcard-like--pop svg { animation: none; }
}
`,U=!1,G={live:!0,negotiable:!1};function T({variant:e,size:a="full",name:t,year:i,price:n,imageSrc:s,imageAlt:l,badge:d,liked:p,onLikeChange:c,onClick:x,"aria-label":b,interactive:f=!0,elevated:g=!1,className:v=""}){if("u">typeof document&&!U){if(!document.getElementById(I)){let e=document.createElement("style");e.id=I,e.textContent=P,document.head.appendChild(e)}U=!0}let u=(0,r.useId)().replace(/:/g,"-"),h=void 0!==p,[m,w]=(0,r.useState)(!1),y=h?p:m,[k,j]=(0,r.useState)(!1),_=(0,r.useCallback)(e=>{e.stopPropagation();let a=!y;h||w(a),c?.(a),a&&(j(!0),setTimeout(()=>{j(!1)},420))},[y,h,c]),C=G[e]&&null!=n,F=!C,E=["pcard",`pcard--${e}`,"short"===a?"pcard--short":"",f?"":"pcard--static",g?"pcard--elevated":"",v].filter(Boolean).join(" "),z=["pcard-like",y?"pcard-like--active":"",k?"pcard-like--pop":""].filter(Boolean).join(" "),S=y?"rgba(255,255,255,0.92)":"#ffffff",M=y?"none":"#5a35c2",N=(0,o.jsx)("button",{type:"button",className:z,onClick:_,"aria-label":y?"Quitar de favoritos":"Agregar a favoritos","aria-pressed":y,children:(0,o.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:S,stroke:M,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,o.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})}),V=({w:e,h:a})=>(0,o.jsxs)("svg",{width:e,height:a,viewBox:"30 199 28 30",fill:"none","aria-hidden":"true",children:[(0,o.jsxs)("defs",{children:[(0,o.jsxs)("linearGradient",{id:`${u}-d`,gradientUnits:"userSpaceOnUse",x1:"32",y1:"215.5",x2:"55.12",y2:"228.11",children:[(0,o.jsx)("stop",{stopColor:"#00A7A8"}),(0,o.jsx)("stop",{offset:"0.4",stopColor:"#86A4E4"}),(0,o.jsx)("stop",{offset:"0.75",stopColor:"#4C1EBC"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#300089"})]}),(0,o.jsxs)("linearGradient",{id:`${u}-ds`,gradientUnits:"userSpaceOnUse",x1:"32",y1:"215.5",x2:"55.12",y2:"228.11",children:[(0,o.jsx)("stop",{stopColor:"#73DFDF"}),(0,o.jsx)("stop",{offset:"0.28",stopColor:"#ffffff",stopOpacity:"0.9"}),(0,o.jsx)("stop",{offset:"0.875",stopColor:"#452AA2",stopOpacity:"0.6"})]}),(0,o.jsxs)("linearGradient",{id:`${u}-c`,gradientUnits:"userSpaceOnUse",x1:"36.01",y1:"199.59",x2:"51.99",y2:"222.41",children:[(0,o.jsx)("stop",{stopColor:"#00ABAD"}),(0,o.jsx)("stop",{offset:"0.4",stopColor:"#86A4E4"}),(0,o.jsx)("stop",{offset:"0.75",stopColor:"#4C1EBC"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#31008A"})]}),(0,o.jsxs)("linearGradient",{id:`${u}-cg`,gradientUnits:"userSpaceOnUse",x1:"44",y1:"203",x2:"44",y2:"219",children:[(0,o.jsx)("stop",{stopColor:"#ffffff",stopOpacity:"0.45"}),(0,o.jsx)("stop",{offset:"0.5",stopColor:"#ffffff",stopOpacity:"0"})]}),(0,o.jsxs)("linearGradient",{id:`${u}-cb`,gradientUnits:"userSpaceOnUse",x1:"36.01",y1:"199.59",x2:"51.99",y2:"222.41",children:[(0,o.jsx)("stop",{stopColor:"#44D6D6"}),(0,o.jsx)("stop",{offset:"0.207",stopColor:"#E4EEFF",stopOpacity:"0.5"}),(0,o.jsx)("stop",{offset:"0.495",stopColor:"#567CD3"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#3D0D9E"})]})]}),(0,o.jsx)("path",{d:"M44 215.5L56 221L44 226.5L32 221L44 215.5Z",fill:`url(#${u}-d)`}),(0,o.jsx)("path",{d:"M44 215.5L56 221L44 226.5L32 221L44 215.5",stroke:`url(#${u}-ds)`,strokeWidth:"2",strokeLinejoin:"round"}),(0,o.jsx)("rect",{x:"34",y:"201",width:"20",height:"20",rx:"10",fill:`url(#${u}-c)`}),(0,o.jsx)("rect",{x:"36",y:"203",width:"16",height:"16",rx:"8",fill:`url(#${u}-cg)`}),(0,o.jsx)("rect",{x:"35",y:"202",width:"18",height:"18",rx:"9",stroke:`url(#${u}-cb)`,strokeWidth:"2"}),(0,o.jsx)("path",{d:"M44 206.417V215.583",stroke:"#ffffff",strokeOpacity:"0.92",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M46.0833 208.083H42.9583C42.1535 208.083 41.5 208.737 41.5 209.542C41.5 210.347 42.1535 211 42.9583 211H45.0417C45.8465 211 46.5 211.653 46.5 212.458C46.5 213.263 45.8465 213.917 45.0417 213.917H41.5",stroke:"#ffffff",strokeOpacity:"0.92",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]});return"short"===a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${I}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:P}}),(0,o.jsxs)("article",{className:E,onClick:x,"aria-label":b??t,role:x?"button":void 0,tabIndex:x?0:void 0,children:[(0,o.jsxs)("div",{className:"pcard__img",children:[s&&(0,o.jsx)("img",{src:s,alt:l??t,loading:"lazy"}),C&&(0,o.jsxs)("div",{className:"pcard__price-badge",children:[(0,o.jsx)("span",{className:"pcard__price-badge-gem",children:(0,o.jsx)(V,{w:20,h:22})}),(0,o.jsx)("span",{className:"pcard__price-badge-text",children:n})]}),(0,o.jsx)("div",{className:"pcard__img-like",children:N})]}),(0,o.jsxs)("div",{className:"pcard__body--short",children:[(0,o.jsx)("h3",{className:"pcard__name",children:t}),(0,o.jsx)("p",{className:"pcard__year",children:String(i)})]})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${I}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:P}}),(0,o.jsxs)("article",{className:E,onClick:x,"aria-label":b??t,role:x?"button":void 0,tabIndex:x?0:void 0,onKeyDown:function(e){x&&("Enter"===e.key||" "===e.key)&&x()},children:[(0,o.jsxs)("div",{className:"pcard__img",children:[s&&(0,o.jsx)("img",{src:s,alt:l??t,loading:"lazy"}),d&&(0,o.jsx)("div",{className:"pcard__img-badge",children:d})]}),(0,o.jsxs)("div",{className:"pcard__body",children:[(0,o.jsxs)("div",{className:"pcard__meta",children:[(0,o.jsx)("h3",{className:"pcard__name",children:t}),(0,o.jsx)("p",{className:"pcard__year",children:String(i)})]}),C&&(0,o.jsxs)("div",{className:"pcard__price-row",children:[(0,o.jsxs)("div",{className:"pcard__price-left",children:[(0,o.jsx)("div",{className:"pcard-pprice","aria-hidden":"true",children:(0,o.jsx)(V,{w:30,h:32})}),(0,o.jsx)("span",{className:"pcard__price-text",children:n})]}),N]}),F&&(0,o.jsx)("div",{className:"pcard__like-row",children:N})]})]})]})}let O="concorde-badgestatus-styles",R=`
/* Pulso del punto EN VIVO — frames exactos del SVG: On (6px, opacidad 1) ↔ On-1 (4px, 0.28) */
@keyframes badgestatus-live-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.28; transform: scale(0.67); }
}

/* Parpadeo del reloj PR\xd3XIMA — On (s\xf3lido) ↔ Off (0.28) */
@keyframes badgestatus-clock-blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.28; transform: scale(0.85); }
}

/* ── Base pill ── */
.badgestatus {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px 3px 6px;
  border-radius: 9999px;
  font-family: var(--vmc-font-display, 'Plus Jakarta Sans', system-ui, sans-serif);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  white-space: nowrap;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: oklch(1 0 0);
  border: 1px solid transparent;
  user-select: none;
}

/* ── EN VIVO — sync EXACTO SVG (1310:11895 / 11904) ──
   bg naranja diagonal + borde gradiente c\xe1lido + ring naranja */
.badgestatus--live {
  background-image:
    linear-gradient(135deg, #ff9639 0%, #ef852e 40%, #be3d00 100%),
    linear-gradient(135deg, #ffbc83 0%, rgba(255,255,255,0.45) 40%, #da6c1e 75%, #ffbc83 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow:
    rgba(239, 133, 46, 0.45) 0px 2px 10px,
    rgba(255, 255, 255, 0.14) 0px 1px 0px inset;
}

/* ── PR\xd3XIMA — sync EXACTO SVG (1310:11797 / 11799) ──
   bg morado diagonal + borde gradiente lila + glow morado #200068 */
.badgestatus--proxima {
  background-image:
    linear-gradient(135deg, #8460e5 0%, #3b1782 100%),
    linear-gradient(135deg, #8776ff 0%, rgba(255,255,255,0.4) 38%, #532bc7 68%, #8776ff 100%);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  box-shadow:
    rgba(32, 0, 104, 0.5) 0px 2px 10px,
    rgba(255, 255, 255, 0.1) 0px 1px 0px inset;
}

/* ── Pulsing dot (live) ── */
.badgestatus-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #ffffff;
  flex-shrink: 0;
  animation: badgestatus-live-pulse 1.4s ease-in-out infinite;
  position: relative;
}

/* ── Blinking clock (proxima) ── */
.badgestatus-clock {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  animation: badgestatus-clock-blink 1.4s ease-in-out infinite;
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .badgestatus-dot   { animation: none; }
  .badgestatus-clock { animation: none; }
}
`,W=!1;function q(){return(0,o.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"rgba(255,255,255,0.92)",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("polyline",{points:"12 6 12 12 16 14"})]})}let Z={live:"EN VIVO",proxima:"PR\xd3XIMA"};function Y({variant:e,label:a,icon:t=!0,className:r=""}){if("u">typeof document&&!W){if(!document.getElementById(O)){let e=document.createElement("style");e.id=O,e.textContent=R,document.head.appendChild(e)}W=!0}let i=a??Z[e],n=["badgestatus",`badgestatus--${e}`,r].filter(Boolean).join(" ");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${O}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:R}}),(0,o.jsxs)("span",{className:n,role:"status","aria-label":i,children:[t&&"live"===e?(0,o.jsx)("span",{className:"badgestatus-dot","aria-hidden":"true"}):null,t&&"proxima"===e?(0,o.jsx)("span",{className:"badgestatus-clock","aria-hidden":"true",children:(0,o.jsx)(q,{})}):null,(0,o.jsx)("span",{children:i})]})]})}let J="concorde-profilebutton-styles",X=`
.pprofilebtn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--vmc-font-display, "Plus Jakarta Sans", -apple-system, sans-serif);
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
}

/* Label — default morado #3B1782 (Figma text fill) */
.pprofilebtn__label {
  color: #3b1782;
  transition: color 0.2s ease;
}

/* C\xedrculo 16px con chevron. color = color del chevron (currentColor) */
.pprofilebtn__circle {
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #ef852e;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.25s ease,
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}
/* Default: anillo gradiente naranja 1.5px (stroke #FF9C3B → #EF852E 40% → #BE3D00) — mask */
.pprofilebtn__circle::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(135deg, #ff9c3b 0%, #ef852e 40%, #be3d00 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.pprofilebtn__chevron {
  position: relative;
  z-index: 1;
  display: block;
}

/* ── Hover: c\xedrculo RELLENO naranja + sombra, chevron blanco, lift ── */
.pprofilebtn:hover:not(:disabled) .pprofilebtn__circle {
  background: linear-gradient(90deg, #ff9639 0%, #ef852e 40%, #be3d00 100%);
  color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}
.pprofilebtn:hover:not(:disabled) .pprofilebtn__circle::before { opacity: 0; }

/* ── Pressed: texto + chevron gris #99A1AF, c\xedrculo naranja oscuro #B25614 → #93420A ── */
.pprofilebtn:active:not(:disabled) .pprofilebtn__label { color: #99a1af; }
.pprofilebtn:active:not(:disabled) .pprofilebtn__circle {
  background: linear-gradient(90deg, #b25614 0%, #93420a 100%);
  color: #99a1af;
  box-shadow: none;
  transform: translateY(0);
}
.pprofilebtn:active:not(:disabled) .pprofilebtn__circle::before { opacity: 0; }

/* ── Focus ── */
.pprofilebtn:focus-visible {
  outline: none;
  border-radius: 8px;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #8460e5;
}

/* ── Disabled ── */
.pprofilebtn:disabled {
  cursor: not-allowed;
}
.pprofilebtn:disabled .pprofilebtn__label { color: #99a1af; }
.pprofilebtn:disabled .pprofilebtn__circle {
  background: #e1e3e2;
  color: #ffffff;
}
.pprofilebtn:disabled .pprofilebtn__circle::before { opacity: 0; }

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .pprofilebtn__label,
  .pprofilebtn__circle,
  .pprofilebtn__circle::before { transition: none; }
  .pprofilebtn:hover:not(:disabled) .pprofilebtn__circle { transform: none; }
}
`,K=!1;function Q(){return(0,o.jsx)("svg",{className:"pprofilebtn__chevron",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:(0,o.jsx)("path",{d:"M6 11L10 8L6 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function ee({children:e="Ir al Perfil",href:a,onClick:t,disabled:r=!1,className:i="","aria-label":n}){if("u">typeof document&&!K){if(!document.getElementById(J)){let e=document.createElement("style");e.id=J,e.textContent=X,document.head.appendChild(e)}K=!0}let s=["pprofilebtn",i].filter(Boolean).join(" "),l=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"pprofilebtn__label",children:e}),(0,o.jsx)("span",{className:"pprofilebtn__circle","aria-hidden":"true",children:(0,o.jsx)(Q,{})})]});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${J}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:X}}),a&&!r?(0,o.jsx)("a",{className:s,href:a,onClick:t,"aria-label":n,children:l}):(0,o.jsx)("button",{type:"button",className:s,onClick:t,disabled:r,"aria-label":n,children:l})]})}let ea="cubic-bezier(0.4,0,0.2,1)",et="concorde-sidebar-mobile-styles",eo=`
.sbm-root { position: relative; }

/* Marco opcional para previews: alto fijo con scroll interno; su transform crea el
   containing block que ancla el drawer fixed dentro del marco (ver prop frameHeight). */
.sbm-frame {
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translateZ(0);
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.sbm-frame::-webkit-scrollbar { width: 0; height: 0; display: none; }
.sbm-frame--locked { overflow: hidden; }

.sbm-trigger {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 7;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  background: #2E0F70;
  box-shadow: 0 6px 18px -6px rgba(10,0,46,0.6);
  cursor: pointer;
  transition: transform 0.15s, background 0.15s, opacity 0.2s;
}
.sbm-trigger:hover { background: #3a1a86; }
.sbm-trigger:active { transform: scale(0.94); }
.sbm-trigger:focus-visible { outline: 2px solid #8460E5; outline-offset: 2px; }

.sbm-backdrop {
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(10,0,38,0.55);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s ${ea};
}
.sbm-backdrop--open { opacity: 1; pointer-events: auto; }

.sbm-panel {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 41;
  width: 226px;
  max-width: 86%;
  transform: translateX(-100%);
  transition: transform 0.3s ${ea};
  box-shadow: 0 0 40px -4px rgba(10,0,46,0.6);
  will-change: transform;
}
.sbm-panel--open { transform: translateX(0); }
.sbm-panel-inner { height: 100%; }
.sbm-panel-inner > [data-slot="sidebar"] { height: 100% !important; }

@media (prefers-reduced-motion: reduce) {
  .sbm-trigger, .sbm-backdrop, .sbm-panel { transition: none; }
}
`,er=!1;function ei({children:e,logo:a,primaryItems:t,secondaryItems:i,defaultActiveId:n,open:s,onOpenChange:l,onItemClick:d,onBannerCta:p,closeOnItemClick:c=!1,showTrigger:x=!1,drawerContentHeight:b=780,frameHeight:f}){let g=(0,r.useRef)(null),[v,u]=(0,r.useState)(!1),h=s??v;function m(e){void 0===s&&u(e),l?.(e)}if("u">typeof document&&!er){if(!document.getElementById(et)){let e=document.createElement("style");e.id=et,e.textContent=eo,document.head.appendChild(e)}er=!0}return(0,r.useEffect)(function(){if(h)return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e);function e(e){"Escape"===e.key&&m(!1)}},[h]),(0,r.useEffect)(function(){if(!h||"u"<typeof document)return;let e=f?g.current:null,a=document.body.style.overflow,t=0;return e?(t=e.scrollTop,e.scrollTop=0):document.body.style.overflow="hidden",()=>{e?e.scrollTop=t:document.body.style.overflow=a}},[h,f]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${et}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:eo}}),(0,o.jsxs)("div",{ref:g,className:`sbm-root${f?" sbm-frame":""}${f&&h?" sbm-frame--locked":""}`,style:f?{height:f}:void 0,children:[e,x?(0,o.jsx)("button",{type:"button",className:"sbm-trigger",onClick:()=>m(!0),"aria-label":"Abrir men\xfa","aria-expanded":h,style:{opacity:+!h,pointerEvents:h?"none":"auto"},children:(0,o.jsx)(ep,{})}):null,(0,o.jsx)("div",{className:`sbm-backdrop${h?" sbm-backdrop--open":""}`,onClick:()=>m(!1),"aria-hidden":"true"}),(0,o.jsx)("div",{className:`sbm-panel${h?" sbm-panel--open":""}`,role:"dialog","aria-modal":"true","aria-label":"Navegaci\xf3n","aria-hidden":!h,children:(0,o.jsx)("div",{className:"sbm-panel-inner",children:(0,o.jsx)(D,{logo:a,primaryItems:t,secondaryItems:i,defaultActiveId:n,height:"100%",contentHeight:b,collapsed:!1,onCollapsedChange:()=>m(!1),onItemClick:function(e){d?.(e),c&&m(!1)},onBannerCta:p})})})]})]})}let en="concorde-sidebar-menu-button-styles",es=`
.sbm-menu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.sbm-menu-btn:hover { background: rgba(255,255,255,0.10); }
.sbm-menu-btn:active { transform: scale(0.92); }
.sbm-menu-btn:focus-visible { outline: 2px solid #8460E5; outline-offset: 2px; }
`,el=!1;function ed({onClick:e,expanded:a=!1}){if("u">typeof document&&!el){if(!document.getElementById(en)){let e=document.createElement("style");e.id=en,e.textContent=es,document.head.appendChild(e)}el=!0}return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{id:`${en}-ssr`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:es}}),(0,o.jsx)("button",{type:"button",className:"sbm-menu-btn",onClick:e,"aria-label":"Abrir men\xfa","aria-expanded":a,children:(0,o.jsx)(ep,{size:24})})]})}function ep({size:e=24}){let a=`sbm-hamburger-${(0,r.useId)().replace(/:/g,"")}`;return(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 22 22",fill:"none","aria-hidden":"true",children:[(0,o.jsx)("path",{d:"M2.75 5.5H19.25",stroke:`url(#${a})`,strokeWidth:"1.83333",strokeLinecap:"round"}),(0,o.jsx)("path",{d:"M2.75 11H19.25",stroke:`url(#${a})`,strokeWidth:"1.83333",strokeLinecap:"round"}),(0,o.jsx)("path",{d:"M2.75 16.5H19.25",stroke:`url(#${a})`,strokeWidth:"1.83333",strokeLinecap:"round"}),(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:a,x1:"2.75",y1:"5.5",x2:"6",y2:"18",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#CFBAFF"}),(0,o.jsx)("stop",{offset:"0.35",stopColor:"white"}),(0,o.jsx)("stop",{offset:"0.65",stopColor:"#AE8EFF"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#CFBAFF"})]})})]})}}}]);