import { Cup } from "./cup";

export class Player {
    _name: string;
    _score: number;

    constructor(name: string) {
        this._name = name;
        this._score = 0;
    }

    get_name = () => {

    }

    get_score = () => {

    }

    play = (cup: Cup) => {

    }

    display_score = () => {
        return this._score;
    }
}