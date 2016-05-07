import React, {
    Component,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
    Text,
    View
} from "react-native";

var Icon = require( "react-native-vector-icons/MaterialIcons" );
var moment = require( "moment" );

var colors = require( "../colors" );

var MOCK_DATA = [
    {
        date: new Date( "2/12/2016" ),
        flow: "LB",
        elasticity: "",
        intercourse: false,
        qualities: [],
        frequency: "",
        stamp: "red"
    },
    {
        date: new Date( "2/13/2016" ),
        flow: "VLB",
        elasticity: "",
        intercourse: true,
        qualities: [],
        frequency: "",
        stamp: "red"
    },
    {
        date: new Date( "2/14/2016" ),
        flow: "",
        elasticity: "4",
        intercourse: true,
        qualities: [],
        frequency: "x2",
        stamp: "green"
    },
    {
        date: new Date( "2/15/2016" ),
        flow: "",
        elasticity: "8",
        intercourse: true,
        qualities: [ "K" ],
        frequency: "x1",
        stamp: "yellow"
    },
    {
        date: new Date( "2/16/2016" ),
        flow: "",
        elasticity: "10",
        intercourse: true,
        qualities: [ "C" ],
        frequency: "x1",
        stamp: "yellow"
    },
    {
        date: new Date( "2/17/2016" ),
        flow: "",
        elasticity: "4",
        intercourse: false,
        qualities: [],
        frequency: "x2",
        stamp: "green"
    },
    {
        date: new Date( "2/18/2016" ),
        flow: "",
        elasticity: "10",
        intercourse: true,
        qualities: [ "K", "C" ],
        frequency: "x1",
        stamp: "white"
    }
];

class TodayScreen extends Component
{

    goToMakeObservation ()
    {
        this.props.navigator.push( { name: "makeObservation" } );
    }

    render ()
    {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{ moment().format( "dddd, MMMM Do" ) }</Text>
                    <Text style={styles.cycleDay}>Cycle Day { this.props.todayData.cycleDay }</Text>
                </View>

                <View>
                    <Text>Today's Observations</Text>
                    <View>
                        <View>

                        </View>
                    </View>
                </View>

                <View style={{
                    position: "absolute",
                    bottom: 75,
                    left: 0,
                    right: 0,
                    flexDirection: "column",
                    justifyContent: "center",
                    borderTopColor: colors.divider,
                    borderTopWidth: 2,
                    paddingVertical: 10
                }}>
                    <Text style={{ fontSize: 16, textAlign: "center", color: colors.primaryText, marginVertical: 10 }}>Past 7 Days</Text>
                    <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                        {
                            MOCK_DATA.map( ( day, i ) =>
                                (
                                    <View key={i} style={{ flexDirection: "column", flex: 1, width: 40 }}>
                                        <Text style={{ textAlign: "center", color: colors.secondaryText }}>{ moment( day.date ).format( "M/D" ) }</Text>
                                        <View style={[
                                                { backgroundColor: colors[ day.stamp ], height: 20 },
                                                day.stamp === "white" && { borderWidth: 2, borderColor: colors.darkBlue } ]}>
                                        </View>
                                        {
                                            day.flow ? <Text style={{ textAlign: "center", color: colors.primaryText }}>{ day.flow }</Text>
                                            : null
                                        }
                                        {
                                            day.elasticity ? <Text style={{ textAlign: "center", color: colors.primaryText }}>
                                                { day.elasticity }{ day.qualities.map( ( q ) => q ) }{ day.frequency }
                                            </Text> : null
                                        }
                                        { day.intercourse ? <Text style={{ textAlign: "center", color: colors.primaryText }}>I</Text> : null }
                                    </View>
                                )
                            )
                        }

                    </View>
                </View>

                <View style={styles.buttonBar}>
                    <TouchableNativeFeedback onPress={ this.goToMakeObservation.bind( this ) } >
                        <View style={styles.button}>
                            <Icon name="visibility" size={30} color={colors.white}/>
                            <Text style={{color: colors.white}}>Observe</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.button}>
                            <Icon name="edit" size={30} color={colors.white}/>
                            <Text style={{color: colors.white}}>Record Symptom</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={styles.button}>
                            <Icon name="grid-on" size={30} color={colors.white}/>
                            <Text style={{color: colors.white}}>View Chart</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.white
    },
    button: {
        padding: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 130
    },
    buttonBar: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.darkBlue
    },
    header: {
        backgroundColor: colors.darkBlue,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        padding: 15
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        textAlign: "center",
        color: colors.white
    },
    cycleDay: {
        fontSize: 16,
        color: colors.white,
        textAlign: "center"
    }
} );

module.exports = TodayScreen;
