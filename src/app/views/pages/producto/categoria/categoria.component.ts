import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoService } from '../services/producto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
})
export class categoriaComponent implements OnInit {
  categoria: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editproductoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'permisos'];
  categorias:any[] =[];  // Inicializa categoriaes como un array
  dataSourcew:any[] = [];
  categoriaForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _productoService: productoService,
  ) {



    this.categoriaForm = this.fb.group({
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
      nombre: [this.categoria.nombre, [Validators.required, Validators.email]],
      descripcion: [this.categoria.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.categoriaForm.invalid) return;

    const newproducto: any = {
      nombre: this.categoriaForm.value.nombre,
      descripcion: this.categoriaForm.value.descripcion
    }

      this._productoService.crearcategoria(this.categoriaForm.value.nombre, this.categoriaForm.value.descripcion).subscribe(
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
  get editproductoForm() {
    return this.editproductoFormGroup.controls;
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

    this._productoService.getcategoriaes().subscribe((categorias) => {
      this.categorias = categorias
      console.log(categorias);
    })

  }


}
