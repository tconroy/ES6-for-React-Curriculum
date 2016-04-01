import React, { Component } from 'react'
import Detail from '../components/Detail'

class DetailContainer extends Component {
  constructor(props) {
  	super(props);
  }

  render() {
    let { weather } = this.props.location.state;
    let { city } = this.props.routeParams;
    return <Detail weather={weather} city={city} />
  }
}



export default DetailContainer;