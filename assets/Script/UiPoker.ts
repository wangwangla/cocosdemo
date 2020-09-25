import Poker from "./Poker";

/**
 * 展示牌的地方
 * 
 * 一张牌
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // update (dt) {}
    public init(pocker:Poker){
        this.label.string = "这个poker的值为"+pocker.point + "----->" + pocker.sult
    }
}

