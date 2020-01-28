(window.webpackJsonp=window.webpackJsonp||[]).push([[936],{684:function(e,t,a){"use strict";a.r(t);var r=a(8),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("To add a redirect scheme for Android, you must define a gradle manifest placeholder in your app's "),a("code",[e._v("build.gradle")]),e._v(".")]),e._v(" "),a("p",[e._v("In your app's "),a("code",[e._v("build.gradle")]),e._v(", add the redirect scheme inside the "),a("code",[e._v("defaultConfig")]),e._v(" property. The redirect scheme should match what you used when you modified the config.json file.")]),e._v(" "),a("p",[e._v("For example, if your redirect URI is "),a("code",[e._v("com.first.sample:/callback")]),e._v(", then the appAuth redirect scheme is "),a("code",[e._v("com.first.sample")]),e._v(".")]),e._v(" "),a("p",[e._v("Example")]),e._v(" "),a("div",{staticClass:"language-gradle extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    manifestPlaceholders = [\n        "appAuthRedirectScheme": "com.first.sample"\n    ]\n')])])]),a("h3",{attrs:{id:"native-sign-in"}},[e._v("Native sign in "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#native-sign-in","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("To compile your project, you need to set up the "),a("code",[e._v("AuthenticationClient")]),e._v(" with an "),a("code",[e._v("Org URL")]),e._v(". Your Org URL is in the upper-right corner of your Okta Org dashboard. Do this by adding the following to your "),a("code",[e._v("local.properties")]),e._v(" file:")]),e._v(" "),a("p",[e._v("Example")]),e._v(" "),a("div",{staticClass:"language-gradle extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    authn.orgUrl="https://${yourOktaDomain}"\n')])])]),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" When you finish, you can build and run the app.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);