(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{188:function(t,e,i){},244:function(t,e,i){"use strict";var n=i(9),o=i(95)(6),l="findIndex",s=!0;l in[]&&Array(1)[l]((function(){s=!1})),n(n.P+n.F*s,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(46)(l)},245:function(t,e,i){"use strict";var n=i(188);i.n(n).a},281:function(t,e,i){"use strict";i.r(e);i(149),i(150),i(82),i(84),i(157),i(158),i(81),i(244);var n={mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),this.setActiveItem(0),this.windowWidth=window.innerWidth,window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth}))},data:function(){return{loading:!1,indicatorStyle:{height:"30px",transform:"0px, 0px"},tocStyle:{bottom:"0px",top:"100px;"},offset:160,activeItem:null,activeToCItem:null,windowWidth:0,isMobile:!1}},watch:{$route:function(){var t=this;if(this.$route.hash){var e=this.$page.fullHeaders.findIndex((function(e){return e.slug==t.$route.hash.substr(1)}));e||(e=0),this.setActiveItem(e)}},windowWidth:function(){this.isMobile=this.windowWidth<=1264}},methods:{scrollToItem:function(t){var e=document.getElementById(t);e&&window.scrollTo(0,e.offsetTop-40)},onScroll:function(t){for(var e=0;e<this.$page.fullHeaders.length;e++){var i=document.getElementById(this.$page.fullHeaders[e].slug).getBoundingClientRect();if(i.top>this.offset+(window.innerHeight-this.offset)/2){this.setActiveItem(e-1);break}if(i.bottom>this.offset){this.setActiveItem(e);break}}var n=document.querySelectorAll(".Footer")[0].getBoundingClientRect();n.top<window.innerHeight?(this.tocStyle.bottom=window.innerHeight-n.top+"px",this.tocStyle.top="auto"):(this.tocStyle.bottom=0,this.tocStyle.top="100px")},setActiveItem:function(t){var e=this;if(this.isMobile)this.$page.fullHeaders.forEach((function(t,i){e.$page.fullHeaders[i].display="block"}));else{if(this.activeToCItem=document.querySelectorAll(".TableOfContents-item")[t],this.activeItem=this.$page.fullHeaders[t],!this.activeItem)return;for(var i=parseInt(this.activeItem.level),n=t;n>0;n--){var o=parseInt(this.$page.fullHeaders[n].level);o<i&&(i=o),this.$page.fullHeaders[n].display=o==i?"block":"none"}if(t<this.$page.fullHeaders.length-1){i=this.$page.fullHeaders[t+1].level;for(var l=t+1;l<this.$page.fullHeaders.length;l++){var s=parseInt(this.$page.fullHeaders[l].level);s<i&&(i=s),this.$page.fullHeaders[l].display=s==i?"block":"none"}}var r,a=function(t){var e=Array.from(t.classList).find((function(t){return t.match(/is-level/)}));return e?e.match(/^is-level(\d+)$/)[1]:null},c=Array.from(this.activeToCItem.parentNode.children),f=a(this.activeToCItem),d=!1,u=c.find((function(t){if(!d)return d=t===e.activeToCItem,!1;var i=a(t);return!!i&&i<f})),h=document.querySelectorAll(".TableOfContents")[0],v=h.scrollTop,p=document.querySelectorAll(".TableOfContents-item")[0].getBoundingClientRect(),m=this.activeToCItem.getBoundingClientRect(),g=h.getBoundingClientRect(),w=v+m.top-g.top-60,y=m.top-p.top;r=u&&u.length?u.getBoundingClientRect().top-m.top:m.bottom-m.top,this.indicatorStyle.height=r+"px",this.indicatorStyle.transform="0, "+y+"px",v!=w&&h.scrollTo(0,w)}},nextAll:function(t){for(var e=[],i=[],n=this.activeItem.level;n>0;n--)i.push(".is-level"+n);for(;t=t.nextSibling;)t.className.includes("is-level")&&e.push(t);return e}},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},o=(i(245),i(8)),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"TableOfContents",class:{"large-header":t.$frontmatter.title&&t.$frontmatter.title.length>50},style:"bottom: "+t.tocStyle.bottom+"; top: "+t.tocStyle.top+";"},[i("div",{staticClass:"TableOfContents-item is-level1"},[t._v("\n    "+t._s(t.$frontmatter.title)+"\n  ")]),t._v(" "),t.loading?i("div",{staticClass:"TableOfContentsLoader"}):t._e(),t._v(" "),t.loading?t._e():i("div",[i("div",{staticClass:"TableOfContents-indicator",style:"height: "+t.indicatorStyle.height+"; transform: translate("+t.indicatorStyle.transform+");"}),t._v(" "),t._l(t.$page.fullHeaders,(function(e){return i("a",{key:e.slug,staticClass:"TableOfContents-item sidebar-link",class:[{"is-active":t.activeItem==e},"is-level"+e.level],style:"display: "+e.display+";",attrs:{href:"#"+e.slug},on:{click:function(i){return i.preventDefault(),t.scrollToItem(e.slug)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),t._v(" "),t._m(0)],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"TableOfContents-footer"},[e("a",{attrs:{href:"#"}},[this._v("Top of Page")])])}],!1,null,"4ef83c5f",null);e.default=l.exports}}]);