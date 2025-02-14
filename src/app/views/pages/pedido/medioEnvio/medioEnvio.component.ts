import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pedidosService } from '../services/pedido.service';

@Component({
  selector: 'app-medioEnvio',
  templateUrl: './medioEnvio.component.html',
})
export class medioEnvioComponent implements OnInit {
  medioEnvio: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editpedidoFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'medioEnvios'];
  medioEnvioes:any[] =[];  // Inicializa medioEnvioes como un array
  dataSourcew:any[] = [];
  medioEnvioForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _pedidoService: pedidosService,
  ) {      this.medioEnvioForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  }); }


  /*
    ------------------------------------
    ======== init edit pedidoForm ========
    ------------------------------------
  */
  initeditpedidoForm() {
    this.editpedidoFormGroup = this._formBuilder.group({
      nombre: [this.medioEnvio.nombre, [Validators.required, Validators.email]],
      descripcion: [this.medioEnvio.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.medioEnvioForm.invalid) return;

    const newpedido: any = {
      nombre: this.medioEnvioForm.value.nombre,
      descripcion: this.medioEnvioForm.value.descripcion
    }



      this._pedidoService.crearmedioEnvio(newpedido).subscribe(
        (pedido) => {
          console.log(pedido)
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
  openEditModal(pedido: any) {
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }

  ngOnInit(): void {

    this._pedidoService.getmedioEnvioes().subscribe((medioEnvioes) => {
      this.medioEnvioes = medioEnvioes
      console.log(medioEnvioes);
    })

  }


}
