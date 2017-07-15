import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import icon from '../../../public/icon.png';
import { NavigationActions } from 'react-navigation';

class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (

            <View style={styles.container}>
                <Image source={icon} style={{ height: 100, width: 100 }} />
            </View>

        )
    }


    componentDidMount() {
        setTimeout(() => this.nextPage(), 1500);
    }

    nextPage() {
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#238c59',
        position: 'relative',
        top: 0
    }
});

export default SplashScreen;
