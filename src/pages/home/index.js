import React from 'react';
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'
import reducer from '../../reducers';
import App from '../app';

let store = createStore(reducer);

export default class Home extends React.Component {
  componentDidMount() {

  }

  render() {
    return (<Provider store={store}>
      <App />
    </Provider>)
  }
}

