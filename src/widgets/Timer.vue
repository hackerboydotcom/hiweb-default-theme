<template>
  <div class="product-timer">
    <div class="">
      <i class="far fa-clock mr-2"></i>
      <p class="product-timer__countdown" v-html="timer"></p>
    </div>
  </div>
</template>

<style type="text/css" lang="scss">
.product-timer {

  i {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #fc6514;
  }

  .product-timer__countdown {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    color: #fc6514;
    margin-bottom: 0px;
  }

  @media(max-width: 768px) {
    border-top: 1px solid #f0f2f3;
    border-bottom: 1px solid #f0f2f3;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: center;
  }
  

}
</style>

<script type="text/javascript">
import $ from 'jquery';

export default {

  name: 'timer',

  data() {

    return {
      timer: null
    };

  }, 

  created() {

    // Set the date we're counting down to
    var countDownDate = new Date(Date.now() + 2.5*3600*1000).getTime();

    // Update the count down every 1 second
    var x = setInterval(() => {

      // Get todays date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      this.timer = '<span>' + hours + '</span>:<span>'
      + minutes + '</span>:<span>' + seconds + '</span><span class="ml-2" style="color: #fdc1a1">left to buy</span>';
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        this.timer = "EXPIRED";
      }
    }, 1000);

  }
}
</script>