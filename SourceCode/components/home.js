/**
 * @file   home.js
 * @Author Nguyen Thanh Trung (nttrung95@yahoo.com)
 * @date  19/11/2016
 * @brief  Home page of the app.
 *
 * Main menu that will navigate users to all tabs.
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
var styles = require('../styles/home_styles.js');

var {height, width} = Dimensions.get('window');
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true
        };
    }

    /**
     * Function to change check state
     *
     *@param check whether the drawer is closed or not
     *
     */
    _changeState(check) {
        this.setState({check: check})
    }

    /**
     * Function to open/close drawer
     *
     */
    _openMenu() {
        if (this.state.check == true) {
            this.refs['DRAWER_REF'].openDrawer();
            this.setState({check: false})
        } else {
            this.refs['DRAWER_REF'].closeDrawer();
            this.setState({check: true})
        }
    }

    /**
     * Render accordion makeup to display its children components
     *
     */
    _renderMakeUp() {
    var header = (
      <View style={...}>
        <Text>Click to Expand</Text>
      </View>
    );

    var content = (
      <View style={...}>
        <Text>This content is hidden in the accordion</Text>
      </View>
    );

    return (
      <Accordion
        header={header}
        content={content}
        easing="easeOutCubic"
      />
    );
  }

    /**
     * Render the drawer page
     *
     */
    _navigationView() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff',
                flexDirection: 'column'
            }}>
                <View style={{
                    width: width * 3 / 4 + 40,
                    height: height / 4 - 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image resizeMode='contain' style={{
                        width: width * 3 / 4 - 40,
                        height: height / 4 - 50
                    }} source={{
                        uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/logo.png'
                    }}/>
                </View>
                <View style={{
                    marginLeft: 15,
                    borderWidth: 1,
                    borderColor: '#212121',
                    width: width * 3 / 4 + 11
                }}></View>
                <View style={{
                    marginTop: 3,
                    marginBottom: 3,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: '#212121',
                        fontSize: 20
                    }}>
                        Trang Điểm
                    </Text>
                </View>
                <View style={{
                    marginLeft: 15,
                    borderWidth: 1,
                    borderColor: '#212121',
                    width: width * 3 / 4 + 11
                }}></View>
            </View>
        );
    }

    /**
     * Render the main home page
     *
     */
    render() {
        return (
            <DrawerLayout ref={'DRAWER_REF'} drawerWidth={width * 3 / 4 + 40} onDrawerOpen={() => {
                this._changeState(false)
            }} onDrawerClose={() => {
                this._changeState(true)
            }} drawerPosition={DrawerLayout.positions.Left} renderNavigationView={() => this._navigationView()}>
                <View style={styles.home_layout}>
                    <View style={styles.bar_layout}>
                        <View style={styles.bar_view}>
                            <TouchableNativeFeedback onPress ={() => {
                                this._openMenu()
                            }}>
                                <Icon name="bars" size={32} color="#fbfcfc"/>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.artdeco_view}>
                            <Text style={styles.artdeco_text}>ARTDECO</Text>
                        </View>
                        <View style={styles.shopping_view}>
                            <TouchableNativeFeedback>
                                <Icon name="shopping-cart" size={32} color="#fbfcfc"/>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={styles.page_layout}></View>
                </View>
            </DrawerLayout>
        );
    }
}

module.exports = Home;
