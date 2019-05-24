<template>
  <div id="pages">
    <Loader v-if="isLoading" />

    <template v-else>
      <h1>Pages</h1>
      <hr />

      <template v-if="pagesJsonApi">
        <div class="row mb-3" v-for="page in pagesJsonApi.document.data">
          <div class="col-3 text-center">
            <router-link :to="{ name: 'pages.detail', params: { slug: page.attributes.slug } }">
              <img :src="imageHelper.resize(pagesJsonApi.findRelationshipResource(page, 'image'))" />
            </router-link>
          </div>
          <div class="col-9">
            <h2><router-link :to="{ name: 'pages.detail', params: { slug: page.attributes.slug } }">{{ page.attributes.title }}</router-link></h2>
            <p>{{ page.attributes.description }}</p>
          </div>
        </div>
        <Pagination :number-of-results="pagesJsonApi.document.data.length" :results-per-page="pageLimit" />
      </template>

    </template>
    
  </div>
</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

import Pagination from '@/components/Pagination';

export default {

  mixins: [base.mixins.page.collection],

  components: { Pagination }

}
</script>