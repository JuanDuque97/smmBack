import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoService } from '../services/producto.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
})
export class imagenComponent implements OnInit {
  imagen: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editproductoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'imagens'];
  imagenes:any[] =[];  // Inicializa imagenes como un array
  dataSourcew:any[] = [];
  imagenForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _productoService: productoService,
  ) {      this.imagenForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  }); }


  /*
    ------------------------------------
    ======== init edit productoForm ========
    ------------------------------------
  */
  initeditproductoForm() {
    this.editproductoFormGroup = this._formBuilder.group({
      nombre: [this.imagen.nombre, [Validators.required, Validators.email]],
      descripcion: [this.imagen.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.imagenForm.invalid) return;

    const newproducto: any = {
      nombre: this.imagenForm.value.nombre,
      descripcion: this.imagenForm.value.descripcion
    }




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

    this._productoService.getimagenes().subscribe((imagenes) => {
      this.imagenes = imagenes
      console.log(imagenes);
    })

  }






}
