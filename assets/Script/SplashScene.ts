import Person from "./Person";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashScene extends cc.Component {

    @property(cc.Label)
    splash : cc.Label = null;

    @property(cc.Button)
    btn : cc.Button =  null;

    start () {
        // init logic
        // this.splash.string = "这是一个欢迎界面！"
        // setTimeout(function(){
        //     cc.director.loadScene("MainScene",function(){
        //     });
        // },2000);      
        // let student = {fristName:"chen",lastName : "kk"}
        // this.showInfo(student)
        this.btn.node.on("click",function(){
            console.log("====================>");
        });
    }

    // showInfo(student:Person){
    //     console.log(student.fristName + "============"+student.lastName)
    // }
}
