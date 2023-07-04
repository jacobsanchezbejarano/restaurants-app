import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
const Meal = (props) => {
    return (
        <View style={styles.card} key={props._id}>
              <TouchableOpacity style={styles.suggestionsCard} onPress={() => console.log('Card 1 pressed')}>
                    <Image
                        source={{ uri: props.imagesUrls[0] }}
                        style={styles.cardImage}
                    />
                    <Text>{props.name}</Text>
                    <View style={styles.suggestionsData}>
                        <Text>Porción: {props.size}</Text>
                        <Text>Precio: ${props.price}</Text>
                        <TouchableOpacity style={styles.detailsButton} onPress={() => console.log('Details button pressed')}>
                        <Text style={styles.detailsButtonText}>Ver detalles</Text>
                        </TouchableOpacity>
                    </View>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    suggestionsCard: {
        flex: 1,
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#848484',
        margin: 2,
    },
    cardImage: {
        width: '100%',
        height: 100,
        borderRadius: 15,
    },
    suggestionsData: {
        padding: 7,
    },
    detailsButton: {
        backgroundColor: '#8E2B3F',
        borderRadius: 15,
        margin: 3,
        padding: 5,
        textAlign: 'center',
    },
    detailsButtonText: {
        color: '#D9CEAC',
    },
})

export default Meal