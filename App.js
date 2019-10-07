import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component3 from './src/components/Component3';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <Component1 />
        <Component2 />
        <Component3 />
      </View>
     </Provider>
   
    );
  }
}

export default App;
