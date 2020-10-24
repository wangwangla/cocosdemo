import GameCtrl from "./GameCtroll";
import GameView from "./GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {
    @property(cc.Prefab)
    private gameViewUI:cc.Prefab;
    private gameView : GameView = null;
    private g_gameCtrl : GameCtrl = null;

    start () {
        //管理者
        let gameViewUINode = cc.instantiate(this.gameViewUI);
        this.gameView = gameViewUINode.getComponent(GameView);
        this.node.addChild(this.gameView.node);
        this.g_gameCtrl = new GameCtrl();
        this.g_gameCtrl.start(this.gameView);
    }
}
