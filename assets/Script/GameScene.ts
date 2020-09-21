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

    private gameCtrl : GameCtrl;
    // LIFE-CYCLE CALLBACKS:
    start () {
        this.gameCtrl = new GameCtrl();
        this.gameCtrl.start();
        this.label.string = "game==--------------";
    }

    // update (dt) {}
}
