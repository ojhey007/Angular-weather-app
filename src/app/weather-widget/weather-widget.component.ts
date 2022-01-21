import { Component, OnInit } from '@angular/core';
import weatherData from "../../assets/json/weather_data.json";
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  days:any[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];

weatherData:any;
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    // this.jsfunction();
  }
  getWeatherData(){
    let data = weatherData.properties;
    console.log(data.timeseries);
    this.setWeatherData(data);
  //  this.getSevenDaysData(data);
  }
setWeatherData(data){
this.weatherData = data.timeseries.slice(0,7);
}

getSevenDaysData(time){
  var timeData = time.timeseries.time
  var seventhDay = new Date();
seventhDay.setDate(seventhDay.getDate() - 7);

  var filteredData = timeData.filter((d) => {
    return new Date(d.date).getTime() <= seventhDay.getTime();
  })

//  var filteredData.sort(function(a, b) {
//     return new Date(a.dateWatched) > new Date(b.dateWatched);
//   });
  console.log(filteredData)
}


jsfunction(){
  const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;
        console.log(latitude);

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        // showWeatherData(data);
        })

    })
}


}
}
