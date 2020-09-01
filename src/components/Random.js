import React, { Component } from 'react'
import {getRandomId} from '../redux/actions/randomId-action'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Random extends Component {
    componentDidMount(){
        this.props.onGetRandomId()
    }

    render() {
        if (this.props.randomId !== '') {
            return <Redirect to={`/detail/${this.props.randomId}`} />
          }
          return(
          <div></div>
          )
    }
}

const mapStateToProps = state => {
    return {randomId: state.randomId}
  }
  
  const mapDispatchToProps = {
    onGetRandomId: getRandomId
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Random);