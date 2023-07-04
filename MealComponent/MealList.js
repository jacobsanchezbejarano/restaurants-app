import React from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";
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

    componentDidMount() {
        this.getMeals();
    }

    getMeals = () => {
        this.setState({ loading: true });

        fetch(this.state.url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                meals: res,
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <View>
                    <Text>Descargando lista</Text>
                </View>
            );
        }

        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.state.meals.map((meal, index) => (
                    <View key={meal.id} style={styles.mealContainer}>
                        <Meal {...meal} />
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const screenWidth = Dimensions.get("window").width;
const itemMargin = 10;
const itemSize = (screenWidth - itemMargin * 4) / 3;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: itemMargin,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    mealContainer: {
        width: itemSize,
        marginVertical: itemMargin / 2,
    },
});
