import GameView from "./GameView";
import Poker from "./Poker";
import UiPoker from "./UiPoker";

/**
 * 游戏管理者
 */
export default class GameCtrl{
    private pokers:Poker[] = [];

    public start(gameView:GameView){
        console.log("game start!!!!");
        for (let index = 0; index < 13; index++) {
            for(let suitIndex = 0;suitIndex<4;suitIndex++){
                let poker:Poker  = new Poker(index+1,suitIndex);
                this.pokers.push(poker);
            }
        }
        console.log(this.pokers)
        

        gameView.showUI(this.pokers);



      
     }
}