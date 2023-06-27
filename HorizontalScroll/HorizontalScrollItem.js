import React from "react";
import { View, Image, StyleSheet } from "react-native";

const HorizontalScrollItem = (props) => {
    return (
        <View style={styles.sponsored}>
            <View style={styles.vidimg}>
            <Image
                source={{ uri: 'https://img.freepik.com/foto-gratis/disparo-vertical-deliciosa-hamburguesa-placa-madera-pared-negra_181624-45483.jpg' }}
                style={styles.image}
            />
            </View>
            {/* Repite los elementos restantes de la sección "sponsored" */}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
      width: 150,
      height: 150,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    sponsored: {
      flexDirection: 'row',
      overflowX: 'scroll',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
    },
    vidimg: {
      width: '100%',
      height: 'auto',
      padding: 2,
    },
    image: {
      width: '100%',
      borderRadius: 15,
    },
  });
  
  export default HorizontalScrollItem;