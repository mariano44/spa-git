import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { CitasComponent } from './citas/citas.component';
import { CitashechasComponent } from './citashechas/citashechas.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
  { path: '', redirectTo: 'paquetes', pathMatch: 'full' },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'citashechas', component: CitashechasComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatDatepickerModule,MatInputModule, MatFormFieldModule],
  exports: [RouterModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppRoutingModule { }
