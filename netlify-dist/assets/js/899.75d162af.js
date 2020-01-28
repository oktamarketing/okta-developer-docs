(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{645:function(e,s,o){"use strict";o.r(s);var t=o(8),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("If for whatever reason you would like to disable an access or refresh token, simply send a request to your "),o("code",[e._v("/revoke")]),e._v(" endpoint:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("http --form POST https://${yourOktaDomain}/oauth2/default/v1/revoke \\\n  accept:application/json \\\n  authorization:'Basic ZmEz...' \\\n  cache-control:no-cache \\\n  content-type:application/x-www-form-urlencoded \\\n  token=eyJhbG... \\\n  token_type_hint=access_token\n")])])]),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" Revoking a token that is invalid, expired, or already revoked will still return a "),o("code",[e._v("200 OK")]),e._v(" so as to not leak information.")])]),e._v(" "),o("p",[e._v("For more information, see "),o("router-link",{attrs:{to:"/docs/reference/api/oidc/#revoke"}},[e._v("Revoke a Token")]),e._v(" in the Okta OIDC & OAuth 2.0 reference.")],1),e._v(" "),o("h2",{attrs:{id:"revoking-the-access-vs-the-refresh-token"}},[e._v("Revoking the Access vs the Refresh Token "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#revoking-the-access-vs-the-refresh-token","aria-hidden":"true"}},[o("i",{staticClass:"fa fa-link"})])]),e._v(" "),o("p",[e._v("The token revocation endpoint can revoke either access or refresh tokens. Revoking an access token does not revoke the associated refresh token, though revoking a refresh token does revoke the associated access token.")]),e._v(" "),o("h4",{attrs:{id:"revoking-only-the-access-token"}},[e._v("Revoking only the access token "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#revoking-only-the-access-token","aria-hidden":"true"}},[o("i",{staticClass:"fa fa-link"})])]),e._v(" "),o("p",[e._v("Revoking only the access token will effectively force the use of the refresh token to retrieve a new access token. This could be useful if, for example, you have changed a user's data and you want this information to be reflected in a new access token.")]),e._v(" "),o("h4",{attrs:{id:"revoking-only-the-refresh-token"}},[e._v("Revoking only the refresh token "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#revoking-only-the-refresh-token","aria-hidden":"true"}},[o("i",{staticClass:"fa fa-link"})])]),e._v(" "),o("p",[e._v("If you revoke only the refresh token then the access token will also be revoked. This allows you to, for example, force a user to reauthenticate.")]),e._v(" "),o("p",[e._v("For more information on configuring TTL and other parameters involving access and refresh tokens, you can read about configuing "),o("router-link",{attrs:{to:"/docs/guides/customize-authz-server/create-access-policies/"}},[e._v("Okta Access Policies")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"removing-a-user-session"}},[e._v("Removing a User Session "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#removing-a-user-session","aria-hidden":"true"}},[o("i",{staticClass:"fa fa-link"})])]),e._v(" "),o("p",[e._v("Separate from access and refresh tokens, there is also the Okta session cookie which provides access to your Okta organization and applications. For a more complete explanation of Okta User sessions, see "),o("router-link",{attrs:{to:"/docs/reference/api/sessions/"}},[e._v("the Sessions API documentation")]),e._v(". Okta sessions can be revoked in one of two ways: you can either close a specific session using the Sessions API, or revoke all sessions for a given user using the Users API.")],1),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" Removing all user sessions can optionally also remove all related access and refresh tokens as well.")])]),e._v(" "),o("p",[e._v("For more information on removing a specific session, see "),o("router-link",{attrs:{to:"/docs/reference/api/sessions/#close-session"}},[e._v("Close Session")]),e._v(" in the Sessions API reference. For more on removing all of a user's sessions, see "),o("router-link",{attrs:{to:"/docs/reference/api/users/#clear-user-sessions"}},[e._v("Clear User Sessions")]),e._v(" in the Users API reference.")],1)])}),[],!1,null,null,null);s.default=a.exports}}]);