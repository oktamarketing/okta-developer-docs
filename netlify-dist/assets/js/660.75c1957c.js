(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{405:function(e,t,i){"use strict";i.r(t);var o=i(8),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",[e._v("External Identity Providers")]),e._v(" "),i("p",[e._v("As a developer building a custom application, you want to give your users the freedom to choose which Identity Provider that they use to sign in to your application. But first you should understand how various Identity Providers connect to Okta.")]),e._v(" "),i("p",[e._v("What is an Identity Provider? It is a service that creates and maintains identity information and then provides authentication services to your applications. Identity Providers can significantly reduce sign-in and registration friction, which allows your users to easily access applications without needing to create new passwords or remember usernames.")]),e._v(" "),i("h2",{attrs:{id:"the-big-picture"}},[e._v("The big picture "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#the-big-picture","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("Okta manages connections to other Identity Providers for your application and sits between your application and the Identity Provider that authenticates your users.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("When you use Okta as the "),i("a",{attrs:{href:"https://developer.okta.com/product/user-management/",target:"_blank",rel:"noopener noreferrer"}},[e._v("user store"),i("OutboundLink")],1),e._v(" for your applications, users can sign in with their email and password by default. See our guides for how to sign in users to your "),i("router-link",{attrs:{to:"/docs/guides/sign-into-web-app/"}},[e._v("web")]),e._v(", "),i("router-link",{attrs:{to:"/docs/guides/sign-into-mobile-app/"}},[e._v("mobile")]),e._v(", and "),i("router-link",{attrs:{to:"/docs/guides/sign-into-spa/"}},[e._v("single-page")]),e._v(" apps.")],1)]),e._v(" "),i("li",[i("p",[e._v("You can add connections to Identity Providers like Twitter or Facebook. This is called social login or social authentication. It allows your users to sign in to your app using credentials from their existing Identity Providers. After users authenticate, you sync their existing Identity Provider credentials into your Okta Universal Directory while continuing to use that Identity Provider for user authentication. This eliminates the need to store an additional username and password for that user.")])]),e._v(" "),i("li",[i("p",[e._v("You can add connections to Identity Providers that you build in-house that support OpenID Connect or SAML protocols, also referred to as inbound federation or inbound SAML. The SAML flow is initiated with the service provider (in this case, Okta) that redirects the user to the Identity Provider for authentication. After authentication, a user is created inside Okta, and the user is redirected back to your application along with an ID token. This allows you to use Okta to proxy between SAML-only Identity Providers and OpenID Connect-only applications that normally are incompatible.")])])]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note:")]),e._v(" Social and OpenID Connect Identity Providers store access tokens that allow subsequent calls to Identity Providers after the user is authorized. For example, the token may contain the permission to add events to a user's Google calendar. After the user is authorized, the token can be used on additional calls to add events to a user's Google calendar on the user's behalf.")])]),e._v(" "),i("ul",[i("li",[e._v("You can also configure federation between Okta orgs using OpenID Connect or SAML.")])]),e._v(" "),i("p",[e._v("Adding any of these Identity Providers allows users to sign in to your application using their credentials from a specific Identity Provider.")]),e._v(" "),i("h2",{attrs:{id:"benefits-of-using-okta-to-manage-identity-providers"}},[e._v("Benefits of using Okta to manage Identity Providers "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#benefits-of-using-okta-to-manage-identity-providers","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("You could connect your application directly to an Identity Provider (for example, using an SDK to add a button for "),i("strong",[e._v("Sign in with Google")]),e._v("). However, using Okta as the user store for your application and letting Okta manage the Identity Provider connections has some benefits:")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("No custom code:")]),e._v(" Your application only needs to talk to Okta, and Okta does the rest.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("One protocol:")]),e._v(" Your application uses OpenID Connect to talk to Okta. Okta handles whatever protocols the other Identity Providers use, and this is transparent to your application.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Single user store:")]),e._v(" All users are stored in Okta. You can capture the profile attributes from an Identity Provider user and store those attributes in Okta's Universal Directory.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Profile sync:")]),e._v("  If a user updates their profile at the Identity Provider, those changes can be reflected inside Okta the next time that they use the provider to sign in.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Account linking:")]),e._v(" Users can use multiple Identity Providers to sign in, and Okta links those profiles to a single Okta user.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Group sync:")]),e._v(" Okta supports group sync between Okta and enterprise SAML Identity Providers. This allows you to specify the groups that users should be added to.")])])]),e._v(" "),i("h2",{attrs:{id:"how-okta-connects-to-external-identity-providers"}},[e._v("How Okta connects to external Identity Providers "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#how-okta-connects-to-external-identity-providers","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("Okta sits between your application and the external provider. Your application only needs to talk to Okta, and Okta does the rest.")]),e._v(" "),i("h3",{attrs:{id:"sign-in-process"}},[e._v("Sign-in process "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#sign-in-process","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("The sign-in process starts at the "),i("code",[e._v("/authorize")]),e._v(" endpoint, and then goes out to the provider and back:")]),e._v(" "),i("ol",[i("li",[e._v("In your application, the user clicks a button similar to: "),i("strong",[e._v("Sign in with (Identity Provider)")]),e._v(".")]),e._v(" "),i("li",[e._v("Your application redirects the browser to Okta.")]),e._v(" "),i("li",[e._v("Okta redirects the browser to the Identity Provider.")]),e._v(" "),i("li",[e._v("The user is prompted to sign in at the Identity Provider (if they aren't already) and to accept the permissions required by your app.")]),e._v(" "),i("li",[e._v("The Identity Provider redirects the browser back to Okta.")]),e._v(" "),i("li",[e._v("Okta processes the sign-in request and adds the user to your Okta organization's Universal Directory.")]),e._v(" "),i("li",[e._v("Okta redirects the browser back to your application, just like any other sign-in request.")])]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/social_login_flow.png",alt:"Social Login Flow",title:"Social Login Flow"}})]),e._v(" "),i("h2",{attrs:{id:"account-linking-and-just-in-time-provisioning"}},[e._v("Account Linking and Just-in-Time Provisioning "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#account-linking-and-just-in-time-provisioning","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("When you allow your users to sign in to your app using their choice of Identity Providers, you can use "),i("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_match-user",target:"_blank",rel:"noopener noreferrer"}},[e._v("Account Linking"),i("OutboundLink")],1),e._v(" to help create a unified view of your users within your org. Additionally, you can use Just-In-Time (JIT) provisioning to create a seamless experience for users that sign-in to your application for the first time using their credentials from another Identity Provider.")]),e._v(" "),i("p",[e._v("Users can use multiple Identity Providers to sign in, and Okta can link all of those profiles to a single Okta user. This is called Account Linking. If, for example, a user signs in to your app using a different Identity Provider than they used for registration, Account Linking can establish that the user owns both identities, allowing the user to sign in from either account.")]),e._v(" "),i("p",[e._v("If a user signs in to your application for the first time using another Identity Provider, you can implement "),i("a",{attrs:{href:"https://help.okta.com/en/prod/okta_help_CSH.htm#ext_Identity_Providers",target:"_blank",rel:"noopener noreferrer"}},[e._v("JIT provisioning"),i("OutboundLink")],1),e._v(" to automatically create an Okta account for them. JIT account creation and activation only works for end users who aren't already Okta users.")]),e._v(" "),i("p",[e._v("Additionally, you can apply granular control over Account Linking and JIT by defining a policy and then rules for the policy. You can base a policy on a variety of factors, such as location, group definitions, and authentication type. A specific policy rule can then be created for groups that have been assigned to your application. You can create multiple policies with more or less restrictive rules and apply them to different groups.")]),e._v(" "),i("p",[e._v("You can also set up group sync to specify the groups that users should be added to and enable profile mastering so that a user's profile gets updated each time that the user signs in. This allows you to always have the most recent data about your users.")]),e._v(" "),i("h2",{attrs:{id:"idp-discovery"}},[e._v("IdP Discovery "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#idp-discovery","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("If you have more than one Identity Provider configured in your org (which can mean just one external Identity Provider, in addition to Okta itself also serving as an Identity Provider), you can define logic to determine which Identity Provider individual end users are routed to when they authenticate. This functionality is called IdP Discovery, or IdP Routing Rules, and is configured by means of the "),i("router-link",{attrs:{to:"/docs/reference/api/policy/#idp-discovery-policy"}},[e._v("IdP Discovery Policy")]),e._v(".")],1),e._v(" "),i("p",[e._v("The Okta Sign-In Widget (version 2.5.0 or above) interacts with the IdP Discovery policy to redirect end users as needed to the IdP determined by the policy.")]),e._v(" "),i("p",[e._v("If you don't use the Okta Sign-In Widget, instead interacting directly with the "),i("router-link",{attrs:{to:"/docs/reference/api/authn/"}},[e._v("Okta Authentication API")]),e._v(" to implement sign-in yourself, you can integrate IdP Discovery into your flow by including a call to Okta's "),i("router-link",{attrs:{to:"/docs/reference/webfinger/"}},[e._v("WebFinger")]),e._v(" endpoint. That endpoint returns the name of the IdP that should be used for a given end user, as determined by the org's defined IdP Discovery Policy.")],1),e._v(" "),i("h2",{attrs:{id:"see-also"}},[e._v("See also "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#see-also","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("See the following guides for information on how to set up various IdPs:")]),e._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/docs/guides/add-an-external-idp/facebook/before-you-begin/"}},[e._v("Facebook")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/guides/add-an-external-idp/google/before-you-begin/"}},[e._v("Google")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/guides/add-an-external-idp/linkedin/before-you-begin/"}},[e._v("LinkedIn")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/guides/add-an-external-idp/microsoft/before-you-begin/"}},[e._v("Microsoft")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/guides/add-an-external-idp/openidconnect/before-you-begin/"}},[e._v("Generic OpenID Connect Identity Provider")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/docs/guides/add-an-external-idp/saml2/before-you-begin/"}},[e._v("SAML Identity Provider")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);