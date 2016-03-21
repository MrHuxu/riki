import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

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
  }
});

class Header extends Component {
  render () {
    return (
      <View style={styles.headerContainer}>
        <Text>{this.props.category}</Text>
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