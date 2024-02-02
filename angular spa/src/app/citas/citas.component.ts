import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  nombre: any;
  correo: any;
  celular: any;
  fecha: any;
  paquete: any;
  hora: any;
  id: any;
  atiende: any;
  buttonText: any = 'Agregar cita';
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {


  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('cita');
    this.paquete = this.activatedRoute.snapshot.queryParamMap.get('paquete');
    this.atiende = "null";
    this.hora = "null";
    if (this.id != 0 && this.id != null && this.id != '' && this.id != '') {
      this.llenarCita();
    }
  }
  llenarCita() {
    this.apiService.getData().subscribe(data => {
      for (let i = 0; i < data['data'].length; i++) {
        if (this.id == data['data'][i]['id']) {
          this.nombre = data['data'][i]['nombre'];
          this.correo = data['data'][i]['correo'];
          this.celular = data['data'][i]['celular'];
          this.paquete = data['data'][i]['paquete'];
          this.fecha = data['data'][i]['fecha'];
          this.hora = data['data'][i]['hora'];
          this.atiende = data['data'][i]['atiende'];
        }
      }
      this.buttonText = 'Actualizar cita';
    });
  }

  enviarCita() {
    if (this.id != 0 && this.id != null && this.id != '' && this.id != '') {
      const data = {
        nombre: this.nombre,
        celular: this.celular,
        correo: this.correo,
        fecha: this.fecha,
        hora: this.hora,
        paquete: this.paquete,
        atiende: this.atiende,
        id: this.id
      };
      this.apiService.actualizarCita(data).subscribe(data => {
        this.volverACitasHechas();
      }
      );
    } else {
      const data = {
        nombre: this.nombre,
        celular: this.celular,
        correo: this.correo,
        fecha: this.fecha,
        hora: this.hora,
        paquete: this.paquete,
        atiende: this.atiende

      };
      this.apiService.guardarCita(data).subscribe(data => {
        console.log(data);
        
        this.volverACitasHechas();
      }
      );
    }

  };
  volverACitasHechas() {
    this.router.navigate(['citashechas']);
  }

  volverPaquetes(){
    this.router.navigate(['paquetes']);
  }
}
