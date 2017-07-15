import React from 'react';
import { View, Text } from 'react-native';
import HomeScreenBase from './HomeScreen.base';

class HomeScreen extends HomeScreenBase {
    render() {
        return (
            <View>
                <Text>Welcome to the home page!</Text>
            </View>
        );
    }
}

const styles = {

}

export default HomeScreen;