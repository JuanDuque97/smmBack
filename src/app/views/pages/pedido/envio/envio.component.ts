import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pedidosService } from '../services/pedido.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
})
export class envioComponent implements OnInit {
  envio: any = {}
  isVisable: boolean = false;
  isSubmitted: boolean = false;
  editfacturaFormGroup!: FormGroup;
  displayedColumns: string[] = ['nombre', 'permisos'];
  envioes:any[] =[];  // Inicializa envioes como un array
  dataSourcew:any[] = [];
  envioForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _formBuilder: FormBuilder,
    private _pedidosService: pedidosService,
  ) {      this.envioForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  }); }


  /*
    ------------------------------------
    ======== init edit facturaForm ========
    ------------------------------------
  */
  initeditfacturaForm() {
    this.editfacturaFormGroup = this._formBuilder.group({
      nombre: [this.envio.nombre, [Validators.required, Validators.email]],
      descripcion: [this.envio.descripcion, Validators.required]
    });
  }

  /*
    ------------------------------------
    ============= on Submit ============
    ------------------------------------
  */
  onSubmit() {
    this.isSubmitted = true;

    if (this.envioForm.invalid) return;

    const newfactura: any = {
      nombre: this.envioForm.value.nombre,
      descripcion: this.envioForm.value.descripcion
    }



      this._pedidosService.crearenvio(newfactura).subscribe(
        (factura) => {
          console.log(factura)
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
  openEditModal(factura: any) {
    this.isVisable = true;
  }

  closeEditModal() {
    this.isVisable = false;
  }

  ngOnInit(): void {

    this._pedidosService.getenvioes().subscribe((envioes) => {
      this.envioes = envioes
      console.log(envioes);
    })

  }


}
