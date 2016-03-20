/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import SideBar from './components/SideBar';
import Content from './components/Content';

class riki extends Component {
  render() {
  var menu = (
      <SideBar />
  );
    return (
      <SideMenu
        menu   = {<SideBar />}
        isOpen = {true}
      >
        <View style={styles.container}>
          <Content category={'Test'} />
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('riki', () => riki);
