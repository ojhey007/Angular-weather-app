import { Component, OnInit } from '@angular/core';
import weatherData from "../../../assets/json/weather_data.json";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  days:any[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
currentData:any;
currentCity:String;
weatherData:any;
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    this.getCurrentCity ();
  }

getCurrentWeather(){
 this.currentData = this.weatherData[0];
}
  getWeatherData(){
    let data = weatherData.properties;
    console.log(data.timeseries);
    this.setWeatherData(data);
  //  this.getSevenDaysData(data);
  }
setWeatherData(data){
this.weatherData = data.timeseries.slice(0,7);
this.getCurrentWeather();
}


getCurrentCity  () {
const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

  navigator.geolocation.getCurrentPosition((success) => {
      
      let {latitude, longitude } = success.coords;

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

      console.log(data)
      this.currentCity = data.timezone.substring(data.timezone.indexOf('/') + 1);
      // showWeatherData(data);
      })

  })
}


}
