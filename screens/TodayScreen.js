import React, {
    Component,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
    Text,
    View
} from "react-native";

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
                <View>
                    <Text style={styles.title}>Wednesday</Text>
                    <Text style={styles.title}>April 19</Text>
                    <Text style={styles.year}>Cycle Day { this.props.todayData.cycleDay }</Text>
                </View>
                <View style={styles.buttonBar}>
                    <TouchableNativeFeedback onPress={ this.goToMakeObservation.bind( this ) } >
                        <View style={styles.button}>
                            <Text>Make Observation</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
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
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: "center"
    },
    year: {
        textAlign: "center"
    }
} );

module.exports = TodayScreen;
