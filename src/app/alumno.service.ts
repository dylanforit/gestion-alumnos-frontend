import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from './alumno';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

    //lEsta URL obtiene el listado de todos los empleados en el backend 
    private baseURL = "http://localhost:8080/api/v1/alumnos";
    
    constructor(private httpClient : HttpClient)  {}

    getListaAlumnos():Observable<Alumno[]>{
      return this.httpClient.get<Alumno[]>(`${this.baseURL}`);
    }

    createAlumno(alumno:Alumno):Observable<Object>{
      return this.httpClient.post((`${this.baseURL}`), alumno);
    }

}