import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    Dimensions,
    TouchableNativeFeedback,
    TouchableOpacity,
    Image,
    InputText,
    ScrollView,
    TouchableHighlight,
    Animated
} from 'react-native';

var styles = require('../styles/home_styles.js');
class AccordionCustom extends Component{
    constructor(props){
        super(props);

        this.icons = {
            'up'    : require('../image/keyboard_arrow_right_black_192x192.png'),
            'down'  : require('../image/keyboard_arrow_down_black_192x192.png')
        };

        this.state = {
          title: props.title,
          expanded: true,
          animation: new Animated.Value()
        };
    }

    toggle(){
        let
        initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

       this.setState({
           expanded : !this.state.expanded
       });

       this.state.animation.setValue(initialValue);
       Animated.spring(
           this.state.animation,
           {
               toValue: finalValue
           }
       ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];
        }

        return (
          <Animated.View style={[styles.makeup_container,{height: this.state.animation}]}>
            <View style={styles.makeup_layout}
                  onLayout={this._setMinHeight.bind(this)}>
                <TouchableOpacity style={styles.title_container}>
                  <Text style={styles.makeup_text}>{this.state.title}</Text>
                </TouchableOpacity>
                <TouchableHighlight
                   style={styles.icon_container}
                   onPress={this.toggle.bind(this)}
                   underlayColor="#f1f1f1">
                   <Image
                       style={styles.icon_view}
                       source={icon}
                   ></Image>
               </TouchableHighlight>
            </View>
            <View style={styles.children_container}
                  onLayout={this._setMaxHeight.bind(this)}>
                {this.props.children}
            </View>
          </Animated.View>
        );
    }
}
module.exports = AccordionCustom;
