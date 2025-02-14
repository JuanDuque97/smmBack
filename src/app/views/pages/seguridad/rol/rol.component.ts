import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { seguridadService } from '../services/seguridad.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
})
export class rolComponent implements OnInit {
  rol: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editseguridadFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'permisos'];
  roles:any[] =[];  // Inicializa roles como un array
  dataSourcew:any[] = [];
  rolForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _seguridadService: seguridadService,
  ) {      this.rolForm = this.fb.group({
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
      nombre: [this.rol.nombre, [Validators.required, Validators.email]],
      descripcion: [this.rol.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.rolForm.invalid) return;

    const newseguridad: any = {
      nombre: this.rolForm.value.nombre,
      descripcion: this.rolForm.value.descripcion
    }



      this._seguridadService.crearRol(newseguridad).subscribe(
        (seguridad) => {
          console.log(seguridad)
          this.closeEditModal()
        },
        (error: HttpErrorResponse) => {
          console.log(error)
        }
      );

  }
  get editseguridadForm() {
    return this.editseguridadFormGroup.controls;
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

    this._seguridadService.getRoles().subscribe((roles) => {
      this.roles = roles
      console.log(roles);
    })

  }


}
