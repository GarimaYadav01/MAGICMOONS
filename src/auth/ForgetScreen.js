import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextinputComponent from './TextinputComponent'
import CustomButton from './Custombutton'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get("screen")
const ForgetScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: height * 0.04 }}>
                    <Image source={require("../image/withbglogo.png")} style={{ width: 150, height: 150 }} />
                </View>
                <View style={styles.container}>
                    <View style={{ marginHorizontal: 20, marginTop: height * 0.07 }}>
                        <Text style={styles.forget}>Forget Password</Text>
                        <Text style={styles.enter}>Enter your Register Email and Check Recover account</Text>
                    </View>

                    <View style={{ alignSelf: "center", marginTop: height * 0.01 }}>
                        <TextinputComponent placeholder={"Enter your email"} />

                    </View>

                    <View style={{ marginTop: height * 0.07 }}>
                        <CustomButton label={"Recover Account"} size={"large"} onPress={() => navigation.navigate("Loginscreen")} />
                    </View>




                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ForgetScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        // paddingVertical: height * 0.2,
        marginTop: height * 0.16,
        // borderWidth: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // borderColor: "#000" ,
        height: height * 0.6
    },
    forget: {
        color: "black",
        fontSize: 25,
        fontWeight: "600",

    },
    enter: {
        fontSize: 16,
        color: "black",
        fontWeight: "400",
        marginTop: 10
        // textAlign: "center"

    },
    text: {
        color: "gray",
        fontSize: 17,
        fontWeight: "500",
        // textAlign: "center",
        marginTop: 20

    }

})