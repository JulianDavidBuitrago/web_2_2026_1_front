import { ChangeDetectorRef, Component } from '@angular/core';
import { WeatherForecastService } from '../../../services/WeatherForecast.service/weather-forecast.service';
import { WeatherForecastModel } from '../../../models/WeatherForecast.model/weather-forecast.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-forecast.component',
  imports: [],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css',
})
export class WeatherForecastComponent {

 WeatherForecast$: Observable<WeatherForecastModel[]>;
  
  constructor(private clima: WeatherForecastService,private cdr: ChangeDetectorRef ) {
    this.WeatherForecast$ =this.clima.getWeatherForecast();
     this.clima.getWeatherForecast().subscribe(data =>{
      //this.WeatherForecast = data;
      console.log(data);
      this.cdr.detectChanges();      
     });
  }

}
