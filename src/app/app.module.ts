import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './Produit/add-product/add-product.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { UpdateProductComponent } from './Produit/update-product/update-product.component';
import { AddTypesComponent } from './Types/add-types/add-types.component';



@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,  
    UpdateProductComponent,
    AddTypesComponent,
    ListProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
