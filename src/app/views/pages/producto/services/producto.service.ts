import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../auth/services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class productoService {
  constructor(
    private _http: HttpClient,
    private _localstorageService: LocalstorageService,
  ) {


  }

   private getAuthHeaders(): HttpHeaders {
    const token = this._localstorageService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Método para obtener el perfil del usuario
  getproducto(): Observable<any> {
    return this._http.get<any>(`${environment.api}Usuario/datosSesion`, {
      headers: this.getAuthHeaders()
    });
  }

    // liata de roles
    getRoles(): Observable<any> {
      return this._http.get<any>(`${environment.api}Roles/todos`, {
      });
    }

    getproductos(): Observable<any> {
      return this._http.get<any>(`${environment.api}Producto/todos`, {
      });
    }



    getsubcategoriaes(): Observable<any> {
      return this._http.get<any>(`${environment.api}Subcategoria/todos`, {
      });
    }


    crearRol(rol: any): Observable<any> {
    return this._http.post<any>(`${environment.api}Roles/todos`, rol);
   }

   crearproducto(rol: any): Observable<any> {
    return this._http.post<any>(`${environment.api}Producto/crear`, rol);
   }


   crearsubcategoria(nombre: string, descripcion:string): Observable<any> {
    const newSubcategoria = { nombre, descripcion }; // Crea un objeto con los datos
    return this._http.post<any>(`${environment.api}Subcategoria/createsubcategoria`, newSubcategoria);
   }


   getRolproductoes(): Observable<any> {
    return this._http.get<any>(`${environment.api}producto/todos`, {
    });
  }





  crearcategoria(nombre: string, descripcion:string): Observable<any> {
    const newSubcategoria = { nombre, descripcion }; // Crea un objeto con los datos
    return this._http.post<any>(`${environment.api}Categoria/crear`, newSubcategoria);
   }



   crearimagen(array: any): Observable<any> {
    return this._http.post<any>(`${environment.api}Imagen`, array);
  }

  getcategoriaes(): Observable<any> {
    return this._http.get<any>(`${environment.api}Categoria/todos`, {
    });
  }


      crearRolproducto(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Roles/todos`, rol);
    }

    getimagenes(): Observable<any> {
      return this._http.get<any>(`${environment.api}producto/todos`, {
      });
    }




    crearproveedor(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Proveedor/crear`, rol);
    }

    getproveedores(): Observable<any> {
      return this._http.get<any>(`${environment.api}Proveedor/todos`, {
      });
    }



}
