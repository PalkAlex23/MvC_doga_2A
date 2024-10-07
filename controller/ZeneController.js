import ZeneModell from "../modell/ZeneModell.js";
import JoZenek from "../view/JoZenek.js";

export default class ZeneController {
    constructor() {
        this.taroloELEM = $(".tartalom")
        this.zenemodell = new ZeneModell();
        
        // console.log(this.zenemodell.getList())
        new JoZenek(this.zenemodell.getList(), this.taroloELEM)

        this.#esemenykezelo()
    }

    #esemenykezelo() {
        $(window).on("katt", (event) => {
            console.log(event.detail)
            new JoZenek(this.zenemodell.getList(), this.taroloELEM)
            this.zenemodell.kosarFeltolt(event.detail)
        })
    }
}