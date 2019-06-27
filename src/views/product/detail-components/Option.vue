<template>
  <div class="product-detail__option">

    <!-- Option name -->
    <div class="mb-2">
      <strong>{{ option.name }}</strong>
      <template>
        <span>: {{ selectedOptionValue }}</span>
      </template>
      <span v-if="option.option_guide_id" class="product-detail__option__option-guide" @click="showOptionGuide">
        {{ option.name }} Guide
        <div class="product-detail__option__option-guide__loader" style="display: none">
          <Loader />
          <span>Wait a sec...</span>
        </div>
      </span>
    </div>

    <!-- Option color selector -->
    <template v-if="false">
      <div class="row">
        <div class="text-center col-2" v-for="optionValue in optionValues" v-if="show(optionValue.id)">

          <div class="product-detail__option__option-value product-detail__option__option-value--color">
            <div :class="'product-detail__option__option-value__color-circle ' + (checkActive(optionValue.id) ? 'active' : '')" @click="changeOptionValue(optionValue.id)">
              <div :style="'background: ' + optionValueColorMap[optionValue.attributes.value]"></div>
            </div>
          </div>
            
        </div>
      </div>
    </template>

    <!-- Option default selector -->
    <template v-else>

      <div v-if="false" style="margin-left: -8px; margin-right: -8px;">
        <div :class="'product-detail__option__default-select ' + (optionValueMaxLength() > 3 ? 'product-detail__option__default-select--long' : '')" v-for="optionValue in optionValues" v-if="show(optionValue.id)" @click="changeOptionValue(optionValue.id)">
          <div :class="'text-center product-detail__option__option-value text-center product-detail__option__option-value--default ' + (checkActive(optionValue.id) ? 'active' : '')">
            <span>{{ optionValue.attributes.value }}</span>
          </div>
        </div>
      </div>

      <div v-else>
        <select v-model="selectedOptionValue">
          <option :value="null">Select an option</option>
          <option v-for="optionValue, index in option.values" :key="index" :value="optionValue">{{ optionValue }}</option>
        </select>
        <div style="clear: both;"></div>
      </div>

    </template>

  </div>
</template>

<style type="text/css" lang="scss">
.product-detail__option__option-value--default {
  padding: 12px;
  border: 1px solid #b2bec3;
  border-radius: 5px;
  cursor: pointer;
}

.product-detail__option__option-value--default.active {
  background: #0984e3;
  color: white;
  border: 1px solid transparent;
}

.product-detail__option__option-value--color {
  border: none;
}

.product-detail__option__option-value__color-circle {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  position: relative;
}

.product-detail__option__option-value__color-circle.active, .product-detail__option__option-value__color-circle:hover {
  border: 1px solid #0984e3;
}

.product-detail__option__option-value__color-circle div {
  width: 36px;
  height: 36px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  border-radius: 18px;
  margin-top: 1px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  position: relative;
}

.product-detail__option__default-select {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 20%;
  display: inline-block;
}

.product-detail__option__default-select--long {
  width: 33% !important;
}

.product-detail__option {

  .nice-select {
    width: 100%;

    ul.list {
      width: 100%;
      margin-top: -50px;
      margin-left: 0px;
    }
  }

  .product-detail__option__option-guide {
    float: right;
    color: #b2bec3;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-transform: capitalize;
    text-decoration: underline;
  }

}
</style>

<script type="text/javascript">
import base from 'hiweb-vue-base-storefront';

import swal from 'sweetalert2';
import $ from 'jquery';

import Loader from '@/components/Loader';

export default {

  mixins: [base.mixins.product.components.option],

  components: { Loader },

  data() {

    return {
      optionGuide: null
    };

  },

  created() {

  },

  mounted() {
    this.destroyNiceSelect();
    this.activeNiceSelect();
  },

  methods: {

    optionValueMaxLength() {

      let max = 0;

      for (let i = 0; i < this.option.values.length; i++) {

        let optionValue = this.option.values[i];

        if (optionValue.length > max) {
          max = optionValue.length;
        }

      }

      return max;

    },

    activeNiceSelect() {

      $(document).ready(() => {
        
        let superObject = this;

        let findElement = setInterval(() => {

          let element = $(this.$el).find('select');

          if (!element.length) {
            return;
          }

          element.niceSelect();
          element.change(function() {

            superObject.selectedOptionValue = $(this).val();

          });

          clearInterval(findElement);

          if (this.activeVariant) {
            $(this.$el).find('.nice-select .current').html(this.activeVariant.attributes['option' + (this.index + 1)]);
          }

        }, 100);

        
      });

    },

    destroyNiceSelect() {

      if (this.optionValueMaxLength() <= 10) {
        return;
      }

      $(document).ready(() => {
          
          let superObject = this;

          let findElement = setInterval(() => {

            let element = $(this.$el).find('select');

            if (!element.length) {
              return;
            }

            element.niceSelect('destroy');
            clearInterval(findElement);

          }, 100);

          
        });

    },

    async showOptionGuide() {

      // If option guide is not loaded
      if (!this.optionGuide) {

        swal.fire({
          html: $(this.$el).find('.product-detail__option__option-guide__loader').html(),
          showConfirmButton: false
        });

        this.optionGuide = await this.getOptionGuide().catch(error => {});

      }

      swal.fire({
        title: this.optionGuide.attributes.title,
        html: this.optionGuide.attributes.content,
        confirmButtonText: 'I got it',
        showCloseButton: true
      });

    }

  },

  watch: {

  }

}
</script>