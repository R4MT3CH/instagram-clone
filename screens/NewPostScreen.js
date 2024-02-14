import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 2, backgroundColor: 'black'}}>
      <AddNewPost  navigation={navigation}/>
    </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})