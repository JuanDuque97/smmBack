import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import {  seguridadService} from '../seguridad/services/seguridad.service';

@Component({
    selector: 'app-seguridad',
    templateUrl: './seguridad.component.html',
    styleUrls: ['./seguridad.component.css']
})
export class seguridadComponent implements OnInit {

    profile:any
    constructor(
        private _auth: AuthService,
        private _seguridadService:seguridadService
    ) { }

    logout(event:any){
        event.preventDefault();
        this._auth.logout();
    }
    ngOnInit(): void {
        this._seguridadService.getseguridad().subscribe((seguridad)=>{
            this.profile = seguridad
        })

    }

}
