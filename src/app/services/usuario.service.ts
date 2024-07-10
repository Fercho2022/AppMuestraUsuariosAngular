import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL='https://rickandmortyapi.com/api/character';





  constructor(private http:HttpClient) {

   }

   obtenerUsuarios():Observable<any>{
    return this.http.get<any>(this.URL);
   }

   obtenerUsuario(id:any):Observable<any>{
    return this.http.get<any>(this.URL+'/'+id)
   }

}
