/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <MyComponent/>
      </Provider>
    )
  }
}

export default App;
