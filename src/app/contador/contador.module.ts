import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador-conponent";

@NgModule({
  declarations: [
    ContadorComponent,
  ],
  exports: [
    ContadorComponent,
  ],
})
export class ContadorModule { }
