import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  pedidosService } from '../services/pedido.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
})
export class facturaComponent implements OnInit {
  factura: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editproductoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'facturas'];
  facturaes:any[] =[];  // Inicializa facturaes como un array
  dataSourcew:any[] = [];
  facturaForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _pedidosService: pedidosService,
  ) {      this.facturaForm = this.fb.group({
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
      nombre: [this.factura.nombre, [Validators.required, Validators.email]],
      descripcion: [this.factura.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.facturaForm.invalid) return;

    const newproducto: any = {
      nombre: this.facturaForm.value.nombre,
      descripcion: this.facturaForm.value.descripcion
    }



      this._pedidosService.crearfactura(newproducto).subscribe(
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

    this._pedidosService.getfactura().subscribe((facturaes) => {
      this.facturaes = facturaes
      console.log(facturaes);
    })

  }


}
