'use strict';

var React = require('react-native');
var {StyleSheet, Dimensions} = React;
var {height, width} = Dimensions.get('window');
module.exports = StyleSheet.create({

    home_layout: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        flexDirection: 'column'
    },
    bar_layout: {
        flex: 0.1,
        backgroundColor: '#212121',
        alignItems: 'center',
        flexDirection: 'row'
    },
    bar_view: {
        flex: 0.1,
        marginLeft: 15
    },
    artdeco_view: {
        flex: 0.8,
        marginLeft: 10
    },
    artdeco_text: {
        color: '#f7f7f7',
        fontSize: 25,
        fontWeight: 'bold'
    },
    shopping_view: {
        flex: 0.1
    },
    page_layout: {
        flex: 0.9,
        backgroundColor: '#e8e8e8'
    },
    line: {
      marginLeft: 15,
      borderWidth: 1,
      borderColor: '#212121',
      width: width * 3 / 4 + 11
    },
    makeup_text: {
      color: '#212121',
      fontSize: 20
    },
    makeupComp_text: {
      color: '#110e0e',
      fontSize: 17
    },
    makeup_layout: {
      flex: 1,
      marginTop: 4,
      marginBottom: 4,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    drawerLayout: {
      flex: 1,
      backgroundColor: '#ffffff',
      flexDirection: 'column'
    },
    imageLayout: {
      width: width * 3 / 4 + 40,
      height: height / 4 - 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image_view: {
      width: width * 3 / 4 - 40,
      height: height / 4 - 50
    },
    accordion_container: {
      marginTop: 5,
      marginBottom: 5
    },
    accordion_padding: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    accordion_comp: {
      flex: 0.2,
      marginLeft: 40,
      padding: 2
    },
    title_container: {
      alignItems: 'flex-start',
      flex: 0.9,
      marginLeft: 20
    },
    icon_container: {
      flex: 0.1,
      marginLeft: 15,
      alignItems: 'flex-end',
      marginRight: 20
    },
    icon_view: {
      height: 30,
      width: 20
    },
    children_container: {
      padding: 5,
      paddingTop: 0
    },
    makeup_container:
    {
      flex: 1,
      marginTop: 3,
      marginBottom: 3
    }

});
