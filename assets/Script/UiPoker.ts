import Poker from "./Poker";

// 他是一个组件，所以他是需要挂载的。所以需要一个cc.component
const {ccclass,property} = cc._decorator;

@ccclass
export default class UiPoker extends cc.Component{
    
    @property(cc.Sprite)
    suitSprite:cc.Sprite = null;

    @property(cc.Label)
    label : cc.Label = null;

    @property(cc.SpriteFrame)
    suitSpriteList:cc.SpriteFrame[] = [];

    init(poker:Poker){
        console.log(poker.point)
        let num = poker.point;
        this.label.string = num+"";
        this.suitSprite.spriteFrame = this.suitSpriteList[poker.suit];
    }

    start(){
  
    }
}