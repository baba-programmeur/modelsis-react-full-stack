import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Modeles/produit';
import { Types } from 'src/app/Modeles/types';
import { ProduitService } from 'src/app/Services/produit.service';
import { TypesService } from 'src/app/Services/types.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private addService:ProduitService,private route:ActivatedRoute,private router:Router,
    private typeService:TypesService) { }

  nouveauProduit:Produit =new Produit() ;

  public types : any[]
  
  ngOnInit(): void {

    this.listeType();
  }

  ajoutProduit()
  
  {
    // this.nouveauProduit.id_type=parseInt(this.nouveauProduit.id_type)
      console.log(this.nouveauProduit)

      this.addService.ajoutProduit(this.nouveauProduit).subscribe( );

  }

  listeType ()
  {
     
    this.typeService.listType().subscribe(type =>
      {
        this.types=type ;
      })
  }

}
