(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5,6,7,8],{374:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return w})),n.d(e,"d",(function(){return x})),n.d(e,"f",(function(){return C})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return y}));var r,o,c=n(15),l=(n(51),n(61),n(442)),d=n(503),f=n.n(d),h=n(507),v=n(355),m=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new f.a(h.a)),t.next=6,r.run();case 6:return t.next=8,f.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o&&o(),t.next=3,m();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:o=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return r=t.sent,o=r.launch.send(e,Object(v.a)(n)),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},396:function(t,e,n){var content=n(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(127).default)("eca014ba",content,!0,{sourceMap:!1})},439:function(t,e,n){"use strict";var r=n(1),o=n(440);r({target:"String",proto:!0,forced:n(441)("sub")},{sub:function(){return o(this,"sub","","")}})},440:function(t,e,n){var r=n(9),o=n(31),c=n(20),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var f=c(o(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+d(c(r),l,"&quot;")+'"'),h+">"+f+"</"+e+">"}},441:function(t,e,n){var r=n(8);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},446:function(t,e){},450:function(t,e){},458:function(t,e){},504:function(t,e,n){"use strict";n(396)},505:function(t,e,n){var r=n(126)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.canvas-style[data-v-660b9e5e]{\n  cursor:crosshair;\n  width:100%!important;\n  height:500px!important;\n  border:5px solid #000;\n  border-radius:10px;\n  display:block;\n  margin:auto;\n  box-shadow:0 10px 8px -8px #000\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},604:function(t,e){},605:function(t,e){},608:function(t,e,n){"use strict";n.r(e);n(439),n(50);var r=n(574),o=n(374),c={name:"AccountChooser",data:function(){return{showAccountChoose:!1,accounts:[],selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null}}},watch:{"selectedAccount.account":function(t){var e=this;Object(o.d)(t.address),Object(o.f)(this.selectedAccount.account.address,(function(t){Object(o.b)().then((function(n){var o=t.free.sub(t.feeFrozen);e.selectedAccount.balanceRaw=o,e.selectedAccount.balanceFormatted=Object(r.a)(o,{decimals:n.api.registry.chainDecimals[0],withUnit:n.api.registry.chainTokens[0]})}))}))}},mounted:function(){var t=this;Object(o.a)().then((function(e){console.log("accounts",e),t.accounts=e,t.selectedAccount.account=e[0]}))},methods:{addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)}}},l=n(60),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative p-1 flex items-center w-full space-x-4 justify-end"},[n("div",{staticClass:"w-128"},[t.selectedAccount.account?n("div",{staticClass:"mt-1 relative"},[n("button",{staticClass:"relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",attrs:{type:"button"},on:{click:function(){return t.showAccountChoose=!t.showAccountChoose}}},[n("span",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+t.selectedAccount.account.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block truncate"},[t._v("\n              "+t._s(t.selectedAccount.account.meta.name)+" - ("+t._s(t.selectedAccount.balanceFormatted)+") - "+t._s(t.addressShort(t.selectedAccount.account.address))+"\n            ")])]),t._v(" "),n("span",{staticClass:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[n("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccountChoose,expression:"showAccountChoose"}],staticClass:"absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg"},[n("ul",{staticClass:"max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",attrs:{tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-item-3"}},t._l(t.accounts,(function(e,r){return n("li",{key:r,staticClass:"text-gray-900 cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9",attrs:{id:"listbox-item-0",value:e,role:"option"},on:{click:function(){t.selectedAccount.account=e,t.showAccountChoose=!1}}},[n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+e.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block font-normal truncate"},[t._v("\n                  "+t._s(e.meta.name)+" - "+t._s(t.addressShort(e.address))+"\n                ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.selectedAccount.account.address===e.address,expression:"selectedAccount.account.address===account.address"}],staticClass:"absolute inset-y-0 right-0 flex items-center pr-4"},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])])])})),0)])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},609:function(t,e,n){"use strict";n.r(e);var r={name:"CameraFrame"},o=n(60),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},attrs:{src:"http://10.200.0.8:8000/video"}})])}],!1,null,null,null);e.default=component.exports},610:function(t,e,n){"use strict";n.r(e);var r={name:"CardContainer",props:{title:{type:String,required:!1}}},o=n(60),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative"},[n("p",{staticClass:"text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"a25cd4d8",null);e.default=component.exports},611:function(t,e,n){"use strict";n.r(e);var r=n(29);n(22),n(39),n(45),n(38),n(44),n(62),n(63);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c=n(603),l={name:"DrawingPanel",props:["canvasId"],data:function(){return{path:null,scope:null,paths:[]}},methods:{resetCanvas:function(){this.scope.project.activeLayer.removeChildren(),this.paths=[]},sendCommand:function(){var t=[];console.log("Sending command"),console.log(this.paths),this.paths.forEach((function(path){var e=[];console.log(path._segments),path._segments.forEach((function(t){e.push([t.point.x,t.point.y])})),t.push(e)})),console.log(t),fetch("http://10.200.0.3:1234/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:t})}).then((function(t){return t.json()})).then((function(data){alert("Sent SHEDEVR to spot"),console.log(data)}))},pathCreate:function(t){return t.activate(),new c.Path({strokeColor:"#000000",strokeJoin:"round",strokeWidth:1.5})},createTool:function(t){return console.log("createTool"),t.activate(),new c.Tool},mouseDown:function(t){console.log("mouse down");var e=this;this.tool=this.createTool(this.scope),this.tool.onMouseDown=function(t){e.path=e.pathCreate(e.scope),e.path.add(t.point)},this.tool.onMouseDrag=function(t){console.log("mouse drag"),e.path.add(t)},this.tool.onMouseUp=function(t){console.log("mouse up"),e.path.add(t.point),e.path.simplify(10),e.path.flatten(10),e.paths.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},e.path)),console.log(e.paths)}}},mounted:function(){this.scope=new c.PaperScope,this.scope.setup(this.canvasId)}},d=l,f=(n(504),n(60)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{staticClass:"canvas-style",attrs:{id:t.canvasId},on:{mousedown:t.mouseDown}}),t._v(" "),n("button",{staticClass:"py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"},on:{click:t.resetCanvas}},[t._v("\n    Reset\n  ")]),t._v(" "),n("button",{staticClass:"py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"},on:{click:t.sendCommand}},[t._v("\n    Send Command\n  ")])])}),[],!1,null,"660b9e5e",null);e.default=component.exports},612:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(50),n(61),n(374)),c={name:"ControlPanel",data:function(){return{selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null},cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:null,txStatus:null}}}},methods:{launchCps:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.c)(t.cps.address,!0);case 2:return n=e.sent,t.cps.status="wait_tx",e.next=6,Object(o.e)(n);case 6:t.cps.launch.txInfo=e.sent,t.cps.launch.txStatus="accepted",t.cps.status="activated";case 9:case"end":return e.stop()}}),e)})))()},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)}}},l=n(60),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[n("h2",[t._v("Launch the robot")]),t._v(" "),n("button",{attrs:{disabled:!1},on:{click:t.launchCps}},[t._v("\n      Launch\n    ")]),t._v(" "),n("ul",{staticStyle:{"list-style":"none",padding:"0"}},[n("li",[t._v("Robot status: "+t._s(t.cps.status))]),t._v(" "),t.cps.launch.txStatus?n("li",[t._v("\n        Transaction status: "+t._s(t.cps.launch.txStatus)+"\n      ")]):t._e(),t._v(" "),t.cps.launch.txInfo?n("li",[t._v("\n        View transaction:\n        "),n("a",{attrs:{href:"https://robonomics.subscan.io/extrinsic/"+t.cps.launch.txInfo.tx,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.cps.launch.txInfo.tx)))])]):t._e()])])])}),[],!1,null,"5fc58c1c",null);e.default=component.exports},730:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage"},o=n(60),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative"},[n("div",{staticClass:"flex items-start justify-between"},[n("div",{staticClass:"h-screen hidden lg:block shadow-lg relative w-80"},[n("div",{staticClass:"bg-white h-full dark:bg-gray-700"},[t._m(0),t._v(" "),n("nav",{staticClass:"mt-6"},[n("div",[n("a",{staticClass:"w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500",attrs:{href:"#"}},[n("span",{staticClass:"text-left"},[n("svg",{attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"}})])]),t._v(" "),n("span",{staticClass:"mx-2 text-sm font-normal"},[t._v("\n                Home\n              ")])]),t._v(" "),n("a",{staticClass:"w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent",attrs:{href:"#"}},[n("span",{staticClass:"text-left"},[n("svg",{attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"}})])]),t._v(" "),n("span",{staticClass:"mx-4 text-sm font-normal"},[t._v("\n                Records\n              ")])])])])])]),t._v(" "),n("div",{staticClass:"flex flex-col w-full md:space-y-4"},[n("header",{staticClass:"w-full h-16 z-40 flex items-center justify-between"},[n("div",{staticClass:"block lg:hidden ml-6"},[n("button",{staticClass:"flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md"},[n("svg",{staticClass:"text-gray-400",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"}})])])]),t._v(" "),n("div",{staticClass:"relative z-20 flex flex-col justify-end h-full px-3 md:w-full"},[n("AccountChooser")],1)]),t._v(" "),n("div",{staticClass:"overflow-auto h-screen pb-24 px-4 md:px-6"},[n("h1",{staticClass:"text-4xl font-semibold text-gray-800 dark:text-white"},[t._v("\n          Spot demo\n        ")]),t._v(" "),n("h2",{staticClass:"text-md text-gray-400"},[t._v("\n          Here's spot controlling demo.\n        ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4"},[n("CardContainer",{attrs:{title:"Camera"}},[n("CameraFrame")],1),t._v(" "),n("CardContainer",{attrs:{title:"Drawing panel"}},[n("DrawingPanel",{attrs:{"canvas-id":"canvas-one"}})],1),t._v(" "),n("CardContainer",{attrs:{title:"Robonomics handlers"}},[n("ControlPanel")],1)],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-start pt-6 ml-8"},[n("p",{staticClass:"font-bold dark:text-white text-xl"},[t._v("\n            Merklebot\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AccountChooser:n(608).default,CameraFrame:n(609).default,CardContainer:n(610).default,DrawingPanel:n(611).default,ControlPanel:n(612).default})}}]);