(window.webpackJsonp=window.webpackJsonp||[]).push([[1318],{1062:function(e,t,a){"use strict";a.r(t);var r=a(8),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2018-12-2"}},[e._v("2018.12.2 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#_2018-12-2","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" Okta has changed our release model and version numbering. Under the old system, this would have been release 2018.52. For more information, see here: "),a("a",{attrs:{href:"https://support.okta.com/help/s/article/New-Okta-Release-Model",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://support.okta.com/help/s/article/New-Okta-Release-Model"),a("OutboundLink")],1)])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Change")]),e._v(" "),a("th",[e._v("Expected in Preview Orgs")]),e._v(" "),a("th",[e._v("Rollout to Production Orgs Expected to Start")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#bugs-fixed-in-2018-12-2"}},[e._v("Bugs Fixed in 2018.12.2")])]),e._v(" "),a("td",[e._v("December 27, 2018")]),e._v(" "),a("td",[e._v("January 7, 2019")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#previously-released-early-access-features-2018-12-2-update"}},[e._v("Previously Released Early Access Features 2018.12.2 Update")])]),e._v(" "),a("td",[e._v("Available Now")]),e._v(" "),a("td",[e._v("Available Now")])])])]),e._v(" "),a("h3",{attrs:{id:"bugs-fixed-in-2018-12-2"}},[e._v("Bugs Fixed in 2018.12.2 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#bugs-fixed-in-2018-12-2","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("An error would be returned if the "),a("code",[e._v("/apps/${applicationId}")]),e._v(" "),a("router-link",{attrs:{to:"/docs/reference/api/apps/#update-application"}},[e._v("endpoint")]),e._v(" was called to update an app that did not not have a configurable "),a("code",[e._v("signOnMode")]),e._v(" property. ")],1)]),e._v(" "),a("li",[a("p",[e._v("The "),a("router-link",{attrs:{to:"/docs/reference/api/idps/"}},[e._v("Identity Providers API")]),e._v(" endpoints "),a("code",[e._v("GET /idps/${idpId}/users")]),e._v(", "),a("code",[e._v("GET /idps/${idpId}/users/{userId}")]),e._v(", and "),a("code",[e._v("DELETE /idps/${idpId}/users/${userId}")]),e._v(" previously required the social authentication feature, even for users related to a non-social IdP. Additionally, non-Social IdPs were not included in the results returned by "),a("code",[e._v("GET /users/${userId}/idps")]),e._v(". ")],1)]),e._v(" "),a("li",[a("p",[e._v("Instead of providing specific reasons for failure, "),a("router-link",{attrs:{to:"/docs/reference/api/idps/"}},[e._v("Identity Providers")]),e._v(" operations failed with generic "),a("code",[e._v("error_description")]),e._v(" values when the Social Auth provider required user attributes in the user's profile but the attributes were missing or invalid. ")],1)]),e._v(" "),a("li",[a("p",[e._v("The "),a("code",[e._v("/users/${userId}/factors/catalog")]),e._v(" "),a("router-link",{attrs:{to:"/docs/reference/api/factors/#list-factors-to-enroll"}},[e._v("endpoint")]),e._v(" returned "),a("code",[e._v("email")]),e._v(" as a supported factor type even when Email Authentication was not enabled for the org in MFA settings. ")],1)])]),e._v(" "),a("h3",{attrs:{id:"previously-released-early-access-features-2018-12-2-update"}},[e._v("Previously Released Early Access Features 2018.12.2 Update "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#previously-released-early-access-features-2018-12-2-update","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The following features have already been released as Early Access. To enable them, contact "),a("a",{attrs:{href:"https://support.okta.com/help/open_case",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Early Access Features Available Now")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#custom-url-domains-are-in-early-access"}},[e._v("Custom URL Domains")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#custom-okta-hosted-sign-in-page-is-in-early-access"}},[e._v("Custom Okta-hosted Sign-In Page")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#custom-error-page-is-in-early-access"}},[e._v("Custom Error Page")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#user-consent-for-oauth-20-and-openid-connect-flows-in-early-availability-ea"}},[e._v("User Consent for OAuth 2.0 and OpenID Connect Flows")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);