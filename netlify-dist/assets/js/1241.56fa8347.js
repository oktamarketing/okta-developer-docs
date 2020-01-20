(window.webpackJsonp=window.webpackJsonp||[]).push([[1241],{901:function(e,t,a){"use strict";a.r(t);var r=a(8),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2017-03"}},[e._v("2017.03 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#_2017-03","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("h3",{attrs:{id:"advance-notice-api-rate-limit-improvements"}},[e._v("Advance Notice: API Rate Limit Improvements "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#advance-notice-api-rate-limit-improvements","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("We are making rate limits more granular and will roll the changes out over the next few months:")]),e._v(" "),a("ol",[a("li",[e._v("Shortly after February 8, 2017, we'll provide system log alerts to let you know that you would have exceeded any of these new API rate limits.")]),e._v(" "),a("li",[e._v("Sometime in February, 2017, we'll treat authenticated end-user interactions on a per-user basis. Interactions like SSO after login won't apply to your org-wide API rate limits.")]),e._v(" "),a("li",[e._v("Shortly after March 8, 2017, the new, more granular rate limits will be enforced. At that point, the warnings in the System Log will change to error notifications.")])]),e._v(" "),a("p",[e._v("Of course, as each change is released, we'll announced the change here.")]),e._v(" "),a("p",[e._v("For a full description of the rate limit changes, see "),a("router-link",{attrs:{to:"/docs/reference/rate-limits/"}},[e._v("API Rate Limits")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"feature-improvements"}},[e._v("Feature Improvements "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#feature-improvements","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("h4",{attrs:{id:"search-for-authorization-servers-by-name-or-resource-uri"}},[e._v("Search for Authorization Servers by Name or Resource URI "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#search-for-authorization-servers-by-name-or-resource-uri","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("You can now search (exact match) for an authorization server name or resource URI:\nTo see the new search box, log into your Okta org, click the "),a("strong",[e._v("Admin")]),e._v(" button, and visit "),a("strong",[e._v("Security > API > Authorization Servers")]),e._v(".\n")]),e._v(" "),a("p",[a("img",{attrs:{src:"/img/release_notes/rn-search-as.png",alt:"Search box for authorization servers",title:"Search box for authorization servers"}})]),e._v(" "),a("h4",{attrs:{id:"manual-key-rotation-key-pinning"}},[e._v("Manual Key Rotation (Key Pinning) "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#manual-key-rotation-key-pinning","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("In the administrator UI, you can set an authorization server to manually rotate keys.\nKeys are rotated automatically by default.")]),e._v(" "),a("blockquote",[a("p",[e._v("Important: Automatic key rotation is more secure than manual key rotation. Use manual key rotation only if you can't use automatic key rotation.")])]),e._v(" "),a("p",[e._v("To change an authorization server configuration to use manual key rotation:")]),e._v(" "),a("ol",[a("li",[e._v("Log into the Okta org.")]),e._v(" "),a("li",[e._v("Choose "),a("strong",[e._v("Admin")]),e._v(".")]),e._v(" "),a("li",[e._v("Choose "),a("strong",[e._v("Security")]),e._v(" > "),a("strong",[e._v("API")]),e._v(".")]),e._v(" "),a("li",[e._v("Open an authorization server for editing.")]),e._v(" "),a("li",[e._v("Change the value of "),a("strong",[e._v("Signing Key Rotation")]),e._v(" to Manual and save.")]),e._v(" "),a("li",[e._v("In the authorization server Settings tab, click the "),a("strong",[e._v("Rotate Signing Keys")]),e._v(" button to rotate the keys manually. This button doesn't display when "),a("strong",[e._v("Signing Key Rotation")]),e._v(" is set to Automatic.\n")])]),e._v(" "),a("h3",{attrs:{id:"platform-bugs-fixed"}},[e._v("Platform Bugs Fixed "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#platform-bugs-fixed","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("ul",[a("li",[e._v("Requesting an authorization code with "),a("code",[e._v("response_mode")]),e._v(" set to "),a("code",[e._v("okta_post_message")]),e._v(' failed to return\nthe error message ("The authorization server does not support the requested response mode") in the\nresponse. Instead it redirected the error response to the URI specified in '),a("code",[e._v("redirect_uri")]),e._v(". (OKTA-103437)")]),e._v(" "),a("li",[e._v("The one-time "),a("code",[e._v("sessionToken")]),e._v(" in the response from the POST "),a("code",[e._v("/api/v1/authn")]),e._v(" request with username\nand password was valid for two hours after issuance. It is now valid for 5 minutes for added security. (OKTA-109907)")]),e._v(" "),a("li",[e._v("Modifying the rule conditions (attributes) of a default rule that affects policy\nevaluation didn't return a read-only attribute error.\nIf you modified one of these read-only attributes previously, and need to change the attribute back to its initial value,\ncontact "),a("a",{attrs:{href:"https://support.okta.com/help/open_case",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support"),a("OutboundLink")],1),e._v(". (OKTA-110155)")]),e._v(" "),a("li",[e._v("Using the "),a("code",[e._v("search")]),e._v(" parameter with GET "),a("code",[e._v("/api/v1/users")]),e._v(" when the user is federated returned an incorrect\nvalue for "),a("code",[e._v("provider")]),e._v(". (OKTA-110929)")]),e._v(" "),a("li",[e._v("When authentication fails because of the user's sign-on policy, the HTTP code returned was 403\nbut is now 401. (OKTA-111888)")])])])}),[],!1,null,null,null);t.default=o.exports}}]);