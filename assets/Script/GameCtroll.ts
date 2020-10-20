import Poker from "./Poker";
import UiPoker from "./UiPoker";

/**
 * 游戏管理者
 */
export default class GameCtrl{
    private pokers:Poker[] = [];
    private pokerPrefab:cc.Prefab;
    private container:cc.Node;

    public start(pokerPrefab:cc.Prefab,container:cc.Node){
        this.pokerPrefab = pokerPrefab;
        this.container = container;
        console.log("game start!!!!");
        for (let index = 0; index < 13; index++) {
            for(let suitIndex = 0;suitIndex<4;suitIndex++){
                let poker:Poker  = new Poker(index+1,suitIndex);
                this.pokers.push(poker);
            }
        }
        console.log(this.pokers)
        
        for(let i = 0;i<this.pokers.length;i++){
            let uipokerNode = cc.instantiate(this.pokerPrefab);
            console.log("<_-----------------"+uipokerNode);
            let uiPoker:UiPoker = uipokerNode.getComponent(UiPoker);
            console.log("<_-----------------"+uipokerNode);
            uiPoker.start();    

        }
            
     }
}