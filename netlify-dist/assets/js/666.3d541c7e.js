(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{412:function(e,t,i){"use strict";i.r(t);var a=i(8),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",[e._v("SAML")]),e._v(" "),i("p",[e._v("Traditionally, enterprise applications are deployed and run within the company network. To obtain information about users such as user profile and group information, many of these applications are built to integrate with corporate directories such as Microsoft Active Directory. More importantly, a user's credentials are typically stored and validated using the directory. For example, if you use SharePoint and Exchange that are running on premises, your login credentials are your Active Directory credentials.")]),e._v(" "),i("p",[e._v("However, with increased collaboration and the move towards the cloud, many applications have moved beyond the boundaries of a company's domain. Federated Authentication is the solution to this problem.")]),e._v(" "),i("h2",{attrs:{id:"authentication"}},[e._v("Authentication "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#authentication","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("Before diving into federated authentication, we need to understand what authentication really means. Authentication defines the way a user is identified and validated through some sort of credentials as part of a login flow. Most applications will present a login page to an end user, allowing him to specify a username and a password. In some cases, additional information may be required in order to locate the user - like a company ID or a client code. This information allows the application to narrow down the search of the username applicable to the provided info. This is often used to allow the same username to exist across multiple tenants belonging to different customers.")]),e._v(" "),i("p",[e._v("Most applications will have a user store (DB or LDAP) containing, among other things, user profile information and credentials. During login, the credentials are validated against this backend user store. The advantage of this approach is that it is simple, because everything is managed within the application, providing a single and consistent way to authenticate an end user. However, if a user needs to access multiple applications where each app requires a different set of credentials, it becomes a hassle for the end user. First, the user will need to remember different passwords - in addition to any other corporate password (eg. AD password) that may already exist. The user is now forced to maintain separate usernames and passwords, dealing with different password policies and expirations. Second, this also creates a headache for administrators and ISVs when application users continue to have access to applications that should have been revoked.")]),e._v(" "),i("h2",{attrs:{id:"federated-identity"}},[e._v("Federated Identity "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#federated-identity","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("Federated Identity started with the need to support application access that spans beyond a company or organization boundary. Imagine a relationship between a juice company (JuiceCo) selling its product to a large supermarket chain (BigMart). As an employee of JuiceCo, you need to access an application provided by BigMart to manage the relationship and monitor supplies and sales.")]),e._v(" "),i("p",[e._v("In this case, BigMart (who is providing this application) will need to take care of user authentication. The simple way is to require a different user name and password from users working at JuiceCo. But think about all the users that this application will need to maintain - including all of the other suppliers and their users who need to access the application.")]),e._v(" "),i("p",[e._v('A more elegant way to solve this problem is to allow JuiceCo and every other supplier to share or "federate" the identities with BigMart. As an employee of JuiceCo, you already have a corporate identity and credentials. What Federated Identity provides is a secure way for the supermarket chain (Service Provider) to externalize authentication by integrating with its suppliers\' existing identity infrastructure (Identity Provider).')]),e._v(" "),i("p",[e._v("This type of use case is what led to the birth of federated protocols such as "),i("a",{attrs:{href:"http://en.wikipedia.org/wiki/Security_Assertion_Markup_Language",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Assertion Markup Languange (SAML)"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("See "),i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Assertion Markup Language (SAML) V2.0 Technical Overview"),i("OutboundLink")],1),e._v(" for a in-depth overview.")]),e._v(" "),i("h2",{attrs:{id:"planning-for-saml"}},[e._v("Planning for SAML "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#planning-for-saml","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("SAML is mostly used as a web-based authentication mechanism inasmuch as it relies on using the browser agent to broker the authentication flow. At a high-level, the authentication flow of SAML looks like this:")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_saml_flow.png",alt:"SAML Flow",title:"SAML Flow"}})]),e._v(" "),i("p",[e._v("We are now ready to introduce some common SAML terms. We will go into the technical details of these later, but it is important to understand the high-level concept during the planning stage.")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("A Service Provider (SP)")]),e._v(" is the entity providing the service, typically in the form of an application")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("An Identity Provider (IDP)")]),e._v(" is the entity providing the identities, including the ability to authenticate a user. The Identity Provider typically also contains the user profile: additional information about the user such as first name, last name, job code, phone number, address, etc. Depending on the application, some service providers may require a very simple profile (username, email), while others may require a richer set of user data (job code, department, address, location, manager, etc).")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("A SAML Request")]),e._v(', also known as an authentication request, is generated by the Service Provider to "request" an authentication.')])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("A SAML Response")]),e._v(" is generated by the Identity Provider. It contains the actual assertion of the authenticated user. In addition, a SAML Response may contain additional information, such as user profile information and group/role information, depending on what the Service Provider can support.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("A Service Provider Initiated (SP-initiated)")]),e._v(" login describes the SAML login flow when initiated by the Service Provider. This is typically triggered when the end user tries to access a resource or login directly on the Service Provider side, such as when the browser tries to access a protected resource on the Service Provider side.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("An Identity Provider Initiated (IDP-initiated)")]),e._v(" login describes the SAML login flow initiated by the Identity Provider. Instead of the SAML flow being triggered by a redirection from the Service Provider, in this flow the Identity Provider initiates a SAML Response that is redirected to the Service Provider to assert the user's identity.")])])]),e._v(" "),i("p",[e._v("A couple of key things to note:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("The Service Provider never directly interacts with the Identity Provider. A browser acts as the agent to carry out all the redirections.")])]),e._v(" "),i("li",[i("p",[e._v("The Service Provider needs to know which Identity Provider to redirect to before it has any idea who the user is.")])]),e._v(" "),i("li",[i("p",[e._v("The Service Provider does not know who the user is until the SAML assertion comes back from the Identity Provider.")])]),e._v(" "),i("li",[i("p",[e._v("This flow does not have to start from the Service Provider. An Identity Provider can initiate an authentication flow.")])]),e._v(" "),i("li",[i("p",[e._v("The SAML authentication flow is asynchronous. The Service Provider does not know if the Identity Provider will ever complete the entire flow. Because of this, the Service Provider does not maintain any state of any authentication requests generated. When the Service Provider receives a response from an Identity Provider, the response must contain all the necessary information.")])])]),e._v(" "),i("h2",{attrs:{id:"planning-checklist"}},[e._v("Planning Checklist "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#planning-checklist","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("While the SAML protocol is a standard, there are different ways to implement it depending on the nature of your application. The following is a checklist that will guide you through some of key considerations.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Understanding the role of a Service Provider")])]),e._v(" "),i("li",[i("p",[e._v("Single IDP vs Multiple IDPs")])]),e._v(" "),i("li",[i("p",[e._v("Understanding SP-initiated Login Flow")])]),e._v(" "),i("li",[i("p",[e._v("Exposing SAML configuration in SP")])]),e._v(" "),i("li",[i("p",[e._v("Enabling SAML for everyone vs a subset of users")])]),e._v(" "),i("li",[i("p",[e._v('Implementing a "backdoor"')])])]),e._v(" "),i("h3",{attrs:{id:"understanding-the-role-of-a-service-provider"}},[e._v("Understanding the Role of a Service Provider "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#understanding-the-role-of-a-service-provider","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("A SAML IDP generates a SAML response based on configuration that is mutually agreed upon by the IDP and the SP. Upon receiving the SAML assertion, the SP needs to validate that the assertion comes from a valid IDP and then parse the necessary information from the assertion: the username, attributes, etc.")]),e._v(" "),i("p",[e._v("In order to do this, the SP requires at least the following:")]),e._v(" "),i("ul",[i("li",[e._v("Certificate - The SP needs to obtain the public certificate from the IDP to validate the signature. The certificate is stored on the SP side and used whenever a SAML response arrives.")]),e._v(" "),i("li",[e._v("ACS Endpoint - Assertion Consumer Service URL - often referred to simply as the SP login URL. This is the endpoint provided by the SP where SAML responses are posted. The SP needs to provide this information to the IDP.")]),e._v(" "),i("li",[e._v("IDP Login URL - This is the endpoint on the IDP side where SAML requests are posted. The SP needs to obtain this information from the IDP.")])]),e._v(" "),i("p",[e._v("The easiest way to implement SAML is to leverage an OpenSource SAML toolkit. We have included a list at the end of this article of recommended toolkits for several languages. These toolkits provide the logic needed to digest the information in an incoming SAML Response. In addition, if the SP needs to support the SP-initiated Login flow, the toolkits also provide the logic needed to generate an appropriate SAML Authentication Request.")]),e._v(" "),i("h3",{attrs:{id:"single-idp-vs-multiple-idps"}},[e._v("Single IDP vs Multiple IDPs "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#single-idp-vs-multiple-idps","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("If you are building an internal app and you want to SAML-enable it in order to integrate with your corporate SAML identity provider, then you are looking at supporting only a single IDP. In this case, your app only needs to deal with a single set of IDP metadata (cert, endpoints, etc).")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_one_idp.png",alt:"Single IDP",title:"Single IDP"}})]),e._v(" "),i("p",[e._v("If you are an ISV building an enterprise SaaS product, or if you are building an external facing website/portal/community for your customers and partners, then you need to look at supporting multiple IDPs. This is the typical use case for many SaaS ISVs needing to integrate with customers' corporate identity infrastructure. Depending on the architecture of your application, you need to think about ways to store the SAML configuration (eg. Certificates, IDP login URLs) from each identity provider, as well as how you will provide the necessary SP information for each.")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_many_idp.png",alt:"Many IDPs",title:"Many IDPs"}})]),e._v(" "),i("p",[e._v("A key consideration involves the ACSurl endpoint on the SP side where SAML responses are posted. It is possible to expose a single endpoint even when dealing with multiple IDPs. For a single-instance multi-tenant application where the tenancy is not defined in the URL (such as via a subdomain), this might be a simpler way to implement. However, you must then rely on additional information in the SAML response to determine which IDP is trying to authenticate (for example, using the IssuerID). If your application is architected in a multi-tenant fashion with domain information in the URL (for example, "),i("em",[e._v("https://domain1.myISV.com")]),e._v(" or "),i("em",[e._v("https://www.myISV.com/domain1")]),e._v("), then having an ACSurl endpoint for each subdomain might be a good option since the URL itself identifies the domain.")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_many_idp_subdomain.png",alt:"SPs with Subdomains",title:"SPs with Subdomains"}})]),e._v(" "),i("h3",{attrs:{id:"understanding-sp-initiated-login-flow"}},[e._v("Understanding SP-initiated Login Flow "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#understanding-sp-initiated-login-flow","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("As discussed earlier, an IDP-initiated login flow starts from the IDP. Since it begins on the IDP side, there is no additional context about what the user is trying to access on the SP side other than the fact that the user is trying to get authenticated and access the SP. Typically, once the user is authenticated, the browser will be taken to a generic landing page in the SP.")]),e._v(" "),i("p",[e._v('In an SP-initiated flow, the user tries to access a protected resource directly on the SP side without the IDP being aware of the attempt. Two issues arise. First is the need to identify the right IDP if authentication of a federated identity is needed. With SP-initiated login, the SP initially does not know anything about the identity. As a developer, you need to figure out how the SP can determine which IDP should be receiving the SAML request. In some cases, if your application URLs contain subdomain information that is mapped to a unique tenant and IDP, then the resource link being hit is enough to identify the IDP. If this isn\'t the case, then you might need to prompt the end user for additional information from the end user such as user id, email, or a company id; something that allows the SP to identify which IDP the user attempting to access the resource belongs to. Remember, you are only prompting for an identifier, not credentials. Okta also supports to pass the identifier to the IDP with parameter "LoginHint", so that the user does not need to input the identifier again when redirected to IDP to login. For instruction to trigger Okta to send the "LoginHint" to IDP, see '),i("a",{attrs:{href:"/docs/reference/api/idps#redirecting-with-saml-deep-links"}},[e._v("Redirecting with SAML Deep Links")]),e._v(".")]),e._v(" "),i("p",[e._v("Another issue with SP-initiated login flow is the support for deep links. Most applications support deep links. For example, you might receive a link to a document that resides on a content management system. Ideally, if you need to authenticate prior to accessing the document, you would like to be taken to the document immediately after authentication.")]),e._v(" "),i("p",[e._v("SAML is an asynchronous protocol by design. The SP-initiated login begins the flow by generating a SAML Authentication Request that gets redirected to the IDP. At this point, the SP does not store any information about the request. When the SAML response comes back from the IDP, the SP wouldn't know anything about the initial deep-link that triggered the authentication request. Luckily, SAML supports this with a parameter called RelayState.")]),e._v(" "),i("p",[e._v("A RelayState is an HTTP parameter that can be included as part of the SAML request and SAML response. In an SP-initiated login flow, the SP can set the RelayState parameter in the SAML request with additional information about the request. A SAML IDP, upon receiving the SAML request, will take the RelayState value and simply attach it back as a HTTP parameter in the SAML response after the user has been authenticated. This way, when the round trip completes, the SP can use the RelayState information to get additional context about the initial SAML authentication request.")]),e._v(" "),i("p",[e._v("In the case of a deep link, the SP sets the RelayState of the SAML request with the deep-link value. When the SAML response comes back, the SP can use the RelayState value and take the authenticated user to the right resource.")]),e._v(" "),i("p",[i("img",{attrs:{src:"/img/saml_guidance_deeplink.png",alt:"SP-initiated flow with Deep Link",title:"SP-initiated Login with Deep Link"}})]),e._v(" "),i("p",[e._v("For instructions to construct a deep link for SAML IdPs, see "),i("a",{attrs:{href:"/docs/reference/api/idps#redirecting-with-saml-deep-links"}},[e._v("Redirecting with SAML Deep Links")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"exposing-saml-configuration-in-sp"}},[e._v("Exposing SAML configuration in SP "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#exposing-saml-configuration-in-sp","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("As discussed before, the SP needs the IDP configuration in order to complete the SAML setup. While many ISVs choose to do this via support and email, the better way to do this is by exposing a self-service administrator page for your customer's IT administrator to enable SAML. SAML supports metadata on both the IDP and SP side. One way to configure the IDP/SP relationship on the SP side is to build the ability to receive an IDP metadata file and the ability to generate an SP metadata file for consumption by the IDP. This is the preferred method.")]),e._v(" "),i("p",[e._v("However, some ISVs choose to allow configuration of several key SAML parameters directly rather than through a metadata file. Typical parameters would include the IDP redirect URL (for SAML Request), IssuerID, IDP Logout URL. The SP must also allow the IDP public certificate to be uploaded or saved.")]),e._v(" "),i("p",[e._v("Using a metadata file is preferred because it can handle any future additions/enhancements in your SAML support without making UI changes that would otherwise be required if you expose specific SAML configuration parameters in your UI.")]),e._v(" "),i("h3",{attrs:{id:"enabling-saml-for-everyone-vs-a-subset-of-users"}},[e._v("Enabling SAML for everyone vs a subset of users "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#enabling-saml-for-everyone-vs-a-subset-of-users","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("Depending on the nature of your application, there might be reasons to allow only a subset of users to be SAML enabled. Imagine an application that is accessed by internal employees and external users like partners. The employees may SAML into the app, while the external users may use a separate set of credentials.\nEven in cases where the intent is to have all the users of a particular tenant be SAML-enabled, it might be useful to enable just a subset of users during proof-of-concept, testing and roll-out to test out authentication with a smaller subset of users before going-live for the entire population.")]),e._v(" "),i("h3",{attrs:{id:"implementing-a-backdoor"}},[e._v('Implementing a "backdoor" '),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#implementing-a-backdoor","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v('This is particularly important where the entire population is intended to be SAML-enabled in your application. Sometimes, there might be a mistake in the SAML configuration - or something changes in SAML IDP endpoints. In any case, you do not want to be completely locked out. Having a backdoor available for administrator(s) to use to access a locked system becomes extremely important. This is often accomplished by having a "secret" login URL that does not trigger a SAML redirection when accessed. Typically, the administrator will use a username/password to login in and make the necessary changes to fix the problem.')]),e._v(" "),i("h2",{attrs:{id:"testing-saml"}},[e._v("Testing SAML "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#testing-saml","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("Use the "),i("a",{attrs:{href:"http://saml.oktadev.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Okta SAML validation tool"),i("OutboundLink")],1),e._v(" to speed up the process of developing a SAML SP.")]),e._v(" "),i("p",[e._v("This tool makes it easy for you to send SAML Requests to your SAML SP. It allows you to quickly change the contents of the SAML requests and simplifies the process of debugging SAML issues by automatically decoding SAML payloads and displaying server headers for you.")]),e._v(" "),i("p",[e._v("You can also install the "),i("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/saml-tracer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAML Tracer extension to Firefox"),i("OutboundLink")],1),e._v(" for testing, or similar tools for other browsers.")]),e._v(" "),i("h2",{attrs:{id:"saml-toolkits"}},[e._v("SAML Toolkits "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#saml-toolkits","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("OpenSource toolkits that implement the SAML 2.0 specification for the WebSSO Profile for Service Providers in different programming languages\ncan help you build your applications and integrations:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://en.wikipedia.org/wiki/.NET_Framework_version_history",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Framework"),i("OutboundLink")],1),e._v(" 4.5 or above: "),i("a",{attrs:{href:"https://github.com/KentorIT/authservices#kentor-authentication-services",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kentor Authentication Services"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v(".NET Framework 4 or below: "),i("a",{attrs:{href:"http://www.componentspace.com/SAMLv20.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ComponentSpace SAML 2.0"),i("OutboundLink")],1),e._v(" - Paid software, licenses start at $299")]),e._v(" "),i("li",[e._v("Java: "),i("a",{attrs:{href:"https://wiki.shibboleth.net/confluence/display/OpenSAML/Home",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenSAML"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("Java/Spring: "),i("a",{attrs:{href:"/code/java/spring_security_saml"}},[e._v("Spring Security SAML")])]),e._v(" "),i("li",[e._v("PHP: "),i("a",{attrs:{href:"/code/php/simplesamlphp"}},[e._v("SimpleSAMLphp")])]),e._v(" "),i("li",[e._v("Python: "),i("a",{attrs:{href:"/code/python/pysaml2"}},[e._v("PySAML2")])]),e._v(" "),i("li",[e._v("Ruby: "),i("a",{attrs:{href:"https://rubygems.org/gems/ruby-saml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby-SAML"),i("OutboundLink")],1)])]),e._v(" "),i("blockquote",[i("p",[e._v("Note: Okta doesn't own or maintain these toolkits, though we do provide documentation to help you use them with Okta.")])]),e._v(" "),i("h2",{attrs:{id:"reference"}},[e._v("Reference "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#reference","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("h3",{attrs:{id:"saml-2-0"}},[e._v("SAML 2.0 "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#saml-2-0","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Assertions and Protocols for the OASIS Security Assertion Markup Language (SAML) V2.0"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-bindings-2.0-os.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bindings for the OASIS Security Assertion Markup Language (SAML) V2.0"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Profiles for the OASIS Security Assertion Markup Language (SAML) V2.0"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);