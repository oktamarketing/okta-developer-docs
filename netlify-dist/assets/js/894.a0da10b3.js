(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{590:function(t,s,e){"use strict";e.r(s);var a=e(8),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Use the following steps to display the user consent dialog box as part of an OpenID Connect or OAuth 2.0 request.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" Currently OAuth Consent works only with custom authorization servers. See "),e("router-link",{attrs:{to:"/docs/concepts/auth-servers/"}},[t._v("Authorization Servers")]),t._v(" for more information on the types of authorization servers available to you and what you can use them for.")],1)]),t._v(" "),e("ol",[e("li",[e("p",[t._v("In the Developer Console, select "),e("strong",[t._v("Applications")]),t._v(" and then select the OpenID Connect app that you want to require user consent for.")])]),t._v(" "),e("li",[e("p",[t._v("Select the "),e("strong",[t._v("General")]),t._v(" tab and click "),e("strong",[t._v("Edit")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Scroll down to the "),e("strong",[t._v("User Consent")]),t._v(" section and select "),e("strong",[t._v("Require consent")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" If the "),e("strong",[t._v("User Consent")]),t._v(" section doesn't appear, you don't have the API Access Management and the User Consent features enabled. To enable these features, contact "),e("a",{attrs:{href:"https://support.okta.com/help/open_case?_",target:"_blank",rel:"noopener noreferrer"}},[t._v("Support"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("li",[e("p",[t._v("In this example, we use the "),e("strong",[t._v("Implicit")]),t._v(" flow for testing purposes. In the "),e("strong",[t._v("Application")]),t._v(" section, select "),e("strong",[t._v("Implicit")]),t._v(" flow and then both "),e("strong",[t._v("Allow ID Token with implicit grant type")]),t._v(" and "),e("strong",[t._v("Allow Access Token with implicit grant type")]),t._v(".")]),t._v(" "),e("p",[t._v("For the "),e("router-link",{attrs:{to:"/docs/concepts/auth-overview/#authorization-code-flow"}},[t._v("Authorization Code flow")]),t._v(", the response type is "),e("code",[t._v("code")]),t._v(". You can exchange an authorization code for an ID token and/or an access token using the "),e("code",[t._v("/token")]),t._v(" endpoint.")],1)]),t._v(" "),e("li",[e("p",[t._v("Click "),e("strong",[t._v("Save")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("To enable consent for the "),e("router-link",{attrs:{to:"/docs/reference/api/authorization-servers/#create-a-scope"}},[t._v("scopes")]),t._v(" that you want to require consent for, select "),e("strong",[t._v("API")]),t._v(", "),e("strong",[t._v("Authorization Servers")]),t._v(", and then select "),e("strong",[t._v("default")]),t._v(" (Custom Authorization Server) in the table. In this example, we are enabling consent for default Custom Authorization Server scopes.")],1)]),t._v(" "),e("li",[e("p",[t._v("Select the "),e("strong",[t._v("Scopes")]),t._v(" tab.")])]),t._v(" "),e("li",[e("p",[t._v("Click the edit icon for the "),e("strong",[t._v("phone")]),t._v(" scope. The Edit Scope dialog box appears.")])]),t._v(" "),e("li",[e("p",[t._v("Select "),e("strong",[t._v("Require user consent for this scope")]),t._v(" and click "),e("strong",[t._v("Save")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"enable-consent-using-the-apis"}},[t._v("Enable consent using the APIs "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#enable-consent-using-the-apis","aria-hidden":"true"}},[e("i",{staticClass:"fa fa-link"})])]),t._v(" "),e("p",[t._v("The following section provides example requests for enabling the consent dialog box using the APIs. You must first set the "),e("code",[t._v("consent_method")]),t._v(" property and then enable consent for the scope.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" See the "),e("router-link",{attrs:{to:"/docs/reference/api/apps/#settings-8"}},[t._v("Settings table in the Apps API doc")]),t._v(" for more information on this parameter.")],1)]),t._v(" "),e("p",[e("strong",[t._v("Update the App")])]),t._v(" "),e("p",[t._v("This example shows the JSON body of a PUT request to an existing OpenID Connect app. The request updates the "),e("code",[t._v("consent_method")]),t._v(" parameter from "),e("code",[t._v("TRUSTED")]),t._v(" (which is the default) to "),e("code",[t._v("REQUIRED")]),t._v(". The value that you specify for "),e("code",[t._v("consent_method")]),t._v(" depends on the values for "),e("code",[t._v("prompt")]),t._v(" and "),e("code",[t._v("consent")]),t._v(". Check the tables in the "),e("router-link",{attrs:{to:"/docs/reference/api/apps/#add-oauth-2-0-client-application"}},[t._v("Add OAuth 2.0 Client Application")]),t._v(" section for information on these three properties. In most cases, "),e("code",[t._v("REQUIRED")]),t._v(" is the correct value.")],1),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" You need the "),e("code",[t._v("applicationId")]),t._v(" of the app that you want to update. Do a "),e("router-link",{attrs:{to:"/docs/reference/api/apps/#list-applications-with-defaults"}},[t._v("List Applications")]),t._v(" to locate that ID.")],1)]),t._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0oaosna3ilNxgPTmk0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oidc_client"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ConsentWebApp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACTIVE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signOnMode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPENID_CONNECT"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"credentials"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userNameTemplate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"template"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${source.login}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BUILT_IN"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signing"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5gbe0HpzAYj2rsWSLxx1fYHdh-SzWqyKqwmfJ6qDk5g"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"oauthClient"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoKeyRotation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client_id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0oaosna3ilNxgPTmk0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_endpoint_auth_method"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_secret_basic"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notifications"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vpn"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connection"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DISABLED"')]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"helpUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"oauthClient"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client_uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"logo_uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redirect_uris"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://${yourOktaDomain}/authorization-code/callback"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response_types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id_token"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization_code"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"implicit"')]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"initiate_login_uri"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://${yourOktaDomain}/authorization-code/callback"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"application_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consent_method"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REQUIRED"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"issuer_mode"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CUSTOM_URL"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nhttps"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//${yourOktaDomain}/api/v1/apps/${applicationId}")]),t._v("\n")])])]),e("p",[t._v("To enable consent for a scope that you want to require consent for, you need to "),e("router-link",{attrs:{to:"/docs/reference/api/authorization-servers/#update-a-scope"}},[t._v("update the appropriate scope")]),t._v(" by setting the "),e("code",[t._v("consent")]),t._v(" property for the scope from "),e("code",[t._v("IMPLICIT")]),t._v(" (the default) to "),e("code",[t._v("REQUIRED")]),t._v(".")],1),t._v(" "),e("p",[e("strong",[t._v("Update Scope consent")])]),t._v(" "),e("p",[t._v("This example shows the JSON body for a PUT request to the default Custom Authorization Server. You need the following information for the request:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("authServerId")]),t._v(": Do a "),e("router-link",{attrs:{to:"/docs/reference/api/authorization-servers/#list-authorization-servers"}},[t._v("List Authorization Servers")]),t._v(" to locate the appropriate ID.")],1),t._v(" "),e("li",[e("code",[t._v("scopeId")]),t._v(": Do a "),e("router-link",{attrs:{to:"/docs/reference/api/authorization-servers/#get-all-scopes"}},[t._v("List Scopes")]),t._v(" to locate the appropriate ID.")],1)]),t._v(" "),e("div",{staticClass:"language-JSON extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scpixa2zmc8Eumvjb0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"phone"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"phone"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Allows this application to access your phone number."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"system"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metadataPublish"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ALL_CLIENTS"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REQUIRED"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nhttps"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//${yourOktaDomain}/api/v1/authorizationServers/${authServerId}/scopes/${scopeId}")]),t._v("\n")])])]),e("NextSectionLink")],1)}),[],!1,null,null,null);s.default=n.exports}}]);