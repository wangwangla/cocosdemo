import { Esuit } from "./Esuit";

export default class Poker{
    public point : number = -1;
    // public suit : 枚举类型
    public suit:Esuit = Esuit.HeiTao;
    constructor(point?:number,esuit? : Esuit){
        if(point){this.point=point}
        if(esuit){this.suit = esuit;}
    }

}