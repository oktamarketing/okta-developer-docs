(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{489:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cross-Origin Resource Sharing (CORS)"),a("OutboundLink")],1),t._v(" is a mechanism that allows a web page to make an AJAX call using "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMLHttpRequest (XHR)"),a("OutboundLink")],1),t._v(' to a domain that is  different from the one from where the script was loaded.  Such "cross-domain" requests would otherwise be forbidden by web browsers, per the '),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Same_origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("same origin security policy"),a("OutboundLink")],1),t._v(". CORS defines a "),a("a",{attrs:{href:"http://www.w3.org/TR/cors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("standardized"),a("OutboundLink")],1),t._v(" way in which the browser and the server can interact to determine whether or not to allow the cross-origin request")]),t._v(" "),a("p",[t._v('In Okta, CORS allows JavaScript hosted on your websites to make an XHR to the Okta API with the Okta session cookie. Every website origin must be explicitly permitted via the administrator UI as a "Trusted Origin".')]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Caution:")]),t._v(" Only grant access to specific origins (websites) that you control and trust to access the Okta API.")])]),t._v(" "),a("h3",{attrs:{id:"api-support"}},[t._v("API Support "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#api-support","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("The Okta API supports CORS on an API by API basis. If you're building an application that needs CORS, please check that the specific operation supports CORS for your use case. APIs that support CORS are marked with the following icon "),a("span",{staticClass:"api-label api-label-small api-label-cors"},[a("i",{staticClass:"fa fa-cloud-download"}),t._v(" CORS")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"browser-support"}},[t._v("Browser Support "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#browser-support","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("Not all browsers supports CORS.  The following table describes which browsers support this feature.")]),t._v(" "),a("iframe",{attrs:{frameborder:"0",width:"100%",height:"460px",src:"https://caniuse.com/cors/embed/description&links"}}),t._v(" "),a("blockquote",[a("p",[t._v("IE8 and IE9 do not support authenticated requests and cannot use the Okta session cookie with CORS.")])]),t._v(" "),a("h3",{attrs:{id:"granting-cross-origin-access-to-websites"}},[t._v("Granting Cross-Origin Access to Websites "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#granting-cross-origin-access-to-websites","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("You can enable CORS for websites that need cross-origin requests to the Okta API from the Developer Console. Select "),a("strong",[t._v("API")]),t._v(" > "),a("strong",[t._v("Trusted Origins")]),t._v(" to see the screen shown below. From the Classic UI, select "),a("strong",[t._v("Security")]),t._v(" > "),a("strong",[t._v("API")]),t._v(" > "),a("strong",[t._v("Trusted Origins")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/okta-admin-ui-cors-dev.png",alt:"CORS Settings UI",title:"CORS Settings UI"}})]),t._v(" "),a("p",[t._v("Select "),a("strong",[t._v("Add Origin")]),t._v(" to specify the base URL of the website that you want to allow cross-origin requests from, then make sure "),a("strong",[t._v("CORS")]),t._v(" is selected.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" If you do not enable CORS, or disable it at a later date, the list of websites is retained.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/okta-admin-ui-cors-new-dev.png",alt:"Add CORS Origin",title:"Add CORS Origin"}})]),t._v(" "),a("p",[t._v("You can also enable the "),a("strong",[t._v("Redirect")]),t._v(" setting, which allows for redirection to this Trusted Origin after signing in or out.")]),t._v(" "),a("h3",{attrs:{id:"testing"}},[t._v("Testing "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#testing","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("Test your CORS configuration:")]),t._v(" "),a("ol",[a("li",[t._v("Grant cross-origin access to "),a("code",[t._v("https://developer.okta.com")]),t._v(".")]),t._v(" "),a("li",[t._v("In the same browser in which you have an active session in your Okta organization, enter your Okta subdomain in the form below and click "),a("strong",[t._v("Test")]),t._v(". Your Okta user profile displays below the form.")])]),t._v(" "),a("CorsTest"),t._v(" "),a("h3",{attrs:{id:"request-examples"}},[t._v("Request Examples "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-examples","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("The following code samples can be added to your website to test your CORS configuration.  Remember to replace the "),a("code",[t._v("baseUrl")]),t._v(" with the URL for your Okta organization.")]),t._v(" "),a("h4",{attrs:{id:"xmlhttprequest"}},[t._v("XMLHttpRequest "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#xmlhttprequest","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" baseUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://${yourOktaDomain}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"withCredentials"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Invalid URL or Cross-Origin Request Blocked.  You must explicitly add this site ('")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("') to the list of allowed websites in the administrator UI'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/v1/users/me'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CORS is not supported for this browser!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"jquery"}},[t._v("jQuery "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#jquery","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" baseUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://${yourOktaDomain}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" baseUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/v1/users/me'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  xhrFields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" withCredentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" textStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errorSummary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please login to your Okta organization before running the test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Invalid URL or Cross-Origin Request Blocked'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You must explicitly add this site ('")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("') to the list of allowed websites in your administrator UI'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("': '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"response-example-error"}},[t._v("Response Example: Error "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#response-example-error","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("If you did not enable CORS, or your CORS configuration is incorrect, you\nwill see an error in your browser's developer tool or JavaScript console:")]),t._v(" "),a("h4",{attrs:{id:"chrome"}},[t._v("Chrome "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#chrome","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("XMLHttpRequest cannot load https://${yourOktaDomain}/api/v1/users/me. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'https://your-website.com' is therefore not allowed access.\n")])])]),a("h4",{attrs:{id:"safari"}},[t._v("Safari "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#safari","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("XMLHttpRequest cannot load https://${yourOktaDomain}/api/v1/users/me. Origin https://${yourOktaDomain} is not allowed by Access-Control-Allow-Origin.\n")])])]),a("h4",{attrs:{id:"firefox"}},[t._v("Firefox "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#firefox","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://${yourOktaDomain}/api/v1/users/me. This can be fixed by moving the resource to the same domain or enabling CORS.\n")])])]),a("h4",{attrs:{id:"internet-explorer"}},[t._v("Internet Explorer "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#internet-explorer","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SEC7118: XMLHttpRequest for https://${yourOktaDomain}/api/v1/users/me required Cross Origin Resource Sharing (CORS).\n\nSEC7120: Origin https://${yourOktaDomain} not found in Access-Control-Allow-Origin header.\n\nSCRIPT7002: XMLHttpRequest: Network Error 0x80070005, Access is denied.\n")])])]),a("h3",{attrs:{id:"additional-resources"}},[t._v("Additional Resources "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#additional-resources","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP access control (CORS)"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);