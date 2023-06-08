import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit{

  alumnos:Alumno[];

  constructor(private alumnoService:AlumnoService, private router:Router){ }

  ngOnInit(): void{

    this.getAlumnos();

  }

  updateAlumno(id:number){
    this.router.navigate(['update-alumno', id])
  }

  deleteAlumno(id:number){
    this.alumnoService.deleteAlumno(id).subscribe(dato => {

      console.log(dato);

      this.getAlumnos();
    });
  }


  detailAlumno(id:number){
    this.router.navigate(['detail-alumno', id]);
  }
  private getAlumnos(){
    this.alumnoService.getListaAlumnos().subscribe(dato => {
      this.alumnos = dato;
    });
  }
}
