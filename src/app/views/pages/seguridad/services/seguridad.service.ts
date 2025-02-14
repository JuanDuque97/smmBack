import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../auth/services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class seguridadService {
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
  getseguridad(): Observable<any> {
    return this._http.get<any>(`${environment.api}Usuario/datosSesion`, {
      headers: this.getAuthHeaders()
    });
  }

    // liata de roles
    getRoles(): Observable<any> {
      return this._http.get<any>(`${environment.api}Roles/todos`, {
      });
    }

    getpermisoes(): Observable<any> {
      return this._http.get<any>(`${environment.api}Permiso/todos`, {
      });
    }




    crearRol(rol: any): Observable<any> {
    return this._http.post<any>(`${environment.api}Roles/todos`, rol);
   }

   crearpermiso(rol: any): Observable<any> {
    return this._http.post<any>(`${environment.api}Permisos`, rol);
   }





   getRolPermisoes(): Observable<any> {
    return this._http.get<any>(`${environment.api}Permiso/todos`, {
    });
  }




      crearRolPermiso(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Roles/todos`, rol);
    }

    crearimagen(): Observable<any> {
      return this._http.get<any>(`${environment.api}Permiso/todos`, {
      });
    }
    getimagenes(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Roles/todos`, rol);
    }



}
