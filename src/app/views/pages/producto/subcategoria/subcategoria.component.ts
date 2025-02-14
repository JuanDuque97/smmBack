import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoService } from '../services/producto.service';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
})
export class subcategoriaComponent implements OnInit {
  subcategoria: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editproductoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'subcategorias'];
  subcategoriaes:any[] =[];  // Inicializa subcategoriaes como un array
  dataSourcew:any[] = [];
  subcategoriaForm: FormGroup;
    categorias: any[] = []; // Array para almacenar las categorías
    subcategorias: any[] = []; // Array para almacenar las categorías

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _productoService: productoService,
  ) {      this.subcategoriaForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
  }); }


  /*
    ------------------------------------
    ======== init edit productoForm ========
    ------------------------------------
  */
  initeditproductoForm() {
    this.editproductoFormGroup = this._formBuilder.group({
             nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.subcategoriaForm.invalid) return;

      this._productoService.crearsubcategoria(this.subcategoriaForm.value.nombre,this.subcategoriaForm.value.descripcion).subscribe(
        (producto) => {
          console.log(producto)
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
  openEditModal(producto: any) {
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }



  ngOnInit(): void {

    this._productoService.getsubcategoriaes().subscribe((subcategoriaes) => {
      this.subcategoriaes = subcategoriaes
      console.log(subcategoriaes);
    })



  }


  loadCategorias(): void {
    this._productoService.getcategoriaes().subscribe(data => {
        this.categorias = data; // Almacena las categorías en el array
    });
}




}
