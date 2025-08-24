import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";

function OnboardingScreen ({navigation}){
    function NavigationHandler () {
        navigation.navigate('Main-App')
    }
        return(
                <SafeAreaView style={styles.container}>
                <ImageBackground
                source={require('../assets/images/savings-Bg-circular.png')}
                style={styles.bg}
                resizeMode="cover"
                >
                        <View style={styles.characterWrapper}>
                        <Image
                        source={require('../assets/images/savings-character.png')} 
                        style={styles.character}
                        resizeMode="contain"
                        />
                        </View>
                </ImageBackground>
                <View style={styles.panel}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Spend Smarter{"\n"}Save More</Text>

                        <View style={styles.dots} accessible accessibilityRole="adjustable" accessibilityLabel="Onboarding progress">
                            <View style={[styles.dot, styles.dotActive]} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </View>

                        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={NavigationHandler}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>

                        <TouchableOpacity accessibilityRole="button" activeOpacity={0.7}>
                            <Text style={styles.loginText}>
                                Already have an account? <Text style={styles.loginLink}>Log In</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </SafeAreaView>
        )
}
export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    bg:{
    width:'100%',
    height:500, 
    justifyContent: 'center',
    alignItems: 'center',
    },
    characterWrapper:{
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: -80,
    },
    character:{
        width: 300,
        height: 380,
    },
    panel: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      // shadow for iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      // elevation for Android
      elevation: 6,
      paddingTop: 40,
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#2F7E7A',
        textAlign: 'center',
        marginBottom: 28,
        lineHeight: 36,
    },
    button: {
        backgroundColor: '#63B5AF',
        width: 260,
        borderRadius: 40,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        // button shadow
        shadowColor: '#2F7E7A',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.18,
        shadowRadius: 20,
        elevation: 6,
        marginBottom: 18,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    loginText: {
        color: '#7A7A7A',
        fontSize: 13,
    },
    loginLink: {
        color: '#2F7E7A',
        fontWeight: '600',
    }
})