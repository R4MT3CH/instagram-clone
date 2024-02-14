import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState } from 'react'
import Header from '../components/home/Header'
import User  from '../components/home/User'
import BottomTabs from '../components/home/BottomTabs'
import { TABS } from '../data/tabs'
import {
  collectionGroup,
  getFirestore,
  onSnapshot,
  getDocs,
  query,
  orderBy,
  getAuth,
  signOut
} from '../firebase'

const SearchScreen = ({navigation}) => {

  const [users, setUsers] = useState([])
  const db = getFirestore()

  const getUsers = async () => {
    const users = query(
      collectionGroup(db, 'users'),
      // orderBy('timestamp', 'desc')
    )

    const snapshot = await getDocs(users)

    setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  }

   useEffect(() =>{ 
    ( async()=> { 
      getUsers()
    })();
   }, [])


  return (
    <SafeAreaView style={styles.container}>
    <Header navigation={navigation} /> 
    <ScrollView>
        { users.map((user,index) => (
          <User user={user} key={index}/>
        ))
        } 
    </ScrollView>
    <BottomTabs icons={TABS} navigation={navigation}/>
 
    </SafeAreaView>
  )
}

export default SearchScreen

styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'black'
  },
});