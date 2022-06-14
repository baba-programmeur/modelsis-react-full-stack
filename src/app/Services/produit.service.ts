import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Produit } from '../Modeles/produit';

import { Observable, throwError } from "rxjs";
import { Router } from '@angular/router';

const httpOptions =
{
  //les donnees seront sous forme de JSON 

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

}
@Injectable({
  providedIn: 'root'
})

export class ProduitService {

 private readonly apiUrl= 'http://localhost:8081/api/modelSis/';

  constructor(private http: HttpClient) {
  }

 
  listProduit(): Observable<any[]> 
  {

 return this.http.get<any[]>(this.apiUrl +'products',httpOptions).pipe(
 
  )
 ;


}

ajoutProduit(produit: Produit)
{
 
  return this.http.post<Produit>(this.apiUrl +'product', produit,httpOptions)

}

consulterProduitById(id: number): Observable<Produit> 
  {
   
    return this.http.get<Produit>(this.apiUrl + 'product/' +id)

  }

  updateProduit(produit: Produit): Observable<Produit> 
  {


   return this.http.put<Produit>(this.apiUrl+'product' , produit, httpOptions); 

  }

//handle error => gestion des errors 
/*
private handleError(error: HttpErrorResponse) {

  let errorMessage: string;

  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.

    //Error cote client ou cote reseau 

    console.error('An error occurred:', error.error.message);

    errorMessage = `An error occured: ${error.error.message}`;

  } else {
    // The backend returned an unsuccessful response code.
    // Erreur cote backend 
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    errorMessage = `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`;
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Quelque choses sest mal passé, essayer à nouveau' +
    '\n' +
    errorMessage
  );
}*/

}
