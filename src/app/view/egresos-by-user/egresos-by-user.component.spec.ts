import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosByUserComponent } from './egresos-by-user.component';

describe('EgresosByUserComponent', () => {
  let component: EgresosByUserComponent;
  let fixture: ComponentFixture<EgresosByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgresosByUserComponent]
    });
    fixture = TestBed.createComponent(EgresosByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
