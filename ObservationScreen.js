import React, {
    Component,
    Image,
    Picker,
    StyleSheet,
    TouchableNativeFeedback,
    Text,
    View
} from "react-native";

class ObservationButton extends Component
{
    constructor ( props )
    {
        super( props )
        this.state = {
            selected: false
        }
    }

    click ()
    {
        this.setState( { selected: !this.state.selected } );
    }

    render ()
    {
        return (
            <TouchableNativeFeedback onPress={ this.click.bind( this ) }>
                <View style={styles.observationButton}>
                    <Text style={styles.observationButtonText, this.state.selected && styles.buttonSelected}>
                        {this.props.value}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

class ObservationScreen extends Component
{

    constructor ()
    {
        super();
        this.state = {
            observation: {
                mucus: "",
                qualities: "",
                flow: ""
            }
        };
    }

    render ()
    {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Record Observation</Text>
                </View>
                <View>
                    <Text style={styles.h2}>Elasticity</Text>
                    <View style={styles.buttonRow}>
                        <ObservationButton value={"0"}></ObservationButton>
                        <ObservationButton value={"2"}></ObservationButton>
                        <ObservationButton value={"2W"}></ObservationButton>
                        <ObservationButton value={"4"}></ObservationButton>
                        <ObservationButton value={"6"}></ObservationButton>
                        <ObservationButton value={"8"}></ObservationButton>
                        <ObservationButton value={"10"}></ObservationButton>
                        <ObservationButton value={"10DL"}></ObservationButton>
                        <ObservationButton value={"10SL"}></ObservationButton>
                        <ObservationButton value={"10WL"}></ObservationButton>
                    </View>
                </View>
                <View>
                    <Text style={styles.h2}>Qualities</Text>
                    <View style={styles.buttonRow}>
                        <ObservationButton value={"B"}></ObservationButton>
                        <ObservationButton value={"C"}></ObservationButton>
                        <ObservationButton value={"C/K"}></ObservationButton>
                        <ObservationButton value={"G"}></ObservationButton>
                        <ObservationButton value={"K"}></ObservationButton>
                        <ObservationButton value={"L"}></ObservationButton>
                        <ObservationButton value={"P"}></ObservationButton>
                        <ObservationButton value={"Y"}></ObservationButton>
                    </View>
                </View>
                <View>
                    <Text style={styles.h2}>Flow</Text>
                    <View style={styles.buttonRow}>
                        <ObservationButton value={"H"}></ObservationButton>
                        <ObservationButton value={"M"}></ObservationButton>
                        <ObservationButton value={"L"}></ObservationButton>
                        <ObservationButton value={"VL"}></ObservationButton>
                        <ObservationButton value={"B"}></ObservationButton>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={ this.props.navigator.pop } >
                    <View>
                        <Text>← Back</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    buttonRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#5CD1F2"
    },
    container: {
        backgroundColor: "#FFF9F3"
    },
    observationButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    observationButtonText: {
        color: "#5CD1F2",
        fontWeight: "bold",
        fontSize: 16
    },
    buttonSelected: {
        backgroundColor: "#5CD1F2",
        color: "#FFF9F3"
    },
    h2: {
        fontSize: 18,
        textAlign: "center"
    },
    titleText: {
        fontSize: 24,
        textAlign: "center",
        color: "#FFF9F3"
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#253B72",
        height: 60
    }

} );

module.exports = ObservationScreen;
