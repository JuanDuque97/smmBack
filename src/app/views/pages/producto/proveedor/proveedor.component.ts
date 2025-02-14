import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoService } from '../services/producto.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
})
export class proveedorComponent implements OnInit {
  proveedor: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editproductoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'permisos'];
  proveedores:any[] =[];  // Inicializa proveedores como un array
  dataSourcew:any[] = [];
  proveedorForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _productoService: productoService,
  ) {      this.proveedorForm = this.fb.group({
    nombre: ['', Validators.required],
    contacto: ['', Validators.required],
    telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
    email: ['', [Validators.required, Validators.email]]
  }); }


  /*
    ------------------------------------
    ======== init edit productoForm ========
    ------------------------------------
  */
  initeditproductoForm() {
    this.editproductoFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      contacto: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
      email: ['', [Validators.required, Validators.email]]
    });
  }



  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.proveedorForm.invalid) return;

      this._productoService.crearproveedor(this.proveedorForm.value).subscribe(
        (producto) => {
          console.log(producto)
          this.closeEditModal()
          window.location.reload(); // Recarga la página completa

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
  openEditModal(producto: any) {
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }

  ngOnInit(): void {

    this._productoService.getproveedores().subscribe((proveedores) => {
      this.proveedores = proveedores
      console.log(proveedores);
    })

  }


}
