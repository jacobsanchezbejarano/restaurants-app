import React from 'react';
import Constants from 'expo-constants'
import Header from './HeaderComponent/Header';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (

    <View style={styles.container}>
      <View style={styles.container}>
        <Header />
        {/* Resto de tu contenido de la aplicación */}
      </View>
      <View style={styles.sponsored}>
        <View style={styles.vidimg}>
          <Image
            source={{ uri: 'https://img.freepik.com/foto-gratis/disparo-vertical-deliciosa-hamburguesa-placa-madera-pared-negra_181624-45483.jpg' }}
            style={styles.image}
          />
        </View>
        {/* Repite los elementos restantes de la sección "sponsored" */}
      </View>
      <View style={styles.suggestions}>
        <TouchableOpacity style={styles.suggestionsCard} onPress={() => console.log('Card 1 pressed')}>
          <Image
            source={{ uri: 'https://img.freepik.com/foto-gratis/disparo-vertical-deliciosa-hamburguesa-placa-madera-pared-negra_181624-45483.jpg' }}
            style={styles.cardImage}
          />
          <View style={styles.suggestionsData}>
            <Text>Porción: 3 🍔</Text>
            <Text>Precio: $45</Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => console.log('Details button pressed')}>
              <Text style={styles.detailsButtonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* Repite los elementos restantes de la sección "suggestions" */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9CEAC',
  },
  sponsored: {
    flexDirection: 'row',
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
  },
  vidimg: {
    width: '28%',
    height: 'auto',
    padding: 2,
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  suggestions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  suggestionsCard: {
    width: '31%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#848484',
    margin: 2,
  },
  cardImage: {
    width: '100%',
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
  },
  detailsButtonText: {
    color: '#D9CEAC',
  },
});

export default App;