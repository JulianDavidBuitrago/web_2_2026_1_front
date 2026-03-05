import { Routes } from '@angular/router';
import { UserComponent } from './view/user/user.component/user.component';

export const routes: Routes = [
    { path: 'users', component:UserComponent},
    { path: '', redirectTo:'users', pathMatch: 'full'}
];
 