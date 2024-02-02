import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlGet = "http://localhost:8000/api/citas"

  private urlPost = "http://localhost:8000/api/citas/agregar"

  private urlDelete = "http://localhost:8000/api/citas/eliminar" 

  private urlPut = "http://localhost:8000/api/citas/actualizar" 

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlGet);
  }
  
  guardarCita(data: any){
    return this.http.post(this.urlPost, data);
  }

  actualizarCita(data: any){
    return this.http.put(this.urlPut, data);
  }

  eliminarCita(data: any) {
    return this.http.delete(this.urlDelete + "/" + data);
  }
}
