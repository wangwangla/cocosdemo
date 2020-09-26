import { ESult } from "./Config";
import Poker from "./Poker";

/**
 * 展示牌的地方
 * 
 * 一张牌
 */
const {ccclass, property} = cc._decorator;

const poker_map = {
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
    "11":"J",
    "12":"Q",
    "13":"K",
    
};
@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;
    //我们显示的背景
    @property(cc.Sprite)
    private suitSprite : cc.Sprite;
    //数字
    @property(cc.Label)
    private pokerLabel : cc.Label;
    //小纹理
    @property(cc.Sprite)
    private smallSuit : cc.Sprite;
    //大纹理
    @property(cc.Sprite)
    private bigSuit : cc.Sprite;




    // 背面
    @property(cc.SpriteFrame)
    private textFrontBG : cc.SpriteFrame = null;   
    // 正面
    @property(cc.SpriteFrame)
    private textBackBG : cc.SpriteFrame = null;
    // 小  存起来
    @property([cc.SpriteFrame])
    private bigSuits : cc.SpriteFrame[] = [];
    // 大   的存起来
    @property([cc.SpriteFrame])
    private smallSuits : cc.SpriteFrame[] = [];
    //存储jqk
    @property([cc.SpriteFrame])
    private textFaces : cc.SpriteFrame[] = [];

    //字的 颜色跟着牌的颜色发生变化 
    private redTextColor:cc.Color = cc.Color.RED;
    private blackTextColor:cc.Color = cc.Color.BLACK;
    
    // update (dt) {}
    public init(pocker:Poker){
        // this.pokerLabel.string = "这个poker的值为"+pocker.point + "----->" + pocker.sult
        this.pokerLabel.string = poker_map[pocker.point];
        if(pocker.sult==ESult.HongTao || pocker.sult ==ESult.FangKuai) this.pokerLabel.node.color = this.redTextColor;
        if(pocker.sult==ESult.HeiTao || pocker.sult ==ESult.MeiHua) this.pokerLabel.node.color = this.blackTextColor; 
        this.bigSuit.spriteFrame = this.bigSuits[pocker.sult];
        if(pocker.point>10){
            this.bigSuit.spriteFrame = this.textFaces[pocker.point-11];
        }  
        this.smallSuit.spriteFrame = this.smallSuits[pocker.sult];
    }
}

