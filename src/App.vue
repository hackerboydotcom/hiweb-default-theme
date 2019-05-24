<template>
  <div id="app">

    <Navbar />

    <div class="container pt-5">
      <router-view/>
    </div>

    <Footer />

  </div>
</template>

<style lang="scss">
$success: #15cd72;
$primary: #0984e3;

@import '~bootstrap/scss/bootstrap.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
@import '@/assets/scss/app.scss';
</style>

<script type="text/javascript">
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.app],

  components: { Navbar, Footer },

  created() {

  }

}
</script>