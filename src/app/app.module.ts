import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GreetingComponent } from './greeting/greeting.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { EuComponent } from './eu/eu.component';
import { NumerosComponent } from './numeros/numeros.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'greeting', component: GreetingComponent},
        {path: 'mult-table', component: MultTableComponent},

        {path: 'eu', component: EuComponent},
        {path: 'numeros', component: NumerosComponent}


      


      ]
    )
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, GreetingComponent, MultTableComponent, EuComponent, NumerosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

