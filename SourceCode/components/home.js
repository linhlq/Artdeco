/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import DrawerLayout from 'react-native-drawer-layout';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';
import GridView from "react-native-easy-grid-view";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Dimensions,
    TouchableNativeFeedback,
    TouchableOpacity,
    Image,
    InputText,
    ScrollView
} from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Accordion = require('react-native-accordion');

var {height, width} = Dimensions.get('window');
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _changeState(check) {
        this.setState({check: check})
    }

    _openMenu() {
        if (this.state.check == true) {
            this.refs['DRAWER_REF'].openDrawer();
            this.setState({check: false})
        } else {
            this.refs['DRAWER_REF'].closeDrawer();
            this.setState({check: true})
        }
    }

    _navigationView() {
        return (
            <View></View>
        );
    }

    render() {
        return (
            <DrawerLayout ref={'DRAWER_REF'} drawerWidth={width * 3 / 4 + 40} onDrawerOpen={() => {
                this._changeState(false)
            }} onDrawerClose={() => {
                this._changeState(true)
            }} drawerPosition={DrawerLayout.positions.Left} renderNavigationView={() => this._navigationView()}>
                <View style={styles.home_layout}>
                    <View style={styles.bar_layout}>
                        <View></View>
                        <View></View>
                    </View>
                    <View style={styles.page_layout}></View>
                </View>
            </DrawerLayout>
        );
    }
}

const styles = StyleSheet.create({
    home_layout: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        flexDirection: 'column'
    },
    bar_layout: {
        flex: 0.1,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftbar: {
        flex: 0.5,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    rightbar: {
        flex: 0.5,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    page_layout: {
        flex: 0.9,
        backgroundColor: '#e8e8e8'
    }
});

module.exports = Home;
