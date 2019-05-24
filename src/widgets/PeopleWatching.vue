<template>
  <div class="people-watching-widget">
    <div class="text text-center text-muted"><span class="count">{{ count }}</span> people watching this product</div>
  </div>
</template>

<style type="text/css" lang="scss">
.people-watching-widget {

  .count {
    font-weight: 700;
    animation: fadein 2s infinite;
  }
  
}

@keyframes fadein {
  from { opacity: 0.6; }
  to   { opacity: 1; }
}
</style>

<script type="text/javascript">
export default {

  name: 'people-watching',

  props: {
    min: {
      type: Number,
      default: 8
    },
    max: {
      type: Number,
      default: 15
    }
  },

  data() {

    return {
      count: Math.floor((Math.random() * this.max) + this.min)
    };

  },

  created() {

    setInterval(() => {

      let adjust = Math.floor((Math.random() * 3) + 1);
      let adjustType = Math.floor((Math.random() * 100) + 0) > 50 ? true : false;

      if (adjustType) {

        if (this.count > this.max * 2) {
          this.count -= adjust;
        } else {
          this.count += adjust;
        }

      } else {

        if (this.count > this.min) {
          this.count -= adjust;
        } else {
          this.count += adjust;
        }
      
      }

    }, 8000);

  }

}
</script>