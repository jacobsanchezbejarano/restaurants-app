import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import Restaurant from "./Restaurant";

export default class RestaurantList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            restaurants: [],
            url: 'https://restaurants-dbt2.onrender.com/restaurants'
        }
    }

    componentDidMount(){
        this.getRestaurants();

    }

    getRestaurants = () => {

        this.setState({loading: true});

        fetch(this.state.url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                restaurants: res,
                loading: false
            });
        })
    }

    render() {
        if(this.state.loading){
            return (
                <View>
                    <Text>Descargando recetas</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                data={this.state.restaurants}
                renderItem={
                    ({item: restaurant})=> <Restaurant {...restaurant} />
                }
                >
                </FlatList>
        

            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
})