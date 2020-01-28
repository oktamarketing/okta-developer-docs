(window.webpackJsonp=window.webpackJsonp||[]).push([[620],{365:function(t,a,s){"use strict";s.r(a);var e=s(8),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[s("i",{staticClass:"icon-48 docsPage code-dotnet"}),t._v(" Overview")]),t._v(" "),s("p",[t._v("When you use Okta to "),s("router-link",{attrs:{to:"/docs/concepts/auth-overview/#recommended-flow-by-application-type"}},[t._v("get OAuth 2.0 or OpenID Connect tokens for a user")]),t._v(", the response contains a signed JWT ("),s("code",[t._v("id_token")]),t._v(" and/or "),s("code",[t._v("access_token")]),t._v(").")],1),t._v(" "),s("p",[t._v("If you are writing low-level code that retrieves or uses these tokens, it's important to validate the tokens before you trust them. This guide will show you how to validate tokens manually.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note:")]),t._v(" This guide is specific to .NET and C#.  If you need general information, read "),s("router-link",{attrs:{to:"/docs/guides/validate-access-tokens/"}},[t._v("Validate Access Tokens")]),t._v(" and "),s("router-link",{attrs:{to:"/docs/guides/validate-id-tokens/"}},[t._v("Validate ID Tokens")]),t._v(" instead.")],1)]),t._v(" "),s("h2",{attrs:{id:"who-should-use-this-guide"}},[t._v("Who should use this guide "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#who-should-use-this-guide","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("p",[t._v("You "),s("em",[t._v("don't")]),t._v(" need to validate tokens manually if:")]),t._v(" "),s("ul",[s("li",[t._v("You are using "),s("a",{attrs:{href:"/quickstart/#/widget/dotnet/aspnet4","data-proofer-ignore":""}},[t._v("ASP.NET")]),t._v(" or "),s("a",{attrs:{href:"/quickstart/#/widget/dotnet/aspnetcore","data-proofer-ignore":""}},[t._v("ASP.NET Core")]),t._v(" - follow our quickstarts instead!")]),t._v(" "),s("li",[t._v("You send the tokens to Okta to be validated (this is called "),s("router-link",{attrs:{to:"/docs/reference/api/oidc/#introspect"}},[t._v("token introspection")]),t._v(")")],1)]),t._v(" "),s("p",[t._v("If you need to validate a token manually, and don't want to make a network call to Okta, this guide will help you validate tokens locally.")]),t._v(" "),s("h3",{attrs:{id:"what-you-ll-need"}},[t._v("What you'll need "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#what-you-ll-need","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("ul",[s("li",[t._v("Your authorization server URL (see "),s("router-link",{attrs:{to:"/docs/reference/api/oidc/#composing-your-base-url"}},[t._v("Composing Your Base URL")]),t._v(")")],1),t._v(" "),s("li",[t._v("A token (JWT string)")]),t._v(" "),s("li",[t._v("Libraries for retrieving the signing keys and validating the token")])]),t._v(" "),s("p",[t._v("This guide will use the official Microsoft OpenID Connect and JWT libraries, but you can adapt it to other key and token parsing libraries.")]),t._v(" "),s("h3",{attrs:{id:"get-the-signing-keys"}},[t._v("Get the signing keys "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#get-the-signing-keys","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("p",[t._v("Okta signs JWTs using "),s("a",{attrs:{href:"https://stackoverflow.com/a/39239395/3191599",target:"_blank",rel:"noopener noreferrer"}},[t._v("asymmetric encryption (RS256)"),s("OutboundLink")],1),t._v(", and publishes the public signing keys in a JWKS (JSON Web Key Set) as part of the OAuth 2.0 and OpenID Connect discovery documents. The signing keys are rotated on a regular basis. The first step to verify a signed JWT is to retrieve the current signing keys.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("OpenIdConnectConfigurationRetriever")]),t._v(" class in the "),s("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.IdentityModel.Protocols.OpenIdConnect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft.IdentityModel.Protocols.OpenIdConnect"),s("OutboundLink")],1),t._v(" package will download and parse the discovery document to get the key set. You can use it in conjunction with the "),s("code",[t._v("ConfigurationManager")]),t._v(" class, which will handle caching the response and refreshing it regularly:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Replace with your authorization server URL:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" issuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}/oauth2/default"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" configurationManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigurationManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenIdConnectConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    issuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.well-known/oauth-authorization-server"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenIdConnectConfigurationRetriever")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpDocumentRetriever")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Once you've instantiated the "),s("code",[t._v("configurationManager")]),t._v(", keep it around as a singleton. You only need to set it up once.")]),t._v(" "),s("h3",{attrs:{id:"validate-a-token"}},[t._v("Validate a token "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#validate-a-token","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("JwtSecurityTokenHandler")]),t._v(" class in the "),s("a",{attrs:{href:"https://www.nuget.org/packages/System.IdentityModel.Tokens.Jwt",target:"_blank",rel:"noopener noreferrer"}},[t._v("System.IdentityModel.Tokens.Jwt"),s("OutboundLink")],1),t._v(" package will handle the low-level details of validating a JWT.")]),t._v(" "),s("p",[t._v("You can write a method that takes the token, the issuer, and the "),s("code",[t._v("configurationManager")]),t._v(" you created. The method is "),s("code",[t._v("async")]),t._v(" because the "),s("code",[t._v("configurationManager")]),t._v(" may need to make an HTTP call to get the signing keys (if they aren't already cached):")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" Task"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JwtSecurityToken"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    IConfigurationManager"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OpenIdConnectConfiguration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" configurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" ct "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CancellationToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArgumentNullException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nameof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArgumentNullException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nameof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" discoveryDocument "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" configurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfigurationAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" signingKeys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" discoveryDocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SigningKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" validationParameters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TokenValidationParameters")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        RequireExpirationTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        RequireSignedTokens "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ValidateIssuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ValidIssuer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ValidateIssuerSigningKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        IssuerSigningKeys "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" signingKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ValidateLifetime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allow for some drift in server time")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (a lower value is better; we recommend two minutes or less)")]),t._v("\n        ClockSkew "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TimeSpan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FromMinutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See additional validation for aud below")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" principal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtSecurityTokenHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validationParameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rawValidatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JwtSecurityToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("rawValidatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityTokenValidationException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logging, etc.")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("To use the method, pass it a token, and the issuer and "),s("code",[t._v("configurationManager")]),t._v(" you declared earlier:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" accessToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJh..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" validatedToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validatedToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Additional validation...")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Token is valid!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This method will return an instance of "),s("code",[t._v("JwtSecurityToken")]),t._v(" if the token is valid, or "),s("code",[t._v("null")]),t._v(" if it is invalid. Returning "),s("code",[t._v("JwtSecurityToken")]),t._v(" makes it possible to retrieve claims from the token later.")]),t._v(" "),s("p",[t._v("Depending on your application, you could change this method to return a boolean, log specific exceptions like "),s("code",[t._v("SecurityTokenExpiredException")]),t._v(" with a message, or handle validation failures in some other way.")]),t._v(" "),s("h3",{attrs:{id:"additional-validation-for-access-tokens"}},[t._v("Additional validation for access tokens "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#additional-validation-for-access-tokens","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("p",[t._v("If you are validating access tokens, you should verify that the "),s("code",[t._v("aud")]),t._v(" (audience) claim equals the audience that is configured for your Authorization Server in the Okta Developer Console.")]),t._v(" "),s("p",[t._v("For example, if your Authorization Server audience is set to "),s("code",[t._v("MyAwesomeApi")]),t._v(", add this to the validation parameters:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("ValidateAudience "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nValidAudience "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyAwesomeApi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("You also must verify that the "),s("code",[t._v("alg")]),t._v(" claim matches the expected algorithm which was used to sign the token. You'll have to perform this check after the "),s("code",[t._v("ValidateToken")]),t._v(" method returns a validated token:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Validate alg")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" validatedToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accessToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" expectedAlg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SecurityAlgorithms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RsaSha256"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Okta uses RS256")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("Alg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" validatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("Alg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" expectedAlg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityTokenValidationException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The alg must be RS256."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"additional-validation-for-id-tokens"}},[t._v("Additional validation for ID tokens "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#additional-validation-for-id-tokens","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("p",[t._v("When validating an ID token, you should verify that the "),s("code",[t._v("aud")]),t._v(" (Audience) claim equals the Client ID of the current application.")]),t._v(" "),s("p",[t._v("Add this to the validation parameters:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("ValidateAudience "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nValidAudience "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xyz123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This Application's Client ID")]),t._v("\n")])])]),s("p",[t._v("You also must verify that the "),s("code",[t._v("alg")]),t._v(" claim matches the expected algorithm which was used to sign the token. You'll have to perform this check after the "),s("code",[t._v("ValidateToken")]),t._v(" method returns a validated token:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Validate alg")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" validatedToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" expectedAlg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SecurityAlgorithms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RsaSha256"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Okta uses RS256")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("Alg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" validatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("Alg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" expectedAlg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityTokenValidationException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The alg must be RS256."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If you specified a nonce during the initial code exchange when your application retrieved the ID token, you should verify that the nonce matches:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" validatedToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValidateToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" issuer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Validate nonce")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" expectedNonce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foobar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Retrieve this from a saved cookie or other mechanism")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nonceMatches "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" validatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TryGetValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nonce"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rawNonce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" rawNonce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" expectedNonce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("nonceMatches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityTokenValidationException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The nonce was invalid."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"decode-token-claims"}},[t._v("Decode token claims "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#decode-token-claims","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("p",[t._v("The sample "),s("code",[t._v("ValidateToken")]),t._v(" method above both validates a token and decodes its claims. You can use the returned "),s("code",[t._v("JwtSecurityToken")]),t._v(" object to inspect the claims in the token.")]),t._v(" "),s("p",[t._v("For example, you can get the "),s("code",[t._v("sub")]),t._v(" (Subject) claim with the "),s("code",[t._v("Subject")]),t._v(" property:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Token subject: {validatedToken.Subject}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You can access more claims with the "),s("code",[t._v("Payload")]),t._v(" property, or loop over the entire "),s("code",[t._v("Claims")]),t._v(" collection:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"All claims:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" claim "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" validatedToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Claims"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{claim.Type}\\t{claim.Value}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"conclusion"}},[t._v("Conclusion "),s("a",{staticClass:"header-anchor header-link",attrs:{href:"#conclusion","aria-hidden":"true"}},[s("i",{staticClass:"fa fa-link"})])]),t._v(" "),s("p",[t._v("This guide provides the basic steps required to locally verify an access or ID token signed by Okta. It uses packages from Microsoft for key parsing and token validation, but the general principles should apply to any JWT validation library.")]),t._v(" "),s("p",[t._v("Most applications don't need to follow this guide. If you are using our "),s("a",{attrs:{href:"/quickstart/#/widget/dotnet/aspnet4","data-proofer-ignore":""}},[t._v("ASP.NET quickstart")]),t._v(" or "),s("a",{attrs:{href:"/quickstart/#/widget/dotnet/aspnetcore","data-proofer-ignore":""}},[t._v("ASP.NET Core quickstart")]),t._v(" to connect your application to Okta, all of these validation steps are done automatically for you.")])])}),[],!1,null,null,null);a.default=n.exports}}]);