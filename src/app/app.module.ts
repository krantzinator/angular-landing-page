import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdButtonModule, MdInputModule, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { TableFunComponent } from './table-fun/table-fun.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    TableFunComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdTableModule,
    CdkTableModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
