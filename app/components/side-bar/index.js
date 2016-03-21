import React, {
  Component,
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import SideBarItem from './side-bar-item';
const logo = require('../../assets/images/logo.jpg');
const bgImage = require('../../assets/images/sidebar-background.jpg');

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingBottom: 20
  },

  headerLogo: {
    borderRadius: 30,
    width: 60,
    height: 60
  },

  headerText: {
    color: '#bbb'
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 480,
    height: 960
  },

  list: {
    paddingTop: 100,
    width: 180,
    height: 960
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

    this.renderSidebarHeder = this.renderSidebarHeder.bind(this);
  }

  renderSidebarHeder () {
    return (
      <View style={styles.headerContainer}>
        <Image
          style  = {styles.headerLogo}
          source = {logo}
        />
        <Text style={styles.headerText}> Riki </Text>
      </View>
    );
  }

  render () {
    return (
      <View>
        <Image
          style = {styles.bgImage}
          source = {bgImage}
        >
          <ListView
            dataSource = {this.state.dataSource}
            renderRow  = {rowData => <SideBarItem>{rowData}</SideBarItem>}
            style      = {styles.list}
            renderHeader = {this.renderSidebarHeder}
          />
        </Image>
      </View>
    );
  }
}

export default SideBar;