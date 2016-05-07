import React, {
    Component,
    Image,
    Picker,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from "react-native";

var colors = require( "../colors" );

const OBSERVATION_OPTIONS = {
    elasticity: [ "0", "2", "2W", "4", "6", "8", "10", "10DL", "10SL", "10WL" ],
    qualities: [ "C", "C/K", "K", "G", "L", "P", "Y", "B" ],
    flow: [ "VL", "L", "M", "H" ]
}

const styles = StyleSheet.create( {
    buttonRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: colors.blue
    },
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    buttonTitle: {
        fontSize: 20,
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginHorizontal: 10,
        marginBottom: 15
    },
    button: {
        borderRadius: 15,
        padding: 10,
        margin: 5
    },
    buttonText: {
        color: colors.primaryText,
        fontWeight: "bold",
        fontSize: 16
    },
    activeButton: {
        backgroundColor: colors.blue
    },
    activeButtonText: {
        color: colors.white
    },
    titleText: {
        fontSize: 18,
        textAlign: "center",
        color: colors.white
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkBlue,
        height: 50
    },
    currentObservationContainer: {
        flexDirection: "column",
        justifyContent: "center",
        height: 100,
        margin: 30,
        borderWidth: 2,
        borderColor: colors.secondaryText,
        padding: 10,
        alignSelf: "center"
    },
    currentObservation: {
        fontSize: 28,
        margin: 0,
        padding: 0,
        textAlign: "center",
        color: colors.primaryText
    },
    actionButtonBar: {
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        flex: 1,
        left: 0,
        right: 0,
        bottom: 30,
        marginVertical: 5
    },
    actionButton: {
        width: 150,
        height: 50,
        backgroundColor: colors.darkBlue,
        justifyContent: "center",
        alignItems: "center"
    },
    secondaryButton: {
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
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
                <View style={ [ styles.button, this.props.isSelected() && styles.activeButton ] }>
                    <Text style={ [ styles.buttonText, this.props.isSelected() && styles.activeButtonText ] }>
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

    renderOptionsButtons ( options, setFunction, selectedFunction, type )
    {

        var buttons = [];

        for( var i = 0; i < options.length; i++ )
        {
            buttons.push(
                <ObservationButton
                    key={ i }
                    value={ options[ i ] }
                    onPress={ setFunction.bind( this, options[ i ] ) }
                    isSelected={ selectedFunction.bind( this, type, options[ i ] ) }>
                </ObservationButton>
            )
        }

        return buttons;

    }

    isSelected ( type, value )
    {

        if( type === "elasticity" || type === "flow" )
        {
            return this.state[ type ] === value;
        }
        else if( type === "qualities" )
        {
            return this.state.qualities.indexOf( value ) > -1
        }

    }

    setElasticity ( value )
    {
        value = this.state.elasticity === value ? "" : value;
        this.setState( { elasticity : value } );

        if( [ "6", "8", "10" ].indexOf( value ) === -1 )
        {
            this.setState( { qualities: [] } );
        }
    }

    setFlow ( value )
    {
        value = this.state.flow === value ? "" : value;
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
            <View style={styles.container}>

                <View style={ styles.titleContainer }>
                    <Text style={ styles.titleText }>Record Observation</Text>
                </View>

                <View style={ styles.currentObservationContainer }>
                    <View style={{width: 60}}></View>
                    {
                        this.state.flow !== ""
                        ?
                        <Text style={ styles.currentObservation }>
                            { this.state.flow }
                        </Text>
                        :
                        null
                    }
                    {
                        this.state.elasticity !== ""
                        ?
                        <Text style={ styles.currentObservation }>
                            { this.state.elasticity }{ this.state.qualities.map( ( quality ) => quality ) }
                        </Text>
                        :
                        null
                    }
                </View>
                <View>
                    <Text style={ styles.buttonTitle }>Flow</Text>
                    <View style={ styles.buttonContainer }>
                        { this.renderOptionsButtons(
                            OBSERVATION_OPTIONS.flow,
                            this.setFlow,
                            this.isSelected,
                            "flow"
                        ) }
                    </View>
                </View>
                <View>
                    <Text style={ styles.buttonTitle }>Elasticity</Text>
                    <View style={ styles.buttonContainer }>
                        { this.renderOptionsButtons(
                            OBSERVATION_OPTIONS.elasticity,
                            this.setElasticity,
                            this.isSelected,
                            "elasticity"
                        ) }
                    </View>
                </View>
                {
                    [ "6", "8", "10" ].indexOf( this.state.elasticity ) > -1
                    ?
                    <View>
                        <Text style={ styles.buttonTitle }>Qualities</Text>
                        <View style={ styles.buttonContainer }>
                            { this.renderOptionsButtons(
                                OBSERVATION_OPTIONS.qualities,
                                this.toggleQuality,
                                this.isSelected,
                                "qualities"
                            ) }
                        </View>
                    </View>
                    :
                    null
                }
                <View style={ styles.actionButtonBar }>
                    <TouchableHighlight onPress={this.props.navigator.pop}>
                        <View style={ styles.secondaryButton }>
                            <Text style={{fontWeight: "bold"}}>CANCEL</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={ styles.actionButton }>
                            <Text style={ { color: colors.white, fontWeight: "bold" } }>SUBMIT</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

module.exports = ObservationScreen;
