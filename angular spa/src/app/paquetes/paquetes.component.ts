import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})
export class PaquetesComponent {
  constructor(private router: Router) {}
  paquetes = [
    {
      nombre: 'Paquete 1',
      descripcion: '3 sesiones de Dermapen',
      precio: "1399.00 MXN",
      imagenUrl: 'assets/imagenes/dermapen.jpg'
    },
    {
      nombre: 'Paquete 2',
      descripcion: '3 sesiones de maderoterapia',
      precio: "1000.00 MXN",
      imagenUrl: 'assets/imagenes/maderoterapia.jpg'
    },
    {
      nombre: 'Paquete 3',
      descripcion: 'Peinado y maquillaje express',
      precio: "800.00 MXN",
      imagenUrl: 'assets/imagenes/maquillaje.png'
    },
    {
      nombre: 'Paquete 4',
      descripcion: 'Masaje relajante facial más corporal',
      precio: "550.00 MXN",
      imagenUrl: 'assets/imagenes/masajefacial.jpg'
    },
    {
      nombre: 'Paquete 5',
      descripcion: 'Pedicure y manicure',
      precio: "550.00 MXN",
      imagenUrl: 'assets/imagenes/manicure.jpeg'
    },
    {
      nombre: 'Paquete 6',
      descripcion: 'Corte de cabello y secado con peinado',
      precio: "250.00 MXN",
      imagenUrl: 'assets/imagenes/corte.jpg'
    },
    {
      nombre: 'Paquete 7',
      descripcion: 'Depilación de ceja y bigote',
      precio: "120.00 MXN",
      imagenUrl: 'assets/imagenes/depilacion.jpg'
    },
   
  ];

  
  citashechas() {
    this.router.navigate(['citashechas']);
  }
  crearCita(nombre: any) {
    this.router.navigate(['/citas'],
    { queryParams: { paquete: nombre } });
  }
}
