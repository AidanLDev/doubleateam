(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{34651:function(e,a,n){"use strict";n.d(a,{Ee:function(){return h}});var t=n(42846),i=n(15031),s=n(67294),r=n(44697);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function l(e,a){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}var d=["htmlWidth","htmlHeight","alt"],c=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],u=s.forwardRef((function(e,a){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,r=l(e,d);return s.createElement("img",o({width:n,height:t,ref:a,alt:i},r))}));i.Ts&&(u.displayName="NativeImage");var h=(0,t.Gp)((function(e,a){var n=e.fallbackSrc,d=e.fallback,h=e.src,g=e.srcSet,m=e.align,p=e.fit,x=e.loading,j=e.ignoreFallback,k=e.crossOrigin,f=e.fallbackStrategy,b=void 0===f?"beforeLoadOrError":f,y=e.referrerPolicy,w=l(e,c),v=null!=x||j||!(void 0!==n||void 0!==d),A=function(e){var a=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,o=e.onError,l=e.crossOrigin,d=e.sizes,c=e.ignoreFallback,u=(0,s.useState)("pending"),h=u[0],g=u[1];(0,s.useEffect)((function(){g(n?"loading":"pending")}),[n]);var m=(0,s.useRef)(),p=(0,s.useCallback)((function(){if(n){x();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),d&&(e.sizes=d),a&&(e.loading=a),e.onload=function(e){x(),g("loaded"),null==i||i(e)},e.onerror=function(e){x(),g("failed"),null==o||o(e)},m.current=e}}),[n,l,t,d,i,o,a]),x=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.a)((function(){if(!c)return"loading"===h&&p(),function(){x()}}),[h,p,c]),c?"loaded":h}(o({},e,{ignoreFallback:v})),S=function(e,a){return"loaded"!==e&&"beforeLoadOrError"===a||"failed"===e&&"onError"===a}(A,b),E=o({ref:a,objectFit:p,objectPosition:m},v?w:(0,i.CE)(w,["onError","onLoad"]));return S?d||s.createElement(t.m$.img,o({as:u,className:"chakra-image__placeholder",src:n},E)):s.createElement(t.m$.img,o({as:u,src:h,srcSet:g,crossOrigin:k,loading:x,referrerPolicy:y,className:"chakra-image"},E))}));i.Ts&&(h.displayName="Image")},81858:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/how-to-pass-ielts",function(){return n(41550)}])},74821:function(e,a,n){"use strict";n.d(a,{Z:function(){return d}});var t=n(85893),i=n(67294),s=n(86541),r=n(10894),o=n(8193),l=n(63750);function d(e){var a=e.postUrl,n=(0,i.useState)(!1),d=n[0],c=n[1];return(0,t.jsx)(s.u,{label:d?"Copied!":"Copy Blog to clipboard",zIndex:20,shouldWrapChildren:!0,children:(0,t.jsx)(r.JO,{as:d?o.mny:l.etG,cursor:d?"default":"pointer",color:d?"green":"primary",boxSize:6,zIndex:"20",onClick:function(){c(!0),navigator.clipboard.writeText(a)}})})}},83487:function(e,a,n){"use strict";n.d(a,{Z:function(){return d}});var t=n(85893),i=n(68527),s=n(89583),r=n(10894);function o(e){var a=e.icon,n=e.link,i=e.hoverColour;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:(0,t.jsx)(r.JO,{as:a,cursor:"pointer",_hover:{color:i},color:"#0070f3"})})})}var l=n(61654);function d(){return(0,t.jsxs)("footer",{className:"footer",children:[(0,t.jsxs)(i.xu,{p:"20px 0 50px 0",w:"100%",borderBottom:"2px solid #868484",children:[(0,t.jsx)(i.kC,{justify:"center",gap:"5%",paddingBottom:"30px",className:"footerLinks",children:(0,t.jsx)(l.Z,{})}),(0,t.jsxs)(i.kC,{justify:"center",gap:"5%",children:[(0,t.jsx)(o,{icon:s.Zf_,link:"https://www.instagram.com/mynameisarni/",hoverColour:"#e04d93"}),(0,t.jsx)(o,{icon:s.V2E,link:"https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg",hoverColour:"#fe2c3c"})]})]}),(0,t.jsx)(i.xv,{paddingTop:"20px",paddingBottom:"20px",color:"gray",textAlign:"center",fontSize:"14px",children:"\xa9 Aidan John Lowson & Arni Riani Lowson"})]})}},61654:function(e,a,n){"use strict";n.d(a,{Z:function(){return l}});var t=n(85893),i=(n(67294),n(41664)),s=n.n(i),r=n(2631),o=n(20958);function l(){var e=(0,r.Z)(),a=(0,o.Z)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s(),{href:"/",children:(0,t.jsx)("a",{children:"Ind"!==a?"Home":"Rumah"})}),(0,t.jsx)(s(),{href:"/posts",children:(0,t.jsx)("a",{children:"Ind"!==a?"All Blogs":"Semua Blog"})}),!e&&(0,t.jsx)("span",{children:"|"}),(0,t.jsx)(s(),{href:"/about-us",passHref:!0,children:(0,t.jsx)("a",{children:"Ind"!==a?"About Us":"Tentang kami"})}),(0,t.jsx)(s(),{href:"/contact-us",passHref:!0,children:(0,t.jsx)("a",{children:"Ind"!==a?"Contact Us":"Hubungi kami"})}),(0,t.jsx)(s(),{href:"/privacy-policy",passHref:!0,children:(0,t.jsx)("a",{children:"Ind"!==a?"Privacy Policy":"Kebijakan pribadi"})})]})}},75913:function(e,a,n){"use strict";n.d(a,{Z:function(){return u}});var t=n(85893),i=n(68527),s=(n(67294),n(41664)),r=n.n(s),o=n(61654),l=n(2631),d=n(96328),c=n.n(d);function u(){var e=(0,l.Z)();return(0,t.jsxs)(i.kC,{className:c().topbarContainer,children:[!e&&(0,t.jsx)(i.xu,{flexGrow:1,children:(0,t.jsx)(r(),{href:"/",passHref:!0,children:(0,t.jsx)(i.xv,{className:c().logo,children:"AA"})})}),(0,t.jsx)(o.Z,{})]})}},77233:function(e,a,n){"use strict";var t=n(85893),i=n(9008),s=n.n(i),r=(n(4298),function(e){var a=e.url,n=e.title,t=e.description,i=e.image,s=e.createdAt,r=e.updatedAt;return[{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:t},{name:"twitter:image:src",content:i},{name:"twitter:card",content:"summary_large_image"},{name:"og:title",content:n},{name:"og:type",content:"website"},{name:"og:url",content:a},{name:"og:image",content:i},{name:"og:description",content:t},{name:"og:site_name",content:"Double A Team"},{name:"og:published_time",content:s||(new Date).toISOString()},{name:"og:modified_time",content:r||(new Date).toISOString()}]});a.Z=function(e){var a=e.title,n=e.description,i=e.image,o=e.url;return(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:a}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("meta",{name:"description",content:n}),(0,t.jsx)("meta",{itemProp:"name",content:a}),(0,t.jsx)("meta",{itemProp:"description",content:n}),i&&(0,t.jsx)("meta",{itemProp:"image",content:i}),r({url:o,title:a,description:n,image:i}).map((function(e){var a=e.name,n=e.content;return(0,t.jsx)("meta",{name:a,content:n},a)})),(0,t.jsx)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017",crossOrigin:"anonymous",type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@content":"http://schema.org","@type":"Article",name:a,about:n,url:o})}})]})}},28558:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var t=n(85893);function i(e){var a=e.link,n=e.children;return(0,t.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:n})}},20426:function(e,a,n){"use strict";n.d(a,{Z:function(){return s}});var t=n(85893),i=n(68527);function s(){return(0,t.jsx)(i.iz,{style:{margin:"12px 0",borderColor:"gray"}})}},47931:function(e,a,n){"use strict";var t=n(85893),i=n(68527),s=n(47516),r=n(8193);a.Z=function(e){var a=e.items,n=e.iconColour;return(0,t.jsx)(i.aV,{spacing:3,children:a.map((function(e,a){var o=e.text,l=e.isNested;return(0,t.jsxs)(i.HC,{pl:l?"22px":"0",children:[(0,t.jsx)(i.DE,{as:l?s.isC:r.ueJ,color:n||"inherit"}),o]},"".concat(o,"__").concat(a))}))})}},8659:function(e,a,n){"use strict";n.d(a,{Z:function(){return f}});var t=n(85893),i=(n(67294),n(68527)),s=function(){return(0,t.jsx)(i.xv,{color:"primary",children:(0,t.jsx)("strong",{children:"AL & AR"})})},r=n(56650),o=n.n(r),l=n(36842),d=n(38759);function c(){var e=(0,l.v)().scrollYProgress;return(0,t.jsx)(d.E.div,{className:o().straightProgressBar,style:{scaleX:e}})}var u=function(e){var a=e.text;return(0,t.jsx)(i.X6,{as:"h1",size:"2xl",pb:"8",children:a})},h=n(77233),g=n(74821),m=n(2631),p=n(23218),x=n.n(p),j=n(83487),k=n(75913);function f(e){var a=e.title,n=e.description,r=e.children,o=e.postUrl,l=(0,m.Z)(),d="https://doubleateam.co.uk/posts/".concat(o);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.Z,{}),(0,t.jsxs)(i.xu,{maxW:l?"90%":"60rem",p:"24px 2rem",m:"2rem auto 2rem",className:x().blogLayout,children:[(0,t.jsx)(h.Z,{title:a,description:n,url:d,image:"/images/IstanbulHagiaSopia.jpg"}),(0,t.jsx)(c,{}),(0,t.jsxs)(i.kC,{alignItems:"baseline",gap:"24px",children:[(0,t.jsx)(u,{text:n}),(0,t.jsx)(g.Z,{postUrl:d})]}),r,(0,t.jsx)(s,{})]}),(0,t.jsx)(j.Z,{})]})}},2631:function(e,a,n){"use strict";n.d(a,{Z:function(){return r}});var t=n(70603),i=n(67294),s=n(92684);function r(){var e=(0,i.useState)(!1),a=e[0],n=e[1],r=(0,t.Z)((0,s.ac)("(max-width: 575px)"),1)[0];return(0,i.useEffect)((function(){n(r)}),[r]),a}},20958:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var t=n(67294);function i(){var e=(0,t.useState)(),a=e[0],n=e[1];return(0,t.useEffect)((function(){n(sessionStorage.getItem("language"))}),[]),a}},41550:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return B}});var t=n(85893),i=n(67294),s=n(42846),r=n(15031);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function l(e,a){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}var d=["overflow","overflowX","className"],c=["className"],u=["placement"],h=["isNumeric"],g=["isNumeric"],m=(0,s.eC)("Table"),p=m[0],x=m[1],j=(0,s.Gp)((function(e,a){var n,t=e.overflow,c=e.overflowX,u=e.className,h=l(e,d);return i.createElement(s.m$.div,o({ref:a,className:(0,r.cx)("chakra-table__container",u)},h,{__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(n=null!=t?t:c)?n:"auto",overflowY:"hidden",maxWidth:"100%"}}))})),k=(0,s.Gp)((function(e,a){var n=(0,s.jC)("Table",e),t=(0,s.Lr)(e),d=t.className,u=l(t,c);return i.createElement(p,{value:n},i.createElement(s.m$.table,o({role:"table",ref:a,__css:n.table,className:(0,r.cx)("chakra-table",d)},u)))}));r.Ts&&(k.displayName="Table");var f=(0,s.Gp)((function(e,a){var n=e.placement,t=void 0===n?"bottom":n,r=l(e,u),d=x();return i.createElement(s.m$.caption,o({},r,{ref:a,__css:o({},d.caption,{captionSide:t})}))}));r.Ts&&(f.displayName="TableCaption");var b=(0,s.Gp)((function(e,a){var n=x();return i.createElement(s.m$.thead,o({},e,{ref:a,__css:n.thead}))})),y=(0,s.Gp)((function(e,a){var n=x();return i.createElement(s.m$.tbody,o({},e,{ref:a,__css:n.tbody}))})),w=(0,s.Gp)((function(e,a){var n=e.isNumeric,t=l(e,h),r=x();return i.createElement(s.m$.th,o({},t,{ref:a,__css:r.th,"data-is-numeric":n}))})),v=(0,s.Gp)((function(e,a){var n=x();return i.createElement(s.m$.tr,o({role:"row"},e,{ref:a,__css:n.tr}))})),A=(0,s.Gp)((function(e,a){var n=e.isNumeric,t=l(e,g),r=x();return i.createElement(s.m$.td,o({role:"gridcell"},t,{ref:a,__css:r.td,"data-is-numeric":n}))})),S=n(68527),E=n(34651),T=n(20958),I=n(8659),L=n(28558),P=n(47931),_=n(20426),Z=(0,t.jsxs)(I.Z,{title:"Double A Team | How to pass IELTS",description:"How to get an IELTS A1 Certification for UKVI Family Visa Applications",postUrl:"how-to-pass-ielts",children:[(0,t.jsx)(S.xv,{children:"The IELTS A1 exam is almost like a short interview, there will be you and one other test taker in the room with the examiner. The examiner will ask you and your partner a series of questions which you must respond to in English, there will also, be sections in the test where you will need to communicate with your partner. Luckily the test is broken up into 4 sections, and each section is clearly defined so you can go into the exam confident, knowing exactly what to expect."}),(0,t.jsxs)(S.xv,{children:["Here is the structure of the exam, it's broken up into 4 phases 1A, 1B, 2A and 2B:",(0,t.jsx)(S.kC,{justify:"center",children:(0,t.jsx)(E.Ee,{alt:"IELTS A1 exam structure",src:"/images/IELTSA1TestStructure.jpeg"})})]}),(0,t.jsxs)(S.xv,{children:["Just to make that crystal clear, the sections are as follows:",(0,t.jsx)(P.Z,{items:[{text:(0,t.jsx)("b",{children:"Phase 1A"})},{text:"Answering these 3 questions:"},{text:"What's your name?",isNested:!0},{text:"Can you spell it for me? (You will be expected to spell out your full name, letter by letter)",isNested:!0},{text:"Where do you come from?",isNested:!0},{text:"Then you will answer some basic questions on small talk topics, such as food, hobbies and interests etc"},{text:(0,t.jsx)("b",{children:"Phase 1B"})},{text:"You and your partner will be given a topic each, write down questions based on this topic and when instructed, you will ask your partner the questions you prepared and vice versa"},{text:(0,t.jsx)("b",{children:"Phase 2A"})},{text:"The examiner will play a short recording, you will be given some paper with a few pictures on it, and answer the question by ticking one of the pictures provided"},{text:(0,t.jsx)("b",{children:"Phase 2B"})},{text:"The examiner will give you both a topic that you need to have a conversation about"}]}),(0,t.jsx)(_.Z,{}),"I know that was a lot about the structure of the test, but knowing this well is so valuable to understanding how to pass the test."]}),(0,t.jsx)(S.X6,{size:"md",children:"How we prepared for the test"}),(0,t.jsxs)(S.xv,{children:["There are a lot of great free resources out there that can make you as prepared as you'll ever be to pass the IELTS test. To get a better understanding of what we've discussed and to see what your strengths/weaknesses are, you can go through a"," ",(0,t.jsx)(L.Z,{link:"https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills",children:"sample test on ielts.org"})," ","There are two samples on this website, papers A and B, both have their own audio tracks which should be played to answer the phase 2A questions."]}),(0,t.jsxs)(S.xv,{children:["Seeing where your weak points are by going through a practice test is really valuable, so you can focus on the areas you need to improve. If it's the speaking phases of the test, phases 1A, 2A and 2B, going through"," ",(0,t.jsx)(L.Z,{link:"https://www.ieltsdeal.com/ielts-life-skills-level-a1-speaking-basic-questions-with-answers/",children:"this list of practice questions"})," ","and understanding the example answers given should help. On the other hand if it's the listening segment, phase 2a, that you struggle with, there's a bunch of"," ",(0,t.jsx)(L.Z,{link:"https://www.ielts.org/for-test-takers/sample-test-questions",children:"practise listening questions here on the IELTS website."})]}),(0,t.jsxs)(S.xv,{children:["A valuable learning resource is this YouTube playlist, go through some of the"," ",(0,t.jsx)(L.Z,{link:"https://www.youtube.com/watch?v=iXm_rcv0GJA&list=PLOdYbfVGcVAaQcbaVFaE_S2ylP9Fib6Me&index=5",children:"IELTS Life Skills A1 Speaking and Listening videos"})," ","and pay attention to the answers given. Just going through a couple of these to drill the format of the test into your mind will be super helpful as you can see live examples of questions and answers to the same sort of questions you'll be asked on the day of your exam."]}),(0,t.jsx)(S.X6,{size:"lg",children:"Useful information for booking a test"}),(0,t.jsx)(S.xv,{children:"Now we have gone through some tips that will help you prepare for your test, when it comes to booking the IELTS A1 test, there are a few things you should keep in mind. We will compare the different test providers and make it clear which ones are approved by the UK government so you can have peace of mind that the certificate you're getting is going to be the right one."}),(0,t.jsx)(S.X6,{size:"md",children:"Test Providers"}),(0,t.jsxs)(S.xv,{children:["To get a UK family visa, you'll need to prove your English speaking skills by passing a secure English language test (SELT). The IELTS test is one of the popular ones as they have a few different providers.",(0,t.jsx)(L.Z,{link:"https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt",children:"A list of approved English test providers from the UK Gov website"}),"To potentially save you a click and some reading, at the time of writing, 2022/07/21, the approved test providers are:",(0,t.jsx)(S.X6,{size:"md",children:"If you are in the UK"}),(0,t.jsx)(P.Z,{items:[{text:"Trinity College London"},{text:"IELTS SELT Consortium"},{text:"LanguageCert"},{text:"Pearson"}]}),(0,t.jsx)(S.X6,{size:"md",children:"If you are outside the UK"}),(0,t.jsx)(P.Z,{items:[{text:"PSI Services (UK) Ltd"},{text:"IELTS SELT Consortium"},{text:"LanguageCert"},{text:"Pearson"}]})]}),(0,t.jsxs)(S.xv,{children:["Some information regarding a few of the different test providers that they have in Indonesia:",(0,t.jsx)(j,{children:(0,t.jsxs)(k,{variant:"unstyled",children:[(0,t.jsx)(f,{children:"Test Provider Comparison"}),(0,t.jsx)(b,{children:(0,t.jsxs)(v,{children:[(0,t.jsx)(w,{children:"Test Format"}),(0,t.jsx)(w,{children:"Provider"}),(0,t.jsx)(w,{children:"Min Score Required"}),(0,t.jsx)(w,{children:"Useful Links"}),(0,t.jsx)(w,{children:"Price"}),(0,t.jsx)(w,{children:"Result Time"}),(0,t.jsx)(w,{children:"Address"})]})}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"IELTS Life Skills \u2013 A1 Speaking & Listening"}),(0,t.jsx)(A,{children:"IELTS SELT Consortium"}),(0,t.jsx)(A,{children:"Pass"}),(0,t.jsxs)(A,{children:[" ",(0,t.jsxs)(S.xu,{children:[(0,t.jsx)(L.Z,{link:"https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills",children:"Providers Website"})," ",(0,t.jsx)(L.Z,{link:"https://www.ielts.org/for-test-takers/book-a-test",children:"Book a test here"})]})]}),(0,t.jsx)(A,{children:"3.4m IDR (est \xa3189)"}),(0,t.jsx)(A,{children:"Within one week"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"LanguageCert International ESOL SELT A1 (Speaking & Listening)"}),(0,t.jsx)(A,{children:"LanguageCert"}),(0,t.jsx)(A,{children:"60/100"}),(0,t.jsx)(A,{children:(0,t.jsxs)(S.xu,{children:[(0,t.jsx)(L.Z,{link:"https://www.languagecert.org/en/language-exams/english/languagecert-selt/a1-sl-2730",children:"Providers Website"})," ",(0,t.jsx)(L.Z,{link:"https://selt.languagecert.org/?exam=A104EE3F80A249B9A74B3C1862FE3CE9&country=50EB9A019EAB4678AE83D2DA8A4EC680",children:"Book a test here"})]})}),(0,t.jsx)(A,{children:"165 USD (est 2.37m IDR)"}),(0,t.jsx)(A,{children:"5 working days"}),(0,t.jsx)(A,{children:"The Indonesia Int`L Educ.Foundation, Menara Imperium 28Th Floor Suite B, Jakarta, 12980, IDN"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"PTE Home A1"}),(0,t.jsx)(A,{children:"Pearson"}),(0,t.jsx)(A,{children:"Pass"}),(0,t.jsx)(A,{children:(0,t.jsxs)(S.xu,{children:[(0,t.jsx)(L.Z,{link:"https://www.pearsonpte.com/selt-tests/pte-academic-ukvi",children:"Providers Website"})," ",(0,t.jsx)(L.Z,{link:"https://home.pearsonvue.com/Test-takers.aspx",children:"Book a test here"})]})})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"Skills for English UKVI A1 (2 component)"}),(0,t.jsx)(A,{children:"PSI Service (UK) Ltd"}),(0,t.jsx)(A,{children:"Pass"}),(0,t.jsx)(A,{children:(0,t.jsx)(S.xu,{children:(0,t.jsx)(L.Z,{link:"https://www.psionline.com/en-gb/certification/skills-for-english/",children:"Providers Website"})})}),(0,t.jsx)(A,{children:"210 USD (est 3m IDR)"}),(0,t.jsx)(A,{children:"14 Days"}),(0,t.jsx)(A,{children:"Jakarta - PT. International Test Center (SfE) Plaza Sentral 17th Floor, Jakarta, Indonesia"})]})]})]})})]}),(0,t.jsx)(S.X6,{size:"md",children:"Finding a test centre"}),(0,t.jsxs)(S.xv,{children:["Now you should have a good idea of which test provider you want to go with, finding an official test centre is luckily quite easy as the UK gov has"," ",(0,t.jsx)(L.Z,{link:"https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt#approved-test-centres",children:"a list of approved centres on their website"}),".",(0,t.jsx)(S.xv,{children:"You can do it!! \ud83e\udd1e"})]})]}),C=(0,t.jsxs)(I.Z,{title:"Double A Team | How to pass IELTS",description:"Cara mendapatkan Sertifikasi IELTS A1 untuk Aplikasi Visa Keluarga UKVI",postUrl:"how-to-pass-ielts",children:[(0,t.jsx)(S.xv,{children:"Ujian IELTS A1 hampir seperti wawancara singkat, akan ada Anda dan satu peserta tes lainnya dalam satu ruangan dengan penguji. Pemeriksa akan bertanya Anda dan pasangan Anda serangkaian pertanyaan yang harus Anda jawab dalam Bahasa Inggris, juga akan ada bagian dalam ujian di mana Anda perlu berkomunikasi dengan pasangan Anda. Untungnya tes ini dipecah menjadi 4 bagian, dan setiap bagian didefinisikan dengan jelas sehingga Anda dapat mengikuti ujian percaya diri, tahu persis apa yang diharapkan."}),(0,t.jsx)(S.xv,{children:"Berikut adalah struktur ujiannya, dibagi menjadi 4 phases 1A, 1B, 2A dan 2B:"}),(0,t.jsxs)(S.xv,{children:[(0,t.jsx)(P.Z,{items:[{text:(0,t.jsx)("b",{children:"Phase 1A"})},{text:"Menjawab 3 pertanyaan ini:"},{text:"What's your name?",isNested:!0},{text:"Can you spell it for me? (Anda diharapkan untuk mengeja nama lengkap Anda, huruf demi huruf)",isNested:!0},{text:"Where do you come from?",isNested:!0},{text:"Kemudian Anda akan menjawab beberapa pertanyaan dasar tentang topik obrolan ringan, seperti makanan, hobi, dan minat, dll"},{text:(0,t.jsx)("b",{children:"Phase 1B"})},{text:"Anda dan pasangan akan diberikan topik masing-masing, menuliskan pertanyaan berdasarkan topik ini dan ketika diinstruksikan, Anda akan menanyakan pasangan pertanyaan yang Anda siapkan dan sebaliknya"},{text:(0,t.jsx)("b",{children:"Phase 2A"})},{text:"Penguji akan memutar rekaman pendek, Anda akan diberikan beberapa kertas dengan beberapa gambar di atasnya, dan menjawab pertanyaan dengan mencentang salah satu gambar yang disediakan"},{text:(0,t.jsx)("b",{children:"Phase 2B"})},{text:"Penguji akan memberi Anda berdua topik yang perlu Anda bicarakan"}]}),(0,t.jsx)(_.Z,{}),"Saya tahu itu banyak tentang struktur ujian, tetapi mengetahui ini dengan baik sangat berharga untuk dipahami cara lulus ujian."]}),(0,t.jsx)(S.X6,{size:"md",children:"Bagaimana kami mempersiapkan diri untuk ujian"}),(0,t.jsxs)(S.xv,{children:["Ada banyak sumber daya gratis yang hebat di luar sana yang dapat membuat Anda sesiap mungkin untuk lulus tes IELTS. Mendapatkan pemahaman yang lebih baik tentang apa yang telah kita diskusikan dan untuk melihat apa kelebihan/kelemahan kamu, kamu bisa melalui a"," ",(0,t.jsx)(L.Z,{link:"https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills",children:"uji sampel pada - ielts.org"})," ","Ada dua sampel di situs web ini, makalah A dan B, keduanya memiliki trek audio mereka sendiri yang harus diputar untuk menjawab soal fase 2A."]}),(0,t.jsxs)(S.xv,{children:["Melihat di mana titik lemahmu dengan melalui latihan tes sangat berharga, sehingga Anda dapat fokus pada area yang Anda butuhkan meningkatkan. Jika itu adalah fase tes berbicara, fase 1A, 2A dan 2B, melewati"," ",(0,t.jsx)(L.Z,{link:"https://www.ieltsdeal.com/ielts-life-skills-level-a1-speaking-basic-questions-with-answers/",children:"daftar soal latihan ini"})," ","dan memahami contoh jawaban yang diberikan akan membantu. di sisi lain jika itu adalah segmen mendengarkan, fase 2a, bahwa Anda berjuang dengan, ada banyak"," ",(0,t.jsx)(L.Z,{link:"https://www.ielts.org/for-test-takers/sample-test-questions",children:"berlatih mendengarkan pertanyaan di sini di situs web IELTS."})]}),(0,t.jsxs)(S.xv,{children:["Sumber belajar yang berharga adalah daftar putar YouTube ini, go melalui beberapa"," ",(0,t.jsx)(L.Z,{link:"https://www.youtube.com/watch?v=iXm_rcv0GJA&list=PLOdYbfVGcVAaQcbaVFaE_S2ylP9Fib6Me&index=5",children:"IELTS Life Skills A1 video Berbicara dan Mendengarkan"})," ","dan memperhatikan jawaban yang diberikan. Hanya melalui beberapa di antaranya untuk mengebor format tes ke dalam pikiran Anda akan sangat membantu karena Anda dapat melihat contoh langsung pertanyaan dan jawaban untuk jenis pertanyaan yang sama yang akan Anda tanyakan di hari ujianmu."]}),(0,t.jsx)(S.X6,{size:"lg",children:"Informasi yang berguna untuk memesan tes"}),(0,t.jsx)(S.xv,{children:"Sekarang kami telah melalui beberapa tips yang akan membantu Anda mempersiapkan diri untuk tes Anda, ketika datang untuk memesan tes IELTS A1, ada adalah beberapa hal yang harus Anda ingat. Kami akan membandingkan penyedia tes yang berbeda dan jelaskan yang mana yang disetujui oleh pemerintah Inggris sehingga Anda dapat merasa tenang bahwa sertifikat yang Anda dapatkan akan menjadi yang benar."}),(0,t.jsx)(S.X6,{size:"md",children:"Penyedia Tes"}),(0,t.jsxs)(S.xv,{children:["Untuk mendapatkan visa keluarga Inggris, Anda harus membuktikan bahasa Inggris Anda keterampilan berbicara dengan lulus tes bahasa Inggris yang aman (SELT). Tes IELTS adalah salah satu yang populer karena memiliki beberapa penyedia yang berbeda.",(0,t.jsx)(L.Z,{link:"https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt",children:"Daftar penyedia tes bahasa Inggris yang disetujui dari Pemerintah Inggris situs web"}),"Untuk berpotensi menghemat klik dan beberapa bacaan, pada saat menulis, 2022/07/21, penyedia tes yang disetujui adalah:",(0,t.jsx)(S.X6,{size:"md",children:"Jika Anda berada di Inggris"}),(0,t.jsx)(P.Z,{items:[{text:"Trinity College London"},{text:"IELTS SELT Consortium"},{text:"LanguageCert"},{text:"Pearson"}]}),(0,t.jsx)(S.X6,{size:"md",children:"Jika Anda berada di luar Inggris"}),(0,t.jsx)(P.Z,{items:[{text:"PSI Services (UK) Ltd"},{text:"IELTS SELT Consortium"},{text:"LanguageCert"},{text:"Pearson"}]})]}),(0,t.jsxs)(S.xv,{children:["Beberapa informasi mengenai beberapa penyedia tes yang berbeda yang mereka miliki di Indonesia:",(0,t.jsx)(j,{children:(0,t.jsxs)(k,{variant:"unstyled",children:[(0,t.jsx)(f,{children:"Perbandingan Penyedia Tes"}),(0,t.jsx)(b,{children:(0,t.jsxs)(v,{children:[(0,t.jsx)(w,{children:"Format Tes"}),(0,t.jsx)(w,{children:"Pemberi"}),(0,t.jsx)(w,{children:"Skor Minimum Diperlukan"}),(0,t.jsx)(w,{children:"Tautan Berguna"}),(0,t.jsx)(w,{children:"Harga"}),(0,t.jsx)(w,{children:"Waktu Hasil"}),(0,t.jsx)(w,{children:"Alamat"})]})}),(0,t.jsxs)(y,{children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"IELTS Life Skills \u2013 A1 Speaking & Listening"}),(0,t.jsx)(A,{children:"IELTS SELT Consortium"}),(0,t.jsx)(A,{children:"Pass"}),(0,t.jsxs)(A,{children:[" ",(0,t.jsxs)(S.xu,{children:[(0,t.jsx)(L.Z,{link:"https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills",children:"Situs Web Penyedia"})," ",(0,t.jsx)(L.Z,{link:"https://www.ielts.org/for-test-takers/book-a-test",children:"Pesan tes di sini"})]})]}),(0,t.jsx)(A,{children:"3.4m IDR (est \xa3189)"}),(0,t.jsx)(A,{children:"Dalam satu minggu"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"LanguageCert International ESOL SELT A1 (Speaking & Listening)"}),(0,t.jsx)(A,{children:"LanguageCert"}),(0,t.jsx)(A,{children:"60/100"}),(0,t.jsx)(A,{children:(0,t.jsxs)(S.xu,{children:[(0,t.jsx)(L.Z,{link:"https://www.languagecert.org/en/language-exams/english/languagecert-selt/a1-sl-2730",children:"Situs Web Penyedia"})," ",(0,t.jsx)(L.Z,{link:"https://selt.languagecert.org/?exam=A104EE3F80A249B9A74B3C1862FE3CE9&country=50EB9A019EAB4678AE83D2DA8A4EC680",children:"Pesan tes di sini"})]})}),(0,t.jsx)(A,{children:"165 USD (est 2.37m IDR)"}),(0,t.jsx)(A,{children:"5 hari kerja"}),(0,t.jsx)(A,{children:"The Indonesia Int`L Educ.Foundation, Menara Imperium 28Th Floor Suite B, Jakarta, 12980, IDN"})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"PTE Home A1"}),(0,t.jsx)(A,{children:"Pearson"}),(0,t.jsx)(A,{children:"Pass"}),(0,t.jsx)(A,{children:(0,t.jsxs)(S.xu,{children:[(0,t.jsx)(L.Z,{link:"https://www.pearsonpte.com/selt-tests/pte-academic-ukvi",children:"Situs Web Penyedia"})," ",(0,t.jsx)(L.Z,{link:"https://home.pearsonvue.com/Test-takers.aspx",children:"Pesan tes di sini"})]})})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(A,{children:"Skills for English UKVI A1 (2 component)"}),(0,t.jsx)(A,{children:"PSI Service (UK) Ltd"}),(0,t.jsx)(A,{children:"Pass"}),(0,t.jsx)(A,{children:(0,t.jsx)(S.xu,{children:(0,t.jsx)(L.Z,{link:"https://www.psionline.com/en-gb/certification/skills-for-english/",children:"Situs Web Penyedia"})})}),(0,t.jsx)(A,{children:"210 USD (est 3m IDR)"}),(0,t.jsx)(A,{children:"14 Days"}),(0,t.jsx)(A,{children:"Jakarta - PT. International Test Center (SfE) Plaza Sentral 17th Floor, Jakarta, Indonesia"})]})]})]})})]}),(0,t.jsx)(S.X6,{size:"md",children:"Menemukan pusat tes"}),(0,t.jsxs)(S.xv,{children:["Sekarang Anda harus memiliki ide bagus tentang penyedia tes mana yang Anda inginkan untuk pergi bersama, menemukan pusat tes resmi untungnya cukup semudah yang dimiliki pemerintah Inggris"," ",(0,t.jsx)(L.Z,{link:"https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt#approved-test-centres",children:"daftar pusat yang disetujui di situs web mereka"}),".",(0,t.jsx)(S.xv,{children:"Semengat!! \ud83e\udd1e"})]})]});function B(){return"Ind"===(0,T.Z)()?C:Z}},96328:function(e){e.exports={topbarContainer:"styles_topbarContainer__h9Nf1",logo:"styles_logo__a5qhr"}},23218:function(e){e.exports={blogLayout:"styles_blogLayout__oWYyZ",blogHeading:"styles_blogHeading__i4Lk8"}},56650:function(e){e.exports={progressIcon:"style_progressIcon__GtLXV",straightProgressBar:"style_straightProgressBar__EnhKT"}}},function(e){e.O(0,[445,617,13,874,426,938,842,774,888,179],(function(){return a=81858,e(e.s=a);var a}));var a=e.O();_N_E=a}]);