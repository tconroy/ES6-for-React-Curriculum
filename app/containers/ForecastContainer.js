import React, { Component } from 'react';
import Forecast from '../components/Forecast';
import { getForcast } from '../helpers/api';

class ForecastContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }

  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  }

  componentWillReceiveProps (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }

  async makeRequest (city) {
    try {
      let forecastData = await getForcast(city);
      this.setState({ isLoading: false, forecastData });
    } catch (err) {
      console.warn('async error in makeRequest: ', err);
    }
  }

  handleClick (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  }

  render () {
    let { isLoading, forecastData } = this.state;
    let { city } = this.props.routeParams;
    return (
      <Forecast
        city={city}
        isLoading={isLoading}
        handleClick={(weather) => this.handleClick(weather)}
        forecastData={forecastData} />
    )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ForecastContainer;