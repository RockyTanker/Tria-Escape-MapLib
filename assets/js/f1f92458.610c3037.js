"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="EffectScript",c={unversionedId:"Tutorials/EffectScript",id:"Tutorials/EffectScript",title:"EffectScript",description:"EffectScript is a localscript inside of the Tria.OS Map Making Kit, it should be used as an alternative to the LocalMapScript if you want your code to be replicated to other spectators.",source:"@site/docs/Tutorials/EffectScript.md",sourceDirName:"Tutorials",slug:"/Tutorials/EffectScript",permalink:"/Tria-Escape-MapLib/docs/Tutorials/EffectScript",draft:!1,editUrl:"https://github.com/RockyTanker/Tria-Escape-MapLib/edit/master/docs/Tutorials/EffectScript.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Intro",permalink:"/Tria-Escape-MapLib/docs/intro"},next:{title:"Seamless Spectate",permalink:"/Tria-Escape-MapLib/docs/Tutorials/SeamlessSpectate"}},l={},p=[{value:"Example of usage",id:"example-of-usage",level:2}],s={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"effectscript"},"EffectScript"),(0,a.kt)("p",null,"EffectScript is a localscript inside of the Tria.OS Map Making Kit, it should be used as an alternative to the LocalMapScript if you want your code to be replicated to other spectators."),(0,a.kt)("p",null,"In order for the EffectScript to communicate we use RemoteEvents which are fired from the MapScript to the EffectScript."),(0,a.kt)("p",null,"When a round starts all the old EffectScripts are deleted and if a new EffectScript is present, the script will be inserted into the Players PlayerGui, this is to prevent the EffectScript from being deleted if the player dies."),(0,a.kt)("p",null,"If you wish to manually edit the EffectScript the location of it is ",(0,a.kt)("inlineCode",{parentName:"p"},"game.Players.LocalPlayer.PlayerGui"),"\nKeep in mind that reparenting the EffectScript will cause the EffectScript not to be deleted on the next round and can potentially cause memory leaks."),(0,a.kt)("h2",{id:"example-of-usage"},"Example of usage"),(0,a.kt)("p",null,"The EffectScript uses the same methods as the MapScript to get the MapLib, being\n",(0,a.kt)("inlineCode",{parentName:"p"},"local MapLib = game.GetMapLib:Invoke()()")),(0,a.kt)("p",null,"Below is a simple example of how to use the EffectScript, in this example we will make a laser effect similar to Dystopia."),(0,a.kt)("p",null,"MapScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local MapLib = game.GetMapLib:Invoke()()\nlocal map = MapLib.map\n\ntask.wait(10)\nmap.StartLaser:FireAllClients()\n\ntask.wait(10)\nmap.StopLaser:FireAllClients()\n")),(0,a.kt)("p",null,"EffectScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local MapLib = game.GetMapLib:Invoke()()\nlocal map = MapLib.map\n\nlocal RunService = game:GetService("RunService")\n\nlocal connection\n\nmap.StartLaser.OnClientEvent:Connect(function()\n    connection = RunService.Heartbeat:Connnect(function()\n        laser.CFrame *= CFrame.Angles(math.rad(1), 0, 0)\n    end)\nend)\n\nmap.StopLaser.OnClientEvent:Connect(function()\n   if connection then\n        connection:Disconnect()\n     end\nend)\n')))}u.isMDXComponent=!0}}]);