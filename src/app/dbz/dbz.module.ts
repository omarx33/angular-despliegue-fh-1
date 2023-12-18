import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
    //aqui se unen los componentes
    //si se declara no es necesario exportar porque ya existe en este modulo
    // porque estos 2 modulos interactuan entre si, main-page usa list-component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[

    MainPageComponent
  ]
})
export class DbzModule { }
