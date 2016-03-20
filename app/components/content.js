import React, {
  Component,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import Reddit from './reddit';
import HackerNews from './hacker-news';
import StackOverflow from './stack-overflow';
import Twitter from './twitter';
import Zhihu from './zhihu';
import Test from './test';

const categoryCompMap = {
  'reddit'         : Reddit,
  'hacker-news'    : HackerNews,
  'stack-overflow' : StackOverflow,
  'twitter'        : Twitter,
  'zhihu'          : Zhihu,
  'test'           : Test,
};

class Content extends Component {
  render () {
    var Comp = categoryCompMap[this.props.category];

    return (
      <View>
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