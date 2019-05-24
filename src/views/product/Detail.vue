<template>
  
  <div id="product-detail">
    
    <Error v-if="error" :error="error" />

    <loader v-if="isLoading" />

    <!-- Product loaded -->
    <template v-if="!isLoading && productJsonApi">
      <div class="row">

        <div class="col-12" style="margin-top: -38px">
          <breadcrumb :jsonapi="productJsonApi" />
        </div>
          
        <!-- Images -->
        <div class="col-md-8">

          <!-- Section: before-product-images -->
          <div v-for="componentData in $hiwebBase.options.getSectionComponents('product', 'before-product-images')" class="mb-3">
            <component v-bind:is="componentData.key" :options="componentData.options" :product-json-api="productJsonApi" :active-variant="activeVariant" />
          </div>

          <Images :images="images" />

          <!-- Section: after-product-images -->
          <div v-for="componentData in $hiwebBase.options.getSectionComponents('product', 'after-product-images')" class="mb-3">
            <component v-bind:is="componentData.key" :options="componentData.options" :product-json-api="productJsonApi" :active-variant="activeVariant" />
          </div>

        </div>

        <!-- Product detail -->
        <div class="col-md-4">
          
          <!-- Product title -->
          <h1 class="product-detail__title">{{ productJsonApi.document.data.attributes.title }}</h1>

          <!-- Section: after-product-title -->
          <div v-for="componentData in $hiwebBase.options.getSectionComponents('product', 'after-product-title')" class="mb-3">
            <component v-bind:is="componentData.key" :options="componentData.options" :product-json-api="productJsonApi" :active-variant="activeVariant" />
          </div>

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
              <p> <a href="#" class="text-muted">4.5 - 688 reviews</a></p>
            </div>
          </div>

          <!-- Price -->
          <div v-if="activeVariant" style="margin-top: 0.1rem">
            <strong class="text-danger product-detail__price">{{ $hiwebBase.currency.formatted(activeVariant.attributes.price * qty) }}</strong>
            <template v-if="activeVariant.attributes.compare_at_price">
              <span class="ml-2 product-detail__compare-at-price">
                {{ $hiwebBase.currency.formatted(activeVariant.attributes.compare_at_price*qty) }}
              </span>
            </template>

            <!-- Timer mobile -->
            <div class="product-detail__timer pt-2 d-block d-sm-block d-md-none" v-if="activeVariantId">
              <!--<Timer />-->
              <!--<InStock :product-id="activeVariantId" min="2" max="15" />-->
            </div>
          </div>
          
          <div v-else>
            <strong class="text-danger" style="font-size: 32px; display: inline-block; font-weight: 700;">
              From {{ $hiwebBase.currency.formatted(productJsonApi.document.data.attributes.min_price * qty) }}
            </strong>
          </div>

          <!-- Section: after-product-price -->
          <div v-for="componentData in $hiwebBase.options.getSectionComponents('product', 'after-product-price')" class="mb-3">
            <component v-bind:is="componentData.key" :options="componentData.options" :product-json-api="productJsonApi" :active-variant="activeVariant" />
          </div>

          <!-- Options -->
          <template v-if="productJsonApi.document.data.relationships.options.data.length">
              <div class="mt-4" v-for="option, index in productJsonApi.findRelationshipResources(productJsonApi.document.data, 'options')">
                  <Option :option="option" :showAllOptions="productJsonApi.document.data.relationships.options.data.length > 1 && index === 0" :option-values="productJsonApi.findRelationshipResources(option, 'option_values')" :active-variant="activeVariant" />
              </div>
          </template>

          <!-- Qty -->
          <div class="product-detail__qty mt-4 pt-2">

            <div class="mb-3">
              <strong >Qty:</strong> <span class="ml-2 text-muted">{{ qty }}</span>
            </div>
            
            <div class="row">
              <div class="col-3">
                
                <select v-model="qty" class="" style="width: 80px">
                  <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                </select>

              </div>
              <div class="col-9">
                
                <!-- Timer -->
                <div class="product-detail__timer d-none d-sm-none d-md-block" v-if="activeVariantId">
                  <!--<Timer />-->
                  <!--<InStock :product-id="activeVariantId" min="2" max="15" />-->
                </div>

              </div>
            </div>
                
          </div>

          <!-- Section: before-product-buy-button -->
          <div v-for="componentData in $hiwebBase.options.getSectionComponents('product', 'before-product-buy-button')" class="mb-3">
            <component v-bind:is="componentData.key" :options="componentData.options" :product-json-api="productJsonApi" :active-variant="activeVariant" />
          </div>

          <!-- Buy button -->
          <button class="btn btn-icon btn-3 btn-primary btn-lg btn-block mt-3 product-detail__add-to-cart" type="button" :disabled="addingToCart" @click="addToCart">
            <span v-if="!addingToCart" class="btn-inner--text">Buy It Now</span>
            <span v-else class="btn-inner--text">Adding to cart</span>
          </button>

          <!-- After section -->
          <!-- Section: after-product-buy-button -->
          <div v-for="componentData in $hiwebBase.options.getSectionComponents('product', 'after-product-buy-button')" class="mb-3">
            <component v-bind:is="componentData.key" :options="componentData.options" :product-json-api="productJsonApi" :active-variant="activeVariant" />
          </div>

          <!-- Product content -->
          <hr style="margin-top: 2rem;" />
          <h3 class="content-heading">Product detail</h3>
          <div v-if="productJsonApi.document.data.attributes.description" class="mb-3">
            <small class="text-muted">{{ productJsonApi.document.data.attributes.description }}</small>
          </div>
          <div v-html="productJsonApi.document.data.attributes.content"></div>

          <!-- Section: after-product-detail -->
          <div v-for="componentData in $hiwebBase.options.getSectionComponents('product', 'after-product-content')" class="mb-3">
            <component v-bind:is="componentData.key" :options="componentData.options" :product-json-api="productJsonApi" :active-variant="activeVariant" />
          </div>

        </div>

        <!-- Product content -->
        <!--<div class="col-12 mt-5 product-detail__content">

          <div class="row">
            <div class="col-md-7">
                
              <ul class="nav nav-tabs mb-3">
                <li class="nav-item">
                  <span :class="'nav-link ' + (activeTab === 'detail' ? 'active' : '')" style="cursor: pointer;" @click="setActiveTab('detail')">Product detail</span>
                </li>
              </ul>

              <div v-if="activeTab === 'detail'">
                <article style="padding:10px" v-html="productJsonApi.document.data.attributes.content"></article>
              </div>

              <div v-if="activeTab === 'reviews'">
                <CustomerReviews />
              </div>

            </div>
          </div>
              

        </div>-->

          

        <!-- Related products -->
        <div class="col-12" style="margin-top: 100px;" v-if="tagIds && tagIds.length">
          <RelatedProducts :tag-ids="tagIds" :exclude-ids="[this.productJsonApi.document.data.id]" />
        </div>

        <!-- Product reviews -->
        <div class="d-none" id="customer-reviews">
          <!--<CustomerReviews />-->
        </div>

      </div>
    </template>

  </div>

</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';
import $ from 'jquery';

import Images from '@/views/product/detail-components/Images';
import Option from '@/views/product/detail-components/Option';
import RelatedProducts from '@/components/RelatedProducts';

// Widgets
import DeliveryEstimation from '@/widgets/DeliveryEstimation';
import InStock from '@/widgets/InStock';
import OrdersToday from '@/widgets/OrdersToday';
import PeopleWatching from '@/widgets/PeopleWatching';
import Timer from '@/widgets/Timer';

export default {

  mixins: [base.mixins.product.detail],

  components: { Images, Option, RelatedProducts,
    DeliveryEstimation, InStock, OrdersToday, PeopleWatching, Timer
  },

  mounted() {
    this.activeNiceSelect();
  },

  methods: {

    // Nice select for qty btn
    activeNiceSelect() {

      $(document).ready(() => {
        
        let superObject = this;

        let findElement = setInterval(() => {

          let element = $(this.$el).find('.product-detail__qty select');

          if (!element.length) {
            return;
          }

          element.niceSelect();
          element.change(function() {
            superObject.qty = $(this).val();
          });

          clearInterval(findElement);

        }, 100);

        
      });

    },

  },

  watch: {

    slug: function() {
      this.activeNiceSelect();
    }

  }

}
</script>

<style type="text/css" lang="scss" scoped>
.swal2-close {
  z-index: 10000000;
}
#product-detail {

  .product-detail__title {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5;
    text-rendering: optimizeSpeed;

    @media(max-width: 768px) {
      font-size: 1rem;
    }

  }

  .product-detail__price {
    font-size: 36px; 
    display: inline-block; 
    font-weight: 700;

    @media(max-width: 768px) {
      font-size: 1.5rem;
    }

  }

  .product-detail__compare-at-price {
    font-size: 1.5rem; 
    line-height: 1.5; 
    margin-left: .5rem; 
    font-weight: lighter; 
    text-decoration: line-through; 
    display: inline-block;

    @media(max-width: 768px) {
      font-size: 1.25rem;
    }

  }

  .product-detail__add-to-cart {
    height: 55px;
    font-weight: bolder;
  }

  .product-detail__timer {
    margin-top: 10px;
  }

  .nice-select {
    height: 50px;

    .current {
      line-height: 50px;
    }
  }

  hr {
    border-top: 1px solid #f0f2f3 !important;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .content-heading {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 700;
    color: #2d3436;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0px !important;
  }

}
</style>