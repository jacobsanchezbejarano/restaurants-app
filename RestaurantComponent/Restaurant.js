import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const RecipesItem = (props) => {
    return (
        <View style={styles.card} key={props._id}>
              <Text>{props.name}</Text>
        </View>
    )
}

export default RecipesItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'darkgray',
        borderRadius: 10,
        padding: 10,
        margin: 3
    }
})