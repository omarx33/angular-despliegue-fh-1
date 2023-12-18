import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "krillin",
    power: 1000
  },
  {
    id: uuid(),
    name: "goku",
    power : 2000
  },
  {
    id: uuid(),
    name: "Vegueta",
    power : 7000
  }

];

addCharacter(character:Character):void{
/*
  const newCharacter: Character = {
    id : uuid(),
    name: character.name,
    power: character.power
  }
  lo mismo linea abajo
  */

  const newCharacter: Character =
  {
    id: uuid(),
    ...character
  }

  this.characters.push(newCharacter);

}

/*
onDeleteCharacter(characterId:number):void{
  //splice = remover una fila
  this.characters.splice(characterId,1);
}
*/

deleteCharacterById( id?:string ):void {
    this.characters = this.characters.filter(
      character => character.id !== id
    );
}

}
