import React, { Component } from 'react';
import Loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return <div className='text-center my-3'>
        <img src={Loading} alt="Loading" />
    </div>;
  }
}

export default Spinner;
