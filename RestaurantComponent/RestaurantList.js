import React from "react";
import { Text, View, FlatList } from "react-native";
import RecipesItem from "./RecipesItem";

export default class Recipes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            recipe: [],
            url: 'https://smart-recipe.onrender.com/recipes'
        }
    }

    componentDidMount(){
        this.getRecipe();

    }

    getRecipe = () => {

        this.setState({loading: true});

        fetch(this.state.url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                recipe: res,
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
                data={this.state.recipe}
                renderItem={
                    ({item: recipe})=> <RecipesItem {...recipe} />
                }
                >
                </FlatList>
        

            </View>
        )
        
    }
}