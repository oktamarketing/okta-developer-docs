(window.webpackJsonp=window.webpackJsonp||[]).push([[1249],{907:function(e,t,a){"use strict";a.r(t);var r=a(8),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2017-16"}},[e._v("2017.16 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#_2017-16","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("h3",{attrs:{id:"advance-notices"}},[e._v("Advance Notices "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#advance-notices","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The items in this section are scheduled for future releases. Although we share our expected release dates, these dates are subject to change.")]),e._v(" "),a("h4",{attrs:{id:"api-rate-limit-improvements"}},[e._v("API Rate Limit Improvements "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#api-rate-limit-improvements","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("We are making org-wide rate limits more granular, and treating authenticated end-user interactions separately. More granular rate limits will further lessen the likelihood of calls to one URI impacting another. Treating authenticated end-user interactions separately will lessen the chances of one user's impacting another. We're also providing a transition period so you can see what these changes will look like in your Okta system log before enforcing them:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("After Monday, 2017-04-17, you'll see system log alerts that let you know if you would have exceeded any of the new API rate limits. We're making this feature available to all preview orgs, and the feature will remain in preview for at least two weeks.")])]),e._v(" "),a("li",[a("p",[e._v("Starting later in April, 2017, we'll treat authenticated end-user interactions on a per-user basis. Interactions like SSO after login won't apply to your org-wide API rate limits.")])]),e._v(" "),a("li",[a("p",[e._v("Early in May, 2017, we will enforce the new, more granular rate limits. At that point, the warnings in the System Log will change to error notifications.")])])]),e._v(" "),a("p",[e._v("Of course, as each change is released, we'll announce the change here.")]),e._v(" "),a("p",[e._v("For a full description of the rate limit changes, see "),a("router-link",{attrs:{to:"/docs/reference/rate-limits/"}},[e._v("API Rate Limits")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"simple-hal-links"}},[e._v("Simple HAL Links "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#simple-hal-links","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Okta will enable the Simple HAL Links on User Collections feature for most preview organizations.\nThis change is currently scheduled for the 2017.19 release on 5/10/17, to remain in preview for at least one month.")]),e._v(" "),a("p",[e._v("This feature will remove the HAL links that reflect state from user objects returned in collections.")]),e._v(" "),a("p",[e._v("Currently, a user object returned in a collection contains some or all of the following links:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"_links": {\n    "suspend": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3/lifecycle/suspend",\n      "method": "POST"\n    },\n    "resetPassword": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3/lifecycle/reset_password",\n      "method": "POST"\n    },\n    "expirePassword": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3/lifecycle/expire_password",\n      "method": "POST"\n    },\n    "forgotPassword": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3/credentials/forgot_password",\n      "method": "POST"\n    },\n    "self": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3"\n    },\n    "changeRecoveryQuestion": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3/credentials/change_recovery_question",\n      "method": "POST"\n    },\n    "deactivate": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3/lifecycle/deactivate",\n      "method": "POST"\n    },\n    "changePassword": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3/credentials/change_password",\n      "method": "POST"\n    }\n}\n')])])]),a("p",[e._v("Unfortunately, these links are not guaranteed to accurately reflect the state of the specified user.\nAs outlined in "),a("router-link",{attrs:{to:"/docs/reference/api-overview/#links-in-collections"}},[e._v("Design Principles")]),e._v(":")],1),e._v(" "),a("p",[e._v('"Search and list operations are intended to find matching resources and their identifiers. If you intend to search for a resource and then modify its state or make a lifecycle change, the correct pattern is to first retrieve the resource by \'id\' using the "self" link provided for that resource in the collection. This will provide the full set of lifecycle links for that resource based on its most up-to-date state."')]),e._v(" "),a("p",[e._v("The Simple HAL Links on User Collections feature ensures that possibly invalid state links are not returned.  Instead only the "),a("code",[e._v("self")]),e._v(" link is returned:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"_links": {\n    "self": {\n      "href": "https://${yourOktaDomain}/api/v1/users/00ulxgGOjrKcnmDHT0g3"\n    }\n}\n')])])]),a("p",[e._v("As noted above, to change user state, the "),a("code",[e._v("self")]),e._v(" link should be called to retrieve a user object with up-to-date links.")]),e._v(" "),a("blockquote",[a("p",[e._v("Important: Not all preview organizations will receive this feature. Okta has identified preview organizations that depend on the Okta .NET SDK, which requires the old functionality.\nOkta won't enable the feature for these orgs.\nInstead, Okta will send a customer communication explaining the migration path to enable the feature.")])]),e._v(" "),a("h3",{attrs:{id:"platform-feature-improvement-zones-api-generally-available-in-preview"}},[e._v("Platform Feature Improvement: Zones API Generally Available in Preview "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#platform-feature-improvement-zones-api-generally-available-in-preview","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Access policies can now be defined based on an IP address range using "),a("router-link",{attrs:{to:"/docs/reference/api/zones/"}},[e._v("the Zones API")]),e._v(".\nThis feature is Generally Available in preview orgs for at least one month before being Generally Available in production. ")],1),e._v(" "),a("h3",{attrs:{id:"platform-bugs-fixed"}},[e._v("Platform Bugs Fixed "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#platform-bugs-fixed","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("ul",[a("li",[e._v("When a group was deleted, if that group was referenced by a social or SAML IdP, the reference wasn't removed.\nThese references caused errors when trying to configure the social or SAML IdP. (OKTA-116909)")]),e._v(" "),a("li",[e._v("If the SAML IdP parameter "),a("code",[e._v("idp")]),e._v(" was specified in the query string for a request to the "),a("code",[e._v("oauth2/v1/authorize")]),e._v(" endpoint, the request failed in some orgs. (OKTA-120122)")]),e._v(" "),a("li",[e._v("Creating or saving access policies for an authorization server failed for some client IDs. (OKTA-121230)")])])])}),[],!1,null,null,null);t.default=i.exports}}]);