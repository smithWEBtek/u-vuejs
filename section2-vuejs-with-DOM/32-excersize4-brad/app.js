new Vue({
  el: ' #exercise',
  data: {
    currentClass: 'highlight',
    inputClassName: 'type from list',
    userInputClassName: null,
    width: 50
  },
  methods: {
    startEffect: function () {
      this.currentClass === 'highlight' ? this.currentClass = 'shrink' : this.currentClass = 'highlight';
    },
    stopEffect: function () {
      this.currentClass = 'highlight'
    },
    startProgressBar: function () {
      this.width += 20
    }
  },
  watch: {
    currentClass: function () {
      console.log('watching ...')
      var vm = this; setInterval(function () {
        vm.currentClass === 'highlight' ? vm.currentClass = 'shrink' :
          vm.currentClass = 'highlight'
      }, 3000);
    }
  },
  computed: {
    myStyle: function () {
      let vm = this
      return {
        backgroundColor: this.color,
        width: this.progressBar.width += 10 + 'px'
      }
    }
  }
});
