import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pedidosService } from '../services/pedido.service';

@Component({
  selector: 'app-detallePedido',
  templateUrl: './detallePedido.component.html',
})
export class detallePedidoComponent implements OnInit {
  detallePedido: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editpedicoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'detallePedidos'];
  detallePedidoes:any[] =[];  // Inicializa detallePedidoes como un array
  dataSourcew:any[] = [];
  detallePedidoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _pedidosService: pedidosService,
  ) {      this.detallePedidoForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  }); }


  /*
    ------------------------------------
    ======== init edit pedicoForm ========
    ------------------------------------
  */
  initeditpedicoForm() {
    this.editpedicoFormGroup = this._formBuilder.group({
      nombre: [this.detallePedido.nombre, [Validators.required, Validators.email]],
      descripcion: [this.detallePedido.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.detallePedidoForm.invalid) return;

    const newpedico: any = {
      nombre: this.detallePedidoForm.value.nombre,
      descripcion: this.detallePedidoForm.value.descripcion
    }



      this._pedidosService.creardetallePedido(newpedico).subscribe(
        (pedico) => {
          console.log(pedico)
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
  openEditModal(pedico: any) {
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }

  ngOnInit(): void {

    this._pedidosService.getdetallePedidoes().subscribe((detallePedidoes) => {
      this.detallePedidoes = detallePedidoes
      console.log(detallePedidoes);
    })

  }






}
