'use strict';

var React = require('react-native');

var {StyleSheet} = React;

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
    }

});
