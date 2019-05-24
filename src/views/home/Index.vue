<template>
  <div id="home">
    
    <!-- Home page section -->
    <div v-for="componentData in $hiwebBase.options.getSectionComponents('home', 'home')" class="mb-5">
      <component v-bind:is="componentData.key" :options="componentData.options" />
    </div>

    <!-- Show latest products -->
    <div v-if="$hiwebBase.options.getPageOptions('home')['show-products'].value === 'yes' && productsJsonApi" class="row">
      
      <div class="col-md-3 col-6 mb-3" v-for="product in productsJsonApi.document.data">
        <product-box :product="product" :image="productsJsonApi.findRelationshipResource(product, 'image')" />
      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.home.index]

}
</script>