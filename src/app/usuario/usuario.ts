export class Usuario 
{
  id: number;
  nombre; String;
  edad; number;

   constructor(pId: number,pNombre: String, edad: number) {
    this.id = pId;
    this.nombre = pNombre;
    this.edad = edad;
  }
}