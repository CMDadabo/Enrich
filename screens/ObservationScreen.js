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
    flow: [ "H", "M", "L", "VL" ]
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
    buttonTitle: {
        fontSize: 24,
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#5CD1F2",
        fontWeight: "bold",
        fontSize: 16
    },
    activeButton: {
        backgroundColor: "#5CD1F2"
    },
    activeButtonText: {
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
    }

    render ()
    {
        return (
            <TouchableHighlight onPress={ this.props.onPress }>
                <View style={STYLES.button}>
                    <Text style={STYLES.buttonText}>
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

    setFlow ( value )
    {
        this.setState( { flow : value } );
    }

    toggleQuality ( value )
    {
        var updatedQualities = this.state.qualities;
        if( updatedQualities.indexOf( value ) > -1 )
        {
            updatedQualities.splice( updatedQualities.indexOf( value ), 1 );
        }
        else
        {
            updatedQualities.push( value );
        }
        this.setState( { qualities : updatedQualities } );
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
                        { this.state.flow }
                    </Text>
                    <Text>
                        { this.state.elasticity }{ this.state.qualities.map( ( quality ) => quality ) }
                    </Text>
                </View>
                <View>
                    <Text style={ STYLES.buttonTitle }>Flow</Text>
                    <View style={ STYLES.buttonContainer }>
                        { this.renderOptionsButtons( OBSERVATION_OPTIONS.flow, this.setFlow ) }
                    </View>
                </View>
                <View>
                    <Text style={ STYLES.buttonTitle }>Elasticity</Text>
                    <View style={ STYLES.buttonContainer }>
                        { this.renderOptionsButtons( OBSERVATION_OPTIONS.elasticity, this.setElasticity ) }
                    </View>
                </View>
                {
                    [ "6", "8", "10" ].indexOf( this.state.elasticity ) > -1 ?
                    <View>
                        <Text style={ STYLES.buttonTitle }>Qualities</Text>
                        <View style={ STYLES.buttonContainer }>
                            { this.renderOptionsButtons( OBSERVATION_OPTIONS.qualities, this.toggleQuality ) }
                        </View>
                    </View> :
                    null
                }
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
