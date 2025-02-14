import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';
import { map } from 'rxjs/operators';

environment.api
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  refreshTokenTimeout: any;

  constructor(
    private http: HttpClient,
    private _token: LocalstorageService,
    private router: Router
  ) { }

  login(email: string, contrasena: string): Observable<any> {
    return this.http.post<any>(`${environment.api}Usuario/login`, { email, contrasena });
  }

  register(nombre: string,email: string ,contrasena: string): Observable<any> {
    let rol:any = 1
    let fechaCreacion: Date= new Date();
    return this.http.post<any>(`${environment.api}Usuario/usuarios`, { nombre,contrasena,email,rol, fechaCreacion});

  }


  loggedIn() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (Math.floor(new Date().getTime() / 1000) >= tokenDecode.exp) {
        return false;
      }
      else {
        return true;
      }
    }
    return false;
  }

  logout() {
    this._token.removeToken();
    this.router.navigate(['/auth']);
  }

  refreshToken(): Observable<any> {
    const token = this._token.getToken();
    return this.http.post<any>(`${environment.api}v1/auth/refresh-token`, { token }).pipe(
      map((response: any) => {

        this._token.setToken(response.access_token);

        const expiration = response.refresh_token;
        localStorage.setItem('expiration', expiration);

        this.startRefreshTokenTimer();
        return true;
      })
    );
  }

  startRefreshTokenTimer() {
    console.log('start Refresh Token Timer');
    const jwtToken = this._token.getToken();
    const jwtTokenDecode = JSON.parse(atob(jwtToken.split('.')[1]));
    const expires = new Date(jwtTokenDecode.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    console.log('timeout', timeout);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
