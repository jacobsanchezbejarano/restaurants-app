import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import Meal from "./Meal";

export default class MealList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            meals: [],
            url: 'https://restaurants-dbt2.onrender.com/meals'
        }
    }

    componentDidMount(){
        this.getMeals();

    }

    getMeals = () => {

        this.setState({loading: true});

        fetch(this.state.url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                meals: res,
                loading: false
            });
        })
    }

    render() {
        if(this.state.loading){
            return (
                <View>
                    <Text>Descargando lista</Text>
                </View>
            )
        }

        return (
            <View style={styles.suggestions}>
                <FlatList
                data={this.state.meals}
                renderItem={
                    ({item: meal})=> <Meal {...meal} />
                }
                >
                </FlatList>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start', // Alinear los elementos al inicio de la fila
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 0
    },
    suggestions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
})