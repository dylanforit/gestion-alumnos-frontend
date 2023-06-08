import { Component } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrls: ['./create-alumno.component.css']
})
export class CreateAlumnoComponent {

  alumno: Alumno = new Alumno();
  constructor(private alumnoService:AlumnoService,private router:Router) {}
  ngOnInit(): void {

  }

  saveAlumno(){
    this.alumnoService.createAlumno(this.alumno).subscribe(dato => {

      console.log(dato);

      this.redirectAlumnos();
    }, error => console.log(error));
      
  }

  redirectAlumnos(){
    this.router.navigate(['/alumnos'])
  }

  onSubmit(){

    this.saveAlumno();
  }
}
