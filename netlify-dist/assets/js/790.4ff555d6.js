(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{539:function(t,s,a){"use strict";a.r(s);var e=a(8),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("You can create a static whitelist when you need to set group whitelists on a per-application basis. For example, you have a large number of Groups. Every time a Groups claim is created, you don't want to run through all of your Groups if only 20 Groups apply to your app.")]),t._v(" "),a("p",[t._v("This process optionally uses Okta's flexible app profile, which accepts any JSON-compliant content, to create a whitelist of Groups that can then easily be referenced.")]),t._v(" "),a("p",[t._v("The following pages walk you through creating a Groups claim, assigning a group whitelist to your client app, and configuring a Groups claim that references a whitelist for the authorization server that you want to use.")]),t._v(" "),a("p",[t._v("For this example, we're configuring just one group (the IT group) for simplicity. This group has a group ID of: "),a("code",[t._v("00goeudyucv6CcaeV0h7")]),t._v(" and the OpenID Connect client used has a client ID of: "),a("code",[t._v("0oaoesxtxmPf08QHk0h7")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"get-the-group-ids"}},[t._v("Get the group IDs "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#get-the-group-ids","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("Send a request to "),a("code",[t._v("https://${yourOktaDomain}/api/v1/groups")]),t._v(" and collect the IDs for all of the Groups that you want to whitelist.")]),t._v(" "),a("p",[a("strong",[t._v("Request Example")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accept: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: SSWS "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${api_token}")]),t._v("'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v('/api/v1/groups"')]),t._v("\n")])])]),a("p",[a("strong",[t._v("Response Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00goeudyucv6CcaeV0h7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-12T19:56:23.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-12T19:56:23.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastMembershipUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-12T22:59:13.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"objectClass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"okta:user_group"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OKTA_GROUP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Info Tech"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_links"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"logo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"medium"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://op1static.oktacdn.com/assets/img/logos/groups/okta-medium.d7fb831bc4e7e1a5d8bd35dfaf405d9e.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"large"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://op1static.oktacdn.com/assets/img/logos/groups/okta-large.511fcb0de9da185b52589cb14d581c2c.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}/api/v1/groups/00goeudyucv6CcaeV0h7/users"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apps"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"href"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}/api/v1/groups/00goeudyucv6CcaeV0h7/apps"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"add-a-list-of-groups-to-the-client-app-profile"}},[t._v("Add a list of Groups to the client app profile "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#add-a-list-of-groups-to-the-client-app-profile","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("When you have a lot of Groups to whitelist, you can put the group IDs in the client app's profile property. You can add App Groups, User Groups, or both to the group whitelist specified as an array of IDs. If you only have one or two Groups to specify, simply add the group IDs to the first parameter of the "),a("code",[t._v("getFilteredGroups")]),t._v(" function described in the "),a("GuideLink",{attrs:{link:"../use-static-group-whitelist-org-as"}},[t._v("next step")]),t._v(".")],1),t._v(" "),a("p",[t._v("The following example names the group whitelist "),a("code",[t._v("groupwhitelist")]),t._v(", but you can name it anything.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip:")]),t._v(" To build your request body, you can first perform a GET to the "),a("code",[t._v("/apps")]),t._v(" endpoint ("),a("code",[t._v("https://${yourOktaDomain}/api/v1/apps/${applicationId}")]),t._v(") using the "),a("code",[t._v("applicationId")]),t._v(" for the app that you want to add the Groups list to. Then, copy the response JSON that you receive to help build your request JSON for this example.")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("profile")]),t._v(" property that contains the whitelist is at the bottom of the request example.")]),t._v(" "),a("p",[a("strong",[t._v("Request Example")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oidc_client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OIDC APP Name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACTIVE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signOnMode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPENID_CONNECT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"credentials"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"oauthClient"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoKeyRotation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0oaoesxtxmPf08QHk0h7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_endpoint_auth_method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_secret_basic"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"oauthClient"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client_uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"logo_uri"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redirect_uris"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://yourredirecturihere.com/"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response_types"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id_token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"grant_types"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization_code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_credentials"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"implicit"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"application_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"consent_method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REQUIRED"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"issuer_mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CUSTOM_URL"')]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"profile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"groupwhitelist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00goeudyucv6CcaeV0h7"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n`https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//${yourOktaDomain}/api/v1/apps/${applicationId}`")]),t._v("\n")])])]),a("p",[t._v("To use the group whitelist for every client that gets this claim in a token, put the attribute name of the whitelist in the first parameter of the "),a("code",[t._v("getFilteredGroups")]),t._v(" function described in the "),a("GuideLink",{attrs:{link:"../use-static-group-whitelist-org-as"}},[t._v("next step")]),t._v(".")],1),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" The following "),a("strong",[t._v("Use group functions for static group whitelists")]),t._v(" section goes into more detail on using group functions with static group whitelists. To continue with creating a Groups claim with a static whitelist, "),a("GuideLink",{attrs:{link:"../use-static-group-whitelist-org-as"}},[t._v("skip to the next section")]),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"use-group-functions-for-static-group-whitelists"}},[t._v("Use group functions for static group whitelists "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#use-group-functions-for-static-group-whitelists","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("This section discusses the "),a("code",[t._v("getFilteredGroups")]),t._v(" group function and how it helps you use a static group whitelist.")]),t._v(" "),a("p",[a("code",[t._v("getFilteredGroups")]),t._v(" returns all Groups that are contained in a specified list, the whitelist, of which the user is a member. The Groups are returned in a format specified by the "),a("code",[t._v("group_expression")]),t._v(" parameter. You must specify the maximum number of Groups to return in the expression.")]),t._v(" "),a("p",[t._v("The EL function format: "),a("code",[t._v("getFilteredGroups(whitelist, group_expression, limit)")])]),t._v(" "),a("p",[t._v("You can use this function anywhere to get a list of Groups of which the current user is a member, including both User Groups and App Groups that originate from sources outside Okta, such as from Active Directory and Workday. Additionally, you can use this combined, custom-formatted list for customizable claims into access and ID tokens that drive authorization flows.")]),t._v(" "),a("p",[t._v("This function takes Okta EL expressions for all parameters that evaluate to the correct data type. With these expressions you can create complex definitions for the whitelist, for the group format, and for the number of Groups to return that can include "),a("code",[t._v("if")]),t._v(" logic and customized formatting.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Nullable")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("whitelist")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Valid Okta EL expression that evaluates to a string array of group ids")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("FALSE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("group_expression")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Valid Okta EL expression that evaluates to a string for use in evaluating the group. This string must also be a valid Okta EL expression.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("FALSE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("limit")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Valid Okta EL expression that evaluates to an integer between 1 and 100, inclusive to indicate the maximum number of Groups to return")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("FALSE")])])])]),t._v(" "),a("p",[t._v("The string produced by the "),a("code",[t._v("group_expression")]),t._v(" parameter usually contains attributes and objects from the "),a("router-link",{attrs:{to:"/docs/reference/api/groups/"}},[t._v("Groups API")]),t._v(", although it isn't limited to those attributes and objects. Attributes and objects listed in the "),a("router-link",{attrs:{to:"/docs/reference/api/groups/#group-attributes"}},[t._v("Group Attributes")]),t._v(" section of the Groups API can be any of the following: "),a("code",[t._v("id")]),t._v(", "),a("code",[t._v("status")]),t._v(", "),a("code",[t._v("name")]),t._v(", "),a("code",[t._v("description")]),t._v(", "),a("code",[t._v("objectClass")]),t._v(", and the "),a("code",[t._v("profile")]),t._v(" object that contains the "),a("code",[t._v("groupType")]),t._v(", "),a("code",[t._v("samAccountName")]),t._v(", "),a("code",[t._v("objectSid")]),t._v(", "),a("code",[t._v("groupScope")]),t._v(", "),a("code",[t._v("windowsDomainQualifiedName")]),t._v(", "),a("code",[t._v("dn")]),t._v(", and "),a("code",[t._v("externalID")]),t._v(" attributes for Groups that come from apps such as Active Directory.")],1),t._v(" "),a("p",[t._v("The whitelist parameter must evaluate to a list of group ids that is returned from the "),a("router-link",{attrs:{to:"/docs/reference/api/groups/"}},[t._v("Groups API")]),t._v(". If the user isn't a member of a group in the whitelist, the group is ignored.")],1),t._v(" "),a("p",[a("strong",[t._v("Parameter Examples")])]),t._v(" "),a("ul",[a("li",[t._v("whitelist\n"),a("ul",[a("li",[t._v("Array: "),a("code",{staticClass:"OKTA-263808"},[t._v('{"00gn335BVurvavwEEL0g3", "00gnfg5BVurvavAAEL0g3"}')])]),t._v(" "),a("li",[t._v("Array variable: "),a("code",[t._v("app.profile.groups.whitelist")])])])]),t._v(" "),a("li",[t._v("group_expression\n"),a("ul",[a("li",[t._v("Attribute name: "),a("code",[t._v('"group.id"')])]),t._v(" "),a("li",[t._v("Okta EL string that contains an "),a("code",[t._v("if")]),t._v(" condition: "),a("code",[t._v("\"(group.objectClass[0] == 'okta:windows_security_principal') ? 'AD: ' + group.profile.windowsDomainQualifiedName : 'Okta: ' + group.name\"")]),t._v(" If "),a("code",[t._v("okta:windows_security_principal")]),t._v(" is true for a group, the function returns the "),a("code",[t._v("windowsDomainQualifiedName")]),t._v(" prefixed with "),a("code",[t._v("AD:")]),t._v(". Otherwise, the function returns the group name prefixed with "),a("code",[t._v("Okta:")]),t._v(".")])])]),t._v(" "),a("li",[t._v("limit\n"),a("ul",[a("li",[t._v("Integer between 1 and 100, inclusive. For example: "),a("code",[t._v("50")])]),t._v(" "),a("li",[t._v("Okta EL expression containing a condition that evaluates to an integer: "),a("code",[t._v("app.profile.maxLimit < 100 ? app.profile.maxLimit : 100")]),t._v(". If the maximum group limit in the profile is less than 100, return that number of Groups. Otherwise, return a maximum of 100 Groups. If there are more Groups returned than the specified limit, an error is returned.")])])])]),t._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);s.default=r.exports}}]);