import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextinputComponent from './TextinputComponent'
import CustomButton from './Custombutton'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get("screen")
import { Formik } from 'formik';
import * as Yup from 'yup';
const Sginupscreen = () => {
    const navigation = useNavigation();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        name: Yup.string()
            .required('Name is required'),

        mobilenumber: Yup.string()
            .required('Password is required')
            .min(8, 'mobilenumber should be 8 should be or leass then 15'),
    });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: height * 0.04 }}>
                    <Image source={require("../image/withbglogo.png")} style={{ width: 150, height: 150 }} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.forget}>Register Now</Text>
                    <Formik
                        initialValues={{ email: '', password: '', name: '', mobilenumber: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            handleLogin(values);
                            // navigation.navigate("Homescreen")
                            // actions.resetForm(); 
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <>
                                <View style={{ alignSelf: "center", }}>
                                    <TextinputComponent placeholder={" Name"} nChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        error={touched.name && errors.name} />
                                    <Text style={styles.error}>{touched.name && errors.name}</Text>
                                    <TextinputComponent placeholder={"Mobile no."} nChangeText={handleChange('mobilenumber')}
                                        onBlur={handleBlur('mobilenumber')}
                                        value={values.mobilenumber}
                                        error={touched.mobilenumber && errors.mobilenumber} />
                                    <Text style={styles.error}>{touched.mobilenumber && errors.mobilenumber}</Text>
                                    <TextinputComponent placeholder={" Email"} onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        error={touched.email && errors.email} />
                                    <Text style={styles.error}>{touched.email && errors.email}</Text>
                                    <TextinputComponent placeholder={"Password"} onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        error={touched.password && errors.password} />
                                    <Text style={styles.error}>{touched.password && errors.password}</Text>
                                </View>

                                <View style={{ marginTop: height * 0.04 }}>
                                    <CustomButton label={"Register Now"} size={"large"} onPress={handleSubmit} />
                                </View>
                            </>
                        )}
                    </Formik>
                    <View style={styles.about}>
                        <Text style={styles.text}>Already Have a Account <Text style={{ color: "black", }} onPress={() => navigation.navigate("Loginscreen")}>Login Now</Text></Text>
                    </View>

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

    or: {
        fontSize: 34,
        color: "black",
        fontWeight: "700",
        textAlign: "center"

    },
    text: {
        color: "black",
        fontSize: 17,
        fontWeight: "500",
        textAlign: "center",
        // marginTop: 20,


    },
    forget: {
        color: "black",
        fontSize: 25,
        fontWeight: "600",
        marginHorizontal: 30,
        marginTop: height * 0.04

    },
    about: {

        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.86,
        borderWidth: 1,
        paddingVertical: Platform.OS === 'ios' ? 15 : 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: "#ffffff",
        marginTop: height * 0.03,
        color: "black",
        backgroundColor: "#ffffff",
        // Shadow properties for iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Shadow property for Android
        elevation: 5,
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "center"

    },
    error: {
        // marginBottom: -height*0.01,
        color: "red",
        marginTop: height * 0.03
    }

})