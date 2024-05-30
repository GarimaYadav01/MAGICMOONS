import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableWithoutFeedback, Platform } from 'react-native';
const { width, height } = Dimensions.get("screen");

const TextinputComponent = ({ label, placeholder, secureTextEntry, inputType, onChangeText, value, onBlur, disabled }) => {
  let imageSource;
  switch (inputType) {
    case 'email':
      imageSource = require('../image/Email.png');
      break;
    case 'phone':
      imageSource = require('../image/Phone.png');
      break;
    case 'person':
      imageSource = require('../image/person.png');
      break;
    default:
      imageSource = null;
  }

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <Formik
      initialValues={{ [inputType]: '' }}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <Text style={styles.textInputLabel}>
            {label}
          </Text>
          <View style={styles.inputContainer}>
            {imageSource && (
              <Image source={imageSource} style={styles.icon} />
            )}
            <TextInput
              style={styles.inputField}
              placeholder={placeholder}
              secureTextEntry={!isPasswordVisible && secureTextEntry}
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              placeholderTextColor={"gray"}
              placeholderStyle={{ fontSize: 20, fontWeight: "500" }}
              editable={!disabled}
            />
            {inputType === 'password' && (
              <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                <Image
                  source={isPasswordVisible ? require('../image/eyes.png') : require('../image/closeyes.png')}
                  style={styles.eyeIcon}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.86,
    borderWidth: 1,
    // paddingVertical: Platform.OS === 'ios' ? 15 : 3,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#ffffff",
    // marginTop: height * 0.01,
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
    marginBottom:-25
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: "#FFF"
  },
  inputField: {
    flex: 1,
    color: "black",
    // marginTop:10
  },
  textInputLabel: {
    color: "black",
    fontSize: 18,
    // marginVertical: 10,
    // marginTop:10,
    fontWeight: "500",


  },
});

export default TextinputComponent;
