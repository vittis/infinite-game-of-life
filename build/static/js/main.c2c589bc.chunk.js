(this["webpackJsonpinfinite-game-of-life-web"]=this["webpackJsonpinfinite-game-of-life-web"]||[]).push([[0],{24:function(e,t,n){e.exports=n(51)},29:function(e,t,n){},39:function(e,t){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),l=(n(29),n(1)),i=n(23),s=n(22),u=function(e){var t=e.grid,n=e.onSend;return r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(f,", 20px)")}},t.map((function(e,a){return e.map((function(e,c){return r.a.createElement("div",{key:"".concat(a,"-").concat(c),onClick:function(){n({i:a,k:c})},style:{width:20,height:20,backgroundColor:t[a][c]?"pink":void 0,border:"solid 1px #444"}})}))})))},m=n(7),f=19;function d(e){for(var t=Object(i.a)(e),n=[];t.length;)n.push(t.splice(0,f));return n}var b=0;var g=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),i=Object(l.a)(o,2),f=i[0],g=i[1],v=Object(a.useState)(),p=Object(l.a)(v,2),E=p[0],O=p[1],h=Object(a.useState)(0),j=Object(l.a)(h,2),w=j[0],x=j[1],k=Object(a.useState)(),y=Object(l.a)(k,2),N=y[0],S=y[1],C=Object(a.useState)(0),I=Object(l.a)(C,2),J=I[0],M=I[1],R=Object(a.useState)(!1),B=Object(l.a)(R,2),G=B[0],W=B[1],_=Object(a.useState)([]),D=Object(l.a)(_,2),L=D[0],T=D[1];Object(a.useEffect)((function(){new s.Client("ws://167.172.126.142").joinOrCreate("life_room").then((function(e){g(e),e.onStateChange((function(e){S(d(e.board)),O(d(e.board)),M(e.generation),x(e.generation),W(!1)})),e.onMessage("tick",(function(e){c(new Date(1e3*e).toISOString().substr(14,5))})),e.onMessage("receive_all",(function(e){var t=e.allGens,n=e.state;T(t),S(d(n.board)),O(d(n.board)),x(n.generation),M(n.generation),W(!1)}))})).catch((function(e){console.log("JOIN ERROR",e)}))}),[]),Object(a.useEffect)((function(){L&&w!==J&&L[w-1]?O(d(L[w-1].board)):w===J&&O(N)}),[w,J]),Object(a.useEffect)((function(){b=w;var e=setInterval((function(){b!==J?(x((function(e){return e+1})),b+=1):(clearInterval(e),W(!1))}),30);return G||clearInterval(e),function(){clearInterval(e)}}),[G]);var V=Object(a.useCallback)((function(e){var t=e.i,n=e.k;w===J&&(null===f||void 0===f||f.send("click",{i:t,k:n}))}),[f,w,J]);return E?r.a.createElement("div",{className:"my-5 flex flex-col w-full items-center"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",{className:"text-2xl font-bold mb-2"},"Infinite Game of Life ")),r.a.createElement("div",{className:"mb-1 flex flex-col-reverse"},r.a.createElement("div",{className:"mt-1 flex flex-col items-center"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("input",{className:"rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-full",type:"range",min:"0",max:J,step:"1",value:w,onChange:function(e){return x(Number.parseInt(e.target.value))}}),r.a.createElement("button",{onClick:function(){W(!G)},className:"ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow"},G?r.a.createElement(m.a,null):r.a.createElement(m.b,null)))),r.a.createElement("div",{className:"m-1 p-2 border border-gray-600 rounded"},"Next generation in: ",r.a.createElement("span",{className:"font-bold"},n))),r.a.createElement("div",{className:"mb-3"},"Viewing generation: ",r.a.createElement("b",null,w)),E&&r.a.createElement(u,{grid:E,onSend:V})):r.a.createElement("div",null,"loading")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c2c589bc.chunk.js.map