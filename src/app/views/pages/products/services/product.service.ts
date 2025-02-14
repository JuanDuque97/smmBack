import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }

  getProduct(offset: number, limit: number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}Producto/productoDetalle`)
  }

  getSingleProduct(id: number): Observable<any> {
    return this._HttpClient.get<string>(`${environment.api}Producto/producto?id=${id}`);
  }

  getProductsByCategory(id: number): Observable<any> {
    return this._HttpClient.get<string>(`https://api.escuelajs.co/api/Producto/producto?id=${id}`);

  }




}
