(window.webpackJsonp=window.webpackJsonp||[]).push([[1169],{913:function(e,t,a){"use strict";a.r(t);var i=a(8),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("If you are building a modern app or API, you likely want to know if your end-user is authenticated. This is important to give context or to protect APIs from unauthenticated users. You can use Okta to authenticate your end-users and issue them signed access and ID tokens, which your application can then use. It is important that your application only uses the access token to grant access, and not the ID token. For more information about this, see the "),a("a",{attrs:{href:"#access-tokens-vs-id-tokens"}},[e._v("Access Tokens VS ID Tokens")]),e._v(" section below.")]),e._v(" "),a("p",[e._v("Once the signed tokens are issued to the end-users they can be passed to your application, which must validate them. There are two ways to verify a token: locally, or remotely with Okta. The token has been signed with a JSON Web Key (JWK) using the RS256 algorithm. To validate the signature, Okta provides your application with a public key that can be used.")]),e._v(" "),a("p",[e._v("We will now cover the terms used in this document, and an explanation of why you should use access tokens instead of ID tokens for this use case.")]),e._v(" "),a("ul",[a("li",[e._v("If you'd like to jump straight to the local validation steps: "),a("a",{attrs:{href:"#what-to-check-when-validating-an-access-token"}},[e._v("What to Check When Validating an Access Token")])]),e._v(" "),a("li",[e._v("If you'd like to see how to validate a token directly with Okta: "),a("a",{attrs:{href:"#validating-a-token-remotely-with-okta"}},[e._v("Validating A Token Remotely With Okta")])]),e._v(" "),a("li",[e._v("If you want to see specifically how to accomplish this in your language of choice: "),a("a",{attrs:{href:"#okta-libraries-to-help-you-verify-access-tokens"}},[e._v("Okta Libraries to Help You Verify Access Tokens")])])]),e._v(" "),a("p",[e._v("A high-level overview of OAuth 2.0 can be found "),a("router-link",{attrs:{to:"/docs/concepts/auth-overview/#oauth-2-0"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("The access tokens are in "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Web Token (JWT)"),a("OutboundLink")],1),e._v(" format. They are signed using asynmmetrical "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7517",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Web Keys (JWK)"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("More information about Okta's access tokens can be found in the "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#access-token"}},[e._v("OIDC & OAuth 2.0 Reference")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"access-tokens-vs-id-tokens"}},[e._v("Access Tokens vs ID Tokens "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#access-tokens-vs-id-tokens","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("As mentioned above, it is important that the resource server (your server-side application) accept only the access token from a client. This is because access tokens are intended for authorizing access to a resource.")]),e._v(" "),a("p",[e._v("ID Tokens, on the other hand, are intended for authentication. They provide information about the resource owner, to allow you verify that they are who they say they are. Authentication is the concern of the clients. Because of this, when a client makes an authentication request, the ID Token that is returned contains the "),a("code",[e._v("client_id")]),e._v(" in the ID Token's "),a("code",[e._v("aud")]),e._v(" claim.")]),e._v(" "),a("h2",{attrs:{id:"what-to-check-when-validating-an-access-token"}},[e._v("What to Check When Validating an Access Token "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#what-to-check-when-validating-an-access-token","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The high-level overview of validating an access token looks like this:")]),e._v(" "),a("ul",[a("li",[e._v("Retrieve and parse your Okta JSON Web Keys (JWK), which should be checked periodically and cached by your application.")]),e._v(" "),a("li",[e._v("Decode the access token, which is in JSON Web Token format")]),e._v(" "),a("li",[e._v("Verify the signature used to sign the access token")]),e._v(" "),a("li",[e._v("Verify the claims found inside the access token")])]),e._v(" "),a("h3",{attrs:{id:"retrieve-the-json-web-keys"}},[e._v("Retrieve The JSON Web Keys "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#retrieve-the-json-web-keys","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The JSON Web Keys (JWK) need to be retrieved from your "),a("router-link",{attrs:{to:"/docs/guides/customize-authz-server/"}},[e._v("Okta Authorization Server")]),e._v(", though your application should have them cached. Specifically, your Authorization Server's Metadata endpoint contains the "),a("code",[e._v("jwks_uri")]),e._v(", which you can use to get the JWK.")],1),e._v(" "),a("blockquote",[a("p",[e._v("For more information about retrieving this metadata, see "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#well-knownoauth-authorization-server"}},[e._v("Retrieve Authorization Server Metadata")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"decode-the-access-token"}},[e._v("Decode the Access Token "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#decode-the-access-token","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("You will have to decode the access token, which is in JWT format. A list of libraries to help you do this can be found "),a("a",{attrs:{href:"#okta-libraries-to-help-you-verify-access-tokens"}},[e._v("below")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"verify-the-token-signature"}},[e._v("Verify the Token Signature "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#verify-the-token-signature","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("You verify the Access or ID token's signature by matching the key that was used to sign in with one of the keys that you retrieved from your Okta Authorization Server's JWK endpoint. Specifically, each public key is identified by a "),a("code",[e._v("kid")]),e._v(" attribute, which corresponds with the "),a("code",[e._v("kid")]),e._v(" claim in the Access or ID token header.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("kid")]),e._v(" claim doesn't match, it's possible that the signing keys have changed. Check the "),a("code",[e._v("jwks_uri")]),e._v(" value in the Authorization Server metadata and try retrieving the keys again from Okta.")]),e._v(" "),a("h3",{attrs:{id:"verify-the-claims"}},[e._v("Verify the Claims "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#verify-the-claims","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("You should verify the following:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("iss")]),e._v(" (issuer) claim matches the identifier of your Okta Authorization Server.")]),e._v(" "),a("li",[e._v("Verify that the "),a("code",[e._v("aud")]),e._v(" (audience) claim is the value configured in the Authorization Server.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("cid")]),e._v(" claim is your Okta application's Client ID.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("exp")]),e._v(" (expiry time) claim is the time at which this token will expire, expressed in Unix time. You should make sure that this has not already passed.")])]),e._v(" "),a("h2",{attrs:{id:"validating-a-token-remotely-with-okta"}},[e._v("Validating A Token Remotely With Okta "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#validating-a-token-remotely-with-okta","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Alternatively, you can also validate an access or refresh Token using the Token Introspection endpoint: "),a("router-link",{attrs:{to:"/docs/reference/api/oidc/#introspect"}},[e._v("Introspection Request")]),e._v(". This endpoint takes your token as a URL query parameter and returns back a simple JSON response with a boolean "),a("code",[e._v("active")]),e._v(" property.")],1),e._v(" "),a("p",[e._v("This incurs a network request which is slower to do verification, but can be used when you want to guarantee that the access token hasn't been revoked.")]),e._v(" "),a("h2",{attrs:{id:"okta-libraries-to-help-you-verify-access-tokens"}},[e._v("Okta Libraries to Help You Verify Access Tokens "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#okta-libraries-to-help-you-verify-access-tokens","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("The Okta JWT Verifier is available for the following languages:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/okta/okta-jwt-verifier-golang",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/okta/okta-jwt-verifier-java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/okta/okta-oidc-js/tree/master/packages/jwt-verifier",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/okta/okta-jwt-verifier-php",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Don't see the language you're working in? Get in touch: "),a("a",{attrs:{href:"mailto:developers@okta.com"}},[e._v("developers@okta.com")])])])}),[],!1,null,null,null);t.default=o.exports}}]);