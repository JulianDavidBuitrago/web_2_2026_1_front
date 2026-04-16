import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecastModel } from '../../models/WeatherForecast.model/weather-forecast.model';
@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
 
  constructor(private http: HttpClient) {
    
  }

  getWeatherForecast(): Observable<WeatherForecastModel[]>{
    return this.http.get<WeatherForecastModel[]>('https://localhost:7177/WeatherForecast');
  }
}
