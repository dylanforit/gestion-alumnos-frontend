import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlumnoComponent } from './update-alumno.component';

describe('UpdateAlumnoComponent', () => {
  let component: UpdateAlumnoComponent;
  let fixture: ComponentFixture<UpdateAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAlumnoComponent]
    });
    fixture = TestBed.createComponent(UpdateAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
