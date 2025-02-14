import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../auth/services/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class pedidosService {
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
  getpedico(): Observable<any> {
    return this._http.get<any>(`${environment.api}Usuario/datosSesion`, {
      headers: this.getAuthHeaders()
    });
  }

    // liata de Envio
    getEnvio(): Observable<any> {
      return this._http.get<any>(`${environment.api}Envio/todos`, {
      });
    }





    //Pedido

    crearpedido(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Envio/todos`, rol);
    }

    getpedido(): Observable<any> {
      return this._http.get<any>(`${environment.api}Permiso/todos`, {
      });
    }

//Detalle pedd
    creardetallePedido(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Envio/todos`, rol);
    }

   getdetallePedidoes(): Observable<any> {
    return this._http.get<any>(`${environment.api}Permiso/todos`, {
    });
  }


    //medioEnvio

    crearmedioEnvio(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Envio/todos`, rol);
    }

    getmedioEnvioes(): Observable<any> {
      return this._http.get<any>(`${environment.api}Permiso/todos`, {
      });
    }



    //Factura

    crearfactura(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Envio/todos`, rol);
    }

    getfactura(): Observable<any> {
      return this._http.get<any>(`${environment.api}Permiso/todos`, {
      });
    }




    //Envios

    crearenvio(rol: any): Observable<any> {
      return this._http.post<any>(`${environment.api}Envio/todos`, rol);
    }

    getenvioes(): Observable<any> {
      return this._http.get<any>(`${environment.api}Permiso/todos`, {
      });
    }



}
