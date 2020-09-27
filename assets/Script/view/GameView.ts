// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Poker from "../bean/Poker";
import UiPoker from "../component/UiPoker";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    
    @property(cc.Prefab)
    uiPokerPrefab:cc.Prefab = null;
    @property(cc.Node)
    pockerContainer : cc.Node = null;

    start () {

    }

    public showUi(pokers:Poker[]):void{    
        pokers.forEach(poker=>{
            let uiPocker = this.CreateUIPocker(poker);
            //我们创建出了每一个，下来每一个纸牌，我们需要将他们存起来
            // let someNode : cc.Node;
            // someNode.addChild(uiPocker.node)
            uiPocker.node.setPosition(0,0)
            this.pockerContainer.addChild(uiPocker.node);
        })
    }

        /**
     * 
     * 创建uiPoker
     */
    private CreateUIPocker(pocker:Poker) : UiPoker{
        //通过预制体进行创建   我们先去 创建 一个预制体 
        //如果我们有一个预制体，那么就可以通过预制体创建一个对象（节点）  将组件挂在到节点上。
        let uiPokerNode = cc.instantiate(this.uiPokerPrefab);
        let uiPocker : UiPoker = uiPokerNode.getComponent(UiPoker)  //从节点里面得到UiPoker，然后进行初始化
        uiPocker.init(pocker);
        uiPocker.node.setPosition(100,200);
        return uiPocker;
    }

    // update (dt) {}
}
