(window.webpackJsonp=window.webpackJsonp||[]).push([[961],{660:function(a,t,e){"use strict";e.r(t);var s=e(8),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"install-npm-package"}},[a._v("Install npm package "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#install-npm-package","aria-hidden":"true"}},[e("i",{staticClass:"fa fa-link"})])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" @okta/okta-react-native --save\n$ react-native "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" @okta/okta-react-native\n")])])]),e("h3",{attrs:{id:"install-ios-oidc-sdk"}},[a._v("Install iOS OIDC SDK "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#install-ios-oidc-sdk","aria-hidden":"true"}},[e("i",{staticClass:"fa fa-link"})])]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://guides.cocoapods.org/using/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[a._v("CocoaPods")]),e("OutboundLink")],1)])]),a._v(" "),e("p",[e("em",[e("strong",[a._v("React Native >= 0.60")])]),a._v(": With React Native 0.60 pods are added to podfile automatically. Run the "),e("code",[a._v("pod install")]),a._v(" command to install dependencies:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cd ios\npod install\n")])])]),e("p",[e("em",[e("strong",[a._v("React Native < 0.60")])]),a._v(": Make sure that your "),e("code",[a._v("Podfile")]),a._v(" looks like this:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("platform :ios, '11.0'\n\ntarget '{YourTargetName}' do\n\npod 'OktaOidc', '~> 3.0'\n\nend\n")])])]),e("p",[a._v("Then run "),e("code",[a._v("pod install")]),a._v(".")]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("a",{attrs:{href:"https://github.com/Carthage/Carthage",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[a._v("Carthage")]),e("OutboundLink")],1)])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('github "okta/okta-oidc-ios" ~> 3.5.0\n')])])]),e("p",[a._v("Then run "),e("code",[a._v("carthage update --platform iOS")]),a._v(".")]),a._v(" "),e("p",[a._v("Open project settings and choose your application target. Then open "),e("code",[a._v("Build Phases")]),a._v(" and add "),e("code",[a._v("OktaOidc.framework")]),a._v(" from "),e("code",[a._v("ios/Carthage/Build/iOS")]),a._v(" into the "),e("code",[a._v("Embed Frameworks")]),a._v(" section.")]),a._v(" "),e("h3",{attrs:{id:"install-android-oidc-sdk"}},[a._v("Install Android OIDC SDK "),e("a",{staticClass:"header-anchor header-link",attrs:{href:"#install-android-oidc-sdk","aria-hidden":"true"}},[e("i",{staticClass:"fa fa-link"})])]),a._v(" "),e("ol",[e("li",[a._v("Add this line to "),e("code",[a._v("android/build.gradle")]),a._v(", under "),e("code",[a._v("allprojects")]),a._v(" -> "),e("code",[a._v("repositories")]),a._v(".")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('maven {\nurl  "https://dl.bintray.com/okta/com.okta.android"\n}\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[a._v("Make sure that your "),e("code",[a._v("minSdkVersion")]),a._v(" is "),e("code",[a._v("19")]),a._v(" in "),e("code",[a._v("android/build.gradle")]),a._v(".")])]),a._v(" "),e("li",[e("p",[a._v("Add the redirect scheme in "),e("code",[a._v("android/app/build.gradle")]),a._v(", under "),e("code",[a._v("android")]),a._v(" -> "),e("code",[a._v("defaultConfig")]),a._v(":")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("manifestPlaceholders = [\nappAuthRedirectScheme: 'com.sampleapplication'\n]\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);