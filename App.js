import React from 'react';
import RestaurantList from './RestaurantComponent/RestaurantList';
import MealList from './MealComponent/MealList';
import Header from './HeaderComponent/Header';
import { View, Image, Text, StyleSheet } from 'react-native';

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
        <MealList />
      </View>
      
      <RestaurantList />
      
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
});

export default App;