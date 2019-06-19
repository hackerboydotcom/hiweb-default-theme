export default {

  computed: {

    displayClass: function() {

      if (typeof this.options === 'undefined' || typeof this.options.display === 'undefined') {
        return 'wtf1';
      }

      switch (this.options.display.value) {

        case 'all':
        return 'wtf2';
        break;

        case 'mobile':
        return 'd-block d-sm-none';
        break;

        case 'mobile-tablet':
        return 'd-block d-sm-block d-md-none';
        break;

        case 'desktop':
        return 'd-none d-sm-none d-md-block';
        break;

        default:
        return 'wtf3';
        break;

      }

    }

  }

}