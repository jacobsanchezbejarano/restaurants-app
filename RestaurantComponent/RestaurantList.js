import React from "react";
import { Text, View, FlatList } from "react-native";
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
            <View>
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