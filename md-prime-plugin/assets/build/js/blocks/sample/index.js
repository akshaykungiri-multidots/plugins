(()=>{"use strict";var e,r={908:()=>{const e=window.wp.blocks,r=window.wp.element,o=window.wp.i18n,t=window.wp.blockEditor,l=JSON.parse('{"u2":"create-block/sample-block"}');(0,e.registerBlockType)(l.u2,{edit:function(){return(0,r.createElement)("p",(0,t.useBlockProps)(),(0,o.__)("Sample Block – hello from the editor test!","sample-block"))},save:function(){return(0,r.createElement)("p",t.useBlockProps.save(),(0,o.__)("Sample Block – hello from the saved content!","md-prime"))}})}},o={};function t(e){var l=o[e];if(void 0!==l)return l.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,t),n.exports}t.m=r,e=[],t.O=(r,o,l,n)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,l,n]=e[c],p=!0,a=0;a<o.length;a++)(!1&n||i>=n)&&Object.keys(t.O).every((e=>t.O[e](o[a])))?o.splice(a--,1):(p=!1,n<i&&(i=n));if(p){e.splice(c--,1);var s=l();void 0!==s&&(r=s)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,l,n]},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={739:0,366:0};t.O.j=r=>0===e[r];var r=(r,o)=>{var l,n,[i,p,a]=o,s=0;if(i.some((r=>0!==e[r]))){for(l in p)t.o(p,l)&&(t.m[l]=p[l]);if(a)var c=a(t)}for(r&&r(o);s<i.length;s++)n=i[s],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},o=globalThis.webpackChunkmd_prime_plugin=globalThis.webpackChunkmd_prime_plugin||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var l=t.O(void 0,[366],(()=>t(908)));l=t.O(l)})();