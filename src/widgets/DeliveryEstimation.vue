<template>
  <div id="delivery-estimation" :class="'card mt-2 mb-2 ' + displayClass">
    <div class="card-body">
      
      <div class="row">
        <div class="col-2 text-center">
          <img src="data:image/png;base64,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" style="height: 80%;">
        </div>
        <div class="col">
          <strong>Estimated Delivery Date: {{ estimatedDate }}</strong>
          <p>Each product is handcrafted only for you so the production time will be a little bit longer than usual. Please be patient ;)</p>
        </div>
      </div>

      <div class="row">
        <div class="col-2 text-center">
          <img src="data:image/png;base64,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" style="height: 80%;">
        </div>
        <div class="col">
          <strong>24/7 Customer Support</strong>
          <p>If you have any question - please let me know. All of your questions will be answered by me within 6 hours :)</p>
        </div>
      </div>

      <div class="row">
        <div class="col-2 text-center">
          <img src="data:image/png;base64,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" style="height: 80%;">
        </div>
        <div class="col">
          <strong>Love It or Get 100% Refund!</strong>
          <p>I'm 100% confident that you'll love this quilt. But if you don't? Just tell me to return it and get <strong>100% REFUND!</strong> No question asked!</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
import $ from 'jquery';
import mixin from './display-option-mixin';

export default {

  name: 'delivery-estimation',

  mixins: [mixin],

  props: {

    options: {
      type: Object
    },

    days: {
      type: Number,
      default: 6
    }

  },

  data() {

    let date = new Date(Date.now() + this.days*86400*1000);

    return {
      location: '',
      estimatedDate: date.getDate() + ', ' + date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getFullYear()
    };

  },

  created() {

  }

}
</script>