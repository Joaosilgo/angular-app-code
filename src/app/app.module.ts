import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectoComponent } from './objecto/objecto.component';
import { FormsModule } from '@angular/forms';
import { ObjectoDetailComponent } from './objecto-detail/objecto-detail.component';
 // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ObjectoComponent,
    ObjectoDetailComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
