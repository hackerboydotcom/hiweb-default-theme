<template>
  <div class="related-products" v-if="tagIds && tagIds.length">
    <h3 v-if="relatedProductsJsonApi && typeof relatedProductsJsonApi.document.data !== 'undefined' && relatedProductsJsonApi.document.data.length" class="mb-3">You may also like:</h3>

    <loader v-if="isLoading" />

    <template v-else>
      <div class="row">
        <div class="col-lg-3 col-6 mb-5" v-for="product in relatedProductsJsonApi.document.data">
          <product-box :product="product" :variant="relatedProductsJsonApi.findRelationshipResource(product, 'variants')" :image="relatedProductsJsonApi.findRelationshipResource(product, 'image')" />
        </div>
      </div>
    </template>

  </div>
</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

export default {

  name: 'related-products',

  mixins: [base.mixins.components.relatedProducts]

}
</script>