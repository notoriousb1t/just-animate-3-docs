---
title: Delays and Staggers
sidebar: auto
meta:
  - name: Delays and Staggers
    content: Just Animate Guide - Learn how to animate with style!
---

## Delays and Staggers
Delays and staggers are important when coordinating multiple targets or multiple phases of a longer animation. Both delays and staggers expand the animation's duration to include the delay or stagger creating negative space between each motion. Just like in music where silence creates suspense, delays and staggers create suspense and anticipation during animation.


### Adding a Starting Delay
To add a delay to the beginning of a tween, add `$delay` as a number. This will expand the duration by that amount. In the following example, the delay of 2000 extends the duration of 1000 to a total of 3000.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $delay: 2000,
  $ease: "power(in-out, 3)"
});
</pre>
</Example>


### Adding an Ending Delay
To add a delay to the end of a tween, add `$endDelay` as a number. This will expand the duration by that amount. In the following example, the delay of 2000 extends the duration of 1000 to a total of 3000.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $endDelay: 2000,
  $ease: "power(in-out, 3)"
});
</pre>
</Example>


### Staggering Targets
To stagger targets, add `$stagger` to an animation. This will immediately expand the animation's duration to provide room to stagger in the current targets. If there are 4 boxes in the following example, the total time of the animation across all boxes would be 1400.

<Example mode="three-boxes" :height="280">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $stagger: 100,
  $ease: "bounce(out)"
});
</pre>
</Example>
 

 ### Combining Delays and Staggers
Delays and staggers work just as well together:

<Example mode="three-boxes" :height="280">
<pre data-lang="js">
just.animate(".box", 800, {
  transform: "translate(80vw)",
  $stagger: 250,
  $delay: 500,
  $ease: "bounce(out)"
});
</pre>
</Example>
 