import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import Header from './header';
import Reddit from '../reddit';
import HackerNews from '../hacker-news';
import StackOverflow from '../stack-overflow';
import Twitter from '../twitter';
import Zhihu from '../zhihu';
import Test from '../test';

const categoryCompMap = {
  'reddit'         : Reddit,
  'hacker-news'    : HackerNews,
  'stack-overflow' : StackOverflow,
  'twitter'        : Twitter,
  'zhihu'          : Zhihu,
  'test'           : Test,
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

class Content extends Component {
  render () {
    var Comp = categoryCompMap[this.props.category];

    return (
      <View style={styles.content}>
        <Header />
        <Comp />
      </View>
    );
  }
};

var mapStateToProps = function (state) {
  return {
    category: state.app.category
  };
};

export default connect(mapStateToProps)(Content);