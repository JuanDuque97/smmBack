import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { productoComponent } from './producto/producto.component';
import { subcategoriaComponent } from './subcategoria/subcategoria.component';
import { proveedorComponent } from './proveedor/proveedor.component';
import { categoriaComponent } from './categoria/categoria.component';


import { SharedModule } from '../../shared/shared.module';
import { imagenComponent } from './imagen/imagen.component';

import { productosComponent } from './productos.component';



const routes: Routes = [
  {
    path: '',
    component: productosComponent,
    children: [
      {
        path: 'producto',
        component: productoComponent,
      },
      {
        path: 'proveedor',
        component: proveedorComponent,
      },
      {
        path: 'imagen',
        component: imagenComponent,
      }, {
        path: 'subcategoria',
        component: subcategoriaComponent,
      },
      {
        path: 'categoria',
        component: categoriaComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    categoriaComponent,
    subcategoriaComponent,
    imagenComponent,
    productoComponent,
    proveedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class productosModule { }
