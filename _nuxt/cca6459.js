(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{506:function(e,t,n){"use strict";(function(e){n(22);t.a={name:"VideoContainer",data:function(){return{pc:null}},methods:{negotiate:function(){var t=this;return this.pc.addTransceiver("video",{direction:"recvonly"}),this.pc.createOffer().then((function(e){return t.pc.setLocalDescription(e)})).then((function(){return new Promise((function(e){if("complete"===t.pc.iceGatheringState)e();else{t.pc.addEventListener("icegatheringstatechange",(function n(){"complete"===t.pc.iceGatheringState&&(t.pc.removeEventListener("icegatheringstatechange",n),e())}))}}))})).then((function(){var n=t.pc.localDescription;return fetch(e.env.VIDEOSERVER_URL+"/offer",{body:JSON.stringify({sdp:n.sdp,type:n.type}),headers:{"Content-Type":"application/json"},method:"POST"})})).then((function(e){return e.json()})).then((function(e){return t.pc.setRemoteDescription(e)})).catch((function(e){alert(e)}))},initPc:function(){var e={sdpSemantics:"unified-plan",iceServers:[{urls:["stun:stun.l.google.com:19302"]}]};this.pc=new RTCPeerConnection(e),this.pc.addEventListener("track",(function(e){"video"===e.track.kind&&(document.getElementById("video").srcObject=e.streams[0])}))}},mounted:function(){this.initPc(),this.negotiate()}}}).call(this,n(156))},732:function(e,t,n){"use strict";n.r(t);var c=n(506).a,r=n(60),component=Object(r.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("video",{attrs:{id:"video",autoplay:"true",playsinline:"true",muted:"true"},domProps:{muted:!0}})}),[],!1,null,"7ea72cfb",null);t.default=component.exports}}]);