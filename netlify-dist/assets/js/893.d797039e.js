(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{639:function(e,t,a){"use strict";a.r(t);var n=a(8),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("ApiLifecycle",{attrs:{access:"ea"}}),e._v(" "),a("p",[e._v("If you want users to acknowledge and accept that they are giving an app access to their data, you can configure an Okta-hosted user consent dialog box for OAuth 2.0 or OpenID Connect authentication flows. With the correct configuration, Okta displays a consent dialog box that shows which app is asking for access. The dialog box displays the app logo that you specify and also provides details about what data is shared if the user consents.")]),e._v(" "),a("p",[e._v("This guide assumes that you:")]),e._v(" "),a("ul",[a("li",[e._v("Have an Okta Developer Edition org. Don't have one? "),a("a",{attrs:{href:"https://developer.okta.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create an org for free"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Have an "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Apps_App_Integration_Wizard-oidc",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenID Connect client application"),a("OutboundLink")],1),e._v(" in Okta with at least "),a("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext-assign-apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("one user assigned to it"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"user-consent-and-tokens"}},[e._v("User consent and tokens "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#user-consent-and-tokens","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("User consent represents a user's explicit permission to allow an application to access resources protected by scopes. Consent grants are different from tokens because a consent can outlast a token, and there can be multiple tokens with varying sets of scopes derived from a single consent.")]),e._v(" "),a("p",[e._v("When an application needs to get a new access token from an authorization server, the user isn't prompted for consent if they have already consented to the specified scopes. Consent grants remain valid until the user or admin manually revokes them, or until the user, application, authorization server, or scope is deactivated or deleted.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" The user only has to grant consent once for an attribute per authorization server.")])]),e._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);t.default=o.exports}}]);