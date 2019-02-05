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
- Full library of eases with [ease chaining](/api/eases#ease-chaining) and [custom eases](/api/eases#custom-eases)
- Swappable animation targets and swappable keyframes even while the animation is running
- Fluent/builder and JSON API to provide a good experience for multiple programming styles
- Built to perform well under a heavy load and provide a smooth experience

## Get Started

### Fluent Syntax
The Fluent Syntax is used throughout much of the documentation because it is concise and easy to read.

*Shorthand Syntax*
The shorthand syntax is useful for transition or fire-and-forget animations. The following code constructs a Timeline (which autoplays) and adds a keyframe at 1 second to change the opacity to 0.2.

<Example mode="middle" :height="200">
<pre data-lang="js">
just.animate(".box", 1000, { 
   transform: 'rotate(360deg)'
});
</pre>
</Example>

*Longhand Syntax*
The longhand syntax is to construct a new Timeline and then call animate to configure the first tween. This syntax allows the Timeline to be configured at the same time as creation. the `.configure()` can also be used at any time to change the configuration.

<Example mode="middle" :height="240">
<pre data-lang="js">
const t1 = 
  new just.Timeline({ 
    // playState: 'paused' 
  })
  .animate(".box", 1000, { 
    transform: 'rotate(360deg)'
  });
</pre>
</Example>


### JSON Syntax
The JSON Syntax is useful for setting and replacing a timeline's configuration wholesale. It is most useful when programmatically updating a Timeline through automation or tooling.

<Example mode="middle" :height="320">
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
</Example>

## Installation

### Using NPM

### Using a CDN
  
### Browser Support
 
## API
