export class Card {
    public image:String;
    public dropRate:number;
    public drops:number=0;
    public rarity:number;

    constructor(image:String,dropRate:number, rarity:number){
        this.image=image;
        this.dropRate=dropRate;
        this.rarity=rarity;
    }
    dropped(){
        this.drops++;
    }
}