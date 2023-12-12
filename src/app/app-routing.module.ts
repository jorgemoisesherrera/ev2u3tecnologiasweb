import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './forms/users/users.component';
import { EgresoComponent } from './forms/egreso/egreso.component';
import { EgresosByUserComponent } from './view/egresos-by-user/egresos-by-user.component';
import { AllEgresoComponent } from './view/all-egreso/all-egreso.component';

const routes: Routes = [
 
    { path: 'users', component: UsersComponent },
    { path: 'egreso', component: EgresoComponent },
    { path: 'egreso-by-users', component: EgresosByUserComponent },
    { path: 'all-egreso', component: AllEgresoComponent },
   
    { path: '', redirectTo: '/users', pathMatch: 'full' }, // Ruta por defecto
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
