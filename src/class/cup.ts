import { Dice } from "./dice";

export class Cup {
    _value: number;
    _dices: Dice[] = [];

    constructor(diceNb: number) {
        this._value = diceNb;
    }

    private setDices = (diceNb: number) => {
        for (diceNb; diceNb > 0; diceNb--) {
            this._dices.push(new Dice());
        }
    }

    public get_value = () => {
        return this._value;
    }

    public set_value = (value: number) => {
        this._value = value;
    }

    public throw = () => {
        //loop in dice array
        //Use dice.throw
        //get values
        // this.set_value();
        // console.log(this._dices);
        // return (this._value);
    }

    public display_score = () => {
        return this._dices[this._dices.length - 1].get_value();
    }
}