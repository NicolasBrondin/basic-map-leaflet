import{l as e}from"./vendor.2321a2db.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const p=new URL(e,r);if(self[t].moduleMap[p])return o(self[t].moduleMap[p]);const s=new Blob([`import * as m from '${p}';`,`${t}.moduleMap['${p}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){n(new Error(`Failed to import: ${e}`)),a(m)},onload(){o(self[t].moduleMap[p]),a(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");var t=e.map("mapid").setView([51.505,-.09],20);e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);