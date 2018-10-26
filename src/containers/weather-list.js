import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name
    const cityTemps = cityData.list.map(weather => weather.main.temp).map(temps => temps - 273)
    const cityPressure = cityData.list.map(weather => weather.main.pressure)
    const cityHumidity = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord;

    return (
     <tr key={cityName}>
       <td><GoogleMap lon={lon} lat={lat} /></td>
       <td><Chart data={cityTemps} color="green" unit="C" /></td>
       <td><Chart data={cityPressure} color="orange" unit="hPa" /></td>
       <td><Chart data={cityHumidity} color="black" unit="%" /></td>
     </tr>
    )
  }

  render() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>  
    )
  }
}

function mapStateToProps({weather}){
  return { weather } // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)