(()=>{"use strict";var e,t={429:(e,t,r)=>{const n=window.wp.blocks,i=window.wp.i18n,a=window.wp.element,o=window.wp.serverSideRender;var l=r.n(o);const s=window.wp.blockEditor,d=window.wp.components,p=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"md-sync-blog/sample-dynamic","version":"1.1.0","title":"Sample Dynamic","category":"md-sync-blog","icon":"lock","description":"Sample Dynamic block.","keywords":["sample","Dynamic"],"supports":{"html":false},"textdomain":"md-sync-blog","attributes":{"heading":{"type":"string","default":"This is Default Heading"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,n.registerBlockType)(p,{edit:function(e){let{attributes:{heading:t},setAttributes:r,className:n}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(d.PanelBody,{title:(0,i.__)("Block Settings","md-sync-blog")},(0,a.createElement)(d.TextControl,{label:(0,i.__)("Heading","md-sync-blog"),placeholder:(0,i.__)("Enter Heading","md-sync-blog"),value:t,onChange:e=>r({heading:e})}))),(0,a.createElement)(l(),{block:p.name,className:n,attributes:{heading:t}}))},save:function(){return null}})}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,i,a)=>{if(!r){var o=1/0;for(p=0;p<e.length;p++){for(var[r,i,a]=e[p],l=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(p--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[r,i,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={229:0,333:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[o,l,s]=r,d=0;if(o.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var p=s(n)}for(t&&t(r);d<o.length;d++)a=o[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(p)},r=globalThis.webpackChunkmd_sync_blog_plugin=globalThis.webpackChunkmd_sync_blog_plugin||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=n.O(void 0,[333],(()=>n(429)));i=n.O(i)})();