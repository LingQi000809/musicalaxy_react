(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(8),o=c.n(s),l=(c(14),c(3)),r=c(2);c(15),c(16),c(17);var a=c.p+"static/media/colorSquare.68d8802c.png",j=c(0);var u=function(e){var t=e.updateHoverClr,c=e.updateSelectedClr,i=Object(n.useRef)(null),s=Object(n.useRef)(null);function o(e){var t=i.current,c=t.getBoundingClientRect(),n=e.clientX-c.left,s=e.clientY-c.top,o=t.getContext("2d").getImageData(n,s,1,1).data;return"rgba("+o[0]+", "+o[1]+", "+o[2]+", "+o[3]/255+")"}return Object(j.jsxs)("div",{id:"colorPicker",children:[Object(j.jsx)("canvas",{id:"canvas",ref:i,onMouseMove:function(e){var c=o(e);t(c)},onClick:function(e){var t=o(e);c(t)}}),Object(j.jsx)("img",{id:"colorSquare",ref:s,alt:"pick color",src:a,onLoad:function(){var e=i.current,t=e.getContext("2d"),c=s.current;c.width=e.clientWidth,c.height=e.clientHeight,console.log("image onload"),t.canvas.width=c.width,t.canvas.height=c.height,t.drawImage(c,0,0,c.width,c.height),c.style.display="none"}})]})},d=c(4),b=c(9),O=c.n(b);var h=function(e){var t=e.id,c=e.clr,i=e.baseWidth,s=e.maxWidth,o=e.size,l=e.removeSquare,a=e.updateSize,u=Object(n.useRef)(),d=Object(n.useRef)(),b=Object(n.useState)(!1),O=Object(r.a)(b,2),h=O[0],g=O[1],v=Object(n.useState)(!1),p=Object(r.a)(v,2),f=p[0],x=p[1],w={position:"relative",width:o,height:"30%",marginBottom:"2px"},C={display:"block",backgroundColor:c,width:"100%",height:"100%",border:"0.5px solid black"},m={display:h?"initial":"none",cursor:"pointer",height:"28%",position:"absolute",top:"4px",left:"4px"},S={display:h?"initial":"none",height:"55%",position:"absolute",left:"100%",top:"50%",transform:"translate(-60%, -50%)",opacity:"50%",cursor:"col-resize"};function k(){g(!0)}function z(){g(!1)}var M=Object(n.useCallback)((function(e){var c=d.current.getBoundingClientRect().left,n=s*parseInt(i.slice(0,-1))/100,o=e.clientX-c;o<n||o>s||a(t,o)}),[i,t,s,a]),y=Object(n.useCallback)((function(e){console.log("mouse up, removed event listeners"),x(!1),window.removeEventListener("mouseup",y),window.removeEventListener("mousemove",M)}),[x,M]);return Object(n.useEffect)((function(){f&&(console.log("mouse down, added event listeners"),window.addEventListener("mouseup",y),window.addEventListener("mousemove",M))}),[f,M,y]),Object(j.jsxs)("div",{id:"square-wrapper",style:w,ref:d,children:[Object(j.jsx)("div",{ref:u,style:C,onMouseEnter:k,onMouseLeave:z}),Object(j.jsx)("svg",{id:"drag",style:S,onMouseEnter:k,onMouseLeave:z,onMouseDown:function(){console.log("mouse down for resizing"),x(!0)},vxmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 42 42",children:Object(j.jsxs)("g",{fill:"black",children:[Object(j.jsx)("path",{d:"M15.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C16.5,0.447,16.052,0,15.5,0z"}),Object(j.jsx)("path",{d:"M20.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C21.5,0.447,21.052,0,20.5,0z"})]})}),Object(j.jsx)("svg",{id:"close-icon",style:m,onClick:function(){l(t)},onMouseEnter:k,onMouseLeave:z,vxmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475.2 475.2",children:Object(j.jsxs)("g",{fill:"black",children:[Object(j.jsx)("path",{d:"M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6 s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7 s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7 C468.6,170.8,468.6,304.4,386.5,386.5z"}),Object(j.jsx)("path",{d:"M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"})]})})]})};c(22);var g=function(e){var t=e.pieceQueue,c=e.finishPers,i=e.hoverClr,s=e.selectedClr,o=e.resetColors,l=Object(n.useState)(0),a=Object(r.a)(l,2),u=a[0],b=a[1],g=Object(n.useState)(null),v=Object(r.a)(g,2),p=v[0],f=v[1],x=Object(n.useState)(!0),w=Object(r.a)(x,2),C=(w[0],w[1]),m=Object(n.useState)([]),S=Object(r.a)(m,2),k=S[0],z=S[1],M=Object(n.useState)([]),y=Object(r.a)(M,2),F=y[0],E=y[1],L="20%",P=Object(n.useState)(!1),B=Object(r.a)(P,2),R=B[0],I=B[1],H=Object(n.useRef)();function W(e){I(!1),E((function(t){return 1===t.length?[]:0===e?t.slice(1):e===t.length-1?t.slice(0,e):[].concat(Object(d.a)(t.slice(0,e)),Object(d.a)(t.slice(e+1)))}))}Object(n.useEffect)((function(){console.log("setting current mapping"),E(k.length<=u?[]:k[u])}),[u,k]),Object(n.useEffect)((function(){f("audio/"+t[u]+".mp3")}),[u,t]);var V=Object(n.useCallback)((function(e,t){F[e].size=t,C(!1),C(!0)}),[F]);function A(){I(!1),o()}function N(e){z((function(t){var c=t.length;return 0===c?[e]:0===u?[e].concat(Object(d.a)(t.slice(1))):u===c-1?[].concat(Object(d.a)(t.slice(0,c-1)),[e]):[].concat(Object(d.a)(t.slice(0,u)),[e],Object(d.a)(t.slice(u+1)))}))}return Object(j.jsxs)("div",{id:"mappingWrapper",children:[Object(j.jsxs)("div",{id:"mappingUI",children:[Object(j.jsx)("p",{id:"colorQ",children:" What's the color of this music? "}),Object(j.jsx)(O.a,{id:"audioPlayer",src:p,autoPlay:!0,controls:!0}),Object(j.jsxs)("div",{id:"selection",children:[Object(j.jsx)("div",{id:"hoverClr",style:{backgroundColor:i}}),Object(j.jsx)("div",{id:"selectedClr",style:{backgroundColor:s}})]}),Object(j.jsx)("svg",{id:"add-icon",onClick:function(){F.length<3?(I(!1),E((function(e){return 0===e.length?[{color:s,size:L}]:[].concat(Object(d.a)(e),[{color:s,size:L}])}))):I(!0)},vxmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",children:Object(j.jsx)("g",{fill:"white",children:Object(j.jsx)("path",{d:"M22,44c-3.309,0-6-2.665-6-5.941V28H5.941C2.665,28,0,25.309,0,22s2.665-6,5.941-6H16V5.941C16,2.665,18.691,0,22,0 s6,2.665,6,5.941V16h10.059C41.335,16,44,18.691,44,22s-2.665,6-5.941,6H28v10.059C28,41.335,25.309,44,22,44z M5.941,18 C3.805,18,2,19.832,2,22s1.805,4,3.941,4H18v12.059C18,40.195,19.832,42,22,42s4-1.805,4-3.941V26h12.059C40.195,26,42,24.168,42,22 s-1.805-4-3.941-4H26V5.941C26,3.805,24.168,2,22,2s-4,1.805-4,3.941V18H5.941z"})})})]}),0===u?Object(j.jsx)(j.Fragment,{}):Object(j.jsx)("svg",{id:"back-icon",onClick:function(){console.log("going back to id:",u-1),N(F),b(u-1),A()},vxmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 477.175 477.175",children:Object(j.jsx)("g",{fill:"white",children:Object(j.jsx)("path",{d:"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"})})}),u===t.length-1?Object(j.jsx)(j.Fragment,{}):Object(j.jsx)("svg",{id:"next-icon",onClick:function(){console.log("going next to id:",u+1),N(F),b(u+1),A()},vxmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 477.175 477.175",children:Object(j.jsx)("g",{fill:"white",children:Object(j.jsx)("path",{d:"M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"})})}),Object(j.jsx)("p",{id:"selected-colors",style:{display:0===F.length?"none":"block"},children:"Selected color(s): "}),Object(j.jsx)("div",{id:"pers-squares",ref:H,children:Object.keys(F).map((function(e){var t=parseInt(e);return Object(j.jsx)(h,{id:t,clr:F[t].color,baseWidth:L,maxWidth:H.current.offsetWidth,size:F[t].size,removeSquare:W,updateSize:V},t)}))}),Object(j.jsx)("p",{id:"max-warning",style:R?{display:"initial"}:{display:"none"},children:"Up to 3 colors! "}),Object(j.jsx)("svg",{id:"finish-icon",onClick:function(){N(F),c(),A()},vxmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:Object(j.jsxs)("g",{fill:"white",children:[Object(j.jsx)("path",{d:"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"}),Object(j.jsx)("path",{d:"M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411C39.251,14.885,38.62,14.922,38.252,15.336z"})]})}),Object(j.jsx)("svg",{id:"info-icon",vxmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:Object(j.jsxs)("g",{fill:"#C0D4FF",children:[Object(j.jsx)("path",{d:"M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"}),Object(j.jsx)("path",{d:"M26,37c-0.553,0-1,0.447-1,1v2c0,0.553,0.447,1,1,1s1-0.447,1-1v-2C27,37.447,26.553,37,26,37z"}),Object(j.jsx)("path",{d:"M26.113,9.001C26.075,9.001,26.037,9,25.998,9c-2.116,0-4.106,0.815-5.615,2.304C18.847,12.819,18,14.842,18,17 c0,0.553,0.447,1,1,1s1-0.447,1-1c0-1.618,0.635-3.136,1.787-4.272c1.153-1.137,2.688-1.765,4.299-1.727 c3.161,0.044,5.869,2.752,5.913,5.913c0.029,2.084-0.999,4.002-2.751,5.132C26.588,23.762,25,26.794,25,30.158V33 c0,0.553,0.447,1,1,1s1-0.447,1-1v-2.842c0-2.642,1.276-5.105,3.332-6.432c2.335-1.506,3.706-4.063,3.667-6.84 C33.939,12.599,30.401,9.061,26.113,9.001z"})]})})]})};var v=function(e){var t=e.onPageSwitch,c=Object(n.useState)("#FFFFFF"),i=Object(r.a)(c,2),s=i[0],o=i[1],a=Object(n.useState)("#FFFFFF"),d=Object(r.a)(a,2),b=d[0],O=d[1];function h(e){o(e)}function v(e){O(e)}var p={pieceQueue:["Clair_de_Lune","Dragon_Boy","HeartBroken_Kiki","Life_Incredible_Again","Secret_Duo"],finishPers:function(){console.log("to be implemented: page switch"),t({nextPage:"WORKSPACE"})},hoverClr:s,selectedClr:b,resetColors:function(){h("white"),v("white")}};return Object(j.jsxs)("div",{className:"page",id:"personalization-page",children:[Object(j.jsx)(u,{updateHoverClr:h,updateSelectedClr:v}),Object(j.jsx)(g,Object(l.a)({},p))]})};var p=function(e){return e.onPageSwitch,Object(j.jsx)(j.Fragment,{})};var f=function(){var e=Object(n.useState)("PERSONALIZATION"),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(null),o=Object(r.a)(s,2),a=o[0],u=o[1],d=Object(n.useReducer)((function(e){return!e}),!1),b=Object(r.a)(d,2),O=b[0],h=b[1],g=Object(n.useCallback)((function(e){u(e.nextPage),h()}),[h]),f={in:O,timeout:1e3},x=(Object(l.a)(Object(l.a)({},f),{},{classNames:"from",onEntered:function(){i(a),u(null),h()}}),Object(l.a)(Object(l.a)({},f),{},{classNames:"to"}),{onPageSwitch:g});return Object(j.jsx)(j.Fragment,{children:function(e){switch(e){case"PERSONALIZATION":return Object(j.jsx)(v,Object(l.a)({},x));case"WORKSPACE":return Object(j.jsx)(p,Object(l.a)({},x));default:return Object(j.jsx)(j.Fragment,{})}}(c)})};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6909330b.chunk.js.map