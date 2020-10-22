import { Esuit } from "./Esuit";
import Poker from "./Poker";

const POINT_MAP = {
    "1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9":"9",
    "10":"10",
    "J":"J",
    "Q":"Q",
    "K":"K"
    
}

// 他是一个组件，所以他是需要挂载的。所以需要一个cc.component
const {ccclass,property} = cc._decorator;

@ccclass
export default class UiPoker extends cc.Component{
    //两种颜色
    private redColor :cc.Color = cc.Color.RED;
    private blackColor : cc.Color = cc.Color.BLACK;
    
    @property(cc.Sprite)
    bigSuit:cc.Sprite = null;

    @property(cc.Sprite)
    smallSuit:cc.Sprite = null;
    
    @property(cc.Label)
    pointLabel : cc.Label = null;

    @property(cc.Sprite)
    zbgFace:cc.Sprite = null;

    @property(cc.Sprite)
    fbgFace:cc.Sprite = null;

    @property(cc.SpriteFrame)
    bgFaceList:cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    smallSuitSpriteList:cc.SpriteFrame[]=[];

    @property(cc.SpriteFrame)
    bigSuitSpriteList:cc.SpriteFrame[] = [];



    init(poker:Poker){
        // console.log(poker.point)
        let num = poker.point;
        this.pointLabel.string = POINT_MAP[poker.point];
        this.pointLabel.node.color  =
            (poker.suit==Esuit.HeiTao || poker.suit == Esuit.MeiHua)
            ?this.blackColor:this.redColor
        if(poker.point>=10){
            this.bigSuit.spriteFrame = this.bgFaceList[poker.point - 11];
        }else{
            this.bigSuit.spriteFrame = this.bigSuit[poker.point];
        }
        this.smallSuit.spriteFrame = this.smallSuitSpriteList[poker.suit];
        this.zbgFace.node.active = true
        
    
    }

    start(){
  
    }
}