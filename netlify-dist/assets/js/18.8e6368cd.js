(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{164:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e(82),e(154),e(84),e(80);var i=/\/$/},183:function(t,n,e){},227:function(t,n,e){"use strict";var i=e(183);e.n(i).a},275:function(t,n,e){"use strict";e.r(n);e(154),e(157),e(158),e(149),e(150),e(164);var i={components:{TableOfContents:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,281))},Sidebar:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,246))},EditLink:function(){return e.e(29).then(e.bind(null,247))}},data:function(){return{toc:[]}},mounted:function(){window.addEventListener("load",this.getAllHeaders)},computed:{showToc:function(){return!1!==this.$page.frontmatter.showToc&&!this.$page.path.includes("/code/")}},methods:{getAllHeaders:function(t){var n=document.querySelectorAll(".PageContent-main>h1, .PageContent-main>h2, .PageContent-main>h3, .PageContent-main>h4.api.api-operation, .PageContent-main>h4:not(.api)");this.toc=Array.from(n).map((function(t){return{level:"1"==t.localName.split("h")[1]?"2":t.localName.split("h")[1],title:t.innerText,href:"#"+t.id,node:t,display:""}}))}},beforeDestroy:function(){window.removeEventListener("load",this.getAllHeaders)}},a=(e(227),e(8)),o=Object(a.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"PageContent DynamicSidebar"},[n("Sidebar"),this._v(" "),n("div",{staticClass:"PageContent-main language-content NoPaddingTop"},[n("EditLink"),this._v(" "),n("Breadcrumb",{attrs:{wrapStyle:"width: 80%"}}),this._v(" "),n("Content")],1),this._v(" "),this.showToc?n("TableOfContents",{staticClass:"TableOfContents",attrs:{items:this.toc}}):this._e()],1)}),[],!1,null,"30b2e2cc",null);n.default=o.exports}}]);