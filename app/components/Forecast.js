import React, { PropTypes } from 'react';
import { getDate } from '../helpers/utils';
import DayItem from './DayItem';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}

function ForecastUI ({ city, forecast, handleClick }) {
  const { header, subheader, container } = styles;
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={header}>{city}</h1>
      <p style={subheader}>Select a day</p>
      <div style={container}>
        {forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast ({ isLoading, city, forecastData, handleClick }) {
  const { header } = styles;
  return (
    <div>
      {
        isLoading === true
          ? <h1 style={header}> Loading </h1>
          : <ForecastUI
              city={city}
              forecast={forecastData}
              handleClick={handleClick} />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Forecast;