import React from "react";
import {View,Text, Image, StyleSheet} from 'react-native'

const ResultsDetail = ({result}) => {
    return <View style={styles.container}>
        <Image 
        source={{uri: result.image_url}}
        style={styles.image}
        />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Starts, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 10
    },
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;