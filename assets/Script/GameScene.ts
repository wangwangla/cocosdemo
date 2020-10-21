import GameCtrl from "./GameCtroll";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property(cc.Prefab)
    pokerPrefab:cc.Prefab;
    @property(cc.Node)
    container:cc.Node;


    private g_gameCtrl : GameCtrl = null;

    start () {
        this.g_gameCtrl = new GameCtrl();
        this.g_gameCtrl.start(this.pokerPrefab,this.container);
    }
}
