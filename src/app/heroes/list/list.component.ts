import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Captain America", "Black Widow", "Hawkeye"];
  public deleteHero?: string;

  removeLastHero():void{
   this.deleteHero = this.heroNames.pop();

  }

}
