import Poker from "./Poker";
import UiPocker from "./UiPoker";

export default class GameCtrl{
    //预制体（模板）
    private pokerPrefab : cc.Prefab = null;
    private pokers : Poker[] = [];

    public start(){
        console.log("start……!!");

        for(let point = 1;point <=13;point++){
            for(let suit = 0;suit < 4;suit++){
                let poker = new Poker(point,suit);
                this.pokers.push(poker)
            }
        }
        console.log(this.pokers)
        this.pokers.forEach(poker=>{
            let uiPocker = this.CreateUIPocker(poker);
            let someNode : cc.Node;
            someNode.addChild(uiPocker.node)
        })
    }

    /**
     * 
     * 创建uiPoker
     */
    private CreateUIPocker(pocker:Poker) : UiPocker{
        let uiPokerNode = cc.instantiate(this.pokerPrefab);
        let uiPocker : UiPocker = uiPokerNode.getComponent(UiPocker)
        uiPocker.init(pocker);
        return uiPocker;
    }
}