import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { seguridadService } from '../services/seguridad.service';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
})
export class permisoComponent implements OnInit {
  permiso: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editseguridadFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'permisos'];
  permisoes:any[] =[];  // Inicializa permisoes como un array
  dataSourcew:any[] = [];
  permisoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _seguridadService: seguridadService,
  ) {      this.permisoForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  }); }


  /*
    ------------------------------------
    ======== init edit seguridadForm ========
    ------------------------------------
  */
  initeditseguridadForm() {
    this.editseguridadFormGroup = this._formBuilder.group({
      nombre: [this.permiso.nombre, [Validators.required, Validators.email]],
      descripcion: [this.permiso.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.permisoForm.invalid) return;

    const newseguridad: any = {
      nombre: this.permisoForm.value.nombre,
      descripcion: this.permisoForm.value.descripcion
    }



      this._seguridadService.crearpermiso(newseguridad).subscribe(
        (seguridad) => {
          console.log(seguridad)
          this.closeEditModal()
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      );

  }


  /*
    ----------------------------------
    =========== Edit Modal ===========
    ----------------------------------
  */
  openEditModal(seguridad: any) {
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }

  ngOnInit(): void {

    this._seguridadService.getpermisoes().subscribe((permisoes) => {
      this.permisoes = permisoes
      console.log(permisoes);
    })

  }


}
