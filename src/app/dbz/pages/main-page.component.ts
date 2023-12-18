import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageComponent {
// jalando el servicio DbzService
 constructor( private  dbzService: DbzService ){}

   get characters(): Character[] {
      //los ... devolveran una copia y no el original de chatacters
      return [...this.dbzService.characters];

   }

   deleteCharacterById(id : string):void{
   this.dbzService.deleteCharacterById(id);

   }

   onNewCharacterPadre(character: Character){
     this.dbzService.addCharacter(character);
   }

}
