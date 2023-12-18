import { NgModule } from "@angular/core";
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports:[
    //se exportan los 2 porque actuan en separado
    HeroComponent,
    ListComponent
  ],
  imports: [
    //los que finalizann en module van en imports, CommonModule si usas directivas incluidas ngif, ngfor, etc
    CommonModule
  ]
})
export class HeroeModule { }
