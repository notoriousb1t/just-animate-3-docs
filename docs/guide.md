---
title: Guide
sidebar: auto
meta:
  - name: description
    content: Just Animate Guide - Learn how to animate with style!
---

## What is Just Animate? 

Just Animate is a general purpose JavaScript animation library. It can animate HTML Elements and objects alike. At a high level, here are some of the most impressive features:

- Tweens all transform properties (rotate, translate, scale, etc.)
- Morphs SVG paths
- Sub-timelines with the ability to use Web Animation API Animations as sub-timelines
- Full library of eases with [ease chaining](#ease-chaining) and [custom eases](#custom-eases)
- Swappable animation targets and swappable keyframes even while the animation is running
- Fluent/builder and JSON API to provide a good experience for multiple programming styles
- Built to perform well under a heavy load and provide a smooth experience

## Get Started

### Fluent API
The Fluent API is used throughout much of the documentation because it is concise and good for building step-by-step Timelines.

*Shorthand Syntax*
The shorthand syntax is useful for transition or fire-and-forget animations. The following code constructs a Timeline (which autoplays) and adds a keyframe at 1 second to change the opacity to 0.2.

<CodePen mode="middle" :height="200">
<pre data-lang="js">
just.animate(".box", 1000, { 
   transform: 'rotate(360deg)'
});
</pre>
</CodePen>

*Longhand Syntax*
The longhand syntax is to construct a new Timeline and then call animate to configure the first tween. This syntax allows the Timeline to be configured at the same time as creation. the `.configure()` can also be used at any time to change the configuration.

<CodePen mode="middle" :height="240">
<pre data-lang="js">
const t1 = 
  new just.Timeline({ 
    // playState: 'paused' 
  })
  .animate(".box", 1000, { 
    transform: 'rotate(360deg)'
  });
</pre>
</CodePen>


### JSON API
The JSON API is useful for setting and replacing a timeline's configuration wholesale.

<CodePen mode="middle" :height="320">
<pre data-lang="js">
new just.Timeline({
  keyframes: {
    '.box': {
      transform: {
        1000: { value: "rotate(360deg)" }
      }
    }
  }
}).update()
</pre>
</CodePen>

## Installation

### Using NPM

### Using a CDN
  
### Browser Support
 
## API

### Eases
An ease allows the developer or designer the ability to change the rate at which the animation progresses. Having the right ease can be the difference between an unpleasant mechanical interaction or having a silky-smooth delightful interaction. Easings [can be chained](#ease-chaining) and [custom eases](#custom-eases) can be registered.

Just Animate comes pre-built with the most common eases, many of which are not available in CSS. 

Many of the eases have "in", "out", and "in-out" options. The "in" option performs the effect at the beginning, the "out" performs it at the end, and "in-out" performs it both at the beginning and the end.

#### Back
Back moves past the boundary and then back to the boundary. For "in" it moves before the start before progressing.  For "out" it moves past the end before finishing. For "in-out" it does both "in" and "out".

*Arguments*
1. `type`: in, out, or in-out. The default value is in.

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  ease: "back(out)"
});
</pre>
</CodePen>

#### Bounce
Bounce produces a bouncing effect. 

*Arguments*
1. `type`: in, out, or in-out. The default value is in.
1. `bounces`: default value is 7.5625

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  ease: "bounce(out)"
});
</pre>
</CodePen>

#### Cubic Bezier
Cubic Bezier works the same way as it does in CSS: it has four control points that create a curve. Many easings can
be produced with this function. See [cubic-bezier.com](http://cubic-bezier.com) to try some of your own.

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  ease: "cubic-bezier(.5, 0, .5, 1)"
});
</pre>
</CodePen>

#### Elastic
Elastic appears to be made of rubber.

*Arguments*
1. `type`: in, out, or in-out. The default value is in.
1. `amplitude`: The default value is 1
1. `period`: The default value is 0.4
1. `bounces`: The default value is 4

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  ease: "elastic(out)"
});
</pre>
</CodePen>

#### Power
Power provides many of the named easings that are often used in animation:

1. power(in, 1) = linear
1. power(in, 2) = easeInQuad
1. power(in, 3) = easeInCubic
1. power(in, 4) = easeInQuart
1. power(in, 5) = easeInQuint

Instead of providing named 12+ named easings, it is nicer to simply provide a power function so the relationship between easings is clear and easy to move between. Try changing the number in the example to move between easings or better yet, create your own power easing!

*Arguments*
1. `type`: in, out, or in-out. The default value is in.
1. `n`: The default value is 2.

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1050, {
  transform: "translate(80vw)",
  ease: "power(out, 3)"
});
</pre>
</CodePen>

 
#### Repeat
Repeat repeats a tween a certain number of times. While the Timeline has an `iterations` property for repeating the timeline, the repeat easing allows a developer or designer to subdivide a tween into repetions. Eases do not affect duration, so if the goal is to play the tween twice for 500ms, set the tween duration to 1000 and repeat twice.

*Arguments*
1. `count`: The default value is 2.

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  ease: "repeat(2)"
});
</pre>
</CodePen>

#### Sine
Sine is a gentle ease function.

*Arguments*
1. `type`: in, out, or in-out. The default value is in.

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 1000, {
  transform: "translate(80vw)",
  ease: "sine(out)"
});
</pre>
</CodePen>

#### Steps
Cubic Bezier works the same way as it does in CSS: it has a number of steps and a mode which indicates where the "step" is.

*Arguments*
1. `steps`: the number of steps
1. `mode`: start or end

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 5000, {
  transform: "translate(80vw)",
  ease: "steps(10, end)"
});
</pre>
</CodePen>


#### Yoyo
Yoyo repeats and alternates a tween a certain number of times. While the Timeline has an `iterations` property for repeating the timeline and an `alternate` property to alternate, the yoyo easing allows a developer or designer to subdivide a tween into repetions that alternate. Eases do not affect duration, so if the goal is to move to a position and back 500ms in each direction, the developer or designer should set the duration to 1000 and yoyo twice.

*Arguments*
1. `count`: The default value is 2.

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 2000, {
  transform: "translate(80vw)",
  ease: "yoyo(4)"
});
</pre>
</CodePen>

### Ease Chaining
Just Animate has the unique ability to chain eases. Add more than one ease expressions separated by spaces and Just Animate will take the result from each ease and process it through the next ease. This is especially helpful when using yoyo, repeat, or creating a complex easing.

<CodePen mode="left-to-right" :height="220">
<pre data-lang="js">
just.animate(".box", 2000, {
  transform: "translate(80vw)",
  ease: "yoyo(2) sine(in-out)"
});
</pre>
</CodePen>

### Custom Eases
Registering a custom only requires adding a function to `eases`. The function should accept whatever arguments are needed to generate the easing function and then return an easing function in turn. Easing functions may be cached, so it is important that ease functions are pure and do not hand out different ease functions as a result of outside mutations. Here is an example of a custom power ease:

<CodePen mode="left-to-right" :height="320">
<pre data-lang="js">
just.eases.customPower = (n) => {
  return o => {
    return Math.pow(o, n);
  }
}

just.animate(".box", 1050, {
  transform: "translate(80vw)",
  ease: "customPower(7)"
});
</pre>
</CodePen>

Custom Eases can also be used to standardize eases across an application, for instance:

<CodePen mode="left-to-right" :height="320">
<pre data-lang="js">
just.eases.default = () => {
  return just.eases['cubic-bezier'](0.5, 0, 0.5, 1);
}

just.animate(".box", 1050, {
  transform: "translate(80vw)",
  ease: "default"
});
</pre>
</CodePen>
