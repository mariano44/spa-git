import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { CitasComponent } from './citas/citas.component';
import { CitashechasComponent } from './citashechas/citashechas.component';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon'
import { MatNativeDateModule} from '@angular/material/core'
import { MatDatepickerModule} from '@angular/material/datepicker'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    PaquetesComponent,
    CitasComponent,
    CitashechasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    NgxDaterangepickerMd, 
    NgxDaterangepickerMd.forRoot(),
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
