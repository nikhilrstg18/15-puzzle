(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(77)},49:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);a(42);var n=a(0),i=a.n(n),s=a(9),l=a.n(s),o=a(38),c=a(32),r=a(33),m=a(39),u=a(34),d=a(40),h=a(7),v=a(11),p=a.n(v),f=(a(49),a(79)),E=a(80),w=p.a.range(0,16).map(function(e){return[80*(e%4),80*Math.floor(e/4)]}),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={positions:p.a.shuffle(p.a.range(0,16)),moves:null,time:null,timer:null,show:!1},a.reset=a.reset.bind(Object(h.a)(Object(h.a)(a))),a.updatePosition=a.updatePosition.bind(Object(h.a)(Object(h.a)(a))),a.handleShow=a.handleShow.bind(Object(h.a)(Object(h.a)(a))),a.handleClose=a.handleClose.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleClose",value:function(){var e=this;this.setState({show:!1},function(){e.reset()})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"updatePosition",value:function(e){var t=this,a=this.state.positions,n=a.indexOf(0),i=a.indexOf(e),s=Math.abs(i-n);1!==s&&4!==s||(a[n]=e,a[i]=0,this.setState({positions:a,moves:this.state.moves?this.state.moves+1:1},function(){if(null==t.state.timer){var e=window.setInterval(function(){t.setState({time:null==t.state.time?1:t.state.time+1})},1e3);t.setState({timer:e})}}),p.a.every(a,function(e,t,a){return e=e||16,0===t||parseInt(a[t-1])<=parseInt(e)})&&(window.clearInterval(this.state.timer),this.handleShow()))}},{key:"reset",value:function(){window.clearInterval(this.state.timer),this.setState({time:null,moves:null,timer:null,positions:p.a.shuffle(p.a.range(0,16))})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3 col-md-3 "}),i.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},i.a.createElement("div",{className:"puzzle"},i.a.createElement("h2",{className:"heading-title"},"15 puzzle"),i.a.createElement("div",{className:"upper-action-div"},i.a.createElement("button",{onClick:this.reset,className:"new-game-btn"},"New Game"),i.a.createElement("span",{style:{flex:"1 1 auto"}}),i.a.createElement("div",{className:"metrics"},i.a.createElement("div",{className:"text-right"},i.a.createElement("div",{className:"upper-action-div-info"},"Time"),i.a.createElement("div",{className:"upper-action-div-info xxl"},this.state.time,i.a.createElement("span",{style:{fontSize:"large"}},"s"))),i.a.createElement("div",{className:"text-right"},i.a.createElement("div",{className:"upper-action-div-info"},"Moves"),i.a.createElement("div",{className:"upper-action-div-info xxl"},this.state.moves)))),i.a.createElement("div",{className:"game"},this.state.positions.map(function(t,a){var n=a?"cell":"empty cell",s=Object(o.a)(w[e.state.positions.indexOf(a)],2),l=s[0],c=s[1];return i.a.createElement("div",{key:a,className:n,onClick:function(){return e.updatePosition(a)},style:{transform:"translate3d(".concat(l,"px,").concat(c,"px,0) scale(1.1)")}},a)})),i.a.createElement("p",{className:"instruction"},"Tap on tile to move tiles in grid to order them from 1 to 15."),i.a.createElement("div",{className:"footer"},i.a.createElement("hr",{className:"horizon"}),i.a.createElement("p",{className:"created-by"},"Crafted by Nikhil Rustagi"),i.a.createElement("p",{className:"created-by"},"View my portfolio",i.a.createElement("i",{className:"fas fa-at icon"}),i.a.createElement("a",{href:"https://nikhilrstg18.github.io/nikhil-rustagi/"},i.a.createElement("strong",null,"nikhil-rustagi")))))),i.a.createElement("div",{className:"col-lg-3 col-md-3"}),i.a.createElement(f.a,{show:this.state.show,onHide:this.handleClose},i.a.createElement(f.a.Header,{closeButton:!0},i.a.createElement(f.a.Title,null,"Congratulation You Won !")),i.a.createElement(f.a.Body,null,i.a.createElement("div",null,"Total time taken: ",this.state.time),i.a.createElement("div",null,"Total moves: ",this.state.moves)),i.a.createElement(f.a.Footer,null,i.a.createElement(E.a,{variant:"primary",onClick:this.handleClose},"Close"))))}}]),t}(n.Component);a(75),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.39788d6f.chunk.js.map
