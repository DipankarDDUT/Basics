import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//declaration  must be done if cli not used
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';

//NgModule decorator converts simple class to module file
@NgModule({
  //imports is used to add other module
  imports: [BrowserModule, FormsModule],
  //for adding components, directive,etc
  declarations: [AppComponent, ServersComponent, ServerComponent],
  // component to know at the time of running the app
  bootstrap: [AppComponent],
})
export class AppModule {}
