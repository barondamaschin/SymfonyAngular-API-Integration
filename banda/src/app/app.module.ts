import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaItemComponent } from './lista-item/lista-item.component';
import { CreeazaItemComponent } from './creeaza-item/creeaza-item.component';
import { VizualizeazaItemComponent } from './vizualizeaza-item/vizualizeaza-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemComponent,
    CreeazaItemComponent,
    VizualizeazaItemComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    RouterModule ,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
