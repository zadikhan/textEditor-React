(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault",className:"form-check-input"}),l.a.createElement("label",{htmlFor:"flexSwitchCheckDefault",className:"form-check-label"}," Enable DarkMode")))))}function m(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"grey":"light",color:"dark"===e.mode?"white":"black"},value:r,onChange:function(e){console.log("On change"),c(e.target.value)},id:"myBox",rows:"8"}))),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("Converted to UpperCase","success")}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("Converted to lowerCase","success")}},"Convert to lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c(""),e.showAlert("Text has been Cleared","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var a=r.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra Space has been added","success")}},"Remove Spaces"),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("p",null," ",r.split(" ").length," words and ",r.length,"characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes Read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"enter something to get preview here ")))}function i(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),":",e.alert.msg)}var u=function(){var e=Object(n.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=function(e,a){b({msg:e,type:a}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"azam",mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="#042743",h("dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",h("light mode has been enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:h,mode:t,heading:"Enter the text to analyse"})))},d=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.acc828cf.chunk.js.map