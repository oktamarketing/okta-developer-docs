(window.webpackJsonp=window.webpackJsonp||[]).push([[1307],{961:function(e,t,a){"use strict";a.r(t);var r=a(8),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2018-36"}},[e._v("2018.36 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#_2018-36","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Change")]),e._v(" "),a("th",[e._v("Expected in Preview Orgs")]),e._v(" "),a("th",[e._v("Rollout to Production Orgs Expected to Start")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#new-device-notification-emails-are-generally-available-ga"}},[e._v("New Device Notification Emails are Generally Available")])]),e._v(" "),a("td",[e._v("September 5, 2018")]),e._v(" "),a("td",[e._v("September 10, 2018")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#email-rate-limiting"}},[e._v("Email Rate Limiting")])]),e._v(" "),a("td",[e._v("September 5, 2018")]),e._v(" "),a("td",[e._v("September 10, 2018")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#new-sendemail-parameter-for-user-deletion-and-deactivation"}},[e._v("New sendEmail Parameter for User Deletion and Deactivation")])]),e._v(" "),a("td",[e._v("September 5, 2018")]),e._v(" "),a("td",[e._v("October 15, 2018")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#support-for-jwts-signed-with-private-keys"}},[e._v("Support for JWTs Signed with Private Keys")])]),e._v(" "),a("td",[e._v("September 5, 2018")]),e._v(" "),a("td",[e._v("September 10, 2018")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#system-log-event-for-rate-limit-override-expiration"}},[e._v("System Log Event for Rate Limit Override Expiration")])]),e._v(" "),a("td",[e._v("September 5, 2018")]),e._v(" "),a("td",[e._v("September 10, 2018")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#required-properties-in-app-user-schema"}},[e._v("Required Properties in App User Schema")])]),e._v(" "),a("td",[e._v("September 5, 2018")]),e._v(" "),a("td",[e._v("September 10, 2018")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#previously-released-early-access-features-2018-36-update"}},[e._v("Previously Released Early Access Features 2018.36 Update")])]),e._v(" "),a("td",[e._v("Available now")]),e._v(" "),a("td",[e._v("Available now")])])])]),e._v(" "),a("h3",{attrs:{id:"new-device-notification-emails-are-generally-available-ga"}},[e._v("New Device Notification Emails are Generally Available (GA) "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#new-device-notification-emails-are-generally-available-ga","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("When enabled, end users will receive a new device notification email when signing in to Okta from a new or unrecognized device. This feature is now generally available to all orgs. For more information about email notifications, refer to the New or Unknown Device Notification Emails section on "),a("a",{attrs:{href:"https://help.okta.com/en/prod/Content/Topics/Security/Security_General.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),a("OutboundLink")],1),e._v(". ")]),e._v(" "),a("h3",{attrs:{id:"email-rate-limiting"}},[e._v("Email Rate Limiting "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#email-rate-limiting","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Okta is introducing new rate limits for emails that are sent to users. This will help with service protection. ")]),e._v(" "),a("h3",{attrs:{id:"new-sendemail-parameter-for-user-deletion-and-deactivation"}},[e._v("New sendEmail Parameter for User Deletion and Deactivation "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#new-sendemail-parameter-for-user-deletion-and-deactivation","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("User deletion and deactivation requests now have an optional "),a("code",[e._v("sendEmail")]),e._v(" parameter. For more information see the documentation for those endpoints:")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/docs/reference/api/apps/#remove-user-from-application"}},[e._v("DELETE /api/v1/apps/${applicationId}/users/${userId}")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/docs/reference/api/users/#delete-user"}},[e._v("DELETE /api/v1/users/${userId}")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/docs/reference/api/users/#deactivate-user"}},[e._v("POST /api/v1/users/${userId}/lifecycle/deactivate")])],1)]),e._v(" "),a("h3",{attrs:{id:"support-for-jwts-signed-with-private-keys"}},[e._v("Support for JWTs Signed with Private Keys "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#support-for-jwts-signed-with-private-keys","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Requests to the "),a("code",[e._v("/token")]),e._v(" and "),a("code",[e._v("/authorize")]),e._v(" endpoints will now accept JWTs signed with a private key. For more information see the OIDC documentation for the "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#token"}},[e._v("token endpoint")]),e._v(" and the "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#authorize"}},[e._v("authorize endpoint")]),e._v(". ")],1),e._v(" "),a("h3",{attrs:{id:"system-log-event-for-rate-limit-override-expiration"}},[e._v("System Log Event for Rate Limit Override Expiration "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#system-log-event-for-rate-limit-override-expiration","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("A System Log event will be generated exactly two days before a temporary API rate limit override is set to expire. The limit's expiration is set by customer support based on a window agreed upon when the override was requested. Once a limit has expired, it will no longer take effect and the customer will be subject to the "),a("router-link",{attrs:{to:"/docs/reference/rate-limits/"}},[e._v("default limit for that API endpoint")]),e._v(". ")],1),e._v(" "),a("h3",{attrs:{id:"required-properties-in-app-user-schema"}},[e._v("Required Properties in App User Schema "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#required-properties-in-app-user-schema","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("API calls to "),a("router-link",{attrs:{to:"/docs/reference/api/schemas/#update-app-user-profile-schema-property"}},[e._v("modify an app user schema")]),e._v(" can no longer change the nullability ("),a("code",[e._v("required")]),e._v(" field) of a property if that property is shown as required in the default predefined schema for that app. ")],1),e._v(" "),a("h3",{attrs:{id:"previously-released-early-access-features-2018-36-update"}},[e._v("Previously Released Early Access Features 2018.36 Update "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#previously-released-early-access-features-2018-36-update","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The following features have already been released as Early Access. To enable them, contact "),a("a",{attrs:{href:"https://support.okta.com/help/open_case",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Early Access Features Available Now")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#custom-url-domains-are-in-early-access"}},[e._v("Custom URL Domains")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#custom-okta-hosted-sign-in-page-is-in-early-access"}},[e._v("Custom Okta-hosted Sign-In Page")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#custom-error-page-is-in-early-access"}},[e._v("Custom Error Page")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#linked-objects-api-in-early-access-ea"}},[e._v("Linked Objects API")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#token-management-api-is-in-early-access-ea"}},[e._v("Token Management API")])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#user-consent-for-oauth-20-and-openid-connect-flows-in-early-availability-ea"}},[e._v("User Consent for OAuth 2.0 and OpenID Connect Flows")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);