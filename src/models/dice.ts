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
        //define this._value => nb generation (1-6)
    }
}