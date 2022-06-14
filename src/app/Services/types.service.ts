import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Types } from '../Modeles/types';

const httpOptions =
{
  //les donnees seront sous forme de JSON 

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

}
@Injectable({
  providedIn: 'root'
})
export class TypesService {

private readonly apiUrl= 'http://localhost:8081/api/modelSis/';

  constructor(private http: HttpClient) {
  }

  addType(type:Types): Observable<Types> {

    return this.http.post<Types>(this.apiUrl +'productType' ,type, httpOptions)

  }

  listType(): Observable<Types[]> 
  {

 return this.http.get<Types[]>(this.apiUrl +'producType');


}
  reset()
  {

  }
}
