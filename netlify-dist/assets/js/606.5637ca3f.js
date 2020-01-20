(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{322:function(e,t,a){"use strict";a.r(t);var i=a(8),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[a("a",{attrs:{href:"/books/api-security/tls/"}},[e._v("← Transport Layer Security")])]),e._v(" "),a("h2",{attrs:{id:"tls-exposed-data"}},[e._v("Exposed Data over SSL/TLS "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#tls-exposed-data","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("TLS aims to provide data integrity and privacy between two trusted parties. Information exchanged over the latest version of TLS should be secure from being exposed to third parties in unencrypted form. Additionally, third parties should be unable to modify that information: this is the concept of data integrity, and is the reason an integrity check is performed on each message.")]),e._v(" "),a("p",[e._v("However, even though application data transmitted over a properly-established TLS connection is secure, some metadata and connection information is necessarily exposed to third parties. Without additional obfuscation outside of the scope of SSL/TLS, an observer will be able to discover:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("The IP addresses of the client and server.")]),e._v(" Since the client and server are communicating over TCP/IP, which operates at a lower level than the TLS protocol, these IP addresses are public and are used for routing the encrypted packets.")]),e._v(" "),a("li",[a("strong",[e._v("The server certificate")]),e._v(", including the server name. Since the server sends the certificate to the client as a part of the handshake process before encrypted messages are sent, an observer of the handshake will see the certificate in plain text.")]),e._v(" "),a("li",[a("strong",[e._v("The approximate length of the URL and payload.")]),e._v(" Although the application data is encrypted, an astute observer of an HTTPS connection will be able to deduce the length of the URL requested and the approximate size of any non-cached assets. Cached assets, since they reside on the client already, are not vulnerable to this introspection until the cache expires and they are re-fetched.")])]),e._v(" "),a("p",[e._v("In addition to the data listed above, additional information may be inferred based on the timing of network requests. Outdated SSL/TLS versions have additional identified vulnerabilities, and in the future one must anticipate the TLS spec will be versioned to ameliorate any vulnerabilities identified in the future.")])])}),[],!1,null,null,null);t.default=n.exports}}]);