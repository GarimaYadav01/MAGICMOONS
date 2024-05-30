import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text>dfkj</Text> */}
      <Navigation />
      <FlashMessage position={'top'}/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})