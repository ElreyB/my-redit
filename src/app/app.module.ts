import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { TopicListComponent } from "./topic-list/topic-list.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [AppComponent, TopicListComponent],
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
