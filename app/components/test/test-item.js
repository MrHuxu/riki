import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  item: {
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '#26c6da'
  }
});

class TestItem extends Component {
  render () {
    const { name, fullName, url, star, description, updatedAt } = this.props.children;

    return (
      <View style={styles.item}>
        <Text> {name} </Text>
        <Text> {fullName} </Text>
        <Text> {url} </Text>
        <Text> {star} </Text>
        <Text> {description} </Text>
        <Text> {updatedAt} </Text>
      </View>
    )
  }
}

export default TestItem;