import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FullScreenSpan } from "./directives/full-screen-span/full-screen-span.directive";
import { DivTransform } from "./directives/div-transform/div-transform.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, FullScreenSpan, DivTransform],
  bootstrap: [AppComponent]
})
export class AppModule {}
