(window.webpackJsonp=window.webpackJsonp||[]).push([[1,13],{555:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return x})),n.d(e,"e",(function(){return w})),n.d(e,"h",(function(){return y})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return O})),n.d(e,"f",(function(){return j})),n.d(e,"g",(function(){return R}));var r,c,o=n(14),l=(n(55),n(63),n(587)),d=n(597),f=n.n(d),h=n(598),m=n(565),v=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new f.a(h.a)),t.next=6,r.run();case 6:return t.next=8,f.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,v();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,c=r.launch.send(e,Object(m.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},557:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(567),n(570);var r=n(94),c=n(558),o=n(555),l=Object(r.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(o.a)().then((function(e){console.log("accounts",e),t.accounts=e,t.setActiveAccount(e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(o.e)(t.address),Object(o.h)(this.selectedAccount.account.address,(function(n){Object(o.b)().then((function(r){var o=n.free.sub(n.feeFrozen);e.selectedAccount.balanceRaw=o,e.selectedAccount.balanceFormatted=(o*Math.pow(10,-9)).toFixed(4)+" XRT",Object(c.c)(t.address).then((function(t){e.selectedAccount.tickets=t}))}))}))}}})},558:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(14),c=(n(63),n(77)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com"}),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l,d,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,c=e.nonce,l=void 0===c?null:c,d=e.launchTxId,f=void 0===d?null:d,t.next=3,o.get("robonomics-launch-traces",{params:{sender:r,nonce:l,launch_tx_id:f}});case 3:return h=t.sent,t.abrupt("return",h.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},577:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var r=n(94),c=Object(r.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(t){this.codeSampleParameter=t}}}),o=Object(r.c)("dAppParameters",{state:function(){return{payWithOption:"XRT"}}})},589:function(t,e){},590:function(t,e){},592:function(t,e){},622:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),c=(n(21),n(63),n(94)),o=n(555),l=Object(c.c)("robot",{state:function(){return{queueSize:null,robotState:null,lastSessionId:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null}}}},actions:{launchCps:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(o.c)(e.cps.address,!0);case 4:if(r=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(o.d)(e.cps.address,t);case 9:return c=n.sent,n.next=12,Object(o.g)([r,c]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(o.f)(r);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",e.cps.launch);case 21:case"end":return n.stop()}}),n)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},sendDrawing:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},623:function(t,e,n){"use strict";n.r(e);var r=n(93),c=n(577),o=Object(r.b)({setup:function(){return{dappParameters:Object(c.a)()}}}),l=n(27),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full py-4"},[n("div",{staticClass:"flex flex-row "},[n("button",{staticClass:"basis-1/2 uppercase py-2 px-4  bg-transparent border-0 border-gray-800 text-gray-800 dark:text-white text-md",class:{"dark:bg-gray-600 dark:text-white border-b-0":"ticket"===t.dappParameters.payWithOption,"dark:bg-white dark:text-gray-800  hover:bg-gray-800 hover:dark:bg-gray-100 hover:text-white":"XRT"===t.dappParameters.payWithOption},attrs:{type:"button"},on:{click:function(e){t.dappParameters.payWithOption="ticket"}}},[t._v("\n      Credit Card\n    ")]),t._v(" "),n("button",{staticClass:"basis-1/2 uppercase py-2 px-4  bg-transparent border-0 border-gray-800 text-gray-800 dark:text-white text-md",class:{"dark:bg-gray-600 dark:text-white border-b-0":"XRT"===t.dappParameters.payWithOption,"dark:bg-white dark:text-gray-800  hover:bg-gray-800 hover:dark:bg-gray-100 hover:text-white":"ticket"===t.dappParameters.payWithOption},attrs:{type:"button"},on:{click:function(e){t.dappParameters.payWithOption="XRT"}}},[t._v("\n      Crypto\n    ")])]),t._v(" "),n("div",[n("div",{staticClass:"flex flex-row "},["XRT"===t.dappParameters.payWithOption?t._t("XRT"):t._e(),t._v(" "),"ticket"===t.dappParameters.payWithOption?t._t("ticket"):t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports},822:function(t,e,n){var content=n(938);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("087a9002",content,!0,{sourceMap:!1})},828:function(t,e,n){"use strict";n.r(e);n(48),n(36),n(65),n(66);var r=n(30),c=n(14),o=(n(63),n(21),n(42),n(75),n(47),n(93)),l=n(577),d=n(622),f=n(557);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=n(933),v=Object(o.b)({props:["canvasId"],emits:["drawing_sent"],setup:function(t,e){e.emit;var n=Object(d.a)(),path=null,v=null,x=[],w=Object(l.b)();Object(o.d)((function(){(v=new m.PaperScope).setup(t.canvasId)}));var y=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],console.log("Sending command"),console.log(x),x.forEach((function(path){var t=[];console.log(path._segments),path._segments.forEach((function(e){t.push([e.point.x,e.point.y])})),r.push(t)})),console.log(r),w.setCodeSampleParameter(!0),t.prev=6,t.next=9,n.launchCps(e);case 9:c=t.sent,o=e?"xrt":"ticket",c&&n.sendDrawing(r,o,"".concat(c.txInfo.blockNumber,"-").concat(c.txInfo.txIndex)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),console.error(t.t0);case 17:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(1*Math.pow(10,9));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=Object(f.a)();return{mouseDown:function(t){console.log("mouse down");var e=function(t){return console.log("createTool"),t.activate(),new m.Tool}(v);e.onMouseDown=function(t){path=function(t){return t.activate(),new m.Path({strokeColor:"#000000",strokeJoin:"round",strokeWidth:1.5})}(v),path.add(t.point)},e.onMouseDrag=function(t){console.log("mouse drag"),path.add(t)},e.onMouseUp=function(t){console.log("mouse up"),path.add(t.point),path.simplify(10),path.flatten(3),x.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},path)),console.log(x)}},resetCanvas:function(){w.setCodeSampleParameter(!1),v.project.activeLayer.removeChildren(),x=[]},sendCommandXrt:k,sendCommandTicket:O,hasEnoughXrt:Object(o.a)((function(){return j.selectedAccount.balanceRaw*Math.pow(10,-9)>1})),hasTicket:Object(o.a)((function(){return j.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length>=1})),wallet:j}}}),x=v,w=(n(937),n(27)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-full mb-8"},[n("canvas",{staticClass:"canvas-style",attrs:{id:t.canvasId},on:{mousedown:t.mouseDown}})]),t._v(" "),n("div",{},[n("button",{staticClass:"w-full uppercase py-2 my-2 px-4  bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:t.resetCanvas}},[t._v("\n      Clear canvas\n    ")])]),t._v(" "),n("PayWithToggle",{scopedSlots:t._u([{key:"ticket",fn:function(){return[n("div",{staticClass:"w-full px-2 dark:bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-16 dark:text-white text-center"},[t._v("\n          You have "+t._s(t.wallet.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length)+"\n          tickets\n        ")]),t._v(" "),n("button",{staticClass:"absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{type:"button",disabled:!t.hasTicket},on:{click:t.sendCommandTicket}},[t._v("\n          Launch for 1 ticket\n        ")])])]},proxy:!0},{key:"XRT",fn:function(){return[n("div",{staticClass:"w-full px-2 dark:bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-16 dark:text-white text-center"},[t._v("\n          You have "+t._s(t.wallet.selectedAccount.balanceFormatted)+"\n        ")]),t._v(" "),n("button",{staticClass:"absolute bottom-0 inset-x-0 uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{type:"button",disabled:!t.hasEnoughXrt},on:{click:t.sendCommandXrt}},[t._v("\n          Launch for 1 XRT\n        ")])])]},proxy:!0}])})],1)}),[],!1,null,"0b494418",null);e.default=component.exports;installComponents(component,{PayWithToggle:n(623).default})},934:function(t,e){},936:function(t,e){},937:function(t,e,n){"use strict";n(822)},938:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,".canvas-style[data-v-0b494418]{cursor:crosshair;width:100%!important;height:300px!important;border:2px solid #000;border-radius:0;display:block;margin:auto}",""]),r.locals={},t.exports=r}}]);