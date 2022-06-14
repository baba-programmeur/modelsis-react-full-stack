import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Modeles/produit';
import { Types } from 'src/app/Modeles/types';
import { ProduitService } from 'src/app/Services/produit.service';
import { TypesService } from 'src/app/Services/types.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  currentProduit=new Produit();

  types : Types []
  constructor(private produitService :ProduitService, private typeService:TypesService ,private activatedRoute:ActivatedRoute,  private router:Router)
   {

    }

  ngOnInit(): void {

    this.produitService.consulterProduitById(this.activatedRoute.snapshot.params['id']).subscribe(pro =>

      {
        this.currentProduit=pro;
      }

    )
  }
  update()
  {
   this.produitService.updateProduit(this.currentProduit).subscribe(() =>
    {
      this.router.navigate(['/products']);
  
    }),

    (error) =>
    {
      alert("Probleme lors de la modification");
    }
  }
  
  listeType ()
  {
     
    this.typeService.listType().subscribe(type =>
      {
        this.types=type
      })
  }
  reset()
  {
    
  }
}
