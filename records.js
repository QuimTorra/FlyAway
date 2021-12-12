import React from 'react';
import { Dimensions, TouchableOpacity, View, Image, StyleSheet, Text, Linking, ImageStore } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

var width = Dimensions.get('window').width;

class Record extends React.Component {

    state = {
        open: false
    }

    handlePress = async () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        var showimage = require("./img/record_img.jpg");

        if(this.state.open) {
            return (
                <View>
                    <TouchableOpacity style={[styles.card, {height: 'auto', alignItems: 'flex-start'}]} onPress={this.handlePress}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Image
                                style={[styles.cardImage]}
                                source={showimage}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.titleText}>{this.props.title}</Text>
                                <Text style={styles.descText}>{this.props.date}</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{paddingVertical: 5, color:'#8156f5'}}>{this.props.company}</Text>
                            <Text>{this.props.desc}</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View>
                <TouchableOpacity onPress={this.handlePress}>
                    <View style={[styles.card, {flexDirection: 'row'}]}>
                        <Image
                            style={[styles.cardImage]}
                            source={showimage}
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.titleText}>{this.props.title}</Text>
                            <Text style={styles.descText}>{this.props.date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Record;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
        width: width * 0.9,
        height: 60,
        padding: 10,
        backgroundColor: '#e2dcf2',
    },
    cardContent: {
        display: 'flex'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    descText: {
        fontSize: 12,
    },
    cardImage: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 5
    },
})