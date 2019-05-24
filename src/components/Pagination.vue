<template>

  <nav aria-label="..." v-if="!((numberOfResults && resultsPerPage && page === 1 && numberOfResults < resultsPerPage) || !numberOfResults)">
    <ul class="pagination pagination-lg">
      <li class="page-item" v-on:click="previous" v-if="page > 1">
        <span class="page-link">
          <i class="fa fa-angle-left"></i>
          <span class="sr-only">Previous</span>
        </span>
      </li>

      <li class="page-item active">
        <a class="page-link" href="#">{{ page }}</a>
      </li>

      <li class="page-item" v-on:click="next" v-if="(numberOfResults && resultsPerPage && numberOfResults == resultsPerPage) || !resultsPerPage">
        <span class="page-link">
          <i class="fa fa-angle-right"></i>
          <span class="sr-only">Next</span>
        </span>
      </li>
    </ul>
  </nav>

</template>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.components.pagination]

}
</script>