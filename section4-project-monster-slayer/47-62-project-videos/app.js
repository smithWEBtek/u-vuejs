new Vue({
  el: '#app',
  data: {
    playerHealth: 30,
    monsterHealth: 10,
    showPlayerAttackImage: false,
    showMonsterAttackImage: false,
    gameIsRunning: false,
    turns: [],
    isPlayer: false
  },
  watch: {
    turns: function () {
      console.log('watching ...')

      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function () {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage + ' points.'
      })
      if (this.checkWin()) {
        return;
      }

      this.monsterAttack();
      this.checkWin();
    },
    specialAttack: function () {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster HARD for ' + damage + ' points.'
      })

      this.checkWin();
      this.monsterAttack();
    },
    monsterAttack: function () {
      var vm = this;
      var damage = this.calculateDamage(5, 12)
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage + ' points.'
      })

      setTimeout(function () {
        vm.playerHealth -= damage;
      }, 1000)
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10 points.'
      })
      this.monsterAttack();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lose! New game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    }
  }
});
