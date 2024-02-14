import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LoginForm from '../components/login/LoginForm'


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source = {require('../assets/mingoole-logo.png')} style={{ width: 300, height: 120 }} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    height: '100%',
    backgroundColor: 'black',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})