import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './views/pages/auth/services/auth-guard.service';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: BaseComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./views/pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },

      {
        path: 'seguridad',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./views/pages/seguridad/seguridad.module').then(
            (m) => m.seguridadModule
          ),
      },

      {
        path: 'pedido',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./views/pages/pedido/pedidos.module').then(
            (m) => m.pedidoModule
          ),
      },

      {
        path: 'producto',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./views/pages/producto/productos.module').then(
            (m) => m.productosModule
          ),
      },


      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./views/pages/user/user.module').then(
            (m) => m.UserModule
          ),
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      type: 404,
      title: 'Page Not Found',
      desc: "Oopps!! The page you were looking for doesn't exist.",
    },
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent,
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
