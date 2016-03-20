'use strict'

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';

import SideBar from './side-bar';
import Content from './content';
import { changeSidebar } from '../actions/app-actions';

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
      <SideMenu
        menu   = {<SideBar />}
        isOpen = {this.props.sidebarOpen}
        onChange = {isOpen => this.props.dispatch(changeSidebar(isOpen))}
      >
        <View style={styles.content}>
          <Content />
        </View>
      </SideMenu>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    sidebarOpen: state.app.sidebarOpen
  };
};

export default connect(mapStateToProps)(App);