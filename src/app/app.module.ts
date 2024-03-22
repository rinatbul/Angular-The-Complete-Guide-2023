import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './Tasks/warning-alert/warning-alert.component';
import {SuccessAlertComponent} from "./Tasks/success-alert/success-alert.component";
import {WarningButtonComponent} from "./Tasks/warning-button/warning-button.component";
import { DisplayButtonComponent } from './display-button/display-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DisplayButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
