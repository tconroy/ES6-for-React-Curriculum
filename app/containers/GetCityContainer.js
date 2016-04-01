import React, { PropTypes, Component } from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleSubmitCity (e) {
    e.preventDefault()
    let { city } = this.state;
    this.context.router.push('/forecast/' + city)
  }

  handleUpdateCity (e) {
    let { value } = e.target;
    this.setState({
      city: value
    })
  }

  render () {
    let { direction } = this.props;
    let { city } = this.state;
    return (
      <GetCity
        direction={direction}
        onSubmitCity={(e) => this.handleSubmitCity(e)}
        onUpdateCity={(e) => this.handleUpdateCity(e)}
        city={city} />
    )
  }
};

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
GetCityContainer.propTypes = {
  direction: PropTypes.string
};
GetCityContainer.defaultProps = {
  direction: 'column',
}

export default GetCityContainer;