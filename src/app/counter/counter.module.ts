import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports:[
    //pueda ser usado en otros lados
    CounterComponent
  ]
})
export class CounterModule { }
