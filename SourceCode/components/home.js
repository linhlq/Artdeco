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
    TextInput,
    ScrollView,
    TouchableHighlight,
    Animated
} from 'react-native';
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Accordion = require('react-native-accordion');

var styles = require('../styles/home_styles.js');
var AccordionCustom = require('./accordion_container.js');
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

    toggle(){

    }

    /**
     * Render the drawer page
     *
     */
    _navigationView() {
        return (
            <ScrollView style={styles.drawerLayout}>
                <View style={styles.imageLayout}>
                    <Image resizeMode='contain'
                           style={styles.image_view}
                           source={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/logo.png'}}/>
                </View>
                <View style={styles.line}></View>
                <View style={styles.accordion_container}>
                  <AccordionCustom title="Trang Điểm"
                                   style={styles.accordion_padding}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Sản Phẩm Cho Mắt</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Sản Phẩm Cho Mặt</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Sản Phẩm Cho Môi</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Sản Phẩm Cho Móng</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Cọ Và Dụng Cụ Khác</Text></TouchableOpacity>
                    </View>
                  </AccordionCustom>
                </View>
                <View style={styles.line}></View>
                <View style={styles.accordion_container}>
                  <AccordionCustom title="Sản Phẩm Dưỡng"
                                   style={styles.accordion_padding}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Chăm Sóc Da Mặt</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Chăm Sóc Cơ Thể</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Chăm Sóc Da Tay</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.accordion_comp}><Text style={styles.makeupComp_text}>Chăm Sóc Da Chân</Text></TouchableOpacity>
                    </View>
                  </AccordionCustom>
                </View>
                <View style={{backgroundColor: '#0a0e0a', marginTop: 3, width: width * 3 / 4 + 40, borderTopWidth: 1, borderColor: '#706b6e'}}>

                </View>
            </ScrollView>
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
                    <ScrollView style={styles.page_layout}>
                      <TextInput
                        style={{height: 40, borderColor: '#ecede7', borderWidth: 2, marginTop: 10, marginLeft: 40, marginRight: 40, borderBottomColor: '#b0b8b6'}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        underlineColorAndroid="#ecede7"
                        placeholder = "Search..."
                        placeholderColor = "#b0b8b6"
                      />
                    </ScrollView>
                </View>
            </DrawerLayout>
        );
    }
}

module.exports = Home;
