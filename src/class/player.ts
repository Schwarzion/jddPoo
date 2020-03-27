import { Cup } from "./cup";

export class Player {
    _name: string;
    _score: number;

    constructor(name: string) {
        this._name = name;
        this._score = 0;
    }

    get_name = () => {
        return this._name;
    }

    get_score = () => {
        return this._score;
    }

    play = (cup: Cup) => {
        console.log(`${this.get_name()} playing`);
        cup.throw();
        // console.log(this.get_score());
    }

    display_score = () => {
        return this._score;
    }
}