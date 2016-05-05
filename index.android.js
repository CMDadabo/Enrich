/**
* Sample React Native App
* https://github.com/facebook/react-native
*/

"use strict";

import React, {
    AppRegistry,
    BackAndroid,
    Component,
    Image,
    ListView,
    Navigator,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View
} from "react-native";

var TodayScreen = require( "./TodayScreen" );
var ObservationScreen = require( "./ObservationScreen" );

var DUMMY_DATA = {
    cycleDay: 6,
    observations: [
        {
            blood: "",
            quality: "",
            elasticity: ""
        }
    ],
    medications: [],
    symptoms: []
};

class Creighton extends Component {

    constructor ( props ) {
        super( props );
        this.data = {
            cycles: DUMMY_DATA
        };
    }

    render () {
        var initialRoute = { name: "today" };
        return (
            <Navigator
              style={{ flex: 1 }}
              initialRoute={ initialRoute }
              renderScene={ this.renderScene } />
        );
    }

    renderScene ( route, navigator )
    {
        if( route.name === "today" )
        {
            return <TodayScreen todayData={ DUMMY_DATA } navigator={ navigator }></TodayScreen>
        }
        else if( route.name === "makeObservation" )
        {
            return <ObservationScreen navigator={ navigator }></ObservationScreen>
        }
    };

}

const colors = {
    blue: "#62C4FF"
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    button: {
        backgroundColor: colors.blue,
        padding: 10
    },
    buttonBar: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
    },
    year: {
        textAlign: "center"
    },
    thumbnail: {
        width: 53,
        height: 81
    }
} );

AppRegistry.registerComponent( "Creighton", () => Creighton );
