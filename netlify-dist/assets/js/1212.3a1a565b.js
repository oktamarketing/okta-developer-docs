(window.webpackJsonp=window.webpackJsonp||[]).push([[1212],{955:function(e,t,i){"use strict";i.r(t);var o=i(8),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",[e._v("Social Identity Provider Settings")]),e._v(" "),i("p",[e._v("When you are setting up your social Identity Provider (IdP) in Okta, there are a number of settings that allow you to finely control the social login behavior. While the provider-specific instructions show one possible configuration, this section explains each of these in more detail so that you can choose the right configuration for your use case.")]),e._v(" "),i("h3",{attrs:{id:"authentication-settings"}},[e._v("Authentication Settings "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#authentication-settings","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[i("strong",[e._v("IdP username:")]),e._v(" This is the expression (written in the Okta Expression Language) that will be used to convert an IdP attribute to the Application User's "),i("code",[e._v("username")]),e._v(". This IdP username will be used for matching an Application User to an Okta User.")]),e._v(" "),i("p",[e._v("For example, the value "),i("code",[e._v("idpuser.email")]),e._v(" means that it takes the "),i("code",[e._v("email")]),e._v(" attribute passed by the social IdP and maps it to the Okta Application User's "),i("code",[e._v("username")]),e._v(" property.")]),e._v(" "),i("p",[e._v("You can enter an expression to reformat the value, if desired. For example, if the social username is "),i("code",[e._v("john.doe@mycompany.com")]),e._v(", you could specify the replacement of "),i("code",[e._v("mycompany")]),e._v(" with "),i("code",[e._v("endpointA.mycompany")]),e._v(" to make the transformed username "),i("code",[e._v("john.doe@endpointA.mycompany.com")]),e._v(". See here for more information about the "),i("router-link",{attrs:{to:"/docs/reference/okta-expression-language/"}},[e._v("Okta Expression Language")]),e._v(".")],1),e._v(" "),i("p",[i("strong",[e._v("Match against:")]),e._v(" The Okta user property against which the IdP username is compared.")]),e._v(" "),i("p",[e._v("More user profile attributes are available for matching as an "),i("ApiLifecycle",{attrs:{access:"ea"}}),e._v(" feature.")],1),e._v(" "),i("p",[i("strong",[e._v("Account Link Policy:")]),e._v(" Determines whether your Application User should be linked to an Okta user.")]),e._v(" "),i("ul",[i("li",[e._v('Automatic: Link user accounts automatically according to the "Auto-Link Restrictions" and "Match against" settings.')]),e._v(" "),i("li",[e._v("Disabled: Do not link existing User accounts. Unless User is already linked, login will fail.")])]),e._v(" "),i("p",[i("strong",[e._v("Auto-Link Restrictions:")]),e._v(" Allows you to restrict auto-linking to members of specified groups.")]),e._v(" "),i("p",[i("strong",[e._v("Provisioning Policy:")]),e._v(" Determines whether just-in-time provisioning of users should be automatic or disabled.")]),e._v(" "),i("h3",{attrs:{id:"jit-settings"}},[e._v("JIT Settings "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#jit-settings","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[i("strong",[e._v("Profile Master:")]),e._v(" If selected, the Social Identity Provider will be the source of truth for a user's profile attributes. This means that next time the user signs in using the Social Identity Provider, Okta will update the user profile attributes for this user. If a user is assigned multiple applications with profile mastering enabled, a prioritization in Directory -> Profile Masters will decide whether this provider will be mastering the user's attributes. For more information about this, see "),i("a",{attrs:{href:"https://help.okta.com/en/prod/Content/Topics/Directory/Attribute_Level_Mastering.htm?Highlight=Attribute%20Level%20Mastering",target:"_blank",rel:"noopener noreferrer"}},[e._v("Attribute Level Master"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("strong",[e._v("Group Assignments:")]),e._v(' Allows you to assign new users to one or more existing Groups. For example, new Facebook users could be added to a "Facebook" Group.')]),e._v(" "),i("h2",{attrs:{id:"error-codes"}},[e._v("Error Codes "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#error-codes","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("See the "),i("router-link",{attrs:{to:"/docs/reference/error-codes/#openid-connect-and-okta-social-authentication"}},[e._v("OpenID Connect and Okta Social Authentication")]),e._v(" section of the "),i("router-link",{attrs:{to:"/docs/reference/error-codes/"}},[e._v("Error Codes")]),e._v(" API documentation.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);