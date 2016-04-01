import React, { Component } from 'react'
import Detail from '../components/Detail'

class DetailContainer extends Component {
  constructor() {
  	super();
  }

  render() {
    return (
      <Detail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city} />
    );
  }
}



export default DetailContainer;