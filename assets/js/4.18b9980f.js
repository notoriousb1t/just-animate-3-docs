(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{176:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Delays and staggers are important when coordinating multiple targets or multiple phases of a longer animation. Both delays and staggers expand the animation's duration to include the delay or stagger creating negative space between each motion. Just like in music where silence creates suspense, delays and staggers create suspense and anticipation during animation.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("Example",{attrs:{mode:"left-to-right",height:220}},[a("pre",{attrs:{"data-lang":"js"}},[t._v('just.animate(".box", 1000, {\n  transform: "translate(80vw)",\n  $delay: 2000,\n  $ease: "power(in-out, 3)"\n});\n')])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("Example",{attrs:{mode:"left-to-right",height:220}},[a("pre",{attrs:{"data-lang":"js"}},[t._v('just.animate(".box", 1000, {\n  transform: "translate(80vw)",\n  $endDelay: 2000,\n  $ease: "power(in-out, 3)"\n});\n')])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("Example",{attrs:{mode:"three-boxes",height:280}},[a("pre",{attrs:{"data-lang":"js"}},[t._v('just.animate(".box", 1000, {\n  transform: "translate(80vw)",\n  $stagger: 100,\n  $ease: "bounce(out)"\n});\n')])]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Delays and staggers work just as well together:")]),t._v(" "),a("Example",{attrs:{mode:"three-boxes",height:280}},[a("pre",{attrs:{"data-lang":"js"}},[t._v('just.animate(".box", 800, {\n  transform: "translate(80vw)",\n  $stagger: 250,\n  $delay: 500,\n  $ease: "bounce(out)"\n});\n')])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"delays-and-staggers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delays-and-staggers","aria-hidden":"true"}},[this._v("#")]),this._v(" Delays and Staggers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"adding-a-starting-delay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-starting-delay","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding a Starting Delay")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To add a delay to the beginning of a tween, add "),e("code",[this._v("$delay")]),this._v(" as a number. This will expand the duration by that amount. In the following example, the delay of 2000 extends the duration of 1000 to a total of 3000.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"adding-an-ending-delay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-an-ending-delay","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding an Ending Delay")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To add a delay to the end of a tween, add "),e("code",[this._v("$endDelay")]),this._v(" as a number. This will expand the duration by that amount. In the following example, the delay of 2000 extends the duration of 1000 to a total of 3000.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"staggering-targets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#staggering-targets","aria-hidden":"true"}},[this._v("#")]),this._v(" Staggering Targets")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To stagger targets, add "),e("code",[this._v("$stagger")]),this._v(" to an animation. This will immediately expand the animation's duration to provide room to stagger in the current targets. If there are 4 boxes in the following example, the total time of the animation across all boxes would be 1400.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"combining-delays-and-staggers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#combining-delays-and-staggers","aria-hidden":"true"}},[this._v("#")]),this._v(" Combining Delays and Staggers")])}],!1,null,null,null);e.default=s.exports}}]);