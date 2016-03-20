import React, {
  Component,
  View,
  Text,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import SideBarItem from './side-bar-item';

const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
});

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const items = ['hacker-news', 'reddit', 'stack-overflow', 'twitter', 'zhihu', 'test'];

class SideBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(items),
    };
  }

  render () {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow  = {rowData => <SideBarItem>{rowData}</SideBarItem>}
        style      = {styles.list}
      />
    );
  }
}

export default SideBar;