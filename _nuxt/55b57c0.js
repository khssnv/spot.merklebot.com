(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{925:function(e,t,r){"use strict";var n=r(17),o=r(2),c=r(7),l=r(94),f=r(22),d=r(15),v=r(154),m=r(57),h=r(93),w=r(215),k=r(8),x=r(76).f,S=r(35).f,_=r(21).f,y=r(926),E=r(927).trim,N="Number",I=o.Number,j=I.prototype,R=o.TypeError,T=c("".slice),A=c("".charCodeAt),M=function(e){var t=w(e,"number");return"bigint"==typeof t?t:O(t)},O=function(e){var t,r,n,o,c,l,f,code,d=w(e,"number");if(h(d))throw R("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=E(d),43===(t=A(d,0))||45===t){if(88===(r=A(d,2))||120===r)return NaN}else if(48===t){switch(A(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=T(d,2)).length,f=0;f<l;f++)if((code=A(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(l(N,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var C,F=function(e){var t=arguments.length<1?0:I(M(e)),r=this;return m(j,r)&&k((function(){y(r)}))?v(Object(t),r,F):t},L=n?x(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)d(I,C=L[P])&&!d(F,C)&&_(F,C,S(I,C));F.prototype=j,j.constructor=F,f(o,N,F,{constructor:!0})}},926:function(e,t,r){var n=r(7);e.exports=n(1..valueOf)},927:function(e,t,r){var n=r(7),o=r(31),c=r(19),l=r(928),f=n("".replace),d="["+l+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(e){return function(t){var r=c(o(t));return 1&e&&(r=f(r,v,"")),2&e&&(r=f(r,m,"")),r}};e.exports={start:h(1),end:h(2),trim:h(3)}},928:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},943:function(e,t,r){"use strict";r.r(t);var n=r(14),o=(r(62),r(925),r(91)),c=r.n(o).a.create({baseURL:"https://api.merklebot.com"}),l=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.post("spot-demo-ticket/checkout",{quantity:"0.001",account:t});case 2:return r=e.sent,e.abrupt("return",r.data.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f="https://js.stripe.com/v3",d=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,v="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",m=null,h=function(e){return null!==m||(m=new Promise((function(t,r){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(v),window.Stripe)t(window.Stripe);else try{var script=function(){for(var e=document.querySelectorAll('script[src^="'.concat(f,'"]')),i=0;i<e.length;i++){var script=e[i];if(d.test(script.src))return script}return null}();script&&e?console.warn(v):script||(script=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(f).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(script),script}(e)),script.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(e){return void r(e)}else t(null)}))),m},w=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.31.0",startTime:t})}(n,r),n},k=Promise.resolve().then((function(){return h(null)})),x=!1;k.catch((function(e){x||console.warn(e)}));var S,_=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];x=!0;var n=Date.now();return k.then((function(e){return w(e,t,n)}))},y=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=2;break}return e.abrupt("return",S);case 2:return e.next=4,_("pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO");case 4:return S=e.sent,e.abrupt("return",S);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E={name:"PurchaseTicket",props:{xrtBalance:{type:Number,default:null},ticketsBalance:{type:Number,default:null},address:{type:String,default:null}},methods:{checkout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e.address);case 2:return r=t.sent,t.next=5,y();case 5:return n=t.sent,t.next=8,n.redirectToCheckout({sessionId:r});case 8:case"end":return t.stop()}}),t)})))()}}},N=r(26),component=Object(N.a)(E,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("h3",[e._v("One launch requires 1 ticket or 1 XRT")]),e._v(" "),r("h3",[e._v("You have:")]),e._v(" "),r("ul",{staticClass:"list-disc ml-8"},[r("li",[e._v(e._s(e.xrtBalance)+" XRT")]),e._v(" "),r("li",[e._v(e._s(e.ticketsBalance)+" tickets")])])]),e._v(" "),r("div",[r("button",{staticClass:"py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg",attrs:{type:"button"},on:{click:e.checkout}},[e._v("\n      Purchase a ticket for 5 USD\n      "),r("img",{staticClass:"stripe",attrs:{alt:"",src:"stripe.svg"}})])])])}),[],!1,null,"4d898871",null);t.default=component.exports}}]);