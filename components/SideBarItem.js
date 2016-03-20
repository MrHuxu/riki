import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
});

class SideBarItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false
    };

    this._onHighlight = this._onHighlight.bind(this);
    this._onUnhighlight = this._onUnhighlight.bind(this);
  }

  _onHighlight () {
    this.setState({active: true});
  }

  _onUnhighlight () {
    this.setState({active: false});
  }

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
};

export default SideBarItem;