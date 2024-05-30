import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextinputComponent from './TextinputComponent'
import CustomButton from './Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { showMessage } from 'react-native-flash-message'
const { height, width } = Dimensions.get("screen")
const Loginscreen = () => {
    const navigation = useNavigation();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });
    const handleLogin = async (values) => {
        try {
            const response = await axios.post('https://fitwithgrip.com/api/login', {
                username: values.email,
                password: values.password,
            });

            if (response.status == true) {
                console.log('Login successful:', response.data);
                navigation.navigate("Homescreen");
                showMessage({
                    message: "Login successful:",
                    type: "success",
                    icon: "success"
                })
            } else {
                console.log('Login failed:', response.data);
                showMessage({
                    message: "Incorrect username or password",
                    type: "danger",
                    icon: "danger"
                })
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: height * 0.04 }}>
                    <Image source={require("../image/withbglogo.png")} style={{ width: 150, height: 150 }} />
                </View>
                <View style={styles.container}>


                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            handleLogin(values);
                            // navigation.navigate("Homescreen")
                            actions.resetForm();
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <>
                                <View style={{ alignSelf: "center", marginTop: height * 0.05 }}>
                                    <TextinputComponent placeholder={"Enter your email"}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        error={touched.email && errors.email} />
                                    <Text style={styles.error}>{touched.email && errors.email}</Text>
                                    <TextinputComponent placeholder={"Enter your password"} inputType={"password"}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        error={touched.password && errors.password} />
                                    <Text style={styles.error}>{touched.password && errors.password}</Text>
                                </View>
                                <View style={{ justifyContent: "flex-end", alignContent: "flex-end", marginLeft: width * 0.6, marginTop: height * 0.02 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate("ForgetScreen")}>
                                        <Text style={styles.forget}>Forget Password?</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ marginTop: height * 0.03 }}>
                                    <CustomButton label={"Login Now"} size={"large"}
                                        // onPress={handleSubmit} 
                                        onPress={() => navigation.navigate("Homescreen")} />
                                </View>
                            </>
                        )}
                    </Formik>

                    <Text style={styles.or}>Or</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center", justifyContent: "space-between", columnGap: 10, marginTop: height * 0.01, alignItems: "center" }}>
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

export default Loginscreen

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
        textAlign: "center",
        marginVertical: 10

    },
    text: {
        color: "gray",
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        marginTop: 22

    },
    error: {
        marginTop: height * 0.04,
        color: "red"
    }

})