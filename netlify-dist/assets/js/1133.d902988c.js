(window.webpackJsonp=window.webpackJsonp||[]).push([[1133],{824:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[a("p",[s._v("Use the "),a("router-link",{attrs:{to:"/docs/reference/api/apps/#publish-csr-for-application"}},[s._v("Apps API")]),s._v(" to publish the certificate for Outbound SAML apps.")],1)]),s._v(" "),a("li",[a("p",[s._v("Use the "),a("router-link",{attrs:{to:"/docs/reference/api/idps/#publish-signing-csr-for-idp"}},[s._v("IdPs API")]),s._v(" to publish the certificate for Inbound SAML apps.")],1)])]),s._v(" "),a("p",[s._v("Base64 encoding and both PEM and CER certificate formats are supported.")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("For CER format, change the Content-Type statement to "),a("code",[s._v("Content-Type: application/x-x509-ca-cert")]),s._v(".")])]),s._v(" "),a("li",[a("p",[s._v("For Base64-encoded format, add the statement "),a("code",[s._v("Content-Transfer-Encoding: base64")]),s._v(" after the Content-Type statement.")])])]),s._v(" "),a("p",[s._v("Collect the returned Key ID ("),a("code",[s._v("credentials.signing.kid")]),s._v(") to use in the next step.")]),s._v(" "),a("p",[s._v("The following request publishes a CSR with a certificate in PEM format.")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("MIIFgDCCA"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("igAwIBAgICEAEwDQYJKoZIhvcNAQELBQAwXjELMAkGA"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("UEBhMCVVMx\nCzAJBgNVBAgMAkNBMRYwFAYDVQQHDA"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("TYW"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("gRnJhbmNpc"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("NvMQ"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("wCwYDVQQKDARP\n...\nZZc+BUqujfMzY+coqgn"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("gCRUSIKy/Jrj"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("VJkbrnq"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("zjbb"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("FVFqBE"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("pSgf"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("Pbhald\n++kto/WJsmtwBQmZmwP"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("87")]),s._v("YAeWoDMkCSSN+mtX"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v("kJYp"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("pLTu"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("wwHZj"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("V"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("vt"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("Bv"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("k\nWIUayqnunOUqjF"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("ZcOr"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("UegJHPFEJ"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("VaDpMQR"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("nBTVce+xbi"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("NgV"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("m+lLQc"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("xc\nFjGQoNZ/hJ+xBkcXaoxvpOyMV"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("Z"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("VHOV"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("UC"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("CLcU"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("Bwc"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("p+GB"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("R+RF"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("YATOwwX"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("D\nOx"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("WhmQExOF"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("xtxFb"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v("mPe"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("g+voSLNZjsQYUHDs"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("T+iVmUbp+SQE"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("HofPB"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("JTO"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\nZRUaagvFUo"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("EO"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("xnjpLDIa"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("+M=\n\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v(" Created\nLocation"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//${yourOktaDomain}/api/v1/apps/0oa1ysid1U3iyFqLu0g4/credentials/keys/ElsCzR8nbPamANBFu7QPRvtLD6Q3O1KQNJ92zkfFJNw")]),s._v("\nContent-Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json;charset=UTF"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("-8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"created"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-03-15T00:03:43.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2017-03-15T00:03:43.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"expiresAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-03-25T11:58:43.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"x5c"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIIFgDCCA2igAwIBAgICEAEwDQYJKoZIhvcNAQELBQAwXjELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAkNBMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQ0wCwYDVQQKDARPa3RhMQwwCgYDVQQLDANFbmcxDTALBgNVBAMMBFJvb3QwHhcNMTcwMzE1MTE...RF6YATOwwX1DOx5WhmQExOF7xtxFb93mPe0g+voSLNZjsQYUHDs30T+iVmUbp+SQE7HofPB4JTO7ZRUaagvFUo1EO9m1xnjpLDIa7+M="')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"e"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AQAB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"n"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vQ3U2VsfmF9yYs-JxJlgjPm12d4LUZZZf7WEopc1CAdtqxiA7hPQGzdvKBKR-xGLYUeMY3vQ1nObiIFGci1kvtPbiwWoafPS8zNupMIvEZ5b9zANUtuuvaBnQN0VOABt9crKvhMQIGj6k1Uz0bPooiwNt0Fz9jr_JsuD1-OSrot6Nro-AH8otGvlineMOR380CbKuJVQvOqRlRne-M6VEY_aX96RZfBBOFEKstJfemV-uimd8QyIuv6iazoVcJ9qVMKbfqJ0Na1W1_zAC0SgvScgzF6058GatFdfHYyl-EXIp0-MCfpjcH-gR5fOPo4052gOvWpBSiW6HTOCG-cjJw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"kid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your-key-id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"kty"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RSA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"use"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sig"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"x5t#S256"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6ZA0gDvExTUMszE4Dvs72pEj396Q7vOHJkQQrdSddVE"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("NextSectionLink")],1)}),[],!1,null,null,null);t.default=e.exports}}]);