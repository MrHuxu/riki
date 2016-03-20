import React, {
  Component,
  View,
  Text
} from 'react-native';

class Content extends Component {
  render () {
    return (
      <Text>
        {this.props.category}
      </Text>
    );
  }
};

export default Content;