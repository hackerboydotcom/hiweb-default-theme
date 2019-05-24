<template>

  <nav aria-label="breadcrumb pl-0" v-if="links">
    <ol class="breadcrumb ml-0 pl-0">

      <template v-for="link, index in links">
        
        <li v-if="index < links.length - 1" class="breadcrumb-item">
          <template v-if="typeof link.to === 'object'">
            <router-link :to="link.to">{{ link.text }}</router-link>
          </template>
          <a v-else :href="link.to">{{ link.text }}</a>
        </li>

        <li v-else class="breadcrumb-item active" aria-current="page">{{ link.text }}</li>

      </template>
            
    </ol>
  </nav>

</template>

<style type="text/css" lang="scss">
.breadcrumb {
  background-color: transparent;
  font-size: .75rem;
  line-height: 1.5;
}
</style>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.components.breadcrumb]

}
</script>