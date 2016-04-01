import React, { PropTypes } from 'react';
import { getDate } from '../helpers/utils';

const styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function DayItem ({ day, handleClick }) {
  const date = getDate(day.dt);
  const { icon } = day.weather[0];
  const {dayContainer, weather, subheader} = styles;
  return (
    <div style={dayContainer} onClick={handleClick}>
      <img style={weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={subheader}>{date}</h2>
    </div>
  )
}

DayItem.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
}


export default DayItem;