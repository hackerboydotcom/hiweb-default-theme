<template>
  <div :class="'rating-stars ' + displayClass">
    <!-- Review stars -->
    <div class="mt-1" style="height: 1.5 rem">
      <div style="display: inline-block;">
        <div class="mr-3" style="color: #ffab00"> 
          
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>

        </div>
      </div>
      <div style="display: inline-block;">
        <p> <a href="#" class="text-muted">{{ rating }} - {{ totalReviews }} reviews</a></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import mixin from './display-option-mixin';

export default {

  name: 'rating-stars',

  props: ['options'],

  mixins: [mixin],

  data() {

    return {
      rating: 4.8,
      totalReviews: 688
    };

  },

  created() {
    this.rating = this.options.rating.value;
    this.totalReviews = this.options.totalReviews.value;
  }

}
</script>