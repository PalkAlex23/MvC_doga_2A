import { zeneLISTA } from "../view/adat.js";

export default class ZeneModell {
    #kosarLISTA = []
    #db = 0;

    constructor() {
        this.kosarFeltolt();
    }

    kosarFeltolt() {
        
    }

    getList() {
        return this.#lista;
    }
}