export class Dice {
    _value: number;

    constructor()
    {
        this._value = 0;
    }

    public get_value = () => {
        return this._value;
    }


    public throw = () => {
        this._value = Math.floor(Math.random() * 6) + 1;
    }
}