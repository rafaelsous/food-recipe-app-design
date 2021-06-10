import React from 'react';
import { useNavigation } from '@react-navigation/core';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Home = () => {
    const { navigate } = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigate("Recipe")}
            >
                <Text>Navigate to Recipe</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;