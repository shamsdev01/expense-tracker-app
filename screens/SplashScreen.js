import { StyleSheet,Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

function SplashScreen () {
    const navigation = useNavigation();

    useEffect(() =>{
        const timer = setTimeout(() =>{
            navigation.replace('Onboarding')
        }, 2000);
        return () =>clearTimeout(timer)

    },[navigation])
    return(
        <View style={styles.container}>
        <LinearGradient colors={['#63B5AF', '#438883']} style={styles.background} />

        <Text style={styles.text}>OWÓ</Text>
        </View>
     
    )
}

export default SplashScreen;

const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#63B5AF'

    },
    background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%',
    },
    text:{
        color:'white',
        fontSize: 58,
        // fontWeight: 'bold',
        fontFamily:'Marker'
    }

})