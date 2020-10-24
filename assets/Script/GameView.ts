import Poker from "./Poker";
import UiPoker from "./UiPoker";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView extends cc.Component {
    @property(cc.Prefab)
    pokerPrefab:cc.Prefab;
    @property(cc.Node)
    closeSendArea:cc.Node;
    @property(cc.Node)
    openSendArea:cc.Node = null;
    @property(cc.Node)
    receiveAreaList:cc.Node[] = [];
    @property(cc.Node)
    playGroupAnchor:cc.Node = null;
    private playGroupList:cc.Node[] =[];

    start () {
    }

    showUI(pokers:Poker[]){
        for(let i = pokers.length-1;i>=0;i--){
            console.log(this.pokerPrefab+"<==============")
            let uipokerNode = cc.instantiate(this.pokerPrefab);
            console.log(uipokerNode+"<==============")
            let uiPoker:UiPoker = uipokerNode.getComponent(UiPoker);
            uiPoker.init(pokers[i])
            uiPoker.node.setPosition(i*1,0);
            this.closeSendArea.addChild(uiPoker.node);
    
        }
    }
}
