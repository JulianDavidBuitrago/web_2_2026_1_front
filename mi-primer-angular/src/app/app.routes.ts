import { Routes } from '@angular/router';
import { UserComponent } from './view/user/user.component/user.component';
import { PracticaComponent } from './view/practica/practica.component/practica.component';

export const routes: Routes = [
    { path: '', redirectTo:'users', pathMatch: 'full'},
    { path: 'users', component:UserComponent},
    { path: 'practica', component:PracticaComponent}
];
 