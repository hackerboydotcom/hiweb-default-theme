<template>
  <div :class="'in-stock-widget mt-2 mb-2 ' + displayClass">
    <p class="in-stock-widget__text">{{ count > 2 ? count : 2 }} items in stock</p>
  </div>
</template>

<style type="text/css" lang="scss">
.in-stock-widget {

  .in-stock-widget__text {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    color: #fc6514;
    margin-bottom: 0px;
  }

  @media(max-width: 768px) {
    border-top: 1px solid #f0f2f3;
    border-bottom: 1px solid #f0f2f3;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: center;
  }

}
</style>

<script type="text/javascript">
import mixin from './display-option-mixin';

export default {

  name: 'in-stock',

  props: ['productJsonApi', 'activeVariant', 'min', 'max', 'options'],

  mixins: [mixin],

  data() {

    return {
      count: 0
    };

  },

  created() {

    this.setCount();

  },

  methods: {

    setCount() {
      let localStorage = window.localStorage;
      let count = localStorage.getItem(this.storageKey);

      if (!count) {
        count = Math.floor((Math.random() * (this.max ? this.max : 15)) + (this.min ? this.min : 5));
        localStorage.setItem(this.storageKey, count);
      }

      return this.count = count;
    }

  },

  watch: {

    activeVariant: function() {
      this.setCount();
    }

  },

  computed: {

    storageKey: function() {

      if (this.activeVariant) {
        return 'in-stock-' + this.activeVariant.id;
      }

      return 'in-stock-' + this.productJsonApi.document.data.id;

    }

  }

}
</script>