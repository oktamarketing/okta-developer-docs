(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(t,e,s){"use strict";s.r(e);var a={components:{MenuItem:function(){return s.e(4).then(s.bind(null,278))}},data:function(){return{search_active:!1,nav_expanded:!1,logo_svg:"",home_url:"",search_url:"",menu_items:null}},methods:{handleSearchSubmit:function(t){t.preventDefault(),t.stopPropagation();var e=document.getElementById("st-search-input-auto").value;e.length>3&&(window.location.href=this.search_url+"#stq="+e)}},created:function(){this.$themeConfig.home_url&&(this.home_url=this.$themeConfig.home_url),this.$themeConfig.logo_svg&&(this.logo_svg=this.$themeConfig.logo_svg),this.$themeConfig.primary_nav&&(this.menu_items=this.$themeConfig.primary_nav),this.$themeConfig.search_url&&(this.search_url=this.$themeConfig.search_url)},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://developer.oktatest.com/sites/all/modules/okta_coveo_search_developer/js/okta_coveo_search_developer.js"),document.head.appendChild(t),window.addEventListener("load",(function(t){window.document.dispatchEvent(new Event("developerLoaded",{bubbles:!0,cancelable:!0}))}))}},n=s(8),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{class:{Header:!0,"is-fixed":!0,"search-activexx":t.search_active,"is-active":t.nav_expanded}},[s("div",{staticClass:"Wrap"},[s("a",{staticClass:"Logo",attrs:{href:t.home_url},domProps:{innerHTML:t._s(t.logo_svg)}}),t._v(" "),s("nav",{staticClass:"Header-nav PrimaryNav",class:{"is-activexxx":t.nav_expanded}},[t.menu_items&&t.menu_items.length?s("ul",{staticClass:"menu"},t._l(t.menu_items,(function(e,a){return s("MenuItem",{key:a,attrs:{item:e,index:a,last:t.menu_items.length}})})),1):t._e(),t._v(" "),s("a",{staticClass:"PrimaryNav-toggle",attrs:{href:"#"}},[s("svg",{attrs:{width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:function(e){t.nav_expanded=!t.nav_expanded}}},[s("g",{staticClass:"MenuIcon",attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"}},[s("path",{staticClass:"MenuIcon-line1",attrs:{d:"M1,16 L19,16",stroke:"#FFFFFF","stroke-width":"2"}}),t._v(" "),s("path",{staticClass:"MenuIcon-line2",attrs:{d:"M1,4 L19,4",stroke:"#FFFFFF","stroke-width":"2"}}),t._v(" "),s("path",{staticClass:"MenuIcon-line3",attrs:{d:"M1,10 L19,10",stroke:"#FFFFFF","stroke-width":"2"}}),t._v(" "),s("path",{staticClass:"MenuIcon-line4",attrs:{d:"M1,10 L19,10",stroke:"#FFFFFF","stroke-width":"2"}})])]),t._v(" "),s("svg",{staticClass:"CloseIcon",attrs:{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:function(e){t.nav_expanded=!t.nav_expanded}}},[s("g",{attrs:{id:"ALl-Boards",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"Desktop",transform:"translate(-915.000000, -235.000000)",fill:"#FFFFFF"}},[s("g",{attrs:{id:"Search-bar-Active",transform:"translate(30.000000, 26.000000)"}},[s("polygon",{attrs:{id:"Icon/Cross",points:"901 210.6 899.4 209 893 215.4 886.6 209 885 210.6 891.4 217 885 223.4 886.6 225 893 218.6 899.4 225 901 223.4 894.6 217"}})])])])])]),t._v(" "),s("div",{staticClass:"PrimaryNav-cta"},[s("a",{staticClass:"Button--redOutline",attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://login.okta.com/"}},[t._v("Login")]),t._v(" "),s("a",{staticClass:"Button--red",attrs:{href:t.home_url+"/signup/"}},[t._v("Sign up")])]),t._v(" "),s("a",{staticClass:"SearchIcon",attrs:{"data-search-toggle":""}})])])]),t._v(" "),s("div",{class:{SearchBar:!0,"is-active":t.search_active},attrs:{"data-search-bar":""}},[t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Wrap"},[e("div",{staticClass:"SearchBox",staticStyle:{display:"flex"},attrs:{"data-pipeline":"developer-okta-com"}},[e("div",{staticClass:"CoveoOmnibox"}),this._v(" "),e("div",{staticClass:"CoveoSearchButton"},[this._v("Search")]),this._v(" "),e("div",{staticClass:"CoveoAnalytics"})])])}],!1,null,null,null);e.default=i.exports}}]);