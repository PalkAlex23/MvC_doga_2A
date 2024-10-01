import { zeneLISTA } from "./adat.js"

export default class Zene {
    #index
    #szuloELEM

    constructor(index, szuloELEM) {
        this.#index = index
        this.#szuloELEM = szuloELEM

        this.zeneMegjelenit();

        this.zeneELEM = $(".zeneKosar:last")
        this.gombKattint();
    }

    zeneMegjelenit() {
        for (let i = 0; i < zeneLISTA.length; i++) {
            this.#szuloELEM.append(
                `
                <div class="card col-lg-4 col-md-6 col-sm-12">
                    <p>Előadó: ${zeneLISTA[i].eloado}</p>
                    <p>A dal címe: ${zeneLISTA[i].dalcim}</p>
                    <p>Kiadási év: ${zeneLISTA[i].kiadasi_ev}</p>
                    <button class="zeneKosar">Kosárba</button>
                </div>
                `
            )
        }
    }

    gombKattint() {
        this.zeneELEM.on("click", () => {
            const e = CustomEvent("katt", {detail: this.#index});
            window.dispatchEvent(e);
        })
    }
}