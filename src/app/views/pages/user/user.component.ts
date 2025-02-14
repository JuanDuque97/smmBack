import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    profile:any
    constructor(private router: Router,
        private _auth: AuthService,
        private _userService:UserService
    ) { }

    logout(event:any){
        event.preventDefault();
        this._auth.logout();
    }
    ngOnInit(): void {
        this._userService.getUser().subscribe((user)=>{
            this.profile = user
        })

    }


    navigateToRoles() {
      this.router.navigate(['/seguridad/roles']);
    }

    // Método para navegar a la ruta de Permisos
    navigateToPermisos() {
      this.router.navigate(['/seguridad/permisos']);
    }

    // Método para navegar a la ruta de Permisos por Rol
    navigateToPermisosPorRol() {
      this.router.navigate(['/seguridad/rolPermisos']);
    }



    navigateToUsuario() {
      this.router.navigate(['/usuario']); // Asegúrate de que esta ruta sea correcta
    }

    navigateToProducto() {
      this.router.navigate(['/producto/producto']);
    }

    navigateToProveedor() {
      this.router.navigate(['/producto/proveedor']);
    }

    navigateToCategoria() {
      this.router.navigate(['/producto/categoria']);
    }

    navigateToSubcategoria() {
      this.router.navigate(['/producto/subcategoria']);
    }

    navigateToPedido() {
      this.router.navigate(['/pedido/pedido']);
    }

    navigateToMedioEnvio() {
      this.router.navigate(['/pedido/medioEnvio']);
    }

    navigateToDetallePedido() {
      this.router.navigate(['/pedido/detallePedido']);
    }

    navigateToFactura() {
      this.router.navigate(['/pedido/envio']);
    }

    navigateToEnvio() {
      this.router.navigate(['/pedido/factura']);
    }

    navigateToProfile() {
      this.router.navigate(['/profile']);
    }

    navigateToWishlist() {
      this.router.navigate(['/wishlist']);
    }
}
