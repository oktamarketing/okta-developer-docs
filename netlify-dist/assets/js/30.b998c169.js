(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{277:function(e,t,i){"use strict";i.r(t);var s=i(24),a={name:"FeaturedGuide",props:["guideName"],computed:{guide:function(){return Object(s.b)({pages:this.$site.pages}).byName[this.guideName]},mainFrameworksOfGuide:function(){return this.guide.frameworks}}},r=i(8),n=Object(r.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-link",{staticClass:"guide-featured",attrs:{to:e.guide.makeLink(e.guide.mainFramework)}},[i("header",[i("section",[i("h1",{staticClass:"title"},[e._v("\n        "+e._s(e.guide.title)+"\n      ")])])]),e._v(" "),i("section",{staticClass:"excerpt"},[e._v("\n    "+e._s(e.guide.excerpt)+"\n  ")]),e._v(" "),i("footer",[i("section",{staticClass:"icons"},[i("FrameworkIconBlock",{attrs:{frameworks:e.mainFrameworksOfGuide}})],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);