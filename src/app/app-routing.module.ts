import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Produit/add-product/add-product.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { UpdateProductComponent } from './Produit/update-product/update-product.component';
import { AddTypesComponent } from './Types/add-types/add-types.component';

const routes: Routes = [  

 { path: "products",
  component: ListProduitComponent},
  
  { path: 'updateProduit/:id', component:UpdateProductComponent},

  { path: "productType", component:AddProductComponent},
  {
    path:"type",  component:AddTypesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
