(window.webpackJsonp=window.webpackJsonp||[]).push([[23,9],{565:function(e,t,n){var content=n(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(58).default)("06c608b5",content,!0,{sourceMap:!1})},604:function(e,t,n){"use strict";n(565)},605:function(e,t,n){var o=n(57)((function(i){return i[1]}));o.push([e.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),o.locals={},e.exports=o},613:function(e,t,n){"use strict";n.r(t);n(21);var o={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(e){if("movement"===this.interactionMode){var t=Math.floor(e.offsetX*(1280/this.$refs.image.width)),n=Math.floor(e.offsetY*(720/this.$refs.image.height));if(console.log(t,n),this.pointers.push([e.clientX,e.clientY]),this.calibrationProcess){var o={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(e){return e.json()})).then((function(data){o.robot_x=data.position.x,o.robot_y=data.position.y})),o.camera_x=t,o.camera_y=n,this.calibrationNodes.push(o),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(e){return e.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[t,n],calibration_nodes:this.calibrationNodes})}).then((function(e){return e.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},r=(n(604),n(28)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{position:"relative"}},[e.imageLoaded?n("img",{ref:"image",staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},style:"drawing"===e.interactionMode?{"aspect-ratio":"4/3","object-fit":"cover"}:{},attrs:{src:"https://api.merklebot.com/videoserver/video"},on:{click:e.onClickImage,error:e.onImageError}}):e._e(),e._v(" "),e.imageLoaded?e._e():n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[e._v("\n    Camera isn't loaded\n  ")]),e._v(" "),e._l(e.pointers,(function(e,t){return n("div",{key:t,staticClass:"clickEffect",style:{left:e[0]+"px",top:e[1]+"px"}})})),e._v(" "),"movement"===e.interactionMode?n("div",{on:{click:e.startCalibration}},[e._v("\n    Calibrate\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},827:function(e,t,n){var content=n(945);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(58).default)("9d581edc",content,!0,{sourceMap:!1})},836:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(592),c=Object(o.defineComponent)({setup:function(){return{robot:Object(r.a)()}}}),l=n(28),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-6 py-4"},[e.robot.robotState?n("div",[n("p",{staticClass:"text-3xl my-6 text-center dark:text-white"},[e._v("\n      Hi, I’m Spot 🦾🐶\n    ")]),e._v(" "),n("div",[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1),e._v(" "),e._m(0),e._v(" "),e._m(1)]):e._e(),e._v(" "),e.robot.robotState?e._e():n("div",[n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[e._v("\n      Spot is currently unavailable\n    ")]),e._v(" "),n("div",{staticClass:"h-1/3"},[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-2xl my-6 text-center dark:text-white"},[e._v("\n      And we are a team of builders who share the vision of\n      "),n("br"),e._v(" "),n("span",{staticClass:"text-orange-600 font-bold"},[e._v("machine economy with no single point of failure.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-2xl mt-2 text-center dark:text-white"},[e._v("\n      With this demo we aim to demonstrate the benefits of using Web3 software\n      stack in robotics deployments.\n      "),n("br")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{CameraFrame:n(613).default})},944:function(e,t,n){"use strict";n(827)},945:function(e,t,n){var o=n(57)((function(i){return i[1]}));o.push([e.i,".screen[data-v-ab38a7ec]{min-height:80vh}",""]),o.locals={},e.exports=o},965:function(e,t,n){"use strict";n.r(t);var o=n(14),r=(n(64),n(78),n(47),n(94)),c=n(592),l=Object(r.b)({setup:function(){var e=Object(c.a)(),t=function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.updateRobotState();case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(t,1e3);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),n=Object(r.f)({w:window.innerWidth,h:window.innerHeight});Object(r.d)((function(){document.documentElement.classList.add("dark"),t(),window.addEventListener("resize",(function(){n.value={w:window.innerWidth,h:window.innerHeight}}));var e=Object(r.i)();e.value.hash&&setTimeout((function(){document.getElementById("anchor-to-".concat(e.value.hash.slice(1))).click()}),300)}));return{screenSize:n,minScreenSize:{w:1e3,h:400}}}}),d=l,m=(n(944),n(28)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"dark:bg-gray-800 font-mono bg-white overflow-hidden"},[e.screenSize.w>=e.minScreenSize.w&&e.screenSize.h>=e.minScreenSize.h?n("div",{staticClass:"z-20 container mx-auto flex flex-row flex-wrap justify-center place-items-center"},[n("div",{staticClass:"basis-5/12"},[n("AlwaysVisibleBlock")],1),e._v(" "),n("div",{staticClass:"basis-7/12 flex"},[n("ActivitiesBlock")],1)]):n("div",{staticClass:"flex items-center justify-items-center w-full h-screen"},[n("div",{staticClass:"container w-full max-h-fit text-center font-bold text-orange-600"},[e._v("\n      Please open on a desktop computer in a window larger than "+e._s(e.minScreenSize.w)+" x "+e._s(e.minScreenSize.h)+"\n    ")])])])}),[],!1,null,"ab38a7ec",null);t.default=component.exports;installComponents(component,{AlwaysVisibleBlock:n(836).default,ActivitiesBlock:n(949).default})}}]);