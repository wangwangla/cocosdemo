const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;


    start () {
        // init logic
        this.label.string = "loading……";
        setTimeout(()=>{
            cc.director.loadScene("GameScene",()=>{
                console.log("------------>");
            })
        },2000);
    }
}
