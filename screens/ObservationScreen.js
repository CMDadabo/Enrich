import React, {
    Component,
    Image,
    Picker,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from "react-native";

const OBSERVATION_OPTIONS = {
    elasticity: [ "0", "2", "2W", "4", "6", "8", "10", "10DL", "10SL", "10WL" ],
    qualities: [ "C", "C/K", "G", "K", "L", "P", "Y", "B" ],
    flow: [ "H", "M", "L", "VL", "B" ]
}

const STYLES = StyleSheet.create( {
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

class ObservationButton extends Component
{
    constructor ( props )
    {
        super( props )
        console.log( props );
    }

    render ()
    {
        return (
            <TouchableHighlight onPress={ this.props.onPress }>
                <View style={STYLES.observationButton}>
                    <Text style={STYLES.observationButtonText}>
                        { this.props.value }
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

class ObservationScreen extends Component
{

    constructor ()
    {
        super();
        this.state = {
            elasticity: "",
            qualities: [],
            flow: ""
        };
    }

    renderOptionsButtons ( options, setFunction )
    {

        var buttons = [];

        for( var i = 0; i < options.length; i++ )
        {
            buttons.push(
                <ObservationButton
                    key={ i }
                    value={ options[ i ] }
                    onPress={ setFunction.bind( this, options[ i ] ) }>
                </ObservationButton>
            )
        }

        return buttons;

    }

    setElasticity ( value )
    {
        this.setState( { elasticity : value } );
    }

    render ()
    {
        return (
            <View style={STYLES.container}>
                <View style={STYLES.titleContainer}>
                    <Text style={STYLES.titleText}>Record Observation</Text>
                </View>
                <View>
                    <Text>
                        { this.state.elasticity }
                    </Text>
                </View>
                <View>
                    { this.renderOptionsButtons( OBSERVATION_OPTIONS.elasticity, this.setElasticity ) }
                </View>
                <TouchableHighlight onPress={ this.props.navigator.pop } >
                    <View>
                        <Text>← Back</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = ObservationScreen;
