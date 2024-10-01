export default class ZeneModell {
    #zeneLISTA = [
        {
            eloado: "Shawn Mendes",
            dalcim: "There's Nothing Holdin' Me Back",
            kiadasi_ev: 2017
        },

        {
            eloado: "Avicii",
            dalcim: "Wake Me Up",
            kiadasi_ev: 2013
        },

        {
            eloado: "Swedish House Mafia",
            dalcim: "Don't You Worry Child",
            kiadasi_ev: 2012
        }
    ]
    #kosarLISTA = []
    #db = 0;

    constructor() {
        this.kosarFeltolt()
    }

    kosarFeltolt() {
        
    }

    getList() {
        return this.#zeneLISTA;
    }
}