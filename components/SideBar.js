import React, {
  Component,
  View,
  Text,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import SideBarItem from './SideBarItem';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const items = ['Stack Overflow', 'Reddit', 'Twitter', 'Zhihu Explore'];

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
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <SideBarItem>{rowData}</SideBarItem>}
      />
    );
  }
}

export default SideBar;