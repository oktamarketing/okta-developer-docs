(window.webpackJsonp=window.webpackJsonp||[]).push([[785],{531:function(t,s,e){"use strict";e.r(s);var a=e(8),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("To use the Group Functions to create an ID token or an access token using a dynamic group whitelist, create a Groups claim and a Groups scope in the Custom Authorization Server. For this example, we are adding a claim for use with an access token.")]),t._v(" "),e("ol",[e("li",[t._v("In the Admin Console, from the "),e("strong",[t._v("Security")]),t._v(" menu, select "),e("strong",[t._v("API")]),t._v(", and then select the authorization server that you want to configure.")]),t._v(" "),e("li",[t._v("Navigate to the "),e("strong",[t._v("Claims")]),t._v(" tab and click "),e("strong",[t._v("Add Claim")]),t._v(".")]),t._v(" "),e("li",[t._v("Enter a name for the claim. For this example, name it "),e("strong",[t._v("dynamic_group")]),t._v(".")]),t._v(" "),e("li",[t._v("In the "),e("strong",[t._v("Include in token type")]),t._v(" section, leave "),e("strong",[t._v("Access Token")]),t._v(" selected.")]),t._v(" "),e("li",[t._v("Leave "),e("strong",[t._v("Expression")]),t._v(" as the "),e("strong",[t._v("Value type")]),t._v(".")]),t._v(" "),e("li",[t._v("Enter the following expression as the "),e("strong",[t._v("Value")]),t._v(": "),e("code",[t._v('Groups.startsWith("OKTA", "IT", 10)')])]),t._v(" "),e("li",[t._v("Click "),e("strong",[t._v("Create")]),t._v(".")]),t._v(" "),e("li",[t._v("Select the "),e("strong",[t._v("Scopes")]),t._v(" tab and click "),e("strong",[t._v("Add Scope")]),t._v(".")]),t._v(" "),e("li",[t._v("Add "),e("strong",[t._v("groups")]),t._v(" as the scope "),e("strong",[t._v("Name")]),t._v(" and "),e("strong",[t._v("DisplayName")]),t._v(", and then select the "),e("strong",[t._v("Metadata")]),t._v(" check box.")]),t._v(" "),e("li",[t._v("Click "),e("strong",[t._v("Create")]),t._v(".")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" The syntax for these three Group Functions is different from "),e("code",[t._v("getFilteredGroups")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"request-an-access-token-that-contains-the-groups-claim"}},[t._v("Request an access token that contains the Groups claim "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#request-an-access-token-that-contains-the-groups-claim","aria-hidden":"true"}},[e("i",{staticClass:"fa fa-link"})])]),t._v(" "),e("p",[t._v("To test the full authentication flow that returns an access token, build your request URL. For the specific steps on building the request URL, receiving the response, and decoding the JWT, see "),e("GuideLink",{attrs:{link:"../request-token-claim"}},[t._v("Request a token that contains the claim")]),t._v(".")],1),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" The scopes that you need to include as query parameters are "),e("code",[t._v("openid")]),t._v(" and "),e("code",[t._v("groups")]),t._v(".")])]),t._v(" "),e("p",[t._v("The resulting URL looks something like this:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v("/oauth2/"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${authServerId}")]),t._v("/v1/authorize?client_id=examplefa39J4jXdcCwWA\n&response_type=token\n&scope=openid%20groups\n&redirect_uri=https%3A%2F%2FyourRedirectUriHere.com\n&state=myState\n&nonce="),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${myNonceValue}")]),t._v('"')]),t._v("\n")])])]),e("p",[t._v("The decoded JWT looks something like this:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ver"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jti"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AT.lsZ5XmKiK4KxpKs2IDUBKMRgfMhiB2i2hTBZEM7epAk"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iss"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}"')]),t._v("/oauth"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/ausocqn"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("bk"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v("KaKbZ"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("h"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v('"'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aud"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://${yourOktaDomain}"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iat"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1574270245")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1574273845")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0oaoiuhhch8VRtBnC0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00uixa271s6x7qt8I0h7"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scp"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"groups"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openid"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"joe.user@okta.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dynamic_group"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IT"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("NextSectionLink")],1)}),[],!1,null,null,null);s.default=n.exports}}]);