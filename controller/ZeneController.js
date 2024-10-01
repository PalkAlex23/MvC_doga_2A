import ZeneModell from "../modell/ZeneModell.js";
import Zene from "../view/Zene.js";

export default class ZeneController {
    constructor() {
        this.taroloELEM = $(".tartalom")
        this.zenemodell = new ZeneModell();
        
        console.log(this.zenemodell.getList())
    }

    #esemenykezelo() {
        $(window).on("katt", (event) => {
            console.log(event.detail)
            new Zene(this.zenemodell.getList(), this.taroloELEM)
        })
    }
}