import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

import {
  changeCategory
} from '../../actions/app-actions';

const styles = StyleSheet.create({
  button: {
    flex            : 1,
    height          : 44,
    alignSelf       : 'stretch',
    justifyContent  : 'center',
    overflow        : 'hidden',
    backgroundColor : 'rgba(250, 250, 250, 0.2)',
    marginBottom    : 4
  },

  buttonText: {
    fontSize  : 18,
    margin    : 5,
    textAlign : 'center'
  },
});

const mapItemToLabel = {
  'hacker-news'    : 'HackerNews',
  'reddit'         : 'Reddit',
  'stack-overflow' : 'Stack Overflow',
  'twitter'        : 'Twitter',
  'zhihu'          : 'Zhihu',
  'test'           : 'Test'
}

class SideBarItem extends Component {
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
    this.props.dispatch(changeCategory(category));
  }

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#eee',
    };
    return (
      <TouchableHighlight
        onHideUnderlay = {this._onUnhighlight}
        onShowUnderlay = {this._onHighlight}
        onPress        = {this.handleItemClick}
        style          = {[styles.button, this.props.style]}
        underlayColor  = "#a9d9d4"
      >
          <Text style={[styles.buttonText, colorStyle]}>{mapItemToLabel[this.props.children]}</Text>
      </TouchableHighlight>
    );
  }
};

export default connect()(SideBarItem);