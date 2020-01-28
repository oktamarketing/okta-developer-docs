(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{347:function(e,t,a){"use strict";a.r(t);var s=a(8),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticStyle:{"font-size":"0.9em","margin-bottom":"-20px"}},[a("a",{attrs:{href:"/books/api-security/sanitizing/"}},[e._v("← Sanitizing Data")])]),e._v(" "),a("h2",{attrs:{id:"sanitizing-reject-bad"}},[e._v("Reject Bad Inputs "),a("a",{staticClass:"header-anchor header-link",attrs:{href:"#sanitizing-reject-bad","aria-hidden":"true"}},[a("i",{staticClass:"fa fa-link"})])]),e._v(" "),a("p",[e._v("Rejecting known invalid inputs is more complicated than only accepting known good inputs (which we talked about above) and far less accurate.  This strategy is typically implemented as a blacklist of strings or patterns.  This technique may require many regular expressions to be run against a single field which may also affect the speed of your application. It also means that this blacklist will require updates any time a new pattern needs to be blocked.")]),e._v(" "),a("p",[e._v("Take a typical use-case of blocking 'bad-words'.  This problem is incredibly complex as language usage varies across locale. These complexities can be demonstrated using the simple word: "),a("code",[e._v("ass")]),e._v(". It would be pretty easy to block this word alone, but doing so would also block the proper use of the word referring to donkeys. Then you need to think about both variations of the word and where those letters happen to come together: 'badass,' 'hard-ass,' 'amass,' 'bagasse', the first two are questionable while the second two are fine. Even if you block all of these and the thousands of other words that contain these three letters, there are still variations that would make it past: '4ss', 'as.s,' 'azz,' '@ss,' 'āss,' or '\\41\\73\\73' (escaped characters). As time goes on the list of blocked words would increase raising the total cost of the solution.")]),e._v(" "),a("p",[e._v("Another famous example of this technique is antivirus software. Your antivirus updates every few days to get a new blacklist of items to scan. And we all know how well that works 😉")])])}),[],!1,null,null,null);t.default=o.exports}}]);