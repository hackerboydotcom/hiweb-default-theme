<template>
  <div id="customer-reviews" :class="'mt-2 mb-2 ' + displayClass">

    <!-- Review stars -->
    <div class="text-center">
      <div style="display: inline-block;">
        <img src="https://cloud.printabel.com/2019/5/7/23d671fa-cd83-496b-9bea-8d7a3aed96bb.png">
      </div>
      <div style="display: inline-block;">
        <div>
          <h3 class="text-muted">9.5 / 10 based on 688 reviews</h3>
        </div>
        <div v-if="false">
          <div style="margin-left: -10px;"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 374.77 69.02" width="300" height="50" v-html="rating(5)"></svg>
          </div>
        </div>
        
      </div>
    </div>

    <hr />

    <!-- Reviews -->
    <div class="row pt-3" v-for="review, index in reviews">
      <div class="col-3 text-center">
        <div class="mb-3" v-if="typeof review.avatar !== 'undefined' && review.avatar"><img class="customer-reviews__avatar" :src="review.avatar"></div>
        <strong style="font-size: 12px; line-height: 15px; font-weight: 900">{{ review.name }}</strong>
        <div v-if="typeof review.datetime !== 'undefined'"><small style="font-size: 10px; line-height: 12px">{{ review.datetime }}</small></div>

        <template v-if="review.image">
          <hr />
          <img :src="review.image">
        </template>

      </div>
      <div class="col-9 text-left">
        
        <h4 v-if="typeof review.title !== 'undefined' && review.title">{{ review.title }}</h4>

      
          <div style="color: rgb(255, 171, 0)">
            <i v-for="i in 5" :key="i" class="fas fa-star"></i>
          </div>

          <div class="text-primary" style="font-weight: 900; font-size: 12px;"><i class="fas fa-check"></i> Verified purchase</div>
          
        <p class="mt-3" v-if="typeof review.content !== 'undefined'" v-html="review.content"></p>

      </div>
      <div class="col-12" v-if="index < reviews.length - 1"><hr /></div>
    </div>

  </div>
</template>

<style type="text/css">
.customer-reviews__avatar {
  height: 80%;
  width: 80%;
  overflow: hidden;
  border-radius: 100%;
}
</style>

<script type="text/javascript">
import mixin from './display-option-mixin';

export default {

  mixins: [mixin],

  props: ['options'],

  data() {

    return {

      reviews: [

        {
          name: 'Glen Bampton',
          rating: 5,
          title: 'Tasteful shoes',
          content: 'Tasteful shoes - fits like a glove!',
          avatar: 'https://cloud.printabel.com/2019/4/24/b93e0e7d-6ad3-4b24-bb66-36950d253d0d.png',
          datetime: '3 hours ago'
        },

        {
          name: 'Cheryl Parkes',
          rating: 5,
          title: 'Fantastic',
          content: 'Fast delivery, cheapest price at the time for the colour I wanted, personal service - would definitely recommend. Purchased Dr Martens Gayle boots.',
          avatar: 'https://cloud.printabel.com/2019/4/24/98ed15ba-4159-4562-8b35-5c7c5a573d4b.png',
          datetime: '8 hours ago'
        },

        {
          name: 'Emilio Battaglia',
          rating: 5,
          title: 'Full Marks! Could not have expected better!',
          content: ' I accidentally discovered them looking for a pair of shoes online. Not only they beat other vendors by a distance on price, their customer service was exceptionally accessible, polite and responsive. I requested them to ship the pair the same day to arrive by the next. This is exactly what happened! The pair was with me in 24 hours! The box and the pair of shoes were undamaged and unscratched. No markings no anomaly, just how a brand new untouched pair should be! I will definitely look to buy my next pair from them. Very Impressed and Highly Recommended! ',
          avatar: 'https://cloud.printabel.com/2019/4/24/8cfb040e-b6f5-423a-aa67-6e0fc7999c65.png',
          datetime: '17 hours ago'
        },

        {
          name: 'Viv buckland',
          rating: 5,
          title: 'Excellent service',
          content: ' Thank you for your excellent service. I had to return the shoes as they were slightly too small. Our fault not yours. Had them returned and redelivered in under 10 days from start to finish. ',
          avatar: 'https://cloud.printabel.com/2019/4/24/50324897-ed81-454f-8685-44a0c6fce44d.png',
          datetime: 'Yesterday'
        },

        {
          name: 'Miranda Eldridge',
          rating: 4,
          title: 'Fantastic service, fast updates and shoes arrived well packaged.',
          content: ' Was disappointed that the shoes I wanted not in stock. But given option of cancelling order or waiting. Got an update when shoes finally in (2 weeks later) and then sent and arrived slightly earlier than expected. Service excellent.',
          avatar: 'https://resize.printabel.com/2019/4/24/fcedd1b6-ff81-411c-bc7d-aa68199f644e.png?size=300&crop=1',
          datetime: 'Yesterday'
        },

        {
          name: 'Mr Holden',
          rating: 5,
          title: 'Good value and prompt delvery',
          content: ' Have used them before for street shoes and got good value and service. Ordered Ecco golf shoes and got the same experience. Will buy again. ',
          avatar: 'https://cloud.printabel.com/2019/4/24/194612d9-c8f1-4425-8e5f-2af2f6230540.png',
          datetime: 'Yesterday'
        }

      ]

    };

  },

  created() {

    if (typeof window.customerReviewsWidget !== 'undefined') {
      this.reviews = window.customerReviewsWidget;
    }

  },

  methods: {

    rating(rating) {

      let lastStar;

      if (rating === 4) {
        lastStar = `<path fill="#e6e6e6" d="M374.77 61.74c0 4.02-3.26 7.28-7.28 7.28H313c-4.02 0-7.28-3.26-7.28-7.28V7.28c0-4.02 3.26-7.28 7.28-7.28h54.46c4 0 7.27 3.26 7.27 7.28v54.46z"></path> 
        <path fill="#fff" d="M340.26 11.14l5.8 17.85h18.78l-15.2 11 5.8 17.84-15.18-11.03-15.18 11.04 5.8-17.85-15.2-11h18.78"></path> `;
      } else {
        lastStar = `<path fill="#73cf11" d="M374.77 61.74c0 4.02-3.26 7.28-7.28 7.28H313c-4.02 0-7.28-3.26-7.28-7.28V7.28c0-4.02 3.26-7.28 7.28-7.28h54.46c4 0 7.27 3.26 7.27 7.28v54.46z"></path> 
      <path fill="#fff" d="M340.26 11.14l5.8 17.85h18.78l-15.2 11 5.8 17.84-15.18-11.03-15.18 11.04 5.8-17.85-15.2-11h18.78"></path> `;
      }

      return `
      <path fill="#73cf11" d="M69.02 61.74c0 4.02-3.26 7.28-7.28 7.28H7.28C3.26 69.02 0 65.76 0 61.74V7.28C0 3.26 3.26 0 7.28 0h54.46c4.02 0 7.28 3.26 7.28 7.28v54.46z"></path> 
      <path fill="#fff" d="M34.5 11.14L40.3 29h18.8L43.9 40.02l5.8 17.85-15.2-11.03-15.18 11.03 5.8-17.85L9.94 29H28.7"></path> 
      
      <path fill="#73cf11" d="M145.46 61.74c0 4.02-3.26 7.28-7.28 7.28H83.72c-4.02 0-7.28-3.26-7.28-7.28V7.28C76.44 3.26 79.7 0 83.72 0h54.46c4.02 0 7.28 3.26 7.28 7.28v54.46z"></path> 
      <path fill="#fff" d="M110.95 11.14l5.8 17.85h18.77l-15.2 11 5.82 17.84-15.2-11.03-15.18 11.04 5.8-17.85-15.18-11h18.77"></path> 
      
      <path fill="#73cf11" d="M221.9 61.74c0 4.02-3.26 7.28-7.28 7.28h-54.46c-4.02 0-7.28-3.26-7.28-7.28V7.28c0-4.02 3.26-7.28 7.28-7.28h54.46c4.02 0 7.28 3.26 7.28 7.28v54.46z"></path> 
      <path fill="#fff" d="M187.4 11.14L193.2 29h18.76l-15.2 11.03 5.8 17.85-15.17-11.03-15.2 11.03 5.8-17.85L162.8 29h18.8"></path> 
      
      <path fill="#73cf11" d="M298.34 61.74c0 4.02-3.26 7.28-7.28 7.28H236.6c-4.02 0-7.28-3.26-7.28-7.28V7.28c0-4.02 3.26-7.28 7.28-7.28h54.46c4.02 0 7.28 3.26 7.28 7.28v54.46z"></path> 
      <path fill="#fff" d="M263.83 11.14l5.8 17.85h18.77l-15.2 11 5.8 17.84-15.17-11.03-15.2 11.04 5.8-17.85-15.17-11h18.77"></path> 
      
      ` + lastStar;

    }

  },

}
</script>