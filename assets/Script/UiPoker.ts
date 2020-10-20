import Poker from "./Poker";

// 他是一个组件，所以他是需要挂载的。所以需要一个cc.component
const {ccclass,property} = cc._decorator;

@ccclass
export default class UiPoker extends cc.Component{
    
    @property(cc.Label)
    label : cc.Label = null;
    
    init(poker:Poker){
        this.label.string = poker.point+"";
    }

    start(){
        console.log("==============>Uipoker");
        this.label.string = "this is a uipoker";
    }
}