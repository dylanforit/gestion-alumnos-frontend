import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-detail-alumno',
  templateUrl: './detail-alumno.component.html',
  styleUrls: ['./detail-alumno.component.css']
})
export class DetailAlumnoComponent implements OnInit{

  id:number;
  alumno:Alumno
  constructor(private route:ActivatedRoute, private alumnoService:AlumnoService){}

  ngOnInit(): void {
      
    this.id = this.route.snapshot.params['id'];
    this.alumno = new Alumno();
    this.alumnoService.getAlumnoById(this.id).subscribe(dato => {
      this.alumno = dato;
    });
  }

}
