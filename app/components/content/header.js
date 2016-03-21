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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    width: 380,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },

  hamburgerBar: {
    position: 'absolute',
    left: 20,
    bottom: 6,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 7
  },

  barIcon: {
    width: 17,
    height: 17
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
          onHideUnderlay = {this._onUnhighlight}
          onShowUnderlay = {this._onHighlight}
          onPress        = {this.handleItemClick}
          style          = {[styles.hamburgerBar]}
          underlayColor  = "#ccc"
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