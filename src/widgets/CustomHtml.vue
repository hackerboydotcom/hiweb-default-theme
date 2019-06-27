<template>
  <div :class="'custom-html ' + displayClass" v-html="html"></div>
</template>

<script type="text/javascript">
import mixin from './display-option-mixin';

export default {

  name: 'custom-html',

  mixins: [mixin],

  data() {
    return {
      html: ''
    };
  },

  created() {
    this.html = this.options.html.value;
  }
}
</script>