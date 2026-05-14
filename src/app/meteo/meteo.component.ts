import { Component, ChangeDetectorRef } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
  standalone: false,
})
export class MeteoComponent {
  city: string = '';
  weather: WeatherData | null = null;
  error: string = '';
  today = new Date();

  constructor(
    private meteoService: MeteoService,
    private cdr: ChangeDetectorRef,
  ) {}

  searchWeather(cityName?: string): void {
    const name = cityName?.trim() || this.city.trim();
    if (!name) {
      this.error = 'Veuillez entrer un nom de ville';
      this.weather = null;
      return;
    }

    this.error = '';
    this.weather = null;

    this.meteoService.getWeather(name).subscribe({
      next: (data) => {
        this.weather = data;
        this.error = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = 'Ville non trouvée. Vérifiez le nom.';
        this.weather = null;
        this.cdr.detectChanges();
      },
    });
  }
}
