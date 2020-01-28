(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{520:function(e,t,o){"use strict";o.r(t);var s=o(8),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Rules define particular token lifetimes for a given combination of grant type, user, and scope. They are evaluated in priority order and once a matching rule is found no other rules are evaluated. If no matching rule is found, then the authorization request fails.")]),e._v(" "),o("ol",[o("li",[e._v("In the Developer Console, navigate to "),o("strong",[e._v("API > Authorization Servers")]),e._v(".")]),e._v(" "),o("li",[e._v("Select the name of an authorization server, and then select "),o("strong",[e._v("Access Policies")]),e._v(".")]),e._v(" "),o("li",[e._v("Select the name of an access policy, and then select "),o("strong",[e._v("Add Rule")]),e._v(".")]),e._v(" "),o("li",[e._v("Enter a "),o("strong",[e._v("Name")]),e._v(" for the rule, and then use the following fields to define the rule logic:\n"),o("ul",[o("li",[o("strong",[e._v("IF Grant type is:")]),e._v(" Select one or more OAuth 2.0 "),o("router-link",{attrs:{to:"/docs/concepts/auth-overview/#choosing-an-oauth-2-0-flow"}},[e._v("grant types")]),e._v(".")],1),e._v(" "),o("li",[o("strong",[e._v("AND User is:")]),e._v(" Select whether there's no user (client credentials flow), a user assigned to a client that's assigned to this rule's policy, or a user assigned to one or more groups that you specify or a list of users that you specify.")]),e._v(" "),o("li",[o("strong",[e._v("AND Scopes requested:")]),e._v(" Select the scopes (any scopes or a list that you specify) that the user can request as part of the rule conditions.")]),e._v(" "),o("li",[o("strong",[e._v("THEN Use this inline hook:")]),e._v("  Select an "),o("router-link",{attrs:{to:"/docs/concepts/inline-hooks/"}},[e._v("Inline Hook")]),e._v(", if any, that you want to use to customize the token returned by Okta API Access Management.")],1),e._v(" "),o("li",[o("strong",[e._v("THEN Access token lifetime is:")]),e._v(" Select the length of time before an access token expires.")]),e._v(" "),o("li",[o("strong",[e._v("THEN Refresh token lifetime is:")]),e._v(" Select the length of time before a refresh token expires.")])])]),e._v(" "),o("li",[e._v("Click "),o("strong",[e._v("Create Rule")]),e._v(".")])]),e._v(" "),o("p",[e._v("Rules are evaluated in priority order, so the first rule in the first policy that matches the client request is applied and no further processing occurs. If you need to change the order of your rules, reorder the rules using drag-n-drop.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note:")]),e._v(" Service applications (client credentials flow) have no user. If you use this flow, make sure that you have at least one rule that specifies the condition "),o("strong",[e._v("No user")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"rule-use"}},[e._v("Rule Use "),o("a",{staticClass:"header-anchor header-link",attrs:{href:"#rule-use","aria-hidden":"true"}},[o("i",{staticClass:"fa fa-link"})])]),e._v(" "),o("p",[e._v('Access policy rules are whitelists. If you want to create granular rules, you must first ensure that you have no rules that match "any" of something (for example "any user"). You can then create specific rules for each specific use case that you do want to support. For example, if you wanted to ensure that only administrators using the implicit flow were granted access, then you would create a rule specifying that if:')]),e._v(" "),o("ul",[o("li",[e._v("a request is made using the "),o("code",[e._v("implicit")]),e._v(" grant type, and")]),e._v(" "),o("li",[e._v("the user is a member of the "),o("code",[e._v("admin")]),e._v(" group, and")]),e._v(" "),o("li",[e._v("any scope is specified")])]),e._v(" "),o("p",[e._v("Then the access token that is granted has a lifetime of, for example, one hour.")]),e._v(" "),o("p",[e._v("You can also use rules to restrict grant types, users, or scopes. For example, you could prevent the use of all scopes other than "),o("code",[e._v("openid")]),e._v(" and "),o("code",[e._v("offline_access")]),e._v(" by only creating rules that specifically mention those two scopes. This means you would have to:")]),e._v(" "),o("ol",[o("li",[e._v('Not create any rules that match "any scopes", and')]),e._v(" "),o("li",[e._v("Ensure that all of your rules only match the "),o("code",[e._v("openid")]),e._v(" and/or "),o("code",[e._v("offline_access")]),e._v(" scopes.")])]),e._v(" "),o("p",[e._v("Any request that is sent with a different scope won't match any rules and will consequently fail.")]),e._v(" "),o("p",[e._v("At this point you can keep reading to find out how to create custom scopes and claims or proceed immediately to "),o("router-link",{attrs:{to:"/docs/guides/customize-authz-server/-/test-authz-server/"}},[e._v("Testing your Authorization Server")]),e._v(".")],1),e._v(" "),o("NextSectionLink")],1)}),[],!1,null,null,null);t.default=r.exports}}]);