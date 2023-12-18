import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
 public characterList: Character[] = [

  //estos son valores por defecto si no llega nada del input (padre componente)
  // {
  //   name: "trunks",
  //   power : 10
  // }
 ];

 @Output()
 public emitIdArray: EventEmitter<string > = new EventEmitter();



 onDeleteCharacter(id? : string ):void{

  if (!id) return;

  // TODO: emitir ID del personaje
  // console.log({index});


  this.emitIdArray.emit(id);

 }

}
