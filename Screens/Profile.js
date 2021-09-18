import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

export default class Profile extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('name'),
        };
    };
    render() {
        const {navigate,state}=this.props.navigation;
        console.log(this.props.navigation);
        return (
            <View style={styles.container}>
                <Text>lo lograste lok {state.params.name}</Text>
                <Button 
                title="return" 
                onPress={()=>navigate('Login')}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:500
    }
});