import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState } from 'react'
import Header from '../components/home/Header'
import BottomTabs from '../components/home/BottomTabs'
import { TABS } from '../data/tabs'

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Header navigation={navigation} /> 

    <ScrollView>
        <Text style={{color:'white'}}> Profile Screen</Text>
    </ScrollView>
    <BottomTabs icons={TABS} navigation={navigation} />
 
    </SafeAreaView>
  )
}

export default ProfileScreen

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'black',
  },
});