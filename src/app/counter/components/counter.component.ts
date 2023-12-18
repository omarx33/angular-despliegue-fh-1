import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:` <h3>Counter: {{contador}}</h3>

  <button (click)="incrementar(1)" >+1</button>
  <button (click)="incrementar(-1)">-1</button>
  <button (click)="reset()">reset</button>`
})
export class CounterComponent{


  public contador:number = 3;

  incrementar(value:number ):void{

 this.contador += value;

 }

 reset(){
   this.contador = 3;
 }

}
