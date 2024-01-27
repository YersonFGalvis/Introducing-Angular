import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

@Input() recibeHijo?: string;
@Output() mensajeDesdeHijo = new EventEmitter<string>();

mensajeParaPadre: string = "";

enviarMensaje(){
  this.mensajeDesdeHijo.emit(this.mensajeParaPadre);
}

}
 