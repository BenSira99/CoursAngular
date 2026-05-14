import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private apiKey = '59f7508b3da056e2d0d5caec7225a8ac';
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData> {
    const url = `${this.weatherUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    console.log('Request URL:', url);
    return this.http.get<WeatherData>(url);
  }
}
