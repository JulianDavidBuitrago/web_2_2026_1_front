import { Routes } from '@angular/router';
import { UserComponent } from './view/user/user.component/user.component';
import { PracticaComponent } from './view/practica/practica.component/practica.component';
import { WeatherForecastComponent } from './view/WeatherForecast/weather-forecast.component/weather-forecast.component';
import { PacienteComponent } from './view/paciente/paciente.component/paciente.component';

export const routes: Routes = [
    { path: '', redirectTo:'users', pathMatch: 'full'},
    { path: 'users', component:UserComponent},
    { path: 'practica', component:PracticaComponent},
    {path: 'WeatherForecast', component: WeatherForecastComponent},
    {path: 'paciente', component: PacienteComponent}
];
 