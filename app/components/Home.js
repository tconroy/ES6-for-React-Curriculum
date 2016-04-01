import React, { PropTypes } from 'react';
import GetCityContainer from '../containers/GetCityContainer';

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
  const { container, header } = styles;
  return (
    <div style={container}>
      <h1 style={header}>Enter a City and State</h1>
      <GetCityContainer />
    </div>
  )
}

export default Home;