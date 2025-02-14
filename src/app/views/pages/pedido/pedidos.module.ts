import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { detallePedidoComponent } from './detallePedido/detallePedido.component';
import { envioComponent } from './envio/envio.component';
import { pedidoComponent } from './pedido/pedido.component';
import {  medioEnvioComponent } from './medioEnvio/medioEnvio.component';
import { facturaComponent} from './factura/factura.component';

import { pedidosComponent} from './pedidos.component';

import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: pedidoComponent,
    children: [
      {
        path: 'detallePedido',
        component: detallePedidoComponent,
      },
      {
        path: 'factura',
        component: facturaComponent,
      },
      {
        path: 'medioEnvio',
        component: medioEnvioComponent,
      },
      {
        path: 'pedidoComponent',
        component: pedidoComponent,
      },
      {
        path: 'envioComponent',
        component: envioComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    envioComponent,
    medioEnvioComponent,
    facturaComponent,
    detallePedidoComponent,
    pedidoComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class pedidoModule { }
