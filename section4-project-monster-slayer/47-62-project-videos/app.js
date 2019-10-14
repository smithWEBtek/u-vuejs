new Vue({
  el: '#app',
  data: {
    playerHealth: 40,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    attack: function () {
      // lower the monsterHealthScore
    },
    specialAttack: function () {
      // lower the monsterHealthScore
      // increase myHealthScore
    },
    heal: function () {
      // increase myHealthScore
    },
    giveUp: function () {
      // reset monsterHeathscore to 0
      // reset myHeathscore to 0
      // prompt to restart game
    },
  }
});
