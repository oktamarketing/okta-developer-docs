(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{362:function(e,t,a){"use strict";a.r(t);var r=a(8),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"key-rotation"}},[e._v("Key Rotation "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#key-rotation","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("ul",[a("li",[e._v("For security purposes, Okta automatically rotates keys used to sign the token.")]),e._v(" "),a("li",[e._v("The current key rotation schedule is four times a year. This schedule can change without notice.")]),e._v(" "),a("li",[e._v("In case of an emergency, Okta can rotate keys as needed.")]),e._v(" "),a("li",[e._v("Okta always publishes keys to the "),a("code",[e._v("jwks_uri")]),e._v(".")]),e._v(" "),a("li",[e._v("To save the network round trip, your app should cache the "),a("code",[e._v("jwks_uri")]),e._v(" response locally. The "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[e._v("standard HTTP caching headers"),a("OutboundLink")],1),e._v(" are used and should be respected.")]),e._v(" "),a("li",[e._v("The administrator can switch the Authorization Server key rotation mode by updating the Authorization Server's "),a("code",[e._v("rotationMode")]),e._v(" property. For more information see the API Reference: "),a("router-link",{attrs:{to:"/docs/reference/api/authorization-servers/#credentials-object"}},[e._v("Authorization Server Credentials Signing Object")]),e._v(".")],1)]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Caution:")]),e._v(" Keys used to sign tokens automatically rotate and should always be resolved dynamically against the published JWKS. Your app might fail if you hardcode public keys in your applications. Be sure to include key rollover in your implementation.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip:")]),e._v(" If your application can't retrieve keys dynamically, the administrator can disable the automatic key rotation in the administrator UI, "),a("router-link",{attrs:{to:"/docs/reference/api/apps/#generate-new-application-key-credential"}},[e._v("generate a key credential")]),e._v(", and "),a("router-link",{attrs:{to:"/docs/reference/api/apps/#update-key-credential-for-application"}},[e._v("update the application")]),e._v(" to use it for signing.")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);