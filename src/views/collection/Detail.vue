<template>
  <div class="collection">

    <template v-if="!collectionJsonApi">
      <loader />
    </template>

    <template v-if="error">
      <h3>Error!</h3>
      <p>{{ error }}</p>
    </template>

    <div v-if="collectionJsonApi && !error" class="row">

      <div class="col-12" style="margin-top: -30px">
        <breadcrumb :jsonapi="collectionJsonApi" />
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <h1 class="collection__heading">{{ collectionJsonApi.document.data[0].attributes.title }}</h1>
        <p v-if="collectionJsonApi.document.data[0].attributes.description">{{ collectionJsonApi.document.data[0].attributes.description }}</p>
        
        <template v-if="childCollections.length">
          <hr />

          <!-- Child collections -->
          <div v-for="childCollection in childCollections" class="card mb-3">

            <div class="row">
              <div class="col-4">
                <router-link :to="{ name: 'collection.detail', params: { slug: childCollection.attributes.slug } }">
                  <img :src="$hiwebBase.image.resize(collectionsJsonApi.findRelationshipResource(childCollection, 'image'), 200, true)" :title="childCollection.attributes.title" :alt="childCollection.attributes.description" />
                </router-link>
              </div>

              <div class="col-8 pl-0 pt-2">
                <router-link :to="{ name: 'collection.detail', params: { slug: childCollection.attributes.slug } }" :title="childCollection.attributes.title">
                  <strong style="color: black;">{{ childCollection.attributes.title }}</strong>
                </router-link>
                <div><small>({{ childCollection.attributes.product_count }} product{{ childCollection.attributes.product_count > 1 ? 's' : '' }})</small></div>
              </div>
            </div>

          </div>
          <!-- End child collections -->

        </template>

      </div>

      <!-- Products -->
      <div class="col-12 col-md-8 col-lg-9">
        
        <div class="text-center" v-if="!isLoadingProducts && !productsJsonApi">
            <h5 class="text-muted text-center">No product found</h5>
        </div>

        <div class="row" v-if="productsJsonApi">

          <div class="col-12 text-right mb-5">
            <select class="form-control form-control-md collection__sort-by mb-3" v-model="sortingMode">
              <option value="">Newest</option>
              <option value="best-seller">Best seller</option>
              <option value="price-low-to-high">Price: Low to high</option>
              <option value="price-high-to-low">Price: High to low</option>
            </select>
          </div>

          <div class="col-6 col-lg-4 col-md-6 mb-5" v-for="product in productsJsonApi.document.data">
            <product-box :product="product" :image="productsJsonApi.findRelationshipResource(product, 'image')" />
          </div>
          <div class="col-12">
            <Pagination :number-of-results="productsJsonApi.document.data.length" :results-per-page="productLimit" />
          </div>
          <div class="col-12 mt-3">
            <template v-if="collectionJsonApi.document.data[0].attributes.content">
              <hr />
              <article class="text-muted" style="font-size: 15px" v-html="collectionJsonApi.document.data[0].attributes.content"></article>
            </template>
          </div>
        </div>

        <div class="col-12" v-if="isLoadingProducts">
          <loader />
        </div>

      </div>
      <!-- End products -->

    </div>

  </div>
</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

import Pagination from '@/components/Pagination';

export default {

  mixins: [base.mixins.collection.detail],

  components: { Pagination }

}
</script>

<style type="text/css" lang="scss" scoped>
.collection {

  .collection__heading {
    font-size: 2.25rem;
    line-height: 1.5;
    font-weight: 900;
  }

  a:hover {
    text-decoration: none;
  }

}

.collection__sort-by {

    @media(min-width: 960px) {
        width: 250px;
    }

    float: right;

}
</style>
