import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import {  productoService} from './services/producto.service';

@Component({
    selector: 'app-producto',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class productosComponent implements OnInit {

    profile:any
    constructor(
        private _auth: AuthService,
        private _productoService:productoService
    ) { }

    logout(event:any){
        event.preventDefault();
        this._auth.logout();
    }
    ngOnInit(): void {
        this._productoService.getproducto().subscribe((producto)=>{
            this.profile = producto
        })

    }

}
