import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citashechas',
  templateUrl: './citashechas.component.html',
  styleUrl: './citashechas.component.css'
})
export class CitashechasComponent implements OnInit {
  citas: any[] = [];
  rows: any[] = [];
  temp:any[] = [];
  tableCitas: any;
  columns = [{ name: 'Nombre', prop: 'nombre' }, 
             { name: 'Paquete', prop: 'paquete'},
             { name: 'Atiende', prop: 'atiende'}, 
             { name: 'Fecha', prop: 'fecha' }, 
             { name: 'Hora', prop: 'hora' }, 
             { name: 'Actions', prop: 'id' }];
  @ViewChild(DatatableComponent) tablaCitas: DatatableComponent | undefined;
  ColumnMode = ColumnMode;
  
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.llenarData();
    
  }

  updateFilter(event: any) {
    
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.nombre.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.citas = temp;
    // Whenever the filter changes, always go back to the first page
    this.tableCitas.offset = 0;
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.citas = [];
      this.temp = [];
      console.log(data);
      
      for (let i = 0; i < data['data'].length; i++) {
        this.citas.push({
          id: data['data'][i]['id'],
          nombre: data['data'][i]['nombre'],
          fecha: data['data'][i]['fecha'],
          hora: data['data'][i]['hora'],
          paquete: data['data'][i]['paquete'],
          atiende: data['data'][i]['atiende']
        });
      }
      this.temp = this.citas;
      this.temp = [...this.temp];
      this.citas = [...this.citas];
    })
  }
  editarCita(cita: any) {
    this.router.navigate(['citas'],
    { queryParams: { cita: cita } });
  };

  eliminarCita(id: string) {
    this.apiService.eliminarCita(id).subscribe(data => {
      this.citas = [];
      this.llenarData();
    })
  }

  volverPaquetes(){
    this.router.navigate(['paquetes']);
  }
}