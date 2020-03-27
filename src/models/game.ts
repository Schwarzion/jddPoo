import { Player } from "./player";
import { Cup } from "./cup";

export class Game {
    _players: Player[] = [];
    _turnNb: number;
    _cup: Cup = new Cup(0);

    constructor(turnNb: number, diceNb: number) {
        this._turnNb = turnNb;
    }

    init = () => {
        //Add players into the game
    }


    launch = () => {
        //Logique de partie
        //this.show_winner()
    }

    show_winner = () => {
        //affiche le gagnant en comparant les joueurs
    }
}