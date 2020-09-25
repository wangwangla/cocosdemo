import Poker from "./Poker";
import UiPocker from "./UiPoker";

export default class GameCtrl{
    //预制体（模板）
    private pokerPrefab : cc.Prefab = null;
    private pokers : Poker[] = [];

    //因为这里只是一个普通的类，但是预制只能绑定在组件上，和它关联的组件就是gameScene
    public loadPrefab(prefab:cc.Prefab):void{

    }

    public start(){
        console.log("start……!!");
        //准备数据  
        for(let point = 1;point <=13;point++){
            for(let suit = 0;suit < 4;suit++){
                let poker = new Poker(point,suit);
                this.pokers.push(poker)
            }
        }
        console.log(this.pokers)
        //创建ui   通过数据
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
        //通过预制体进行创建   我们先去 创建 一个预制体
        //如果我们有一个预制体，那么就可以通过预制体创建一个对象（节点）  将组件挂在到节点上。
        let uiPokerNode = cc.instantiate(this.pokerPrefab);
        let uiPocker : UiPocker = uiPokerNode.getComponent(UiPocker)  //从节点里面得到UiPoker，然后进行初始化
        uiPocker.init(pocker);
        return uiPocker;
    }
}