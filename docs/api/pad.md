---
title: Padding
sidebar: auto
meta:
  - name: Padding
    content: Just Animate Guide - Learn how to animate with style!
---

## Padding
Padding changes the start or end time of a tween without changing its duration. Padding can be staggered and be added applied on an ease. The `$padStart` parameter places padding at the beginning whereas the `$padEnd` places padding at the end.  Padding can be placed at both sides simultaneously.

### Adding a Delay
To add a delay to the beginning of a tween, add `$padStart` as a number. 

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $padStart: 200,
  $ease: "power(in-out, 3)"
});
</pre>
</Example>


### Per Target Staggering
To stagger targets, add `$padStart` and pass in stagger options as an number. In the example, each target is staggered in by 100ms. The first box starts at 100 and ends at 1000, the second starts at 200 and ends at 1000, and so and so forth.

<Example mode="three-boxes" :height="280">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $padStart: { stagger: 100 },
  $ease: "bounce(out)"
});
</pre>
</Example>


### Distributed Staggering
To stagger targets evenly, add `$padStart` and pass in stagger: true with a duration. In the example, each target is staggered over 90 milliseconds altogether.  The time is divided evenly between the three boxes.

<Example mode="three-boxes" :height="280">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $padStart: { 
    duration: 90, 
    stagger: true 
  },
  $ease: "bounce(out)"
});
</pre>
</Example>

### Eased Staggering
To stagger targets along a curve, add `$padEnd` and pass in stagger with an ease and with a duration. In the example, each target is animated by a portion of the 300 milliseconds. The targets are distributed along a power(in) curve instead of evenly.

<Example mode="three-boxes" :height="280">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $padEnd: { 
    duration: 300, 
    stagger: 'power(in)' 
  },
  $ease: 'bounce(out)'
});

</pre>
</Example>
