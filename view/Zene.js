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
        this.#szuloELEM.append(
             `
            <div class="card p-3 col-lg-4 col-md-6 col-sm-12">
                <h3>Előadó: ${this.#zene.eloado}</h3>
                <p>A dal címe: ${this.#zene.dalcim}</p>
                <p>Kiadási év: ${this.#zene.kiadasi_ev}</p>
                <button class="zeneKosar btn btn-success m-2">Kosárba</button>
            </div>
            `
        )
    }

    gombKattint() {
        this.zeneELEM.on("click", () => {
            const e = new CustomEvent("katt", {detail: this.#index});
            window.dispatchEvent(e);
        })
    }
}