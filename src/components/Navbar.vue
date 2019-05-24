<template>
  <div id="navbar">

    <!-- Top -->
    <div class="container d-none d-sm-none d-md-block">
      <div class="row">
        <div class="col-lg-3 navbar__logo">

          <div class="row">
            <div class="col-8 col-md-12 text-center">

              <router-link to="/">
                <img :src="logo" class="logo" />
              </router-link>

            </div>
            <div class="col-4 d-block d-md-none pt-4 text-right pr-5">

              <router-link :to="{ name: 'cart.index' }">
                <strong style="position: relative;">
                  Cart <i class="fas fa-shopping-cart"></i> 
                  <span v-if="cart && cart.data.relationships.cart_items.data.length" class="badge badge-primary" style="position: absolute; top: -10px; right: -10px">{{ cart ? cart.data.relationships.cart_items.data.length : 0 }}</span>
                </strong>
              </router-link>

            </div>
          </div>
          
        </div>
        <div class="col-lg-6">
          
          <div class="pt-2">
            <input type="text" class="form-control form-control-lg" placeholder="What are you looking for?" v-model="searchProductTitle" v-on:keyup.enter="searchProducts" />
          </div>

        </div>
        <div class="col-lg-3 navbar__cart d-none d-md-block">

          <div class="row">
            <div class="col-8 text-right">
              <a href="/tracking"><i class="fas fa-search"></i> Tracking</a>
            </div>
            <div class="col-4 text-left">
              
              <router-link :to="{ name: 'cart.index' }">
                <strong style="position: relative;"><i class="fas fa-shopping-cart"></i> 
                  <span v-if="cart && cart.data.relationships.cart_items.data.length" class="badge badge-primary" style="position: absolute; top: -10px; right: -10px">{{ cart ? cart.data.relationships.cart_items.data.length : 0 }}</span>
                </strong>
              </router-link>

            </div>
          </div>
          
        </div>
      </div>
    </div>
      
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <router-link to="/" class="d-block d-sm-block d-md-none">
          <img :src="logo" class="logo-mobile" />
        </router-link>

        <router-link :to="{ name: 'cart.index' }" class="cart-mobile d-block d-sm-block d-md-none">
          <strong style="position: relative;"><i class="fas fa-shopping-cart"></i> 
            <span v-if="cart && cart.data.relationships.cart_items.data.length" class="badge badge-primary" style="position: absolute; top: -10px; right: -10px">{{ cart ? cart.data.relationships.cart_items.data.length : 0 }}</span>
          </strong>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link" href="#">Home</router-link>

            <router-link class="nav-item nav-link" :to="{ name: 'product.collection' }">
              All products
            </router-link>

            <!-- Show collections -->
            <template v-if="collections && collections.length">
              <template v-for="collection in childCollections(false)">

                <!-- Has child collections -->
                <li class="nav-item dropdown" v-if="childCollections(collection.id).length">
                  <router-link class="nav-link dropdown-toggle"  :to="{ name: 'collection.detail', params: { slug: collection.attributes.slug } }">
                    {{ collection.attributes.title }}
                  </router-link>
                  <div class="dropdown-menu pl-2">
                    <router-link v-for="childCollection in childCollections(collection.id)" :key="childCollection.id" class="nav-item nav-link" :to="{ name: 'collection.detail', params: { slug: childCollection.attributes.slug } }">
                      {{ childCollection.attributes.title }}
                    </router-link>
                  </div>
                </li>

                <!-- Has no child collections -->
                <router-link v-else class="nav-item nav-link" :to="{ name: 'collection.detail', params: { slug: collection.attributes.slug } }">
                  {{ collection.attributes.title }}
                </router-link>

              </template>
            </template>

            <router-link v-else class="nav-item nav-link" :to="{ name: 'collection.collection' }">
              Our collections
            </router-link>

            <a href="/tracking" class="nav-item nav-link d-block d-sm-block d-md-none">
              Order Tracking
            </a>

            <div class="nav-item d-block d-sm-block d-md-none pt-3 mt-2" style="border-top: 1px solid #e6e6e6;">
              <div class="input-group">
                <input type="text" class="form-control form-control-lg" placeholder="What are you looking for?" v-model="searchProductTitle" v-on:keyup.enter="searchProducts" />
                <div class="input-group-append">
                  <button class="btn btn-primary" @click="searchProducts">
                    <i class="fas fa-search"></i> Search
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>  
      </div>
        
    </nav>

  </div>

</template>

<style type="text/css" lang="scss">
#navbar {

  .container {
    justify-content: normal !important;
  }

  color: #b2bec3;
  font-size: 16px;

  input::placeholder {
     color: #e6e6e6;
  } 

  a {
    color: #b2bec3;
    font-weight: 700;
    font-size: 16px;
  }

  a:hover {
    color: #fc6514;
  }

  .navbar-nav .nav-link {
    margin-right: 0.8rem;
  }

  img.logo {
    height: 55px;
    margin-top: 3px;
    margin-bottom: 5px;
  }

  img.logo-mobile {
    height: 35px;
  }

  .navbar {
    background-color: transparent !important;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;

    @media(min-width: 960px) {
      height: 43px;
    }

    @media(max-width: 960px) {
      margin-top: 0px;

      #navbarNavAltMarkup {
        margin-top: 20px;
        border-top: 1px solid #f0f2f3;
      }

    }
    
  }

  .navbar-light .navbar-toggler {
    border: none;
    color: #fc6514;
  }

  .navbar-toggler-icon {
    background: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(252, 101, 20)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar__cart {
    padding-top: 20px;
  }

  .cart-mobile {
    position: absolute;
    right: 30px;
    top: 18px;
    color: #fc6514;
  }

  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
    top: 35px;
  }

}
</style>

<script type="text/javascript">
import $ from 'jquery';
import base from 'hiweb-vue-base-storefront';

export default {

  mixins: [base.mixins.components.navbar],

  data() {

    return {
      searchProductTitle: '',
      logo: (process.env.NODE_ENV === 'development' || (process.env.NODE_ENV === 'production' && !window.shop.logo)) ? require('@/assets/default.png') : this.$hiwebBase.image.resize(window.shop.logo.path, 250),
      collections: []
    };

  },

  created() {

    // Show collections in navbar
    if (this.$hiwebBase.options.getPageOption('global', 'show-collections-in-navbar').value === 'yes') {

      // Get collections
      this.$hiwebBase.api.get('collections').then(response => {

        this.collections = response.data.data;

      }).catch(e => {

      });

    }

  },

  methods: {

    childCollections(parentId) {

      let childCollections = [];

      for (let i = 0; i < this.collections.length; i++) {

        let match = false;

        if (!parentId && !this.collections[i].attributes.parent_id) {
          match = true;
        } else if (this.collections[i].attributes.parent_id === parentId) {
          match = true;
        }

        if (match) {
          childCollections.push(this.collections[i]);
        }

      }

      return childCollections;

    },

    searchProducts() {

      this.$router.push({
        name: 'products.collection',
        query: {
          title: this.searchProductTitle
        }
      });
      
      if ($(this.$el).find('.navbar-collapse').css('display') !== 'none') {
        $(this.$el).find('.navbar-toggler').click();
      }

    }

  },

  watch: {

    '$route': function() {

      if(this.$router.currentRoute.name === 'cart.index' || this.$router.currentRoute.name === 'checkout.index') {
        $('#float-mobile-cart-button').hide();
      } else {
        $('#float-mobile-cart-button').show();
      }

      $('#navbar-default').removeClass('show');

      if ($(this.$el).find('.navbar-collapse').css('display') !== 'none') {
        $(this.$el).find('.navbar-toggler').click();
      }
    }

  },

  mounted() {
    $(this.$el).find('.nav-link').click(() => {
      $(this.$el).find('.navbar-toggler').click();
    });
  }

}
</script>