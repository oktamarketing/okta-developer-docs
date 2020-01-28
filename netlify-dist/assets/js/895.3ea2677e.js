(window.webpackJsonp=window.webpackJsonp||[]).push([[895],{638:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("To revoke consent for a user, you can revoke one consent that is granted or all consents that are granted. Before you begin, you need the following:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("userId")]),t._v(" for the user that you want to revoke a grant for. Do a "),a("router-link",{attrs:{to:"/docs/reference/api/users/#list-users"}},[t._v("List Users")]),t._v(" to locate the user and the "),a("code",[t._v("userId")]),t._v(" that you need.")],1),t._v(" "),a("li",[a("code",[t._v("grantId")]),t._v(" for the grant that you want to revoke. Do a "),a("router-link",{attrs:{to:"/docs/reference/api/users/#list-grants"}},[t._v("List Grants")]),t._v(" with the "),a("code",[t._v("userId")]),t._v(" to locate the "),a("code",[t._v("grantID")]),t._v(" that you need.")],1)]),t._v(" "),a("h2",{attrs:{id:"revoke-one-grant"}},[t._v("Revoke one Grant "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#revoke-one-grant","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("To revoke one grant for a user, use the "),a("code",[t._v("grantId")]),t._v(" that you want to revoke for a user in a DELETE request:")]),t._v(" "),a("p",[a("strong",[t._v("Example request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v -X DELETE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: SSWS '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${api_token}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v('/api/v1/users/{userId}/grants/{grantId}"')]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" See "),a("router-link",{attrs:{to:"/docs/reference/api/users/#revoke-a-grant-for-a-user"}},[t._v("Revoke a Grant for a User")]),t._v(" for more information.")],1)]),t._v(" "),a("h2",{attrs:{id:"revoke-all-grants"}},[t._v("Revoke all Grants "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#revoke-all-grants","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),t._v(" "),a("p",[t._v("To revoke all grants for a user, just use the "),a("code",[t._v("userId")]),t._v(" for the user in a DELETE request:")]),t._v(" "),a("p",[a("strong",[t._v("Example request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -v -X DELETE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: SSWS '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${api_token}")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${yourOktaDomain}")]),t._v('/api/v1/users/{userId}/grants"')]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" See "),a("router-link",{attrs:{to:"/docs/reference/api/users/#revoke-all-grants-for-a-user"}},[t._v("Revoke all Grants for a User")]),t._v(" for more information.")],1)]),t._v(" "),a("NextSectionLink")],1)}),[],!1,null,null,null);e.default=r.exports}}]);