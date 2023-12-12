import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { EgresoComponent } from './egreso/egreso.component';



@NgModule({
  declarations: [
    UsersComponent,
    EgresoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
