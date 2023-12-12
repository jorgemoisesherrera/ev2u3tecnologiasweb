import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEgresoComponent } from './all-egreso.component';

describe('AllEgresoComponent', () => {
  let component: AllEgresoComponent;
  let fixture: ComponentFixture<AllEgresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllEgresoComponent]
    });
    fixture = TestBed.createComponent(AllEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
