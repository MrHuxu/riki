'use strict'

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import SideMenu from 'react-native-side-menu';

const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducers);

import SideBar from './side-bar';
import Content from './content';
import reducers from '../reducers';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SideMenu
          menu   = {<SideBar />}
          isOpen = {true}
        >
          <View style={styles.content}>
            <Content />
          </View>
        </SideMenu>
      </Provider>
    );
  }
}

export default App;