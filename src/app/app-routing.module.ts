import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlumnosComponent as ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';
import { DetailAlumnoComponent } from './detail-alumno/detail-alumno.component';

const routes: Routes = [
  {path : 'alumnos', component:ListAlumnosComponent},
  {path:'',redirectTo:'alumnos',pathMatch:'full'},
  {path : 'create-alumno', component:CreateAlumnoComponent},
  {path : 'update-alumno/:id', component:UpdateAlumnoComponent},
  {path : 'detail-alumno/:id', component:DetailAlumnoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
