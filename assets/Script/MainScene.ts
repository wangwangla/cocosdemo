// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    @property(cc.Button)
    playBtn: cc.Button = null;

    onLoad(){

    }

    start () {
        this.playBtn.node.on("click",this.startGame)
    }

    startGame(){
        cc.director.loadScene("GameScene",()=>{
            console.log("========>跳转成功！");
        });
    }
    // update (dt) {}
}
