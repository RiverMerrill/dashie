import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public condition;
  public city;
  public temp: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      const endpoint = '?lat=' + lat + '&lon=' + long + '&APPID=7f42d383bb93359daab2355073375b91&units=Imperial';
      this.http.get('http://api.openweathermap.org/data/2.5/weather' + endpoint).subscribe((weather: any) => {
        this.condition = weather.weather[0].description;
        this.temp = weather.main.temp;
        this.city = weather.name;
      });

    });
  }

}
