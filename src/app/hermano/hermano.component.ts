import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {
  nombre?: string;
  
  //Inyeccion por constructor
  //constructor(
  //  private _servicioFamiliar2:ServicioFamiliarService
  //){}

  //Inyeccion usando decorador Angular 15+
  private _servicioFamiliar = inject(ServicioFamiliarService)
  
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoMenor('Nico');
    this.nombre = this._servicioFamiliar.getHermanoMenor();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoMayor() || '');
  }

}
