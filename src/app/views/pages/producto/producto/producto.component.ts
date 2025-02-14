import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
})
export class productoComponent implements OnInit {
  producto: any = {}
  imagenForm: FormGroup;
  isVisableImagen: boolean = false;
  isVisable: boolean = false;
  idproducto:any;
  isSubmitted: boolean = false;
  proveedorForm !: FormGroup;
  productos: any[] = [];
  productoSeleccionado: any = null;
  displayedColumns: string[] = ['nombre', 'productos'];
  productoes:any[] =[];  // Inicializa productoes como un array
  dataSourcew:any[] = [];
  categorias: any[] = [];
  subcategoriaes: any[] = [];
  proveedores: any[] = [];
  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _productoService: productoService,
  ) {

    this.imagenForm = this.fb.group({
      url: ['', Validators.required],
      descripcion: ['', Validators.required]
    });


    this.proveedorForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      cantidad: [null, [Validators.required, Validators.min(0)]],
      subcategoriaId: [null, Validators.required],
      categoriaId: [null, Validators.required],
      proveedorId: [null, Validators.required],
      stock: [null, [Validators.required, Validators.min(0)]],
      fechaCreacion: [null, Validators.required]

    });


}


  /*
    ------------------------------------
    ======== init edit productoForm ========
    ------------------------------------
  */
  initeditproductoForm() {


    this.imagenForm = this._formBuilder.group({
      url: ['', Validators.required],
      descripcion: ['', Validators.required]
    });


    this.proveedorForm  = this._formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      cantidad: [null, [Validators.required, Validators.min(0)]],
      subcategoriaId: [null, Validators.required],
      categoriaId: [null, Validators.required],
      proveedorId: [null, Validators.required],
      stock: [null, [Validators.required, Validators.min(0)]],
      fechaCreacion: [null, Validators.required]
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


      this._productoService.crearproducto(this.proveedorForm.value).subscribe(
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
    this.producto = producto
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }


  openEditModalI(producto: any) {
    this.idproducto = producto
    this.isVisableImagen = true;
  }

  closeEditModali() {
    this.isVisableImagen = false;
  }
  abrirModal(producto: any) {
    this.productoSeleccionado = producto;

  }

  // Agregar imagen al producto seleccionado
  onSubmitImagen() {
    this.isVisableImagen = true;

    if (this.imagenForm.invalid) return;

    this.imagenForm.value.producto = this.idproducto

      this._productoService.crearimagen(this.imagenForm.value).subscribe(
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


  ngOnInit(): void {

    this._productoService.getproductos().subscribe(data => {
      this.productos = data; // Almacena las categorías en el array

  });

  this._productoService.getsubcategoriaes().subscribe((subcategoriaes) => {
    this.subcategoriaes = subcategoriaes
    console.log(subcategoriaes);
  })

  this._productoService.getproveedores().subscribe((proveedores) => {
    this.proveedores = proveedores
    console.log(proveedores);
  })

  this._productoService.getcategoriaes().subscribe((subcategoriaes) => {
    this.categorias = subcategoriaes
    console.log(subcategoriaes);
  })

  }


}
