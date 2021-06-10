import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Login = () => {
    const { navigate } = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Login</Text>
            <TouchableOpacity
                onPress={() => navigate("Home")}
            >
                <Text>Navigate to Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;