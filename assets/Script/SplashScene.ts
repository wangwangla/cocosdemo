import Person from "./Person";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashScene extends cc.Component {

    @property(cc.Label)
    splash : cc.Label = null;

    start () {
        // this.btn.node.on("click",function(){
        //     cc.director.loadScene("MainScene",function(){
        //         console.log("-->","========");
        //     });
        // });
        this.splash.string = "这是欢迎页面！！！";
        // setTimeout(function(){
        //     cc.director.loadScene("MainScene",function(){
        //         console.log("-->","========");
        //    });
        // },2);

        setTimeout(()=>{
                cc.director.loadScene("MainScene",function(){
                    console.log("-->","========");
            });
        },2000);
        
    }
}
