(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(5),i=n.n(r),j=(n(12),n(13),n(4)),l=n.n(j),o=n(6),b=n(2),u=(n(15),function(){var e=Object(c.useState)(null),t=Object(b.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("Mumbai"),i=Object(b.a)(r,2),j=i[0],u=i[1],d=Object(c.useState)(null),h=Object(b.a)(d,2),O=h[0],m=h[1],x=Object(c.useState)(null),f=Object(b.a)(x,2),p=f[0],v=f[1],w=Object(c.useState)(new Date),g=Object(b.a)(w,2),y=g[0],N=g[1],S=new Array(7);return S[0]="Sunday",S[1]="Monday",S[2]="Tuesday",S[3]="Wednesday",S[4]="Thursday",S[5]="Friday",S[6]="Saturday",Object(c.useEffect)((function(){var e=setInterval((function(){return N(new Date)}),1e3);return function(){clearInterval(e)}})),Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(j,"&units=metric&appid=9134f2bb45593ab008f080b052d2d63e"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,s(a.main),console.log(a.main),m(a.weather),console.log(a.weather),v(a.sys),console.log(a.sys);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]),Object(a.jsx)("div",{className:n?n.temp>16?"app warm":"app":"no",children:Object(a.jsxs)("main",{children:[Object(a.jsx)("center",{children:Object(a.jsx)("div",{className:"search-box",children:Object(a.jsx)("input",{type:"search",value:j,className:"search-bar",onChange:function(e){u(e.target.value)}})})}),n&&p&&O?Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"location-box",children:[Object(a.jsxs)("h2",{className:"location",children:[Object(a.jsx)("i",{className:"fas fa-street-view  white  "}),j,",",p.country]}),Object(a.jsxs)("div",{className:"date",children:[y.toLocaleDateString(),", ",S[y.getDay()],Object(a.jsx)("br",{}),y.toLocaleTimeString(),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"weather-box",children:[Object(a.jsxs)("h1",{className:"temp",children:[n.temp,"\xb0Cel"]}),Object(a.jsxs)("div",{className:"weather",children:["  ",O[0].description]})]}),Object(a.jsxs)("h3",{className:"tempminmax",children:["feels like:",n.feels_like,"\xb0Cel",Object(a.jsx)("br",{}),"min:",n.temp_min,"\xb0Cel | max:",n.temp_max,"\xb0Cel",Object(a.jsx)("br",{})]})]})}):Object(a.jsxs)("h1",{children:["Opsss...",Object(a.jsx)("br",{}),"no data found"]})]})})});var d=function(){return Object(a.jsx)(u,{})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.707ffd98.chunk.js.map