import GameCtrl from "./GameCtrl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    private g_gameCtrl : GameCtrl = null;

    start () {
        this.label.string = "这个是游戏界面";

        this.g_gameCtrl = new GameCtrl();
        this.g_gameCtrl.start();
    }
}
