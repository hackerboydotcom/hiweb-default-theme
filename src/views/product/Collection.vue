<template>
  
  <div id="product-collection">
    <h1>Our products</h1>
    <hr />
    <div class="row">

      <div class="col-md-3">
        <div class="form-group">
          <label>Search by title</label>
          <input type="text" class="form-control form-control-lg" placeholder="Product title" v-model="searchTitle" />
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>Search by tag name</label>
          <input type="text" class="form-control form-control-lg" placeholder="Tag" v-model="searchTagName" />
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>By collection</label>
          <select class="form-control form-control-lg" v-model="searchCollectionId">
            <option value="">Select</option>

            <template v-if="collectionsJsonApi">
              <option v-if="typeof collectionsJsonApi.document.data !== 'undefined' && collectionsJsonApi.document.data.length" v-for="collection in collectionsJsonApi.document.data" :value="collection.id">
                {{ collection.attributes.title }} ({{ collection.attributes.product_count }} product{{ collection.attributes.product_count > 1 ? 's' : '' }})
              </option>
            </template>

          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <label>Sort by</label>
          <select class="form-control form-control-lg" v-model="sortingMode">
            <option value="latest">Newest</option>
            <option value="best-seller">Best seller</option>
            <option value="price-high-to-low">Price: High to low</option>
            <option value="price-low-to-high">Price: Low to high</option>
          </select>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-group">
          <button class="btn btn-block btn-success btn-lg" @click="loadProducts(1)">Search</button>
        </div>
      </div>

    </div>
    <hr />

    <loader v-if="isLoading" />

    <div class="row mt-5" v-if="productsJsonApi && typeof productsJsonApi.document.data !== 'undefined' && productsJsonApi.document.data.length">
      <div class="col-md-4 col-lg-3 col-sm-6 col-6" v-for="product in productsJsonApi.document.data">
        
        <product-box :product="product" :image="productsJsonApi.findRelationshipResource(product, 'image')" />

      </div>

      <div class="col-12 mt-3">
        <Pagination :number-of-results="productsJsonApi.document.data.length" :results-per-page="productLimit" />
      </div>

    </div>

    <p v-else class="text-center">No product found</p>

  </div>

</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

import Pagination from '@/components/Pagination';

export default {

  mixins: [base.mixins.product.collection],

  components: { Pagination }

}
</script>