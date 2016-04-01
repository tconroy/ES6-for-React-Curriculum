import React from 'react'
import { convertTemp } from '../helpers/utils'
import DayItem from './DayItem'

const styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Detail ({weather, city}) {
  const { temp, humidity } = weather;
  const { description } = weather.weather[0];
  const { container, descriptionContainer } = styles;

  return (
    <div style={container}>
      <DayItem day={weather} />
      <div style={descriptionContainer}>
        <p>{city}</p>
        <p>{description}</p>
        <p>min temp: {convertTemp(temp.min)} degrees</p>
        <p>max temp: {convertTemp(temp.max)} degrees</p>
        <p>humidity: {humidity}</p>
      </div>
    </div>
  )
}

export default Detail;