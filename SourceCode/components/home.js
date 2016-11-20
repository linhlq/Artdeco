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
      <View>
        <Icon name="chevron-right" size={15} color="#212424"/>
      </View>
    );

    var content = (
      <View style={{}} >
        <View><Text style={styles.makeupComp_text}>Sản Phẩm Cho Mắt</Text ></View>
        <View><Text style={styles.makeupComp_text}>Sản Phẩm Cho Mặt</Text ></View>
        <View><Text style={styles.makeupComp_text}>Sản Phẩm Cho Môi</Text ></View>
        <View><Text style={styles.makeupComp_text}>Sản Phẩm Cho Móng</Text ></View>
        <View><Text style={styles.makeupComp_text}>Cọ Và Các Phụ Kiện Khác</Text ></View>
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
            <View style={styles.drawerLayout}>
                <View style={styles.imageLayout}>
                    <Image resizeMode='contain'
                           style={styles.image_view}
                           source={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/logo.png'}}/>
                </View>
                <View style={styles.line}></View>
                <View style={styles.makeup_layout}>
                  <View style={{flex:0.7, marginLeft: 15}}>
                    <Text style={styles.makeup_text}>Trang Điểm</Text>
                  </View>
                  <View style={{flex:0.3, marginRight: 15}}>
                    {this._renderMakeUp()}
                  </View>
                </View>
                <View style={styles.line}></View>
            </View>
        );
    }

    /**
     * Render the main home page
     *
     */
    render() {
        return (
            <DrawerLayout ref={'DRAWER_REF'}
                          drawerWidth={width * 3 / 4 + 40}
                          onDrawerOpen={() => {this._changeState(false)}}
                          onDrawerClose={() => {this._changeState(true)}}
                          drawerPosition={DrawerLayout.positions.Left}
                          renderNavigationView={() => this._navigationView()}>
                <View style={styles.home_layout}>
                    <View style={styles.bar_layout}>
                        <View style={styles.bar_view}>
                            <TouchableNativeFeedback onPress ={() => {this._openMenu()}}>
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
