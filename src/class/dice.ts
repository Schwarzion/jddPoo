export class Dice {
    _value: number;

    /**
     * Create a dice with default value 0
     */
    constructor()
    {
        this._value = 0;
    }

    /**
    * Return dice value
    *
    * @return number
    */
    get_value = () => {
        return this._value;
    }

    /**
    * Set randomized dice value (between 1 - 6) 
    *
    * @return void
    */
    throw = () => {
        this._value = Math.floor(Math.random() * 6) + 1;
    }
}