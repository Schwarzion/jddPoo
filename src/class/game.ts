import { Player } from "./player";
import { Cup } from "./cup";

export class Game {
    _players: Player[] = [];
    _turnNb: number;
    _diceNb: number;
    _cup: Cup;

    /**
    * Create a new Game 
    * 
    * @param turnNb 
    * @param diceNb 
    */
    constructor(turnNb: number, diceNb: number) {
        this._turnNb = turnNb;
        this._diceNb = diceNb;
        this._cup = new Cup(diceNb);
    }

    /**
    * Add 2 players to the game
    * 
    * @return void
    */
    init = () => {
        this._players.push(new Player('Michel'));
        this._players.push(new Player('Bobby'));
        this._players.push(new Player('Chris'));
        this._players.push(new Player('Karl'));
    }


    /**
    * Start the game
    * 
    * @return void 
    */
    start = () => {
        console.clear();
        console.log('NEW GAME\n');
        for (this._turnNb; this._turnNb > 0; this._turnNb--) {
            for (let player of this._players) {
                player.play(this._cup);
            }
        }
    }

    /**
    * Display winner
    * 
    * @return void
    */
    show_winner = () => {
        let score = 0;
        let winner;
        for (let player of this._players) {
            let playerScore = player.get_score();
            winner = playerScore > score ? player : winner;

        }
        if (winner != undefined)
            console.log(`${winner.get_name()} wins with ${winner.get_score()} points`);
    }
}