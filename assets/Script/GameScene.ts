// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameCtrl from "./GameCtrl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Prefab)
    uiPokerPrefab:cc.Prefab = null;

    @property(cc.Node)
    pokerContainer : cc.Node = null;

    private gameCtrl : GameCtrl;
    // LIFE-CYCLE CALLBACKS:
    start () {
        /**
         * 游戏界面进行展示 ，通过一个裁判者进行组局，所以需要创建裁判者和,然后开始游戏
         */
        this.gameCtrl = new GameCtrl();
        //我们需要先初始化预制
        this.gameCtrl.loadPrefab(this.pokerContainer,this.uiPokerPrefab);
        this.gameCtrl.start();
        this.label.string = "game==--------------";
    }

    // update (dt) {}
}
