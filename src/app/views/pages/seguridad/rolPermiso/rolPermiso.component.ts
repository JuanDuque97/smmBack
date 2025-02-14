import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { seguridadService } from '../services/seguridad.service';

@Component({
  selector: 'app-rolPermiso',
  templateUrl: './rolPermiso.component.html',
})
export class rolPermisoComponent implements OnInit {
  rolPermiso: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editseguridadFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'rolPermisos'];
  rolPermisoes:any[] =[];  // Inicializa rolPermisoes como un array
  dataSourcew:any[] = [];
  rolPermisoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _seguridadService: seguridadService,
  ) {      this.rolPermisoForm = this.fb.group({
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
      nombre: [this.rolPermiso.nombre, [Validators.required, Validators.email]],
      descripcion: [this.rolPermiso.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.rolPermisoForm.invalid) return;

    const newseguridad: any = {
      nombre: this.rolPermisoForm.value.nombre,
      descripcion: this.rolPermisoForm.value.descripcion
    }



      this._seguridadService.crearRolPermiso(newseguridad).subscribe(
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

    this._seguridadService.getRolPermisoes().subscribe((rolPermisoes) => {
      this.rolPermisoes = rolPermisoes
      console.log(rolPermisoes);
    })

  }






}
