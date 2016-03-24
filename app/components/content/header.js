import React, {
  Component,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import {
  changeSidebar
} from '../../actions/app-actions';

import hamburgerBar from '../../assets/images/hamburger-bar.png';

const categoryLabelMap = {
  'reddit'         : 'Reddit',
  'hacker-news'    : 'HackerNews',
  'stack-overflow' : 'StackOverflow',
  'twitter'        : 'Twitter',
  'zhihu'          : 'Zhihu',
  'test'           : 'Test',
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems              : 'center',
    justifyContent          : 'center',
    paddingTop              : 18,
    width                   : 320,
    height                  : 60,
    backgroundColor         : '#F5FCFF',
    borderBottomWidth       : 1,
    borderBottomColor       : '#ddd',
    borderBottomRightRadius : 5,
    borderBottomLeftRadius  : 5
  },

  hamburgerBar: {
    position      : 'absolute',
    left          : 3,
    bottom        : 3,
    paddingTop    : 8,
    paddingBottom : 8,
    paddingLeft   : 12,
    paddingRight  : 12
  },

  barIcon: {
    width  : 19,
    height : 19
  }
});

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false
    };

    this._onHighlight = this._onHighlight.bind(this);
    this._onUnhighlight = this._onUnhighlight.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  _onHighlight () {
    this.setState({active: true});
  }

  _onUnhighlight () {
    this.setState({active: false});
  }

  handleItemClick () {
    var category = this.props.children;
    this.props.dispatch(changeSidebar(true));
  }

  render () {
    return (
      <View style={styles.headerContainer}>
        <TouchableHighlight
          onPress        = {this.handleItemClick}
          style          = {[styles.hamburgerBar]}
          underlayColor  = "#fff"
        >
          <Image
            style  = {styles.barIcon}
            source = {hamburgerBar}
          />
        </TouchableHighlight>
        <Text>{categoryLabelMap[this.props.category]}</Text>
      </View>
    );
  }
};

var mapStateToProps = function (state) {
  return {
    category: state.app.category
  };
};

export default connect(mapStateToProps)(Header);