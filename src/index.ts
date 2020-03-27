import { Game } from "./class/game";

const game : Game = new Game(5, 1);

game.init(); //Initialize the game
game.start(); //Start the game
game.show_winner(); //Display winner