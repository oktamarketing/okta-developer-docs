(window.webpackJsonp=window.webpackJsonp||[]).push([[1111],{856:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("ASP.NET Core hosts an internal sign-out handler at "),a("code",[t._v("/signout/callback")]),t._v(". You need to add it as a valid "),a("strong",[t._v("Logout redirect URI")]),t._v(" in Okta. See "),a("router-link",{attrs:{to:"/docs/guides/sign-users-out/define-signout-callback/"}},[t._v("Define the signout callback")]),t._v(" for more information on defining this URI in your application settings.")],1),t._v(" "),a("p",[t._v("Open your Okta Developer Console:")]),t._v(" "),a("p",[a("a",{staticClass:"Button--blue",attrs:{href:"https://login.okta.com/",target:"_blank"}},[t._v("Go to Console")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select "),a("strong",[t._v("Applications")]),t._v(", and then select your application.")])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v("General")]),t._v(" and click "),a("strong",[t._v("Edit")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("In the "),a("strong",[t._v("Logout redirect URI section")]),t._v(", add the "),a("strong",[t._v("Base URI")]),t._v(" of your application followed by "),a("code",[t._v("/signout/callback")]),t._v(" (for example, "),a("code",[t._v("http://localhost:3000/signout/callback")]),t._v(").")])]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Save")]),t._v(".")])])]),t._v(" "),a("p",[t._v("Open the controller where you handle the sign-out process and update the "),a("code",[t._v("SignOut")]),t._v(" action. This time you need to also sign the user out of the Okta OIDC middleware with "),a("code",[t._v("OktaDefaults.MvcAuthenticationScheme")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Controller")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpPost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IActionResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignOutResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OktaDefaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MvcAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                                         CookieAuthenticationDefaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationScheme "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Then, update your "),a("code",[t._v("using")]),t._v(" statements to import the following namespaces:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cookies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Okta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("After you sign users out of your app and out of Okta, you can also redirect users to a specific location. Modify your "),a("code",[t._v("SignOut")]),t._v(" action to include the action that you want to redirect to (for example, "),a("code",[t._v("Home")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpPost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IActionResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignOutResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                OktaDefaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MvcAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                CookieAuthenticationDefaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AuthenticationProperties")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RedirectUri "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Home/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);