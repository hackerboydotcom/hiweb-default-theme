<template>
  <div id="page-detail">
    
    <loader v-if="isLoading" />

    <template v-if="pageJsonApi">
      
      <h1>{{ pageJsonApi.document.data.attributes.title }}</h1>
      <p>{{ pageJsonApi.document.data.attributes.description }}</p>
      <hr />

      <article v-html="pageJsonApi.document.data.attributes.content"></article>

    </template>

  </div>
</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.page.detail],

}
</script>