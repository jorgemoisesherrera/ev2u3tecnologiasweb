import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgresosByUserComponent } from './egresos-by-user/egresos-by-user.component';
import { AllEgresoComponent } from './all-egreso/all-egreso.component';



@NgModule({
  declarations: [
    EgresosByUserComponent,
    AllEgresoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
