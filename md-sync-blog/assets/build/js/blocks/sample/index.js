(()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n,o=window.wp.element,i=window.wp.blockEditor,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"md-sync-blog/sample","version":"1.1.0","title":"Sample Block","category":"md-sync-blog","icon":"lock","description":"Sample block.","keywords":["sample","Block"],"supports":{"html":false},"textdomain":"md-sync-blog","attributes":{"heading":{"type":"string","default":""}},"editorScript":"file:./index.js"}');(0,e.registerBlockType)(r,{edit:function(){return(0,o.createElement)("p",(0,i.useBlockProps)(),(0,t.__)("Sample Block","md-sync-blog"))},save:function(){return(0,o.createElement)("p",i.useBlockProps.save(),(0,t.__)("Sample Block","md-sync-blog"))}})})();