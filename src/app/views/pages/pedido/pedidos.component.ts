import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import {  pedidosService} from '../pedido/services/pedido.service';

@Component({
    selector: 'app-pedido',
    templateUrl: './pedidos.component.html',
    styleUrls: ['./pedidos.component.css']
})
export class pedidosComponent implements OnInit {

    profile:any
    constructor(
        private _auth: AuthService,
        private _pedidosService:pedidosService
    ) { }

    logout(event:any){
        event.preventDefault();
        this._auth.logout();
    }
    ngOnInit(): void {
        this._pedidosService.getpedido().subscribe((pedido)=>{
            this.profile = pedido
        })

    }

}
