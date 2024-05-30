import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Loginscreen")
        }, 2000); // Change the delay as needed (3000 milliseconds = 3 seconds)

        // Cleanup function to clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []); // 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <View style={styles.continer}>
                <Image source={require("../image/img3.jpg")} style={{ width: 200, height: 150 }} />
                <Text style={styles.title}>#FITWITHGRIP</Text>
            </View>
        </SafeAreaView>
    )
}

export default Splash;

const styles = StyleSheet.create({
    continer: {
        justifyContent: "center",
        alignSelf: "center",
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    }
})