import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'iron Man';
  public age:number = 45;

get capitalizeName():string {
  return this.name.toUpperCase();
}

getHeroDescription():string {

  return `${this.name} is ${this.age} years old`;
}


changeHero():void{
   this.name = "spiderman";
}

changeAge():void{

 this.age = 54;


}

resetVal():void{

this.name = "iron Man";
this.age = 45;
}

}

