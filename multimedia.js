import React from 'react';
import { Dimensions, TouchableOpacity, View, Image, StyleSheet, Text, Linking, ImageStore } from 'react-native';

var width = Dimensions.get('window').width;

class Multimedia extends React.Component {

    handlePress = async () => {
        let url = this.props.url;
        await Linking.openURL(url);
    }

    render() {
        let ctype = this.props.type;
        var showimage = require("./img/default_img.png");
        var typeName = {
            backgroundColor: '#c2d1cf',
        }
        switch(ctype) {
            case "MUSIC":
                typeName = {
                    backgroundColor: '#a1ffae',
                }
                showimage = require("./img/music_img.jpg")
                break;
            case "VIDEO":
                typeName = {
                    backgroundColor: '#ff8c8c',
                }
                showimage = require("./img/video_img.png")
                break;
        }

        return (
            <View style>
                <TouchableOpacity style={[typeName, styles.card]} onPress={this.handlePress}>
                <Image
                    style={[styles.cardImage]}
                    source={showimage}
                />
                <View style={styles.cardContent}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    <Text style={styles.descText}>{this.props.desc}</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Multimedia;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
        width: width * 0.9,
        maxHeight: 60,
        padding: 10
    },
    cardContent: {
        flex: 1,
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