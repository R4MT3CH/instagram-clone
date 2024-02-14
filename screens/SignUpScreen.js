import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SignUpForm from '../components/login/SignUpForm'


const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source = {require('../assets/mingoole-logo.png')} style={{ width: 300, height: 120 }} />
      </View>
      <SignUpForm navigation={navigation} />
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // marginHorizontal: 12,
    height: '100%',
    backgroundColor: 'black',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})