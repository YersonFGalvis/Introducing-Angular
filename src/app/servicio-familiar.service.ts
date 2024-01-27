import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoMayor?:string;
  hermanoMenor?:string;

  saludar(hermano:string){
    console.log(`Hola ${hermano}`);
  };

  preguntarPorHijo():string {
    return 'Como esta tu hijo?';
  }

  setHermanoMayor(NombreHermanoMayor:string){
    this.hermanoMayor = NombreHermanoMayor;
  }

  getHermanoMayor():string {
    return this.hermanoMayor || '';
  }

  setHermanoMenor(NombreHermanoMenor:string){
    this.hermanoMenor = NombreHermanoMenor;
  }

  getHermanoMenor():string {
    return this.hermanoMenor || '';
  }


  constructor() { }
}
