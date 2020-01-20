(window.webpackJsonp=window.webpackJsonp||[]).push([[1225],{885:function(e,s,a){"use strict";a.r(s);var r=a(8),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2016-34"}},[e._v("2016.34 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#_2016-34","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("h3",{attrs:{id:"feature-enhancement-hal-links-for-sessions-api-are-cors-enabled"}},[e._v("Feature Enhancement: HAL Links For Sessions API Are CORS-Enabled "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#feature-enhancement-hal-links-for-sessions-api-are-cors-enabled","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Two Session API endpoints, "),a("code",[e._v("GET /api/v1/sessions/me")]),e._v(" and "),a("code",[e._v("POST /sessions/me/lifecycle/refresh")]),e._v(", return "),a("code",[e._v("/me")]),e._v(" instead of "),a("code",[e._v("/${userId}")]),e._v(" in response links.\nThese links are CORS-enabled, consistent with the original API calls which are also CORS-enabled.")]),e._v(" "),a("p",[e._v("For more information, see "),a("router-link",{attrs:{to:"/docs/reference/api/sessions/#get-session"}},[e._v("Get Session")]),e._v(" or "),a("router-link",{attrs:{to:"/docs/reference/api/sessions/#refresh-session"}},[e._v("Refresh Session")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"bugs-fixed"}},[e._v("Bugs Fixed "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#bugs-fixed","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("ul",[a("li",[e._v("IdP keys could be deleted even when referenced by an active or inactive app instance. (OKTA-96139)")]),e._v(" "),a("li",[e._v("Properties could be deleted from the "),a("router-link",{attrs:{to:"/docs/reference/api/schemas/#remove-property-from-user-profile-schema"}},[e._v("User Profile schema")]),e._v("\nwhile still referenced as a "),a("code",[e._v("matchAttribute")]),e._v(" in inbound SAML IdPs. (OKTA-96281)")],1),e._v(" "),a("li",[e._v("Identity Providers for social authentication configured to look up usernames by Okta username or email failed to return a valid match.\nThis failure occurred if the username was in both the username and email and a second user existed with the same email but different username. (OKTA-96335)")])])])}),[],!1,null,null,null);s.default=t.exports}}]);