(window.webpackJsonp=window.webpackJsonp||[]).push([[1286],{1032:function(e,t,a){"use strict";a.r(t);var s=a(8),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_2018-09"}},[e._v("2018.09 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#_2018-09","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Change")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Expected in Preview Orgs")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Rollout to Production Orgs Expected to Start")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#api-access-management-is-generally-available-in-preview"}},[e._v("API Access Management is Generally Available in Preview")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 7, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 12, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#user-consent-for-oauth-20-and-openid-connect-flows-in-early-availability-ea"}},[e._v("User Consent for OAuth 2.0 and OpenID Connect Flows in Early Availability (EA)")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#sessions-api-supports-http-header-prefer"}},[e._v("Sessions API Supports HTTP Header Prefer")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#user-schema-api-allows-nullable-firstname-lastname"}},[e._v("User Schema API Allows Nullable "),a("code",[e._v("firstName")]),e._v(", "),a("code",[e._v("lastName")])])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#improved-response-mode-for-oauth-20-and-openid-connect-requests"}},[e._v("Improved Response Mode for OAuth 2.0 and OpenID Connect Requests")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#change-to-authorize-response-for-prompt-for-oauth-20-and-openid-connect-requests"}},[e._v("Change to "),a("code",[e._v("/authorize")]),e._v(" Response for "),a("code",[e._v("prompt")]),e._v(" for OAuth 2.0 and OpenID Connect Requests")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#improved-system-log-behavior-for-date-queries"}},[e._v("Improved System Log Behavior for Date Queries")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#system-log-message-changes-related-to-authorization-servers"}},[e._v("System Log Message Changes Related to Authorization Servers")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"#bugs-fixed-for-2018-09"}},[e._v("Bugs Fixed for 2018.09")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("February 28, 2018")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("March 5, 2018")])])])]),e._v(" "),a("h3",{attrs:{id:"user-consent-for-oauth-2-0-and-openid-connect-flows-in-early-availability-ea"}},[e._v("User Consent for OAuth 2.0 and OpenID Connect Flows in Early Availability (EA) "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#user-consent-for-oauth-2-0-and-openid-connect-flows-in-early-availability-ea","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("A consent represents a user's explicit permission to allow an application to access resources protected by scopes. As part of an OAuth 2.0 or OpenID Connect authentication flow, you can prompt the user with a page to approve your app's access to specified resources.")]),e._v(" "),a("p",[e._v("Consent grants are different from tokens because a consent can outlast a token, and there can be multiple tokens with varying sets of scopes derived from a single consent. When an application comes back and needs to get a new access token, it may not need to prompt the user for consent if they have already consented to the specified scopes. Consent grants remain valid until the user manually revokes them, or until the user, application, authorization server or scope is deactivated or deleted.")]),e._v(" "),a("p",[e._v("To configure an authorization or authentication flow to include a user consent page:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Verify that you have the API Access Management feature enabled, and request that User Consent also be enabled.")])]),e._v(" "),a("li",[a("p",[e._v("Create an app via the Apps API with the appropriate values for "),a("code",[e._v("tos_uri")]),e._v(", "),a("code",[e._v("policy_uri")]),e._v(", and "),a("code",[e._v("consent_method")]),e._v(". ("),a("router-link",{attrs:{to:"/docs/reference/api/apps/#settings-7"}},[e._v("Details")]),e._v(")")],1),e._v(" "),a("p",[e._v("Note: You can also configure an existing app in the administrator UI: "),a("strong",[e._v("Applications > [Application Name] > General > User Consent")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Ensure that your authentication or authorization flow is configured properly. The combination of "),a("code",[e._v("prompt")]),e._v(" in the "),a("code",[e._v("/authorize")]),e._v(" request, "),a("code",[e._v("consent_method")]),e._v(" set on the app in the previous step, and "),a("code",[e._v("consent")]),e._v(", a property set on scopes, controls whether a user consent window is displayed during the authentication flow. "),a("router-link",{attrs:{to:"/docs/reference/api/apps/#settings-7"}},[e._v("Details")])],1)])]),e._v(" "),a("h3",{attrs:{id:"sessions-api-supports-http-header-prefer"}},[e._v("Sessions API Supports HTTP Header Prefer "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#sessions-api-supports-http-header-prefer","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Okta now supports "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7240#section-4.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("the HTTP Header "),a("code",[e._v("Prefer")]),a("OutboundLink")],1),e._v(" in "),a("router-link",{attrs:{to:"/docs/reference/api/sessions/#refresh-current-session"}},[e._v("the Sessions API for refreshing sessions")]),e._v(". You can extend the session lifetime, but skip any processing work related to building the response body.")],1),e._v(" "),a("h4",{attrs:{id:"example-request"}},[e._v("Example Request "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#example-request","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -v -X POST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: SSWS '),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${api_token}")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${yourOktaDomain}")]),e._v('/api/v1/sessions/me/refresh"')]),e._v("\n")])])]),a("p",[e._v("Note: "),a("code",[e._v("me")]),e._v(" can also be an ID.")]),e._v(" "),a("h4",{attrs:{id:"example-response"}},[e._v("Example Response "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#example-response","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[e._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("204 No Content")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Preference-Applied:")]),e._v(" return=minimal\n")])])]),e._v(" "),a("h3",{attrs:{id:"user-schema-api-allows-nullable-firstname-lastname"}},[e._v("User Schema API Allows Nullable "),a("code",[e._v("firstName")]),e._v(", "),a("code",[e._v("lastName")]),e._v(" "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#user-schema-api-allows-nullable-firstname-lastname","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("You can set "),a("code",[e._v("firstName")]),e._v(" or "),a("code",[e._v("lastName")]),e._v(" to be nullable in "),a("router-link",{attrs:{to:"/docs/reference/api/schemas/#user-profile-base-subschema"}},[e._v("the User Profile Base sub-schema")]),e._v(". These properties are defined in a profile sub-schema with the resolution scope "),a("code",[e._v("#base")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"improved-response-mode-for-oauth-2-0-and-openid-connect-requests"}},[e._v("Improved Response Mode for OAuth 2.0 and OpenID Connect Requests "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#improved-response-mode-for-oauth-2-0-and-openid-connect-requests","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("For "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#parameter-details"}},[e._v("the "),a("code",[e._v("form_post")]),e._v(" response mode")]),e._v(", we have reduced the HTML content returned in an OpenID Connect or OAuth 2.0 request. Now the response is only a form containing the requested tokens (access token, ID token, or both) and JavaScript to post the form. ")],1),e._v(" "),a("h3",{attrs:{id:"change-to-authorize-response-for-prompt-for-oauth-2-0-and-openid-connect-requests"}},[e._v("Change to "),a("code",[e._v("/authorize")]),e._v(" Response for "),a("code",[e._v("prompt")]),e._v(" for OAuth 2.0 and OpenID Connect Requests "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#change-to-authorize-response-for-prompt-for-oauth-2-0-and-openid-connect-requests","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("If you set "),a("code",[e._v("prompt=none")]),e._v(" for a request on "),a("code",[e._v("/authorize")]),e._v(" and the maximum age before sign-in is required ("),a("code",[e._v("max_age")]),e._v(") is exceeded, an error is returned. This ensures the safest possible result when "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#parameter-details"}},[e._v("these two settings contradict each other")]),e._v(".")],1),e._v(" "),a("p",[e._v("This applies to "),a("code",[e._v("/authorize")]),e._v(" with either the Okta Org Authorization Server or a Custom Authorization Server (which requires API Access Management).")]),e._v(" "),a("h4",{attrs:{id:"example-old-message-format"}},[e._v("Example: Old Message Format "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#example-old-message-format","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v('{\n    "errorCode": "E0000001",\n    "errorSummary": "Api validation failed: com.saasure.core.services.user.InvalidUserProfileException: Could not create user due to invalid profile: com.saasure.framework.validation.util.SimpleErrors: 1 errors\\nError in object \'newUser\': codes [password.passwordRequirementsNotMet.newUser,password.passwordRequirementsNotMet]; arguments [Password requirements: at least 8 characters, a lowercase letter, an uppercase letter, a number, no parts of your username.]; default message [Password requirements were not met. Password requirements: at least 8 characters, a lowercase letter, an uppercase letter, a number, no parts of your username.]",\n    "errorLink": "E0000001",\n    "errorId": "oaecNfS38enQ8KtWDvNfusWRw",\n    "errorCauses": [\n        {\n            "errorSummary": "Password requirements were not met. Password requirements: at least 8 characters, a lowercase letter, an uppercase letter, a number, no parts of your username."\n        }\n    ]\n}\n')])])]),a("h4",{attrs:{id:"example-new-message-format"}},[e._v("Example: New Message Format "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#example-new-message-format","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v('{\n    "errorCode": "E0000001",\n    "errorSummary": "Api validation failed: com.saasure.core.services.user.InvalidUserProfileException: Could not create user due to invalid profile: com.saasure.framework.validation.util.SimpleErrors: 3 errors\\nField error in object \'newUser\' on field \'password\': rejected value [aaaa]; codes [password.minlength.newUser.password,password.minlength.password,password.minlength.java.lang.String,password.minlength]; arguments [8]; default message [Password requirements: at least 8 characters.]\\nField error in object \'newUser\' on field \'password\': rejected value [aaaa]; codes [password.uppercase.newUser.password,password.uppercase.password,password.uppercase.java.lang.String,password.uppercase]; arguments [Password requirements: at least 0 characters, an uppercase letter.]; default message [Password requirements: at least 0 characters, an uppercase letter.]\\nField error in object \'newUser\' on field \'password\': rejected value [aaaa]; codes [password.number.newUser.password,password.number.password,password.number.java.lang.String,password.number]; arguments [Password requirements: at least 0 characters, a number.]; default message [Password requirements: at least 0 characters, a number.]",\n    "errorLink": "E0000001",\n    "errorId": "oaeGZUg95w6SK2GbA44cXgtvA",\n    "errorCauses": [\n        {\n            "errorSummary": "password: Passwords must be at least 8 characters in length",\n            "reason": "LENGTH_MINIMUM",\n            "location": "credentials.password.value",\n            "locationType": "body",\n            "domain": "user"\n        },\n        {\n            "errorSummary": "password: Password requirements: at least 0 characters, an uppercase letter.",\n            "reason": "UPPER_CASE_REQUIRED",\n            "location": "credentials.password.value",\n            "locationType": "body",\n            "domain": "user"\n        },\n        {\n            "errorSummary": "password: Password requirements: at least 0 characters, a number.",\n            "reason": "NUMBER_REQUIRED",\n            "location": "credentials.password.value",\n            "locationType": "body",\n            "domain": "user"\n        }\n    ]\n}\n')])])]),a("p",[e._v("If you don't want these changes, contact "),a("a",{attrs:{href:"https://support.okta.com/help/open_case",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support"),a("OutboundLink")],1),e._v(" to opt out.")]),e._v(" "),a("h3",{attrs:{id:"improved-system-log-behavior-for-date-queries"}},[e._v("Improved System Log Behavior for Date Queries "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#improved-system-log-behavior-for-date-queries","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For "),a("code",[e._v("/logs")]),e._v(", the request parameters "),a("router-link",{attrs:{to:"/docs/reference/api/system-log/#request-parameters"}},[a("code",[e._v("since")]),e._v(" and "),a("code",[e._v("until")])]),e._v(" require "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc3339#page-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("the RFC 3339 Internet Date/Time Format profile of ISO 8601"),a("OutboundLink")],1),e._v(". This allows queries to more accurately target date ranges. ")],1)]),e._v(" "),a("li",[a("p",[e._v("For /"),a("code",[e._v("logs")]),e._v(", "),a("router-link",{attrs:{to:"/docs/reference/api/system-log/#request-parameters"}},[e._v("the maximum page size")]),e._v(" is 1,000 messages ("),a("code",[e._v("limit=1000")]),e._v("). The default remains at 100. ")],1)])]),e._v(" "),a("h3",{attrs:{id:"system-log-message-changes-related-to-authorization-servers"}},[e._v("System Log Message Changes Related to Authorization Servers "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#system-log-message-changes-related-to-authorization-servers","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The following message changes apply to either the Okta Org Authorization Server or a Custom Authorization Server including "),a("code",[e._v("default")]),e._v(" (which requires API Access Management), or both, as indicated in each section.")]),e._v(" "),a("h4",{attrs:{id:"simplified-failure-messages-from-authorize-requests-for-events-system-log"}},[e._v("Simplified Failure Messages from "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#authorize"}},[a("code",[e._v("/authorize")])]),e._v(" Requests for "),a("code",[e._v("/events")]),e._v(" System Log "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#simplified-failure-messages-from-authorize-requests-for-events-system-log","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])],1),e._v(" "),a("p",[e._v("The existing messages "),a("code",[e._v("app.oauth2.authorize_failure")]),e._v(", "),a("code",[e._v("app.oauth2.as.authorize_failure")]),e._v(" and "),a("code",[e._v("app.oauth2.as.authorize.scope_denied_failure")]),e._v(" replace these messages:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app.oauth2.authorize.access_denied")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.invalid_client_id")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.invalid_cache_key")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.no_existing_session")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.login_failed")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.mismatched_user_in_cache_and_session")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.user_not_assigned")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.scope_denied")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.as.authorize.warn_failure")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.as.authorize.scope_denied")])])]),e._v(" "),a("p",[e._v("Details about the nature of the failure are included, so no information has been lost with this simplification.")]),e._v(" "),a("p",[e._v("These system log changes affect responses from requests that involve either the Okta Org Authorization Server or a Custom Authorization Server including "),a("code",[e._v("default")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"simplified-failure-messages-from-token-requests-for-events-system-log"}},[e._v("Simplified Failure Messages from "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#token"}},[a("code",[e._v("/token")])]),e._v(" Requests for "),a("code",[e._v("/events")]),e._v(" System Log "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#simplified-failure-messages-from-token-requests-for-events-system-log","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])],1),e._v(" "),a("p",[e._v("Instead of supplying two different messages for token grant failures on "),a("code",[e._v("/token")]),e._v(", the existing message "),a("code",[e._v("app.oauth2.as.authorize.token.grant_failure")]),e._v(" replaces\nthese messages:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app.oauth2.as.token.grant.warn_failure")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.as.token.grant.scope_denied_failure")])])]),e._v(" "),a("p",[e._v("This system log change affects responses from requests that involve a Custom Authorization Server including "),a("code",[e._v("default")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"simplified-success-messages-from-token-requests-for-events-system-log"}},[e._v("Simplified Success Messages from  "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#token"}},[a("code",[e._v("/token")])]),e._v(" Requests for "),a("code",[e._v("/events")]),e._v(" System Log "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#simplified-success-messages-from-token-requests-for-events-system-log","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])],1),e._v(" "),a("p",[e._v("Instead of supplying a different message for ID token and access token generation, there's just one message for each. The ID token or access token minted is included in the message as it was previously.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The existing message "),a("code",[e._v("app.oauth2.authorize.implicit_success")]),e._v(" replaces:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app.oauth2.authorize.implicit.id_token_success")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.implicit.access_token_success")])])])]),e._v(" "),a("li",[a("p",[e._v("The existing message "),a("code",[e._v("app.oauth2.as.authorize.implicit_success")]),e._v(" replaces:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app.oauth2.as.authorize.implicit.id_token_success")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.as.authorize.implicit.access_token_success")])])])])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("_success")]),e._v(" messages weren't being written to the System Log previously, but are now. ")]),e._v(" "),a("p",[e._v("These system log changes affect responses from requests that involve either the Okta Org Authorization Server or a Custom Authorization Server including "),a("code",[e._v("default")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"simplified-messages-from-token-requests-for-logs-system-log"}},[e._v("Simplified Messages from  "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#token"}},[a("code",[e._v("/token")])]),e._v(" Requests for "),a("code",[e._v("/logs")]),e._v(" System Log "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#simplified-messages-from-token-requests-for-logs-system-log","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])],1),e._v(" "),a("p",[e._v("Instead of supplying a different message for ID token and access token generation, there's just one message for each. The ID token or access token minted is included in the message as it was previously.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The existing message "),a("code",[e._v("app.oauth2.authorize.implicit")]),e._v(" replaces:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app.oauth2.authorize.implicit.id_token")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.authorize.implicit.access_token")])])])]),e._v(" "),a("li",[a("p",[e._v("The existing message "),a("code",[e._v("app.oauth2.as.authorize.implicit")]),e._v(" replaces:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("app.oauth2.as.authorize.implicit.id_token")])]),e._v(" "),a("li",[a("code",[e._v("app.oauth2.as.authorize.implicit.access_token")])])])])]),e._v(" "),a("p",[e._v("These system log changes affect responses from requests that involve either the Okta Org Authorization Server or a Custom Authorization Server, including "),a("code",[e._v("default")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"bugs-fixed-for-2018-09"}},[e._v("Bugs Fixed for 2018.09 "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#bugs-fixed-for-2018-09","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The following bugs have been fixed and are expected in preview orgs February 28, 2018 and production orgs starting March 5, 2018.")]),e._v(" "),a("ul",[a("li",[e._v("If a user had a status of "),a("code",[e._v("ACTIVE")]),e._v(" and had never signed in, and an API call reset the user's password, the user's status was incorrectly changed from "),a("code",[e._v("ACTIVE")]),e._v(" to "),a("code",[e._v("PROVISIONED")]),e._v(", instead of the expected "),a("code",[e._v("RECOVERY")]),e._v(". (OKTA-154024)")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("-admin")]),e._v(" was incorrectly included in the domain name during initialization of "),a("a",{attrs:{href:"https://github.com/okta/okta-auth-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("an OktaAuth object"),a("OutboundLink")],1),e._v(", no error was returned. (OKTA-156927)")]),e._v(" "),a("li",[e._v("If a user was created with a password, that password wasn't considered as part of their password history. (OKTA-158966)")])])])}),[],!1,null,null,null);t.default=r.exports}}]);