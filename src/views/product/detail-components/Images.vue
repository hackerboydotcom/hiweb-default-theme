<template>
  
  <div id="product-detail__images">

    <div class="d-none d-sm-none d-md-block">
      <div class="row" v-if="images">

        <div class="col-2 d-none d-md-block">
          <div class="row">
            <div class="col-9">

              <div :class="'mb-3 card product-detail__images__image-select' + (image.id === activeImage.id ? ' active' : '')" v-for="image in images" :key="image.id">
                <div class="card-body">
                  <img :src="$hiwebBase.image.resize(image, 65, true)" @click="setActiveImageId(image.id)" />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-md-10 col-12">
          <a :href="$hiwebBase.image.url(activeImage)" target="_blank" title="Click for full size">
            <img :src="$hiwebBase.image.resize(activeImage, 600)" style="width: 100%" />
          </a>
        </div>

        <div class="col-12 mt-3 d-block d-md-none">
          <div class="row">
            <div class="mb-2 col-3" v-for="image in images" :key="image.id">
              <img :src="$hiwebBase.image.resize(image, 100, true)" @click="setActiveImageId(image.id)" />
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Carousel for mobile -->
    <div id="product-images-mobile" class="carousel slide d-block d-sm-block d-md-none" style="margin-bottom: 35px;" data-ride="carousel" data-interval="false">
      <ol class="carousel-indicators">
        <li v-for="image, index in images" data-target="#product-images-mobile" :data-slide-to="index" :class="!index ? 'active' : ''"></li>
      </ol>
      <div class="carousel-inner">
        <div :class="'carousel-item ' + (!index ? 'active' : '')" v-for="image, index in images">
          <img class="d-block w-100" :src="$hiwebBase.image.resize(image, windowWidth)" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#product-images-mobile" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#product-images-mobile" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  </div>

</template>

<style type="text/css" lang="scss">
.product-detail__images__image-select .card-body {
  padding: 2px;
  border-radius: 5px;
}

.product-detail__images__image-select.active {
  border: 1px solid #0984e3;
}

#product-detail__images {

  .carousel-indicators {
    bottom: -50px;
  }

  .carousel-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #636e72;
  }

  .carousel-control-prev {
    color: #636e72;
  }

}
</style>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';
import $ from 'jquery';

export default {

  mixins: [base.mixins.product.components.images],

  mounted() {

    $(this.$el).find('.carousel-indicators li[data-slide-to=0]').click();

  },

  computed: {

    windowWidth: function() {
      return $(window).width();
    }

  }
}
</script>