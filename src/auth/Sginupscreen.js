import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextinputComponent from './TextinputComponent'
import CustomButton from './Custombutton'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get("screen")
const Sginupscreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: height * 0.04 }}>
                    <Image source={require("../image/withbglogo.png")} style={{ width: 150, height: 150 }} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.forget}>Register Now</Text>
                    <View style={{ alignSelf: "center", marginTop: height * 0.04 }}>
                        <TextinputComponent placeholder={"Enter your email"} />
                        <TextinputComponent placeholder={"Enter your password"} />
                    </View>

                    <View style={{ marginTop: height * 0.03 }}>
                        <CustomButton label={"Login Now"} size={"large"} />
                    </View>
                    <Text style={styles.or}>Or</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-between", columnGap: 10, marginTop: height * 0.03, alignItems: "center" }}>
                        <TouchableOpacity>

                            <Image source={require("../image/google.png")} style={{ width: 50, height: 50, marginTop: 10 }} />

                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }}>
                            <Image source={require("../image/apple.png")} style={{ width: 60, height: 60 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 20 }}>
                            <Image source={require("../image/facebbok.jpg")} style={{ width: 70, height: 70, marginTop: 10 }} />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.text}>Don't have an account ? <Text style={{ color: "black" }} onPress={() => navigation.navigate("Sginupscreen")}>Register Now</Text></Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Sginupscreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        // paddingVertical: height * 0.2,
        marginTop: height * 0.02,
        // borderWidth: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // borderColor: "#000" ,
        height: height * 0.75
    },
    forget: {
        color: "black",
        fontSize: 17,
        fontWeight: "500"
    },
    or: {
        fontSize: 34,
        color: "black",
        fontWeight: "700",
        textAlign: "center"

    },
    text: {
        color: "gray",
        fontSize: 17,
        fontWeight: "500",
        textAlign: "center",
        marginTop: 20

    },
    forget: {
        color: "black",
        fontSize: 25,
        fontWeight: "600",

    },

})