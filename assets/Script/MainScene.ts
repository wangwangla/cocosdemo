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

    start () {
        // this.playBtn.node.on("click",this.startGame.bind(this));

        // this.playBtn.node.on("click",function(Button){
        //     // this 得不到
        // })
        // let self = this;
        // this.playBtn.node.on("click",function(Button){
        //     this.startGame();    
        // })
        this.playBtn.node.on("click",this.startGame)

        // this.playBtn.node.on("click",this.startGame.bind(this))

        // this.playBtn.name.on("click",this.startGame,this);

    }

    startGame(){
        cc.director.loadScene("GameScene",()=>{
            console.log("========>跳转成功！");
        });
    }
    // update (dt) {}
}
