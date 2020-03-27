import { Player } from "./player";
import { Cup } from "./cup";

export class Game {
    _players: Player[] = [];
    _turnNb: number;
    _diceNb: number;
    _cup: Cup = new Cup(0);

    constructor(turnNb: number, diceNb: number) {
        this._turnNb = turnNb;
        this._diceNb = diceNb;
    }

    init = () => {
        console.log('init');
        this.add_players();
    }


    start = () => {
        console.log('starting game !');
        for (this._turnNb; this._turnNb > 0; this._turnNb--)
        {
            console.log(`_____________________\n------New Turn-------\n`)
            this._cup = new Cup(this._diceNb);
            for (let player of this._players)
            {
                player.play(this._cup);
            }
            console.log(`\n_____________________\n-----End of Turn-----\n`)
        }
    }

    show_winner = () => {
        //affiche le gagnant en comparant les joueurs
    }

    add_players = () => {
        this._players.push(new Player('Michel'));
        this._players.push(new Player('Bobby'));
    }
}