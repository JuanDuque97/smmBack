import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pedidosService } from '../services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
})
export class pedidoComponent implements OnInit {
  pedido: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editproductoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'pedidos'];
  pedidoes:any[] =[];  // Inicializa pedidoes como un array
  dataSourcew:any[] = [];
  pedidoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _pedidosService: pedidosService,
  ) {      this.pedidoForm = this.fb.group({
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
      nombre: [this.pedido.nombre, [Validators.required, Validators.email]],
      descripcion: [this.pedido.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.pedidoForm.invalid) return;

    const newproducto: any = {
      nombre: this.pedidoForm.value.nombre,
      descripcion: this.pedidoForm.value.descripcion
    }



      this._pedidosService.crearpedido(newproducto).subscribe(
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

    this._pedidosService.getpedido().subscribe((pedidoes) => {
      this.pedidoes = pedidoes
      console.log(pedidoes);
    })

  }


}
