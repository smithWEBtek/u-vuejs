new Vue({
  el: ' #exercise',
  data: {
    currentClass: 'highlight',
    inputClassName: 'type from list'
  },
  methods: {
    startEffect: function () {
      this.currentClass === 'highlight' ? this.currentClass = 'shrink' : this.currentClass = 'highlight';
    },
    stopEffect: function () { this.currentClass = 'highlight' }
  },
  watch: {
    currentClass: function () {
      console.log('watching ...')
      var vm = this; setInterval(function () {
        vm.currentClass === 'highlight' ? vm.currentClass = 'shrink' :
          vm.currentClass = 'highlight'
      }, 3000);
    }
  }
});
