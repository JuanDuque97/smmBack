import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../auth/services/localstorage.service';

LocalstorageService
@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  getUser(): Observable<any> {
    return this._http.get<any>(`${environment.api}Usuario/datosSesion`, {
      headers: this.getAuthHeaders()
    });
  }




  // updateUser(user: any): Observable<any> {
  //   return this._http.put<any>(`${environment.api}/v1/users/1`, user);
  // }
}
