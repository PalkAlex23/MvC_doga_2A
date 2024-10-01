import Zene from "./Zene.js";

export default class JoZenek {
    #lista = []
    #szuloELEM

    constructor(lista, szuloELEM) {
        this.#lista = lista
        this.#szuloELEM = szuloELEM

        this.#szuloELEM.empty()
        this.zenekKiir()
    }

    zenekKiir() {
        this.#lista.forEach((elem, index) => {
            new Zene(elem, index, this.#szuloELEM)
        })
    }
}