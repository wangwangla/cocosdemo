import { ESult } from "../config/Config"

export default class Poker{
    public point:number = -1;
    public sult : ESult = ESult.HeiTao;

    constructor(point? : number,suit? : ESult){
        if(point){this.point=point}
        if(suit){this.sult = suit}
    }
    // constructor(point : number,suit : ESult){
        
    // }
}