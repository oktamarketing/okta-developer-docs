(window.webpackJsonp=window.webpackJsonp||[]).push([[910],{654:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Okta utilizes an HTTP session cookie to provide access to your Okta organization and applications across web requests for interactive user-agents such as a browser. This document provides examples for programmatically retrieving and setting a session cookie for different deployment scenarios to provide SSO capabilities for custom web applications built on Okta.")]),t._v(" "),a("p",[t._v("Okta sessions are created and managed with the "),a("router-link",{attrs:{to:"/docs/reference/api/sessions/"}},[t._v("Session API")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"retrieving-a-session-cookie-via-openid-connect-authorization-endpoint"}},[t._v("Retrieving a session cookie via OpenID Connect Authorization Endpoint "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#retrieving-a-session-cookie-via-openid-connect-authorization-endpoint","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("This scenario is ideal for deployment scenarios where you have implemented both a custom login page and custom landing page for your application. The login page will typically collect the user's credentials via a HTML form submit or POST and the web application will validate the credentials against your Okta organization by calling the "),a("router-link",{attrs:{to:"/docs/reference/api/authn/"}},[t._v("Authentication API")]),t._v(" to obtain a "),a("router-link",{attrs:{to:"/docs/reference/api/sessions/#session-token"}},[t._v("session token")]),t._v(".")],1),t._v(" "),a("p",[t._v("Once a session token is obtained, it can be passed into the "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#authorize"}},[t._v("OpenID Connect authorize endpoint")]),t._v(" in order to get an Okta session cookie. Executing this flow will set a cookie in the end user's browser and then redirect them back to the "),a("code",[t._v("redirect_uri")]),t._v(" that is passed into the request.")],1),t._v(" "),a("blockquote",[a("p",[t._v("The session token may only be used "),a("strong",[t._v("once")]),t._v(" to establish a session. If the session expires or the user logs out of Okta after using the token, the user won't be able to reuse the same session token to get a new session cookie.")])]),t._v(" "),a("h5",{attrs:{id:"request-example"}},[t._v("Request Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-example","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://${yourOktaDomain}/oauth2/v1/authorize?client_id={clientId}&response_type=id_token&scope=openid&prompt=none&redirect_uri=https%3A%2F%2Fyour-app.example.com&state=Af0ifjslDkj&nonce=n-0S6_WzA2Mj&sessionToken=0HsohZYpJgMSHwmL9TQy7RRzuY\n")])])]),a("blockquote",[a("p",[t._v("The "),a("code",[t._v("prompt=none")]),t._v(" param guarantees that the user will not be prompted for credentials. You will either obtain the requested tokens or an OAuth error response.")])]),t._v(" "),a("blockquote",[a("p",[t._v("The "),a("code",[t._v("sessionToken")]),t._v(" param serves as the primary credentials. It represents the authentication that was already performed via the "),a("router-link",{attrs:{to:"/docs/reference/api/authn/"}},[t._v("Authentication API")]),t._v(".")],1)]),t._v(" "),a("h5",{attrs:{id:"response-example"}},[t._v("Response Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#response-example","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("302 Moved Temporarily")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" sid=lGj4FPxaG63Wm89TpJnaDF6; Path=/\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" https://your-app.example.com?id_token=S4sx3uixdsalasd&state=Af0ifjslDkj&nonce=n-0S6_WzA2Mj\n")])])]),a("p",[t._v("The response also includes an "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#id-token"}},[t._v("ID Token")]),t._v(" that describes the authenticated user and can contain additional claims such as user profile attributes or email.")],1),t._v(" "),a("p",[t._v("The "),a("router-link",{attrs:{to:"/code/javascript/okta_sign-in_widget/"}},[t._v("Okta Sign-In Widget")]),t._v(" uses this flow. This flow can also be used by Single Page Applications with the "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#parameter-details"}},[a("code",[t._v("okta_post_messsage")])]),t._v(" response type, which doesn't require a browser redirect.")],1),t._v(" "),a("h2",{attrs:{id:"retrieving-a-session-cookie-by-visiting-a-session-redirect-link"}},[t._v("Retrieving a session cookie by visiting a session redirect link "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#retrieving-a-session-cookie-by-visiting-a-session-redirect-link","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("blockquote",[a("p",[t._v("This pattern is supported, but not encouraged. The "),a("a",{attrs:{href:"#retrieving-a-session-cookie-via-openid-connect-authorization-endpoint"}},[t._v("OpenID Connect")]),t._v(" flow described above is the preferred pattern for retrieving a session cookie.")])]),t._v(" "),a("p",[t._v("This scenario is ideal for deployment scenarios where you have implemented both a custom login page and custom landing page for your application. Your web application will solicit and validate the user credentials against your Okta organization by calling the "),a("router-link",{attrs:{to:"/docs/reference/api/authn/"}},[t._v("Authentication API")]),t._v(" to obtain a "),a("router-link",{attrs:{to:"/docs/reference/api/authn/#session-token"}},[t._v("session token")]),t._v(".")],1),t._v(" "),a("p",[t._v("The session token along with the URL for your landing page can then be used to complete the following "),a("a",{attrs:{href:"http://tools.ietf.org/html/rfc6570",target:"_blank",rel:"noopener noreferrer"}},[t._v("URI Template"),a("OutboundLink")],1),t._v(" "),a("code",[t._v("https://${yourOktaDomain}/login/sessionCookieRedirect?token={sessionToken}&redirectUrl={redirectUrl}")]),t._v(" that will retrieve a session cookie for a user's browser when visited.")]),t._v(" "),a("p",[t._v("Be aware of the following requirements:")]),t._v(" "),a("ul",[a("li",[t._v("You must have your redirect URI white-listed as a Trusted Origin ("),a("ApiLifecycle",{attrs:{access:"ea"}}),t._v(") within Okta. This is required to protect against open redirect attacks.")],1),t._v(" "),a("li",[t._v("The session token may only be used "),a("strong",[t._v("once")]),t._v(" to establish a session. If the session expires or the user logs out of Okta after using the token, they will not be able to reuse the same session token to get a new session cookie.")]),t._v(" "),a("li",[t._v("When using a GET request to "),a("code",[t._v("https://${yourOktaDomain}/login/sessionCookieRedirect")]),t._v(", Internet Explorer is only compatible with redirect URLs that don't grow beyond 255 characters, including request parameters.\nIf the "),a("code",[t._v("redirectUrl")]),t._v(" is only going to Okta and the request parameters are longer, then use a POST request to this API and provide additional request parameters as POST form parameters. For more information about the character limitation, see the "),a("a",{attrs:{href:"https://support.microsoft.com/en-us/help/208427/maximum-url-length-is-2-083-characters-in-internet-explorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h5",{attrs:{id:"response-example-2"}},[t._v("Response Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#response-example-2","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("302 Moved Temporarily")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" my_app_session_cookie_name=my_apps_session_cookie_value; Path=/\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" https://${yourOktaDomain}/login/sessionCookieRedirect?token=0HsohZYpJgMSHwmL9TQy7RRzuY&redirectUrl=https%3A%2F%2Fwww.example.com%2Fportal%2Fhome\n")])])]),a("p",[t._v("The user's browser will set your app's session cookie and follow the redirect to Okta.  Okta will validate the session token and return a 302 status response that sets a session cookie for Okta and redirects the user's browser back to your landing page.  After the page has loaded the user will have an active session with Okta and will be able to SSO into their applications until the session is expired or the user closes the session (logout) or browser application.")]),t._v(" "),a("h5",{attrs:{id:"request-example-2"}},[t._v("Request Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-example-2","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("GET")]),t._v(" /login/sessionCookieRedirect?token=0HsohZYpJgMSHwmL9TQy7RRzuY&redirectUrl=https%3A%2F%2Fyour-app.example.com HTTP/1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" your-domain.okta.com\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept:")]),t._v(" */*\n")])])]),a("h5",{attrs:{id:"response-example-3"}},[t._v("Response Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#response-example-3","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("302 Moved Temporarily")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" sid=000aC_z7AZKTpSqtHFc0Ak6Vg; Path=/\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" https://your-app.example.com\n")])])]),a("h2",{attrs:{id:"retrieving-a-session-cookie-by-visiting-an-application-embed-link"}},[t._v("Retrieving a session cookie by visiting an application embed link "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#retrieving-a-session-cookie-by-visiting-an-application-embed-link","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("This scenario is ideal for deployment scenarios where you have a custom login page but immediately want to launch an Okta application after login without returning to a landing page. The login page will typically collect the user's credentials via a HTML form submit or POST and validate the credentials against your Okta organization by calling the "),a("router-link",{attrs:{to:"/docs/reference/api/authn/"}},[t._v("Authentication API")]),t._v(" to obtain a session token.")],1),t._v(" "),a("p",[t._v("The session token can then be passed as a query parameter to an Okta application's embed link that will set a session cookie as well as launch the application in a single web request.")]),t._v(" "),a("blockquote",[a("p",[t._v("The session token may only be used "),a("strong",[t._v("once")]),t._v(" to establish a session. If the session expires or the user logs out of Okta after using the token, they will not be able to reuse the same session token to get a new session cookie.")])]),t._v(" "),a("h3",{attrs:{id:"visit-an-embed-link-with-the-session-token"}},[t._v("Visit an embed link with the session token "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#visit-an-embed-link-with-the-session-token","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("After your login flow is complete you can launch an Okta application for the user with an "),a("router-link",{attrs:{to:"/docs/reference/api/users/#get-assigned-app-links"}},[t._v("embed link")]),t._v(" that contains the the session token as a query parameter "),a("code",[t._v("sessionToken")]),t._v(".")],1),t._v(" "),a("h5",{attrs:{id:"response-example-4"}},[t._v("Response Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#response-example-4","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("302 Moved Temporarily")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" https://your-subdomain/app/google/go1013td3mXAQOJCHEHQ/mail?sessionToken=0HsohZYpJgMSHwmL9TQy7RRzuY\n")])])]),a("p",[t._v("When the link is visited, the token in the request will be used to initiate the user's session before processing the application launch request. A session cookie will be set in the browser and the user will have an active session with Okta and will be able to SSO into additional applications until the session is expired or the user closes the session (logout) or browser application.")]),t._v(" "),a("h5",{attrs:{id:"response-example-5"}},[t._v("Response Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#response-example-5","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("302 Moved Temporarily")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" sid=000aC_z7AZKTpSqtHFc0Ak6Vg; Path=/\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location:")]),t._v(" https://mail.google.com/a/your-subdomain\n")])])]),a("blockquote",[a("p",[t._v("The HTTP response will vary depending on the specific Okta application but will always contain a "),a("code",[t._v("Set-Cookie")]),t._v(" header.")])]),t._v(" "),a("h3",{attrs:{id:"initiate-a-saml-sso-with-the-session-token"}},[t._v("Initiate a SAML SSO with the session token "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#initiate-a-saml-sso-with-the-session-token","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("After your login flow is complete you can also initiate a SAML SSO into an Okta application for the user with either the "),a("code",[t._v("HTTP-Redirect")]),t._v(" or "),a("code",[t._v("HTTP-POST")]),t._v(" binding to the application's SAML SSO URL\nthat contains the the session token as query parameter "),a("code",[t._v("sessionToken")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"request-example-3"}},[t._v("Request Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-example-3","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("GET")]),t._v(" /home/appwizardsaml_1/0oalkgr25YMb5reZp0g4/alnlkriVMi9J5WYmk0g4?RelayState=%2Fcustom%2Fdeep%2Flink&sessionToken=0HsohZYpJgMSHwmL9TQy7RRzuY HTTP/1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" your-domain.okta.com\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept:")]),t._v(" */*\n")])])]),a("p",[t._v("When the link is visited, the token in the request will be used to initiate the user's session before processing the SAML SSO request. A session cookie will be set in the browser and the user will have an active session with Okta and will be able to SSO into additional applications until the session is expired or the user closes the session (logout) or browser application.")]),t._v(" "),a("h5",{attrs:{id:"response-example-6"}},[t._v("Response Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#response-example-6","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("200 OK")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" text/html;charset=utf-8\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Set-Cookie:")]),t._v(" sid=000aC_z7AZKTpSqtHFc0Ak6Vg; Path=/"),a("span",{pre:!0,attrs:{class:"token text/html"}},[t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("appForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://sp.example.com/auth/saml20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("SAMLResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c2FtbDJwOlJlc3BvbnNlIHhtbG5zOnNhbWwycD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9va3RhcHMxLm9rdGEuY29tL2F1dGgvc2FtbDIwL2thcmwiIElEPSJpZDEzODE1MzU1NjY3MTAwODkwMDAxMzkzODMwOTY2IiBJc3N1ZUluc3RhbnQ9IjIwMTMtMTAtMTFUMjM6NTI6NDYuNjk4WiIgVmVyc2lvbj0iMi4wIj48c2FtbDI6SXNzdWVyIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIiBGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpuYW1laWQtZm9ybWF0OmVudGl0eSI+aHR0cDovL3d3dy5va3RhLmNvbS9rYml5TU9JTUhOTEdISk5DQlVSTTwvc2FtbDI6SXNzdWVyPjxkczpTaWduYXR1cmUgeG1sbnM6ZHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyMiPjxkczpTaWduZWRJbmZvPjxkczpDYW5vbmljYWxpemF0aW9uTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIi8+PGRzOlNpZ25hdHVyZU1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNyc2Etc2hhMSIvPjxkczpSZWZlcmVuY2UgVVJJPSIjaWQxMzgxNTM1NTY2NzEwMDg5MDAwMTM5MzgzMDk2NiI+PGRzOlRyYW5zZm9ybXM+PGRzOlRyYW5zZm9ybSBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNlbnZlbG9wZWQtc2lnbmF0dXJlIi8+PGRzOlRyYW5zZm9ybSBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjwvZHM6VHJhbnNmb3Jtcz48ZHM6RGlnZXN0TWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3NoYTEiLz48ZHM6RGlnZXN0VmFsdWU+enNDNjJuOUI3S1RxN1pZdG5YM3M2dW9jYXRBPTwvZHM6RGlnZXN0VmFsdWU+PC9kczpSZWZlcmVuY2U+PC9kczpTaWduZWRJbmZvPjxkczpTaWduYXR1cmVWYWx1ZT5aZ3YvamFJdkpGSW9EV29GRnUyM0dJVVJLSU9JMUdOd2FmWXhZbmdWY01pRnQ5UTRwOS9MQUhMSXVKYzhjdXh4UmlmYlpza1ZlRWh1TG1xV3JSSFpMRHh2djJ4Wm15eUM4UGlSc2xFSGlzMEhhQTY3bDF3dlBaTURTSWxhV3lJaFFzVkppVE90Nk9GSXpjNkZwZEFZVWU0Y3ptcEEyaW4vK2RmQTl0S1dYbkU9PC9kczpTaWduYXR1cmVWYWx1ZT48ZHM6S2V5SW5mbz48ZHM6WDUwOURhdGE+PGRzOlg1MDlDZXJ0aWZpY2F0ZT5NSUlDblRDQ0FnYWdBd0lCQWdJR0FTbE1OYXdETUEwR0NTcUdTSWIzRFFFQkJRVUFNSUdSTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHCkExVUVDQXdLUTJGc2FXWnZjbTVwWVRFV01CUUdBMVVFQnd3TlUyRnVJRVp5WVc1amFYTmpiekVOTUFzR0ExVUVDZ3dFVDJ0MFlURVUKTUJJR0ExVUVDd3dMVTFOUFVISnZkbWxrWlhJeEVqQVFCZ05WQkFNTUNXSnZiM1J6ZEhKaGNERWNNQm9HQ1NxR1NJYjNEUUVKQVJZTgphVzVtYjBCdmEzUmhMbU52YlRBZUZ3MHhNREEyTVRneE56VTJOVEphRncwME1EQTJNVGd4TnpVM05USmFNSUdSTVFzd0NRWURWUVFHCkV3SlZVekVUTUJFR0ExVUVDQXdLUTJGc2FXWnZjbTVwWVRFV01CUUdBMVVFQnd3TlUyRnVJRVp5WVc1amFYTmpiekVOTUFzR0ExVUUKQ2d3RVQydDBZVEVVTUJJR0ExVUVDd3dMVTFOUFVISnZkbWxrWlhJeEVqQVFCZ05WQkFNTUNXSnZiM1J6ZEhKaGNERWNNQm9HQ1NxRwpTSWIzRFFFSkFSWU5hVzVtYjBCdmEzUmhMbU52YlRDQm56QU5CZ2txaGtpRzl3MEJBUUVGQUFPQmpRQXdnWWtDZ1lFQWtIUDlpSGNYCnRja0ZVMmliNkpWUTNVUDRaMDFoc1QyWXh1ZUhqa2pxL0Z3N1o3aEtueDMwb0JBeFl6dGxUZitsSVpjVWlRVnc5WUF2NVVKNC9uaEMKSTdiQmM2SVVuYnIzUTZ5NitjbWJ1VlVnaVhodzVsTTR5a2tMQ2dLZ01uVk5hcHRYNGt4RGY0ZGVRbEorS0pLeFdDWjN5TXR5aEZYZQo0bUtvbUwxQzRyc0NBd0VBQVRBTkJna3Foa2lHOXcwQkFRVUZBQU9CZ1FBbVJEODBnMVYzU2lNYjdEdHZwMG1CZWk5elczaEw3Y0RYCnV2ZFlBMXU0Vmhhais1bWppYVJ5QlFDODJLaU1UZ1l4MGExOWZGeUVRWHlwcGU0Nzh3MUNBUFFBbjhIWEFMVHR3WUJpMUgvbHpKRTUKaU5MRE55dWVtTjhaUVV5TTFNeVNYbDhiVmNRSE4wZmpnOWVmWG9kYkw4VzVhLzZwTW9Mc2NaaDJHTUsrVkE9PTwvZHM6WDUwOUNlcnRpZmljYXRlPjwvZHM6WDUwOURhdGE+PC9kczpLZXlJbmZvPjwvZHM6U2lnbmF0dXJlPjxzYW1sMnA6U3RhdHVzIHhtbG5zOnNhbWwycD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48c2FtbDJwOlN0YXR1c0NvZGUgVmFsdWU9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpzdGF0dXM6U3VjY2VzcyIvPjwvc2FtbDJwOlN0YXR1cz48c2FtbDI6QXNzZXJ0aW9uIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIiBJRD0iaWQxMzgxNTM1NTY2NzE0OTg5MDAwMjMxOTQzNDgiIElzc3VlSW5zdGFudD0iMjAxMy0xMC0xMVQyMzo1Mjo0Ni42OThaIiBWZXJzaW9uPSIyLjAiPjxzYW1sMjpJc3N1ZXIgRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6bmFtZWlkLWZvcm1hdDplbnRpdHkiIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIj5odHRwOi8vd3d3Lm9rdGEuY29tL2tiaXlNT0lNSE5MR0hKTkNCVVJNPC9zYW1sMjpJc3N1ZXI+PGRzOlNpZ25hdHVyZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+PGRzOlNpZ25lZEluZm8+PGRzOkNhbm9uaWNhbGl6YXRpb25NZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48ZHM6U2lnbmF0dXJlTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3JzYS1zaGExIi8+PGRzOlJlZmVyZW5jZSBVUkk9IiNpZDEzODE1MzU1NjY3MTQ5ODkwMDAyMzE5NDM0OCI+PGRzOlRyYW5zZm9ybXM+PGRzOlRyYW5zZm9ybSBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyNlbnZlbG9wZWQtc2lnbmF0dXJlIi8+PGRzOlRyYW5zZm9ybSBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIvPjwvZHM6VHJhbnNmb3Jtcz48ZHM6RGlnZXN0TWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3NoYTEiLz48ZHM6RGlnZXN0VmFsdWU+LzRvakxrbFE3SDVLVlQvYXhMSk9nVEttQkRRPTwvZHM6RGlnZXN0VmFsdWU+PC9kczpSZWZlcmVuY2U+PC9kczpTaWduZWRJbmZvPjxkczpTaWduYXR1cmVWYWx1ZT5OSGNxQVJGT2FHd2N3bVlyRklMeTlGendnWDZDenVMcDlhQm5UZkxXdFpic0tOWFRvSS92dG9GVjhDMzFEOUlKVlVoOVhNcmtQckN4Q2VZZGczdnlUbmx5dG80SlJ1TlR2elhncFBEcGlDZ2RGaWhHeFJPRk9JVFhoQkdkRFNXbVdkYkNuQWJDZzBWT2xlZHNnQjMxTExudXFJaGIxSGJGVy9ZeFBhUTRmbEU9PC9kczpTaWduYXR1cmVWYWx1ZT48ZHM6S2V5SW5mbz48ZHM6WDUwOURhdGE+PGRzOlg1MDlDZXJ0aWZpY2F0ZT5NSUlDblRDQ0FnYWdBd0lCQWdJR0FTbE1OYXdETUEwR0NTcUdTSWIzRFFFQkJRVUFNSUdSTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHCkExVUVDQXdLUTJGc2FXWnZjbTVwWVRFV01CUUdBMVVFQnd3TlUyRnVJRVp5WVc1amFYTmpiekVOTUFzR0ExVUVDZ3dFVDJ0MFlURVUKTUJJR0ExVUVDd3dMVTFOUFVISnZkbWxrWlhJeEVqQVFCZ05WQkFNTUNXSnZiM1J6ZEhKaGNERWNNQm9HQ1NxR1NJYjNEUUVKQVJZTgphVzVtYjBCdmEzUmhMbU52YlRBZUZ3MHhNREEyTVRneE56VTJOVEphRncwME1EQTJNVGd4TnpVM05USmFNSUdSTVFzd0NRWURWUVFHCkV3SlZVekVUTUJFR0ExVUVDQXdLUTJGc2FXWnZjbTVwWVRFV01CUUdBMVVFQnd3TlUyRnVJRVp5WVc1amFYTmpiekVOTUFzR0ExVUUKQ2d3RVQydDBZVEVVTUJJR0ExVUVDd3dMVTFOUFVISnZkbWxrWlhJeEVqQVFCZ05WQkFNTUNXSnZiM1J6ZEhKaGNERWNNQm9HQ1NxRwpTSWIzRFFFSkFSWU5hVzVtYjBCdmEzUmhMbU52YlRDQm56QU5CZ2txaGtpRzl3MEJBUUVGQUFPQmpRQXdnWWtDZ1lFQWtIUDlpSGNYCnRja0ZVMmliNkpWUTNVUDRaMDFoc1QyWXh1ZUhqa2pxL0Z3N1o3aEtueDMwb0JBeFl6dGxUZitsSVpjVWlRVnc5WUF2NVVKNC9uaEMKSTdiQmM2SVVuYnIzUTZ5NitjbWJ1VlVnaVhodzVsTTR5a2tMQ2dLZ01uVk5hcHRYNGt4RGY0ZGVRbEorS0pLeFdDWjN5TXR5aEZYZQo0bUtvbUwxQzRyc0NBd0VBQVRBTkJna3Foa2lHOXcwQkFRVUZBQU9CZ1FBbVJEODBnMVYzU2lNYjdEdHZwMG1CZWk5elczaEw3Y0RYCnV2ZFlBMXU0Vmhhais1bWppYVJ5QlFDODJLaU1UZ1l4MGExOWZGeUVRWHlwcGU0Nzh3MUNBUFFBbjhIWEFMVHR3WUJpMUgvbHpKRTUKaU5MRE55dWVtTjhaUVV5TTFNeVNYbDhiVmNRSE4wZmpnOWVmWG9kYkw4VzVhLzZwTW9Mc2NaaDJHTUsrVkE9PTwvZHM6WDUwOUNlcnRpZmljYXRlPjwvZHM6WDUwOURhdGE+PC9kczpLZXlJbmZvPjwvZHM6U2lnbmF0dXJlPjxzYW1sMjpTdWJqZWN0IHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIj48c2FtbDI6TmFtZUlEIEZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6MS4xOm5hbWVpZC1mb3JtYXQ6ZW1haWxBZGRyZXNzIj5mcmVkZmxpbnRzdG9uZUByaW5jb25oaWxsLmNvbTwvc2FtbDI6TmFtZUlEPjxzYW1sMjpTdWJqZWN0Q29uZmlybWF0aW9uIE1ldGhvZD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmNtOmJlYXJlciI+PHNhbWwyOlN1YmplY3RDb25maXJtYXRpb25EYXRhIE5vdE9uT3JBZnRlcj0iMjAxMy0xMC0xMVQyMzo1Nzo0Ni43MTdaIiBSZWNpcGllbnQ9Imh0dHBzOi8vb2t0YXBzMS5va3RhLmNvbS9hdXRoL3NhbWwyMC9rYXJsIi8+PC9zYW1sMjpTdWJqZWN0Q29uZmlybWF0aW9uPjwvc2FtbDI6U3ViamVjdD48c2FtbDI6Q29uZGl0aW9ucyBOb3RCZWZvcmU9IjIwMTMtMTAtMTFUMjM6NDc6NDYuNzE3WiIgTm90T25PckFmdGVyPSIyMDEzLTEwLTExVDIzOjU3OjQ2LjcxN1oiIHhtbG5zOnNhbWwyPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIj48c2FtbDI6QXVkaWVuY2VSZXN0cmljdGlvbj48c2FtbDI6QXVkaWVuY2U+aHR0cHM6Ly93d3cub2t0YS5jb20vc2FtbDIvc2VydmljZS1wcm92aWRlci9zcGJmZHY5MnFLU0JUR1VZR1VQTzwvc2FtbDI6QXVkaWVuY2U+PC9zYW1sMjpBdWRpZW5jZVJlc3RyaWN0aW9uPjwvc2FtbDI6Q29uZGl0aW9ucz48c2FtbDI6QXV0aG5TdGF0ZW1lbnQgQXV0aG5JbnN0YW50PSIyMDEzLTEwLTExVDIzOjUyOjQ2LjY5OFoiIFNlc3Npb25JbmRleD0iaWQxMzgxNTM1NTY2Njk4LjY4MDQ3Mjc3IiB4bWxuczpzYW1sMj0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFzc2VydGlvbiI+PHNhbWwyOkF1dGhuQ29udGV4dD48c2FtbDI6QXV0aG5Db250ZXh0Q2xhc3NSZWY+dXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQ8L3NhbWwyOkF1dGhuQ29udGV4dENsYXNzUmVmPjwvc2FtbDI6QXV0aG5Db250ZXh0Pjwvc2FtbDI6QXV0aG5TdGF0ZW1lbnQ+PC9zYW1sMjpBc3NlcnRpb24+PC9zYW1sMnA6UmVzcG9uc2U+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("RelayState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/some/deep/link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appForm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),a("h3",{attrs:{id:"initiate-a-ws-federation-sso-with-the-session-token"}},[t._v("Initiate a WS-Federation SSO with the session token "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#initiate-a-ws-federation-sso-with-the-session-token","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("You can also use the same "),a("a",{attrs:{href:"#initiate-a-saml-sso-with-the-session-token"}},[t._v("flow as SAML")]),t._v(" for template WS-Federation application as well by passing the session token as query parameter "),a("code",[t._v("sessionToken")]),t._v(".")]),t._v(" "),a("h5",{attrs:{id:"request-example-4"}},[t._v("Request Example "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-example-4","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("GET")]),t._v(" /app/template_wsfed/k9x69oiKYSUWMIYZBKTY/sso/wsfed/passive?wa=wsignin1.0&wtrealm=https%3A%2F%2Fexample.com%2FApp%2F&wctx=rm%3D0%26id%3Dpassive%26ru%3D%2FApp%2FHome%2FAbout&sessionToken=0HsohZYpJgMSHwmL9TQy7RRzuY HTTP/1.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" your-domain.okta.com\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept:")]),t._v(" */*\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);