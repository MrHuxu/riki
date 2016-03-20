import React, {
  Component,
  ListView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import TestItem from './test-item';
import { fetchProjects } from '../../actions/test-actions';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const styles = StyleSheet.create({
  list: {
    marginTop: 200
  }
});

class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.records),
    };
  }

  componentDidMount () {
    this.props.dispatch(fetchProjects());
  }

  render () {
    const { records } = this.props;

    if (!records.length) {
      return <Text> Loading... </Text>
    }

    const items = records.map(record => <TestItem key={record.updatedAt}>{record}</TestItem>)

    return (
      <View
        style      = {styles.list}
      >
        {items}
      </View>
    )
  }
}

var mapStateToProps = function (state) {
  return {
    records: state.test.entities
  };
};

export default connect(mapStateToProps)(Test);