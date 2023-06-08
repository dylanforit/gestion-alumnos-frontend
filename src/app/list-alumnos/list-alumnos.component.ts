import { Component } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent {

  alumnos:Alumno[];

  constructor(private alumnoService:AlumnoService){ }

  ngOnInit(): void{

    this.getAlumnos();

  }

  private getAlumnos(){
    this.alumnoService.getListaAlumnos().subscribe(dato => {
      this.alumnos = dato;
    });
  }
}
