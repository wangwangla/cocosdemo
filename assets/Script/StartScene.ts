// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Button)
    playBtn: cc.Button = null;

    start () {
        // let self= this;
        // this.playBtn.node.on("click",function(Button){
        //     self.onPlayBtn();
        // });
        
        // this.playBtn.node.on("click",(Button)=>{
        //     this.onPlayBtn();
        // });
        
        this.playBtn.node.on("click",this.onPlayBtn);
    }

    onPlayBtn(){
        cc.director.loadScene("GameScene",function(){
            console.log("============<");
        });
    }

    // update (dt) {}
}
