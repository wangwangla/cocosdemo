import GameCtrl from "./GameCtroll";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property(cc.Prefab)
    pokerPrefab:cc.Prefab;
    @property(cc.Node)
    container:cc.Node;
    @property(cc.Label)
    label: cc.Label = null;

    private g_gameCtrl : GameCtrl = null;

    start () {
        this.label.string = "这个是游戏界面";
        console.log(this.pokerPrefab+"<==============")
        this.g_gameCtrl = new GameCtrl();
        this.g_gameCtrl.start(this.pokerPrefab,this.container);
    }
}
