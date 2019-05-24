<template>
  <div v-if="options.images.value && options.images.value.length" :id="id" class="carousel slide" data-ride="carousel" :data-interval="options.interval.value ? parseInt(options.interval.value)*1000 : 'false'">

    <!-- Indicators -->
    <ol v-if="options.indicators && options.indicators.value === 'yes'" class="carousel-indicators">
      <li v-for="image, index in options.images.value" :data-target="'#' + id" :data-slide-to="index" :class="!index ? 'active' : ''"></li>
    </ol>
    
    <div class="carousel-inner">
      <div v-for="image, index in options.images.value" :class="'carousel-item ' + (!index ? 'active' : '')">
        <img :src="image" />
      </div>
    </div>

    <!-- Control button -->
    <template v-if="options.control && options.control.value === 'yes'">
      <a class="carousel-control-prev" :href="'#' + id" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" :href="'#' + id" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </template>

  </div>
</template>

<script type="text/javascript">
export default {

  props: ['options'],
  name: 'slide',

  data() {

    return {
      id: 'slide-' + (new Date()).getTime() // Generate id
    };

  },

}
</script>