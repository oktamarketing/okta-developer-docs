(window.webpackJsonp=window.webpackJsonp||[]).push([[1262],{918:function(e,t,a){"use strict";a.r(t);var r=a(8),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2017-29"}},[e._v("2017.29 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#_2017-29","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("h3",{attrs:{id:"platform-features"}},[e._v("Platform Features "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#platform-features","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The following platform features are Generally Available (GA) in preview orgs (as of Release 2017.28), and expected to roll out as GA to production orgs during the week of August 7, 2017:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#openid-connect"}},[e._v("OpenID Connect")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#key-rollover"}},[e._v("Key Rollover")])])]),e._v(" "),a("h4",{attrs:{id:"openid-connect"}},[e._v("OpenID Connect "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#openid-connect","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/docs/reference/api/oidc/"}},[e._v("OpenID Connect")]),e._v(" is a simple identity layer on top of the OAuth 2.0 protocol, which allows computing clients to verify the identity of an end user based on the authentication performed by an authorization server, as well as to obtain basic profile information about the end user in an interoperable and REST-like manner. In technical terms, OpenID Connect specifies a RESTful HTTP API, using JSON as a data format.")],1),e._v(" "),a("p",[e._v("OpenID Connect allows a range of clients, including Web-based, mobile, and JavaScript clients, to request and receive information about authenticated sessions and end users. The specification suite is extensible, supporting optional features such as encryption of identity data, discovery of OpenID Providers, and session management.")]),e._v(" "),a("p",[e._v("Okta is "),a("a",{attrs:{href:"http://openid.net/certification/",target:"_blank",rel:"noopener noreferrer"}},[e._v("certified for OpenID Connect"),a("OutboundLink")],1),e._v(". For more information, see "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/"}},[e._v("OpenID Connect and Okta")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"key-rollover"}},[e._v("Key Rollover "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#key-rollover","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("We provide the ability to generate a certificate with specified validity period (see the "),a("router-link",{attrs:{to:"/docs/reference/api/apps/"}},[e._v("Apps API")]),e._v(" and "),a("router-link",{attrs:{to:"/docs/reference/api/idps/"}},[e._v("Identity Providers API")]),e._v("). We build OpenID Connect and API Access Management on this feature.")],1),e._v(" "),a("h3",{attrs:{id:"platform-bugs-fixed"}},[e._v("Platform Bugs Fixed "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#platform-bugs-fixed","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("These platform bug fixes are available in preview orgs and expected in production orgs the week of July 24, 2017.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('When answering a security question to recover a forgotten password, users who gave too many incorrect responses didn\'t receive the "locked out" message. (OKTA-126117)')])]),e._v(" "),a("li",[a("p",[e._v("Custom SMS templates allowed messages greater than 160 characters after substituting the org name and code. The new behavior is to use a default template instead of the custom template when that happens. To ensure use of your custom template, update it to stay within the 160-character limit. (OKTA-128721)")])]),e._v(" "),a("li",[a("p",[a("router-link",{attrs:{to:"/docs/reference/api/oauth-clients/#register-new-client"}},[a("code",[e._v("/oauth2/v1/clients")])]),e._v(" error responses didn't conform to the format in the "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7591#section-3.2.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0 Dynamic Client Registration spec"),a("OutboundLink")],1),e._v(". (OKTA-130375)")],1)]),e._v(" "),a("li",[a("p",[a("router-link",{attrs:{to:"/docs/reference/api/oauth-clients/#register-new-client"}},[a("code",[e._v("/oauth2/v1/clients")])]),e._v(" didn't allow default values for optional parameters. (OKTA-130910)")],1)]),e._v(" "),a("li",[a("p",[e._v("Neither "),a("router-link",{attrs:{to:"/docs/reference/api/oauth-clients/#register-new-client"}},[a("code",[e._v("/oauth2/v1/clients")])]),e._v(" nor "),a("router-link",{attrs:{to:"/docs/reference/api/apps/#add-application"}},[a("code",[e._v("/api/v1/apps")])]),e._v(" required client secrets to be unique. (OKTA-131259)")],1)]),e._v(" "),a("li",[a("p",[a("router-link",{attrs:{to:"/docs/reference/api/oauth-clients/#register-new-client"}},[a("code",[e._v("/oauth2/v1/clients")])]),e._v(" returned an incorrect resource URI in the response header.  (OKTA-131891)")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);