<template>
  
  <div class="product-box mb-3">
    <div class="card">
      <router-link :to="{ name: 'product.detail', params: { slug: product.attributes.slug } }">
        <img :src="$hiwebBase.image.resize(image, 360, true)" class="card-img-top" :alt="product.attributes.title">
      </router-link>
      <div class="card-body">
        <h5 class="card-title" :title="product.attributes.title"><router-link :to="{ name: 'product.detail', params: { slug: product.attributes.slug } }">{{ product.attributes.title }}</router-link></h5>
        <strong class="product-box__price">{{ $hiwebBase.currency.formatted(product.attributes.min_price) }}</strong>
      </div>
    </div>
  </div>

</template>

<style type="text/css" lang="scss">
.product-box {

  .card-body {
    padding: 15px;
  }

  .card-title {
    margin-bottom: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-title a {
    font-size: .875rem;
    line-height: 1.5;
    color: #2d3436;
    font-weight: normal;
  }

  a:hover {
    text-decoration: none;
  }

  .product-box__price {
    color: #d63031;
  }

}
</style>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.components.productBox]

};
</script>