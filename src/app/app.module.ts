import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAlumnosComponent as ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAlumnoComponent } from './create-alumno/create-alumno.component';
import { FormsModule } from '@angular/forms';
import { UpdateAlumnoComponent } from './update-alumno/update-alumno.component';
import { DetailAlumnoComponent } from './detail-alumno/detail-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAlumnosComponent,
    CreateAlumnoComponent,
    UpdateAlumnoComponent,
    DetailAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
