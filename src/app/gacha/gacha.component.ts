import { Component, ElementRef, OnInit } from '@angular/core';
import { Card } from '../models/Card';
import { GachaService } from '../services/gacha.service';
import { element } from 'protractor';

@Component({
  selector: 'app-gacha',
  templateUrl: './gacha.component.html',
  styleUrls: ['./gacha.component.scss']
})
export class GachaComponent implements OnInit {

  public singleDone:number=0;
  public tirageSingle = new Array<Card>();
  public tirageMulti = new Array<Card>();
  public gachaList = new Array<Card>();
  public multiDone:number = 0;
  public rarityList = new Array<Number>();

  constructor(private gachaService:GachaService, private elRef: ElementRef) { }

  ngOnInit(): void {
    this.rarityList.push(0);
    this.rarityList.push(1);
    this.rarityList.push(2);
    this.rarityList.push(3);
    let drop = 4;
    this.gachaService.getAllImages().subscribe(result=>{
      result.forEach(element => {
        this.gachaList.push(new Card(element,drop,Math.floor(Math.random() * Math.floor(4))));
        drop +=2.5;
      });
      console.log(this.gachaList);
    })
  }
  multi(){
    this.multiDone++;
    this.tirageMulti = [];
    for(let t = 0;t<10;t++){
      this.tirageMulti.push(this.dropCard())
    }
  }

  dropCard():Card{
    let card:Card;
    let down = 0;
    let rng = Math.random()*100;
    this.gachaList.forEach(element=>{
      if(down<rng && rng<(element.dropRate+down)){
        if(element.dropRate==4){
          this.playGif();
        }
        card=element;
        element.dropped();
      }
      down+=element.dropRate;
    });
    return card;
  }

  playGif(){

  }

  single(){
    this.singleDone++;
    this.tirageSingle = [];
    this.tirageSingle.push(this.dropCard());
  }

  openLootbox(){
    this.multi();
    console.log(this.tirageMulti);
    this.addActiveClass(["side", "box-wrapper", "box", "engram-wrapper", "face", "h1"]);
  }

  private addActiveClass(search){
    search.forEach(s => {
      let elements = this.elRef.nativeElement.querySelectorAll("." + s);
      elements.forEach(element => {
        element.className += ' active';
      });
    });
  }
}

