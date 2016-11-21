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
var {height, width} = Dimensions.get('window');
class Home extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up'    : require('../image/keyboard_arrow_right_black_192x192.png'),
            'down'  : require('../image/keyboard_arrow_down_black_192x192.png')
        };

        this.state = {
            check: true,
            expand: true,
            accordionColor: "#f4f4f4",
            accordionAnimation: "bounceInLeft",
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
      if (this.state.expand===true) {
        this.setState({
          accordionColor: '#9bfee3',
          accordionAnimation: "bounceInLeft",
          expand: false
        })
      }else{
          this.setState({
            accordionColor: "#f4f4f4",
            accordionAnimation: "bounceOutRight",
            expand: true
          })
        }
    }

    /**
     * Render the drawer page
     *
     */
    _navigationView() {
        let icon = this.icons['down'];

        if(this.state.expand){
            icon = this.icons['up'];
        }

        var makeup = (
          <View style={{marginLeft: 15, justifyContent: 'center', flexDirection: 'row'}}>
            <View >
              <Text style={{color: this.state.accordionColor, fontSize: 22, fontWeight: 'bold'}}>Trang Điểm</Text>
            </View>
            <View style={{marginLeft: 120}}>
              <Image style={{height: 30, width: 35, tintColor  : this.state.accordionColor}}
                     source={icon}>
              </Image>
            </View>
          </View>
        );

        var makeupContent = (
          <Animatable.View  style={{marginLeft: 60, padding: 10}}
                            animation= {this.state.accordionAnimation}
                            duration={500}>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Sản Phẩm Cho Mắt</Text></Animatable.View>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Sản Phẩm Cho Mặt</Text></Animatable.View>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Sản Phẩm Cho Môi</Text></Animatable.View>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Sản Phẩm Cho Móng</Text></Animatable.View>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Cọ Và Các Phụ Kiện Khác</Text></Animatable.View>
          </Animatable.View>
        );

        var product = (
          <View style={{marginLeft: 15, justifyContent: 'center', flexDirection: 'row'}}>
            <View >
              <Text style={{color: this.state.accordionColor, fontSize: 22, fontWeight: 'bold'}}>Sản Phẩm Dưỡng</Text>
            </View>
            <View style={{marginLeft: 62}}>
              <Image style={{height: 30, width: 35, tintColor  : this.state.accordionColor}}
                     source={icon}>
              </Image>
            </View>
          </View>
        );

        var productContent = (
          <Animatable.View  style={{marginLeft: 60, padding: 10}}
                            animation= {this.state.accordionAnimation}
                            duration={500}>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Chăm Sóc Da Mắt</Text></Animatable.View>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Chăm Sóc Cơ Thể</Text></Animatable.View>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Chăm Sóc Da Tay</Text></Animatable.View>
            <Animatable.View  animation= {this.state.accordionAnimation}
                              duration={500}><Text style={{color: this.state.accordionColor, fontSize: 18, padding: 10}}>Chăm Sóc Da Chân</Text></Animatable.View>
          </Animatable.View>
        );

        return (
            <ScrollView style={styles.drawerLayout}>
                <View style={styles.imageLayout}>
                    <Image resizeMode='contain'
                           style={styles.image_view}
                           source={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/logo.png'}}/>
                </View>
                <View style={{flex: 1, backgroundColor: '#000000'}}>
                  <View style={styles.accordion_container}>
                    <Accordion
                      header={makeup}
                      content={makeupContent}
                      easing="easeOutCubic"
                      onPress={() => {this.toggle()}}
                    />
                  </View>
                  <View style={styles.line}></View>
                  <View style={styles.accordion_container}>
                    <Accordion
                      header={product}
                      content={productContent}
                      easing="easeOutCubic"
                      onPress={() => {this.toggle()}}
                    />
                  </View>
                  <View style={styles.line}></View>
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
