import { Component, OnInit } from '@angular/core';
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

  constructor(private gachaService:GachaService) { }

  ngOnInit(): void {
    let drop = 4;
    this.gachaService.getAllImages().subscribe(result=>{
      result.forEach(element => {
        this.gachaList.push(new Card(element,drop));
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
        if(card.dropRate==4){
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
}

