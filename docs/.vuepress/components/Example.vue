<template lang='html'>
<div class='example-wrapper' :style='{ height: height }'>
  <div
    class='codepen'
    :data-height='height'
    :data-default-tab='defaultTabs'
    :data-prefill="prefill"
    :data-editable='editable'
    data-theme-id='dark'
    data-preview='true'
    data-user='notoriousb1t'
    data-slug-hash='7ceecf00069895a2fa5de627e88df4f6'>
<template v-if='mode === "left-to-right"'>
<pre data-lang='html'>
&lt;div class='alley'>
  &lt;div class='box'>&lt;/div>
&lt;/div>
</pre>
<pre data-lang='scss' data-option-autoprefixer>
* {
   box-sizing: border-box;
   position: relative;
}
body {
   align-items: center;
   background: #333;
   color: #efeeee;
   display: flex;
   font-family: Roboto, sans-serif;
   font-size: 12px;
   height: 100vh;
   margin: 0;
   overflow: hidden;
}
.alley {
   background: #282828;
   display: flex;
   width: 100vw;
   padding: 20px 5vw;
}
.box {
   background: #77c7c4;
   border-radius: 4px;
   cursor: pointer;
   height: 40px;
   width: 40px;
}
</pre>
</template>

<template v-if='mode === "middle"'>
  <pre data-lang="html">
&lt;div class='box'>&lt;/div>
</pre>
  <pre data-lang="scss" data-option-autoprefixer>
* {
   box-sizing: border-box;
   position: relative;
}
body {
   align-items: center;
   background: #333;
   color: #efeeee;
   display: flex;
   font-family: Roboto, sans-serif;
   font-size: 12px;
   justify-content: center;
   height: 100vh;
   overflow: hidden;
}
.box {
   background: #6740c0;
   border-radius: 4px;
   cursor: pointer;
   height: 40px;
   width: 40px;
}
</pre>
</template>

<slot></slot>
  </div> 
  </div>
</template>

<style>
#html-link {
  /* Hide the html button. */
  display: none;
}
.example-wrapper {
  /* Styles for if embeds don't work. */
  background: #222;
  border-radius: 6px;
  color: #efefef;
}
.codepen [data-lang='html'],
.codepen [data-lang='scss'] {
  /* Hide html and scss until codepen loads. */
  display: none;
}
</style>

<script>
let scriptEl;
export default {
  props: {
    height: {
      default: 280,
      type: Number
    },
    tags: {
      default: () => ["just-animate-3"],
      type: Array
    },
    scripts: {
      default: () => [
        "https://codepen.io/notoriousb1t/pen/e84f23c7867a47a050b3498b1031197e.js"
      ],
      type: Array
    },
    editable: {
      default: true,
      type: Boolean
    },
    defaultTabs: {
      default: "js,result",
      type: String
    },
    mode: {
      default: "",
      type: String
    }
  },
  computed: {
    prefill() {
      const { tags, scripts } = this;
      return JSON.stringify({ tags, scripts });
    }
  },
  mounted() {
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.src = "https://static.codepen.io/assets/embed/ei.js";
      document.head.appendChild(scriptEl);
    }
  }
};
</script>