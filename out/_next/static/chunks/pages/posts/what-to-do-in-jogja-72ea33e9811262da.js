(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[194],{34651:function(a,e,n){"use strict";n.d(e,{Ee:function(){return h}});var t=n(42846),i=n(15031),r=n(67294),o=n(44697);function s(){return s=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},s.apply(this,arguments)}function l(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}var u=["htmlWidth","htmlHeight","alt"],c=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=r.forwardRef((function(a,e){var n=a.htmlWidth,t=a.htmlHeight,i=a.alt,o=l(a,u);return r.createElement("img",s({width:n,height:t,ref:e,alt:i},o))}));i.Ts&&(d.displayName="NativeImage");var h=(0,t.Gp)((function(a,e){var n=a.fallbackSrc,u=a.fallback,h=a.src,g=a.srcSet,m=a.align,k=a.fit,p=a.loading,j=a.ignoreFallback,b=a.crossOrigin,f=a.fallbackStrategy,x=void 0===f?"beforeLoadOrError":f,y=a.referrerPolicy,w=l(a,c),v=null!=p||j||!(void 0!==n||void 0!==u),E=function(a){var e=a.loading,n=a.src,t=a.srcSet,i=a.onLoad,s=a.onError,l=a.crossOrigin,u=a.sizes,c=a.ignoreFallback,d=(0,r.useState)("pending"),h=d[0],g=d[1];(0,r.useEffect)((function(){g(n?"loading":"pending")}),[n]);var m=(0,r.useRef)(),k=(0,r.useCallback)((function(){if(n){p();var a=new Image;a.src=n,l&&(a.crossOrigin=l),t&&(a.srcset=t),u&&(a.sizes=u),e&&(a.loading=e),a.onload=function(a){p(),g("loaded"),null==i||i(a)},a.onerror=function(a){p(),g("failed"),null==s||s(a)},m.current=a}}),[n,l,t,u,i,s,e]),p=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.a)((function(){if(!c)return"loading"===h&&k(),function(){p()}}),[h,k,c]),c?"loaded":h}(s({},a,{ignoreFallback:v})),S=function(a,e){return"loaded"!==a&&"beforeLoadOrError"===e||"failed"===a&&"onError"===e}(E,x),I=s({ref:e,objectFit:k,objectPosition:m},v?w:(0,i.CE)(w,["onError","onLoad"]));return S?u||r.createElement(t.m$.img,s({as:d,className:"chakra-image__placeholder",src:n},I)):r.createElement(t.m$.img,s({as:d,src:h,srcSet:g,crossOrigin:b,loading:p,referrerPolicy:y,className:"chakra-image"},I))}));i.Ts&&(h.displayName="Image")},30659:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/what-to-do-in-jogja",function(){return n(61013)}])},74821:function(a,e,n){"use strict";n.d(e,{Z:function(){return u}});var t=n(85893),i=n(67294),r=n(86541),o=n(10894),s=n(8193),l=n(63750);function u(a){var e=a.postUrl,n=(0,i.useState)(!1),u=n[0],c=n[1];return(0,t.jsx)(r.u,{label:u?"Copied!":"Copy Blog to clipboard",zIndex:20,shouldWrapChildren:!0,children:(0,t.jsx)(o.JO,{as:u?s.mny:l.etG,cursor:u?"default":"pointer",color:u?"green":"primary",boxSize:6,zIndex:"20",onClick:function(){c(!0),navigator.clipboard.writeText(e)}})})}},83487:function(a,e,n){"use strict";n.d(e,{Z:function(){return u}});var t=n(85893),i=n(68527),r=n(89583),o=n(10894);function s(a){var e=a.icon,n=a.link,i=a.hoverColour;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:(0,t.jsx)(o.JO,{as:e,cursor:"pointer",_hover:{color:i},color:"#0070f3"})})})}var l=n(61654);function u(){return(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsxs)(i.xu,{p:"20px 0 50px 0",w:"100%",borderBottom:"2px solid #868484",children:[(0,t.jsx)(i.kC,{justify:"center",gap:"5%",paddingBottom:"30px",className:"footerLinks",children:(0,t.jsx)(l.Z,{})}),(0,t.jsxs)(i.kC,{justify:"center",gap:"5%",children:[(0,t.jsx)(s,{icon:r.Zf_,link:"https://www.instagram.com/mynameisarni/",hoverColour:"#e04d93"}),(0,t.jsx)(s,{icon:r.V2E,link:"https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg",hoverColour:"#fe2c3c"})]})]}),(0,t.jsx)(i.xv,{paddingTop:"20px",paddingBottom:"20px",color:"gray",textAlign:"center",fontSize:"14px",children:"\xa9 Aidan John Lowson & Arni Riani Lowson"})]})}},61654:function(a,e,n){"use strict";n.d(e,{Z:function(){return l}});var t=n(85893),i=(n(67294),n(41664)),r=n.n(i),o=n(2631),s=n(20958);function l(){var a=(0,o.Z)(),e=(0,s.Z)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{href:"/",children:(0,t.jsx)("a",{children:"Ind"!==e?"Home":"Rumah"})}),(0,t.jsx)(r(),{href:"/posts",children:(0,t.jsx)("a",{children:"Ind"!==e?"All Blogs":"Semua Blog"})}),!a&&(0,t.jsx)("span",{children:"|"}),(0,t.jsx)(r(),{href:"/about-us",passHref:!0,children:(0,t.jsx)("a",{children:"Ind"!==e?"About Us":"Tentang kami"})}),(0,t.jsx)(r(),{href:"/contact-us",passHref:!0,children:(0,t.jsx)("a",{children:"Ind"!==e?"Contact Us":"Hubungi kami"})}),(0,t.jsx)(r(),{href:"/privacy-policy",passHref:!0,children:(0,t.jsx)("a",{children:"Ind"!==e?"Privacy Policy":"Kebijakan pribadi"})})]})}},75913:function(a,e,n){"use strict";n.d(e,{Z:function(){return d}});var t=n(85893),i=n(68527),r=(n(67294),n(41664)),o=n.n(r),s=n(61654),l=n(2631),u=n(96328),c=n.n(u);function d(){var a=(0,l.Z)();return(0,t.jsxs)(i.kC,{className:c().topbarContainer,children:[!a&&(0,t.jsx)(i.xu,{flexGrow:1,children:(0,t.jsx)(o(),{href:"/",passHref:!0,children:(0,t.jsx)(i.xv,{className:c().logo,children:"AA"})})}),(0,t.jsx)(s.Z,{})]})}},77233:function(a,e,n){"use strict";var t=n(85893),i=n(9008),r=n.n(i),o=(n(4298),function(a){var e=a.url,n=a.title,t=a.description,i=a.image,r=a.createdAt,o=a.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:t},{name:"twitter:image:src",content:i},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:n},{name:"og:type",content:"website"},{name:"og:url",content:e},{name:"og:image",content:i},{name:"og:description",content:t},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:r||(new Date).toISOString()},{name:"og:modified_time",content:o||(new Date).toISOString()}]});e.Z=function(a){var e=a.title,n=a.description,i=a.image,s=a.url;return(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:e}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("meta",{name:"description",content:n}),(0,t.jsx)("meta",{itemProp:"name",content:e}),(0,t.jsx)("meta",{itemProp:"description",content:n}),i&&(0,t.jsx)("meta",{itemProp:"image",content:i}),o({url:s,title:e,description:n,image:i}).map((function(a){var e=a.name,n=a.content;return(0,t.jsx)("meta",{name:e,content:n},e)})),(0,t.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:e,about:n,url:s})}})]})}},28558:function(a,e,n){"use strict";n.d(e,{Z:function(){return i}});var t=n(85893);function i(a){var e=a.link,n=a.children;return(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:n})}},8659:function(a,e,n){"use strict";n.d(e,{Z:function(){return f}});var t=n(85893),i=(n(67294),n(68527)),r=function(){return(0,t.jsx)(i.xv,{color:"primary",children:(0,t.jsx)("strong",{children:"AL & AR"})})},o=n(56650),s=n.n(o),l=n(36842),u=n(38759);function c(){var a=(0,l.v)().scrollYProgress;return(0,t.jsx)(u.E.div,{className:s().straightProgressBar,style:{scaleX:a}})}var d=function(a){var e=a.text;return(0,t.jsx)(i.X6,{as:"h1",size:"2xl",pb:"8",children:e})},h=n(77233),g=n(74821),m=n(2631),k=n(23218),p=n.n(k),j=n(83487),b=n(75913);function f(a){var e=a.title,n=a.description,o=a.children,s=a.postUrl,l=(0,m.Z)(),u="https://doubleateam.co.uk/posts/".concat(s);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.Z,{}),(0,t.jsxs)(i.xu,{maxW:l?"90%":"60rem",p:"24px 2rem",m:"2rem auto 2rem",className:p().blogLayout,children:[(0,t.jsx)(h.Z,{title:e,description:n,url:u,image:"/images/IstanbulHagiaSopia.avif"}),(0,t.jsx)(c,{}),(0,t.jsxs)(i.kC,{alignItems:"baseline",gap:"24px",children:[(0,t.jsx)(d,{text:n}),(0,t.jsx)(g.Z,{postUrl:u})]}),o,(0,t.jsx)(r,{})]}),(0,t.jsx)(j.Z,{})]})}},2631:function(a,e,n){"use strict";n.d(e,{Z:function(){return o}});var t=n(70603),i=n(67294),r=n(92684);function o(){var a=(0,i.useState)(!1),e=a[0],n=a[1],o=(0,t.Z)((0,r.ac)("(max-width: 575px)"),1)[0];return(0,i.useEffect)((function(){n(o)}),[o]),e}},20958:function(a,e,n){"use strict";n.d(e,{Z:function(){return i}});var t=n(67294);function i(){var a=(0,t.useState)(),e=a[0],n=a[1];return(0,t.useEffect)((function(){n(sessionStorage.getItem("language"))}),[]),e}},61013:function(a,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var t=n(85893),i=(n(67294),n(68527)),r=n(34651),o=n(20958),s=n(8659),l=n(28558),u="/images/blog/whatToDoInIndonesia/Jogja/",c=(0,t.jsxs)(s.Z,{title:"Double A Team | What to do in Jogja",description:"How we recommend you enjoy your time in Jogja",postUrl:"what-to-do-in-jogja",children:[(0,t.jsx)(i.X6,{children:"Hotel"}),(0,t.jsxs)(i.xv,{children:["We stayed very central in the ",(0,t.jsx)("b",{children:"Jambuluwuk Malioboro Hotel"}),". This is a large hotel with some outstanding views, friendly staff and a huge buffet breakfast with foods from all over Indonesia and even some European options. I mean just check out this stunning garden you'll be stuffing your faces in!",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"hotelBreakfastGarden.jpg"),alt:"Hotel garden"})}),"The hotel has a laundry service and is within walking distance to the popular shopping district in Malioboro. Plenty to see and do just on your doorstep! The hotel was reasonable considering the location and especially considering the 5* service we were getting, the staff were stars and the hotel itself was so well furnished. It cost around \xa327 (est 487.000 IDR) a night"]}),(0,t.jsx)(i.X6,{children:"restaurant"}),(0,t.jsxs)(i.xv,{children:["We fancied heading out of the main part of the city to soak in some of the views you can get around Jogja. At the"," ",(0,t.jsx)("b",{children:"Candhari Heaven"})," you can do just that while eating some delicious Indonesian food or even just sitting back and enjoying some of their refreshing fruit smoothies.",(0,t.jsx)(r.Ee,{src:"".concat(u,"niceResturantFood.jpg"),alt:"Candhari Heaven restaurants food"}),"Now this place does get busy, so to guarantee a table we would recommend booking in advance."," ",(0,t.jsx)(l.Z,{link:"https://www.instagram.com/candhariheaven/",children:"Their Instagram page"})," ","Their number: ",(0,t.jsx)("b",{children:"+6281282677677"}),"."]}),(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"niceResturant.jpg"),alt:"Candhari Heaven restaurant"})}),(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"niceResturantView2.jpg"),alt:"Candhari Heaven restaurant view"})}),(0,t.jsx)(i.X6,{children:"Malioboro"}),(0,t.jsxs)(i.xv,{children:["The street where it all happens!",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"malioboro.jpg"),alt:"Malioboro street"})}),"What a fun place to be! If you fancy doing some shopping or eating ice cream, Malioboro is the place to do it. With countless street performers and more shops than you'll know what to do with, this vibrant place is a must-visit when coming to Jogja.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"malioboroGelato.jpg"),alt:"Gelato in malioboro"})}),"Jogja was HOT when we visited, so this icecream went down an absolute treat."]}),(0,t.jsx)(i.X6,{children:"Hotel 2"}),(0,t.jsxs)(i.xv,{children:["Now all of those activities we've talked about so far happen in the heart of Jogja, however, if you venture outside the city by an hour or so, there's so much history and beauty to be witnessed. Now if there's one the thing we love more than travel, it's sleep, so in order to make it to the famous sunrise spot \"Punthuk Setumbu\", we'd have to be a little closer to it than our hotel near Malioboro."," ",(0,t.jsx)("b",{children:"Balkondes Ngargogondo The Gade Village"})," was fairly pricy for what you get at 500.000 IDR a night, but what a location. It was only 15 mins away from Punthuk Setumbu and felt like such a breathe of fresh air, you're truly out in nature here.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"hotel2Rooms.jpg"),alt:"Gade Village rooms"})}),"Just looking at those rooms relaxes me, beautiful. The welcome we got there was top notch too, we were given complimentary drinks and breakfast was brought to our door as there was an event on that morning so we couldn't use the restaurant.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"hotel2Breakfast.jpg"),alt:"Gade Village Breakfst"})})," ","The breakfast was tasty and traditional, although we do love our breakfast buffets where we can stuff our faces until our bellies can't fit any more food in."]}),(0,t.jsx)(i.X6,{children:"Punthuk Setumbu"}),(0,t.jsxs)(i.xv,{children:["The reason why we trecked outside of the city, and my god was it worth it.",(0,t.jsx)(r.Ee,{src:"".concat(u,"sunriseSignCrop.jpg"),alt:"Punthuk Setumbu"}),"This popular sunrise location is popular for a reason. Sadly it was a a bit cloudy for us to get the full sunrise experience, but we did however get blown away by the beauty of the place.",(0,t.jsx)(r.Ee,{src:"".concat(u,"sunrisePlace.jpg"),alt:"Punthuk Setumbu"}),"There are plenty of places for some the most memorable photos too if that's what you're into.",(0,t.jsx)(r.Ee,{src:"".concat(u,"loveSign.jpg"),alt:"Punthuk Setumbu"}),"We'll let the pictures do all the talking for this one...",(0,t.jsx)(r.Ee,{src:"".concat(u,"sunrisePlace2.jpg"),alt:"Punthuk Setumbu"}),(0,t.jsx)(r.Ee,{src:"".concat(u,"sunrisePlace3.jpg"),alt:"Punthuk Setumbu"}),"Even though you're out in the middle of nowhere, there are food sellers, and toilets too. What more could you ask for \ud83d\ude09"]}),(0,t.jsx)(i.X6,{children:"Borobudur"}),(0,t.jsxs)(i.xv,{children:["You can't come out all the way to Jogja and not visit one of its ancient temples. We were torn between two, with it being our final day in Jogja we could only choose one, Borobudur or the Prambanan Temple... well as we're talking about Borobudur you can guess which we chose. Borobudur Temple is magnificent, the biggest Buddhist temple built. For Indonesian citizen's tickets are very cheap, however, if you're foreign you will be expected to pay a bit extra, around \xa320 overall, however where else can you see such a magnificent landmark? Worth every penny.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"boroboudor.jpg"),alt:"boroboudor"})})]}),(0,t.jsx)(i.X6,{children:"Travelling to Jogja"}),(0,t.jsxs)(i.xv,{children:["In case you're travelling to Jogja within Indonesia like we were, we thought we'd go through some options. We made the journey from Bandung, the comfortable quicker way was using the train. Even the cheapest seats \"eksekutif class\" are incredibly comfortable. The train has food and beverage sellers and even a restaurant cart. If you're on a tight budget you can use this bus from Bandung to Jogja.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"/images/blog/whatToDoInIndonesia/Jogja/bus-bandung-jogja.jpg",alt:"bus to Jogja"})}),"It cost around 300,000 for a ticket, however, the journey took over 13 hours, which is including time spent stopping for passengers, toilet stops and lunch were included too (which was surprisingly tasty considering the ticket price!)."]}),(0,t.jsx)(i.xv,{children:"We love re-living and sharing these experiences, we hope you can get a bit of an insight into this fascinating place in Indonesia. Safe travels to all!"})]}),d=(0,t.jsxs)(s.Z,{title:"Double A Team | What to do in Jogja",description:"Bagaimana kami merekomendasikan Anda menikmati waktu Anda di Jogja",postUrl:"what-to-do-in-jogja",children:[(0,t.jsx)(i.X6,{children:"Hotel"}),(0,t.jsxs)(i.xv,{children:["Kami tinggal sangat sentral di",(0,t.jsx)("b",{children:"Jambuluwuk Malioboro Hotel"}),". Ini adalah sebuah hotel besar dengan beberapa pemandangan luar biasa, staf yang ramah, dan prasmanan besar sarapan dengan makanan dari seluruh Indonesia dan bahkan beberapa Eropa pilihan. Maksud saya, lihat saja taman menakjubkan ini yang akan Anda isi wajahmu masuk!",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"hotelBreakfastGarden.jpg"),alt:"Hotel garden"})}),"Hotel ini memiliki layanan binatu dan berada dalam jarak berjalan kaki ke pusat perbelanjaan populer di Malioboro. Banyak yang bisa dilihat dan dilakukan hanya di Anda ambang pintu! Hotel ini masuk akal mengingat lokasi dan terutama mengingat layanan 5 * yang kami dapatkan, stafnya adalah bintang dan hotel itu sendiri dilengkapi dengan sangat baik. Harganya sekitar \xa327 (perkiraan Rp 487.000) a malam"]}),(0,t.jsx)(i.X6,{children:"restoran"}),(0,t.jsxs)(i.xv,{children:["Kami membayangkan keluar dari bagian utama kota untuk berendam di beberapa pemandangan yang bisa Anda dapatkan di sekitar Jogja. Pada",(0,t.jsx)("b",{children:"Candhari Heaven"})," .Anda dapat melakukan hanya itu sambil makan makanan Indonesia yang enak atau bahkan hanya duduk kembali dan nikmati beberapa smoothie buah mereka yang menyegarkan",(0,t.jsx)(r.Ee,{src:"".concat(u,"niceResturantFood.jpg"),alt:"Candhari Heaven restaurants food"}),"Sekarang tempat ini ramai, jadi untuk menjamin meja, kami akan merekomendasikan pemesanan terlebih dahulu."," ",(0,t.jsx)(l.Z,{link:"https://www.instagram.com/candhariheaven/",children:"Halaman Instagram mereka"})," ","Nomor mereka: ",(0,t.jsx)("b",{children:"+6281282677677"}),"."]}),(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"niceResturant.jpg"),alt:"Candhari Heaven restaurant"})}),(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"niceResturantView2.jpg"),alt:"Candhari Heaven restaurant view"})}),(0,t.jsx)(i.X6,{children:"Malioboro"}),(0,t.jsxs)(i.xv,{children:["Jalan dimana semuanya terjadi!",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"malioboro.jpg"),alt:"Malioboro street"})}),"Tempat yang menyenangkan! Jika Anda suka berbelanja atau makan es krim, Malioboro adalah tempatnya. Dengan artis jalanan yang tak terhitung jumlahnya dan lebih banyak toko daripada yang Anda tahu apa yang harus dilakukan, tempat yang semarak ini adalah wajib dikunjungi ketika datang ke Jogja.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"malioboroGelato.jpg"),alt:"Gelato in malioboro"})}),"Jogja itu PANAS ketika kami berkunjung, jadi es krim ini benar-benar habis merawat."]}),(0,t.jsx)(i.X6,{children:"Hotel 2"}),(0,t.jsxs)(i.xv,{children:['Sekarang semua kegiatan yang telah kita bicarakan sejauh ini terjadi di dalam hati Jogja, namun, jika Anda menjelajah ke luar kota sekitar satu jam, ada begitu banyak sejarah dan keindahan untuk disaksikan. Sekarang jika ada satu hal yang kita sukai lebih dari perjalanan, itu tidur, jadi untuk sampai ke tempat matahari terbit yang terkenal "Punthuk Setumbu", kita harus sedikit lebih dekat daripada hotel kami di dekat Malioboro.'," ",(0,t.jsx)("b",{children:"Balkondes Ngargogondo The Gade Village"})," cukup mahal untuk apa? Anda mendapatkan Rp 500.000 semalam, tapi apa lokasi. Itu hanya 15 menit jauh dari Punthuk Setumbu dan terasa seperti menghirup udara segar, Anda benar-benar berada di alam bebas di sini .",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"hotel2Rooms.jpg"),alt:"Gade Village rooms"})}),"Hanya melihat kamar-kamar itu membuatku rileks, cantik. Sambutan yang kami dapatkan ada yang top juga, kami diberi minuman dan sarapan gratis dibawa ke pintu kami karena ada acara pada pagi itu jadi kami tidak bisa menggunakan restoran.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"hotel2Breakfast.jpg"),alt:"Gade Village Breakfst"})})," ","Sarapannya enak dan tradisional, meskipun kami menyukai sarapan kami prasmanan di mana kita bisa mengisi wajah kita sampai perut kita tidak muat lagi makanan di."]}),(0,t.jsx)(i.X6,{children:"Punthuk Setumbu"}),(0,t.jsxs)(i.xv,{children:["Alasan mengapa kami melakukan trek di luar kota, dan ya Tuhan, apakah itu sepadan.",(0,t.jsx)(r.Ee,{src:"".concat(u,"sunriseSignCrop.jpg"),alt:"Punthuk Setumbu"}),"Lokasi matahari terbit yang populer ini populer karena suatu alasan. Sayangnya itu adalah agak mendung bagi kami untuk mendapatkan pengalaman matahari terbit penuh, tetapi kami melakukannya terpesona oleh keindahan tempat itu.",(0,t.jsx)(r.Ee,{src:"".concat(u,"sunrisePlace.jpg"),alt:"Punthuk Setumbu"}),"Ada banyak tempat untuk beberapa foto yang paling berkesan juga jika itulah yang Anda sukai.",(0,t.jsx)(r.Ee,{src:"".concat(u,"loveSign.jpg"),alt:"Punthuk Setumbu"}),"Kami akan membiarkan gambar yang berbicara untuk yang satu ini...",(0,t.jsx)(r.Ee,{src:"".concat(u,"sunrisePlace2.jpg"),alt:"Punthuk Setumbu"}),(0,t.jsx)(r.Ee,{src:"".concat(u,"sunrisePlace3.jpg"),alt:"Punthuk Setumbu"}),"Meskipun Anda berada di antah berantah, ada penjual makanan, dan toilet juga. Apa lagi yang bisa Anda minta? \ud83d\ude09"]}),(0,t.jsx)(i.X6,{children:"Borobudur"}),(0,t.jsxs)(i.xv,{children:["Anda tidak bisa keluar jauh-jauh ke Jogja dan tidak mengunjungi salah satu peninggalan purbakalanya kuil. Kami terbelah di antara dua, dengan itu menjadi hari terakhir kami di Jogja kami hanya bisa memilih satu, Borobudur atau Candi Prambanan... yah sama kita berbicara tentang Borobudur Anda bisa menebak mana yang kami pilih. Candi Borobudur adalah megah, candi Buddha terbesar dibangun. Untuk warga negara Indonesia tiketnya sangat murah, namun, jika Anda orang asing, Anda diharapkan untuk membayar sedikit ekstra, sekitar \xa3 20 secara keseluruhan, namun di mana lagi Anda dapat melihat seperti itu? tengara yang luar biasa? Bernilai setiap sen.",(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"".concat(u,"boroboudor.jpg"),alt:"boroboudor"})})]}),(0,t.jsx)(i.X6,{children:"Jalan-jalan ke Jogja"}),(0,t.jsxs)(i.xv,{children:['Jika Anda bepergian ke Jogja di Indonesia seperti kami, kami pikir kita akan melalui beberapa pilihan. Kami melakukan perjalanan dari Bandung, cara cepat yang nyaman adalah menggunakan kereta api. Bahkan kursi termurah "kelas eksekutif" sangat nyaman. Kereta memiliki makanan dan penjual minuman dan bahkan gerobak restoran. Jika Anda memiliki anggaran terbatas Anda dapat menggunakan bus ini dari Bandung ke Jogja.',(0,t.jsx)(i.M5,{children:(0,t.jsx)(r.Ee,{src:"/images/blog/whatToDoInIndonesia/Jogja/bus-bandung-jogja.jpg",alt:"bus to Jogja"})}),"Biayanya sekitar 300.000 untuk tiket, namun, perjalanan memakan waktu lebih dari 13 jam, yang termasuk waktu yang dihabiskan untuk berhenti untuk penumpang, halte toilet dan makan siang juga disertakan (yang ternyata sangat lezat mengingat? harga tiket!)."]}),(0,t.jsx)(i.xv,{children:"Kami senang menghidupkan kembali dan berbagi pengalaman ini, kami harap Anda bisa mendapatkan sedikit wawasan tentang tempat yang menarik di Indonesia ini. Perjalanan aman ke semua!"})]});function h(){return"Ind"===(0,o.Z)()?d:c}},96328:function(a){a.exports={topbarContainer:"styles_topbarContainer__h9Nf1",logo:"styles_logo__a5qhr"}},23218:function(a){a.exports={blogLayout:"styles_blogLayout__oWYyZ",blogHeading:"styles_blogHeading__i4Lk8"}},56650:function(a){a.exports={progressIcon:"style_progressIcon__GtLXV",straightProgressBar:"style_straightProgressBar__EnhKT"}}},function(a){a.O(0,[445,617,13,180,541,842,774,888,179],(function(){return e=30659,a(a.s=e);var e}));var e=a.O();_N_E=e}]);