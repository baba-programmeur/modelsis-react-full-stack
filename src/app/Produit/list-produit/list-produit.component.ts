import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Modeles/produit';
import { ProduitService } from 'src/app/Services/produit.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})

export class ListProduitComponent implements OnInit {

public produits : any [];

currentDate=new Date()
 
constructor(private produitService:ProduitService,private route :Router) {
   


   }

  ngOnInit(): void {

  this.listProduits();
}

  listProduits(){
    this.produitService.listProduit().subscribe(
      data =>{
        this.produits=data;
      }
    );
}

onEditProduct()
{

}

routerProduct()
{
  return this.route.navigate(['/productType']) ;

}
routerType()
{
  return this.route.navigate(['/type'])
}


}
