import { Dice } from "./dice";

export class Cup {
    _value: number;
    _dices: Dice[] = [];

    /**
     * Create a cup
     * 
     * @param diceNb 
     * 
     * @return void
     */
    constructor(diceNb: number) {
        this._value = 0;
        this.set_dices(diceNb);
    }

    /**
    * Generate number of dice needed to play, 
    * Push it in dice array 
    * 
    * @param diceNb
    * 
    * @return void
    */
    set_dices = (diceNb: number) => {
        for (diceNb; diceNb > 0; diceNb--) {
            this._dices.push(new Dice());
        }
    }

    /**
    * Return cup value
    *
    * @return number
    */
    get_value = () => {
        return this._value;
    }

    /**
    * Set cup value
    *
    * @param value
    * 
    * @return void
    */
    set_value = (value: number) => {
        this._value = value;
    }

    /**
    * Throw the cup
    *
    * @return void
    */
    throw = () => {
        //For all dices in cup
        for (let dice of this._dices) {
            dice.throw(); //Player throwing cup
            this._value += dice.get_value();
        }
        this.display_score();
    }

    /**
    * Display player score in console
    *
    * @return void
    */
    display_score = () => {
        console.log(`Turn score: ${this._value}`)
    }
}