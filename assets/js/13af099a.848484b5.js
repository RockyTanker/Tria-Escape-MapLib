"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[515],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=r,y=h["".concat(c,".").concat(m)]||h[m]||u[m]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},i="Seamless Spectate",s={unversionedId:"Tutorials/SeamlessSpectate",id:"Tutorials/SeamlessSpectate",title:"Seamless Spectate",description:"When you make a map you might notice that certain things may cause spectating to act strangely, this can be caused by various things that are documented below.",source:"@site/docs/Tutorials/SeamlessSpectate.md",sourceDirName:"Tutorials",slug:"/Tutorials/SeamlessSpectate",permalink:"/Tria-Escape-MapLib/docs/Tutorials/SeamlessSpectate",draft:!1,editUrl:"https://github.com/RockyTanker/Tria-Escape-MapLib/edit/master/docs/Tutorials/SeamlessSpectate.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"EffectScript",permalink:"/Tria-Escape-MapLib/docs/Tutorials/EffectScript"}},c={},l=[{value:"Anchoring the player",id:"anchoring-the-player",level:2},{value:"Mitigation",id:"mitigation",level:3},{value:"Changing the characters position on the server",id:"changing-the-characters-position-on-the-server",level:2},{value:"Mitigation",id:"mitigation-1",level:3}],p={toc:l},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seamless-spectate"},"Seamless Spectate"),(0,r.kt)("h1",{id:"making-spectating-seamless"},"Making spectating seamless"),(0,r.kt)("p",null,"When you make a map you might notice that certain things may cause spectating to act strangely, this can be caused by various things that are documented below."),(0,r.kt)("h2",{id:"anchoring-the-player"},"Anchoring the player"),(0,r.kt)("p",null,"When you anchor the player it stops the replication of the player, when the player is unanchored it takes a second for the replication to start again which makes it looks like the player is lagging for other players."),(0,r.kt)("h3",{id:"mitigation"},"Mitigation"),(0,r.kt)("p",null,"If you want to anchor the player but you also want the effect to be seamless then you need to set the players client position to the desired position every heartbeat.\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local RunService = game:GetService("RunService")\n\n-- Put the players CFrame into a variable\nlocal anchorPoint = humanoidRootPart.CFrame\n\n-- Begin the anchor\nlocal heartbeat = RunService.Heartbeat:Connect(function()\n    -- Set the characters Velocity to 0\n    humanoidRootPart.AssemblyLinearVelocity = Vector3.new()\n    -- Set the characters CFrame to the saved point\n    humanoidRootPart.CFrame = anchorPoint\nend)\n\n-- End the anchor\nheartbeat:Disconnect()\n')),(0,r.kt)("h2",{id:"changing-the-characters-position-on-the-server"},"Changing the characters position on the server"),(0,r.kt)("p",null,"When you change the position of the character on the server it takes over replication from the client, this causes similar effects to anchoring the player"),(0,r.kt)("h3",{id:"mitigation-1"},"Mitigation"),(0,r.kt)("p",null,"To make the effect seamless all you need to do is make the teleportation happen on the client, not only will this make the teleportation seamless to other players it will also make the effect more seamless for the player as well."))}u.isMDXComponent=!0}}]);