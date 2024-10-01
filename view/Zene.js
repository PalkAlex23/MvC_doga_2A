export default class Zene {
    #zene
    #index
    #szuloELEM

    constructor(zene, index, szuloELEM) {
        this.#zene = zene
        this.#index = index
        this.#szuloELEM = szuloELEM

        this.zeneMegjelenit();

        this.zeneELEM = $(".zeneKosar:last")
        this.gombKattint();
    }

    zeneMegjelenit() {
        for (let i = 0; i < zene.length; i++) {
            this.#szuloELEM.append(
                `
                <div class="card col-lg-4 col-md-6 col-sm-12">
                    <p>Előadó: ${this.#zene.eloado}</p>
                    <p>A dal címe: ${this.#zene.dalcim}</p>
                    <p>Kiadási év: ${this.#zene.kiadasi_ev}</p>
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