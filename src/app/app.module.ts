import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, WarningAlertComponent, SucessAlertComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
