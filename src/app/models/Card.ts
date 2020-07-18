export class Card {
    public image:String;
    public dropRate:number;
    public drops:number=0;

    constructor(image:String,dropRate:number){
        this.image=image;
        this.dropRate=dropRate;
    }
    dropped(){
        this.drops++;
    }
}