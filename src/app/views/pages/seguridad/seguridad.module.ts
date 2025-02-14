import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { seguridadComponent } from './seguridad.component';

import { rolPermisoComponent } from './rolPermiso/rolPermiso.component';
import { rolComponent } from './rol/rol.component';
import { permisoComponent } from './permiso/permiso.component';

import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: seguridadComponent,
    children: [
      {
        path: 'rolpermisos',
        component: rolPermisoComponent,
      },
      {
        path: 'permisos',
        component: permisoComponent,
      },
      {
        path: 'roles',
        component: rolComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    rolPermisoComponent,
    permisoComponent,
    rolComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class seguridadModule { }
