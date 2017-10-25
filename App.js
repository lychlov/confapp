import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {
    render() {
        return (

            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={{height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0}}
                onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
            >
                <Tab
                    barBackgroundColor="#37474F"
                    label="Movies & TV"
                    icon={<Ionicons size={24} color="white" name="home"/>}
                />
                <Tab
                    barBackgroundColor="#00796B"
                    label="Music"
                    icon={<Ionicons size={24} color="white" name="music"/>}
                />
                <Tab
                    barBackgroundColor="#5D4037"
                    label="Books"
                    icon={<Ionicons size={24} color="white" name="book"/>}
                />
                <Tab
                    barBackgroundColor="#3E2723"
                    label="Newsstand"
                    icon={<Ionicons size={24} color="white" name="newspaper"/>}
                />
            </BottomNavigation>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
