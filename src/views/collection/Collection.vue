<template>
  
  <div id="collections">
    
    <h1>Our collections</h1>
    <hr />

    <loader v-if="isLoading" />

    <div v-if="collectionsJsonApi" class="row">
        
      <div class="col-sm-6 col-md-4 mb-3" v-for="collection in collectionsJsonApi.document.data">
        <div class="card">
          <router-link :to="{ name: 'collection.detail', params: { slug: collection.attributes.slug } }">
            <img :src="$hiwebBase.image.resize(findCollectionImage(collection), 360, true)" />
          </router-link>

          <div class="card-body">
            <h5 class="card-title text-center">
              <router-link :to="{ name: 'collection.detail', params: { slug: collection.attributes.slug } }">
                {{ collection.attributes.title }}
              </router-link>
            </h5>
            <p class="text-center">({{ collection.attributes.product_count }} product{{ collection.attributes.product_count > 1 ? 's' : '' }})</p>
          </div>

        </div>
      </div>

    </div>

    <div v-if="!isLoading && !collectionsJsonApi" class="text-center pt-5 text-muted">No results</div>

  </div>

</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.collection.collection]

}
</script>