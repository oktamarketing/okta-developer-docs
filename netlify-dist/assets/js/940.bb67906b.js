(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{643:function(e,t,i){"use strict";i.r(t);var a=i(8),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("Use the sample iOS app that you "),i("GuideLink",{attrs:{link:"../overview"}},[e._v("cloned from GitHub")]),e._v(" to test how multiple apps can share a browser session with iOS.")],1),e._v(" "),i("h3",{attrs:{id:"install-the-dependencies"}},[e._v("Install the dependencies "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#install-the-dependencies","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("To install the Okta Browser Sign-in sample app dependencies into your project, this guide uses "),i("GuideLink",{attrs:{link:"../overview"}},[e._v("CocoaPods")]),e._v(".")],1),e._v(" "),i("p",[e._v("Enter the following at the command line inside the sample app:")]),e._v(" "),i("p",[i("code",[e._v("pod install")])]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note:")]),e._v(" Be sure to work within the Okta BrowserSignIn Workspace in Xcode after you do "),i("code",[e._v("pod install")]),e._v(".")])]),e._v(" "),i("h3",{attrs:{id:"modify-the-configuration-file"}},[e._v("Modify the configuration file "),i("a",{staticClass:"header-anchor header-link",attrs:{href:"#modify-the-configuration-file","aria-hidden":"true"}},[i("i",{staticClass:"fa fa-link"})])]),e._v(" "),i("p",[e._v("Make the following modifications in the "),i("code",[e._v("OktaBrowserSignIn/Okta.plist")]),e._v(" file of your sample app:")]),e._v(" "),i("ul",[i("li",[i("p",[i("code",[e._v("redirectUri")]),e._v(": Enter "),i("code",[e._v("com.first.sample:/callback")]),e._v(" as the value, which is what you defined as the "),i("strong",[e._v("Login Redirect URI")]),e._v(" in the Native app that you created in the "),i("GuideLink",{attrs:{link:"../configure-oidc-native-apps"}},[e._v("last step")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[i("code",[e._v("clientId")]),e._v(": Enter the Client ID that you copied during the "),i("GuideLink",{attrs:{link:"../configure-oidc-native-apps"}},[e._v("last step")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[i("code",[e._v("issuer")]),e._v(": This is the URL for the authorization server that performs authentication. It's a combination of your Org URL that appears in the upper-right corner of your Okta Org dashboard and "),i("code",[e._v("/oauth2/default")]),e._v(".")]),e._v(" "),i("p",[e._v("For example: "),i("code",[e._v("https//{yourOrgURL}/oauth2/default")])])]),e._v(" "),i("li",[i("p",[i("code",[e._v("logoutRedirectUri")]),e._v(": Enter "),i("code",[e._v("com.first.sample:/logout")]),e._v(" as the value, which is what you defined as the "),i("strong",[e._v("Logout Redirect URI")]),e._v(" in the Native app that you created in the "),i("GuideLink",{attrs:{link:"../configure-oidc-native-apps"}},[e._v("last step")]),e._v(".")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);