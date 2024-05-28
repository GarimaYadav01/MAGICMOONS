import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text>dfkj</Text> */}
      <Navigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})