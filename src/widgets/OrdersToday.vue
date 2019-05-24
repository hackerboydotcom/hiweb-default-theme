<template>
  <div id="orders-today">
    <div class="card">
      <div class="card-body">
        <div class="text-center">
          {{ orderCount }} orders today
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {

  name: 'orders-today',

  props: ['productJsonApi'],

  data() {

    return {
      orderCount: 5,
    };

  },

  created() {

    let localStorage = window.localStorage;
    let orderCount = localStorage.getItem('order-count-' + this.productJsonApi.document.data.id);

    if (!orderCount) {
      orderCount = Math.floor((Math.random() * 100) + 20);
      localStorage.setItem('order-count-' + this.productJsonApi.document.data.id, orderCount);
    }

    return this.orderCount = orderCount;

  }

}
</script>