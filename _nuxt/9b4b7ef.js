(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{554:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return m})),n.d(e,"e",(function(){return x})),n.d(e,"h",(function(){return k})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return A})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return j}));var r,c,o=n(14),l=(n(55),n(63),n(576)),d=n(583),f=n.n(d),h=n(585),v=n(568),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new f.a(h.a)),t.next=6,r.run();case 6:return t.next=8,f.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,w();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.launch.send(e,Object(v.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),A=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(561);var r=n(94),c=n(792),o=n(557),l=n(554),d=Object(r.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(l.a)().then((function(e){console.log("accounts",e),t.accounts=e,t.setActiveAccount(e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(l.e)(t.address),Object(l.h)(this.selectedAccount.account.address,(function(n){Object(l.b)().then((function(r){var l=n.free.sub(n.feeFrozen);e.selectedAccount.balanceRaw=l,0===l&&(e.selectedAccount.balanceFormatted="0 XRT"),e.selectedAccount.balanceFormatted=Object(c.a)(l,{decimals:r.api.registry.chainDecimals[0],withUnit:r.api.registry.chainTokens[0]}),Object(o.c)(t.address).then((function(t){e.selectedAccount.tickets=t}))}))}))}}})},557:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(14),c=(n(63),n(77)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com"}),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l,d,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,c=e.nonce,l=void 0===c?null:c,d=e.launchTxId,f=void 0===d?null:d,t.next=3,o.get("robonomics-launch-traces",{params:{sender:r,nonce:l,launch_tx_id:f}});case 3:return h=t.sent,t.abrupt("return",h.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},561:function(t,e,n){"use strict";var r=n(1),c=n(562);r({target:"String",proto:!0,forced:n(563)("sub")},{sub:function(){return c(this,"sub","","")}})},562:function(t,e,n){var r=n(9),c=n(32),o=n(20),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var f=o(c(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+d(o(r),l,"&quot;")+'"'),h+">"+f+"</"+e+">"}},563:function(t,e,n){var r=n(8);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},577:function(t,e){},578:function(t,e){},580:function(t,e){},586:function(t,e,n){"use strict";n.r(e);n(46);var r=n(93),c=n(556),o=Object(r.b)({setup:function(){var t=Object(c.a)(),e=Object(r.f)(!1);Object(r.d)((function(){t.connectWallet()}));return{showAccountChoose:e,selectAccount:function(e){t.setActiveAccount(e)},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},wallet:t}}}),l=n(27),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative p-1 flex items-center w-full space-x-4 justify-end"},[n("div",{staticClass:"w-128"},[t.wallet.selectedAccount.account?n("div",{staticClass:"mt-1 relative"},[n("button",{staticClass:"relative w-full bg-white dark:bg-gray-600 dark:text-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-white sm:text-sm",attrs:{type:"button"},on:{click:function(){return t.showAccountChoose=!t.showAccountChoose}}},[n("span",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+t.wallet.selectedAccount.account.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block truncate"},[t._v("\n              "+t._s(t.wallet.selectedAccount.account.meta.name)+" - ("+t._s(t.wallet.selectedAccount.balanceFormatted)+") - "+t._s(t.addressShort(t.wallet.selectedAccount.account.address))+"\n            ")])]),t._v(" "),n("span",{staticClass:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[n("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccountChoose,expression:"showAccountChoose"}],staticClass:"absolute mt-1 w-full z-10 rounded-md bg-white dark:bg-gray-600 shadow-lg"},[n("ul",{staticClass:"max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",attrs:{tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-item-3"}},t._l(t.wallet.accounts,(function(e,r){return n("li",{key:r,staticClass:"text-gray-900 dark:text-white  cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9",attrs:{id:"listbox-item-0",value:e,role:"option"},on:{click:function(){t.selectAccount(e),t.showAccountChoose=!1}}},[n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+e.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block font-normal truncate"},[t._v("\n                  "+t._s(e.meta.name)+" - "+t._s(t.addressShort(e.address))+"\n                ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.wallet.selectedAccount.account.address===e.address,expression:"wallet.selectedAccount.account.address===account.address"}],staticClass:"absolute inset-y-0 right-0 flex items-center pr-4"},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])])])})),0)])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},656:function(t,e,n){"use strict";n.r(e);var r={name:"HeaderPanel"},c=n(27),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"w-full h-16 z-40 flex items-center justify-between"},[n("div",{staticClass:"block lg:hidden ml-6"},[n("button",{staticClass:"flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md"},[n("svg",{staticClass:"text-gray-400",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"}})])])]),t._v(" "),n("div",{staticClass:"relative z-20 flex flex-col justify-end h-full px-3 md:w-full"},[n("AccountChooser")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AccountChooser:n(586).default})}}]);