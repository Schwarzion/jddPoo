import { Game } from "./class/game";

const game : Game = new Game(5,4);

game.init();
game.start();
game.show_winner();


// Tests
// import { Dice } from "./class/dice";

// const dice: Dice = new Dice();
// dice.throw();
// console.log(dice.get_value());