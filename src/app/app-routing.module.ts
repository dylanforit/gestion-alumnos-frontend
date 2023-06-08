import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlumnosComponent as ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';

const routes: Routes = [
  {path : 'alumnos', component:ListAlumnosComponent},
  {path:'',redirectTo:'alumnos',pathMatch:'full'},
  {path : 'create-alumno', component:CreateAlumnoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
