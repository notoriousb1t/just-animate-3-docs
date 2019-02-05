---
title: Ease
sidebar: auto
meta:
  - name: Eases
    content: Just Animate Guide - Learn how to animate with style!
---

## Eases
An ease allows the developer or designer the ability to change the rate at which the animation progresses. Having the right ease can be the difference between an unpleasant mechanical interaction or having a silky-smooth delightful interaction. Eases [can be chained](#ease-chaining) and [custom eases](#custom-eases) can be registered.

Just Animate comes pre-built with the most common eases, many of which are not available in CSS. 

Many of the eases have "in", "out", and "in-out" options. The "in" option performs the effect at the beginning, the "out" performs it at the end, and "in-out" performs it both at the beginning and the end.

### Back
Back moves past the boundary and then back to the boundary. For "in" it moves before the start before progressing.  For "out" it moves past the end before finishing. For "in-out" it does both "in" and "out".

*Arguments*
1. `type`: in, out, or in-out. The default value is in.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  $ease: "back(out)"
});
</pre>
</Example>

### Bounce
Bounce produces a bouncing effect. 

*Arguments*
1. `type`: in, out, or in-out. The default value is in.
1. `bounces`: default value is 7.5625

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  $ease: "bounce(out)"
});
</pre>
</Example>

### Cubic Bezier
Cubic Bezier works the same way as it does in CSS: it has four control points that create a curve. Many eases can
be produced with this function. See [cubic-bezier.com](http://cubic-bezier.com) to try some of your own.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  $ease: "cubic-bezier(.5, 0, .5, 1)"
});
</pre>
</Example>

### Elastic
Elastic appears to be made of rubber.

*Arguments*
1. `type`: in, out, or in-out. The default value is in.
1. `amplitude`: The default value is 1
1. `period`: The default value is 0.4
1. `bounces`: The default value is 4

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  $ease: "elastic(out)"
});
</pre>
</Example>

### Power
Power provides many of the named eases that are often used in animation:

1. power(in, 1) = linear
1. power(in, 2) = easeInQuad
1. power(in, 3) = easeInCubic
1. power(in, 4) = easeInQuart
1. power(in, 5) = easeInQuint

Instead of providing named 12+ named eases, it is nicer to simply provide a power function so the relationship between eases is clear and easy to move between. Try changing the number in the example to move between eases or better yet, create your own power ease!

*Arguments*
1. `type`: in, out, or in-out. The default value is in.
1. `n`: The default value is 2.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  $ease: "power(out, 3)"
});
</pre>
</Example>

 
### Repeat
Repeat repeats a tween a certain number of times. While the Timeline has an `iterations` property for repeating the timeline, the repeat ease allows a developer or designer to subdivide a tween into repetions. Eases do not affect duration, so if the goal is to play the tween twice for 500ms, set the tween duration to 1000 and repeat twice.

*Arguments*
1. `count`: The default value is 2.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $ease: "repeat(2)"
});
</pre>
</Example>

### Sine
Sine is a gentle ease function.

*Arguments*
1. `type`: in, out, or in-out. The default value is in.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  $ease: "sine(out)"
});
</pre>
</Example>

### Steps
Cubic Bezier works the same way as it does in CSS: it has a number of steps and a mode which indicates where the "step" is.

*Arguments*
1. `steps`: the number of steps
1. `mode`: start or end

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 5000, {
  transform: "translate(80vw)",
  $ease: "steps(10, end)"
});
</pre>
</Example>


### Yoyo
Yoyo repeats and alternates a tween a certain number of times. While the Timeline has an `iterations` property for repeating the timeline and an `alternate` property to alternate, the yoyo ease allows a developer or designer to subdivide a tween into repetions that alternate. Eases do not affect duration, so if the goal is to move to a position and back 500ms in each direction, the developer or designer should set the duration to 1000 and yoyo twice.

*Arguments*
1. `count`: The default value is 2.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 2000, {
  transform: "translate(80vw)",
  $ease: "yoyo(4)"
});
</pre>
</Example>

## Ease Chaining
Just Animate has the unique ability to chain eases. Add more than one ease expressions separated by spaces and Just Animate will take the result from each ease and process it through the next ease. This is especially helpful when using yoyo, repeat, or creating a complex ease.

<Example mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 2000, {
  transform: "translate(80vw)",
  $ease: "yoyo(2) sine(in-out)"
});
</pre>
</Example>

## Custom Eases
Registering a custom only requires adding a function to `eases`. The function should accept whatever arguments are needed to generate the ease function and then return an ease function in turn. Ease functions may be cached, so it is important that ease functions are pure and do not hand out different ease functions as a result of outside mutations. Here is an example of a custom power $ease:

<Example mode="left-to-right" :height="320">
<pre data-lang="js">
just.eases.customPower = (n) => {
  return o => {
    return Math.pow(o, n);
  }
}

just.animate(".box", 1050, {
  transform: "translate(80vw)",
  $ease: "customPower(7)"
});
</pre>
</Example>

Custom Eases can also be used to standardize eases across an application, for instance:

<Example mode="left-to-right" :height="320">
<pre data-lang="js">
just.eases.default = () => {
  return just.eases['cubic-bezier'](0.5, 0, 0.5, 1);
}

just.animate(".box", 1050, {
  transform: "translate(80vw)",
  $ease: "default"
});
</pre>
</Example>
