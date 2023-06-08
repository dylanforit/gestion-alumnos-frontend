import { AlumnoService } from './../alumno.service';
import { Alumno } from './../alumno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrls: ['./update-alumno.component.css']
})
export class UpdateAlumnoComponent implements OnInit {

  id:number;
  alumno:Alumno = new Alumno();
  constructor(private alumnoService:AlumnoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alumnoService.getAlumnoById(this.id).subscribe(dato =>{
      this.alumno = dato;
    },error => console.log(error));
  }

  irAlaListaDeAlumnos(){
    this.router.navigate(['/alumnos']);
    console.log('Alumno actualizado',`El alumno ${this.alumno.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.alumnoService.updateAlumno(this.id,this.alumno).subscribe(dato => {
      this.irAlaListaDeAlumnos();
    },error => console.log(error));
  }
}
