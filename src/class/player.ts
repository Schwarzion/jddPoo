import { Cup } from "./cup";

export class Player {
    _name: string;
    _score: number;

    /**
     * Create a player with his name
     * 
     * @param name
     */
    constructor(name: string) {
        this._name = name;
        this._score = 0;
    }

    /**
    * Return player name
    * 
    * @return string 
    */
    get_name = () => {
        return this._name;
    }

    /**
    * Return player score
    * 
    * @return number 
    */
    get_score = () => {
        return this._score;
    }

    /**
     * Player throws the cup
     * 
     * @param cup
     * 
     * @return void 
     */
    play = (cup: Cup) => {
        console.log(`${this._name} throws the cup`);
        cup.throw();
        this._score += cup.get_value();
        cup.set_value(0);
        this.display_score();
    }

    /**
    * Display player score in console
    *
    * @return void
    */
    display_score = () => {
        console.log(`Total score: ${this._score}\n`);
    }
}