const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    onLoad(){

    }

    start () {
        // init logic
        this.label.string = "loading……";
        setTimeout(()=>{
            cc.director.loadScene("StartScene",()=>{
                console.log("------------>");
            })
        },2000);
    }

    update(){

    }

}
