import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  nombre?: string;
  ValorContador:number = 0;
  mensajeRecibido: string = '';


  //Inyeccion por constructor
  //constructor(
  //  private _servicioFamiliar2:ServicioFamiliarService
  //){}

  //Inyeccion usando decorador Angular 15+
  private _servicioFamiliar = inject(ServicioFamiliarService)

  
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMayor('Kathe');
    this.nombre = this._servicioFamiliar.getHermanoMayor();
  }


  recibirMensaje($event:string){
    this.mensajeRecibido = $event;
  }

  //mensaje desde el padre al hijo
  mensajePadre:string = 'Este mensaje se envia desde el componente padre al hijo';

  incrementar(){
      this.ValorContador++;
  }

  decrementar(){

    if(this.ValorContador > 0){
      this.ValorContador--;
    }
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMenor() || '');
  }


}
