import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, {useEffect, useState } from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTabs from '../components/home/BottomTabs'
// import {POSTS} from '../data/posts'
import { TABS } from '../data/tabs'

import {
  collectionGroup,
  getFirestore,
  onSnapshot,
  getDocs,
  query,
  orderBy,
} from '../firebase'

const HomeScreen = ({navigation}) => {
  
  const [posts, setPosts] = useState([])
  const db = getFirestore()

  const getPosts = async () => {
    const posts = query(
      collectionGroup(db, 'posts'),
      // orderBy('timestamp', 'desc')
    )

    const snapshot = await getDocs(posts)

    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  }

  useEffect(() =>{ 
    ( async()=> { 
      getPosts()
    })();
   }, [])

  return (
    <SafeAreaView style={styles.container}>
    <Header navigation={navigation} /> 
    {/* <Stories/> */}

    <ScrollView>
        { posts.map((post,index) => (
          <Post post={post} key={index}/>
        ))
        } 
    </ScrollView>
    <BottomTabs icons={TABS} navigation={navigation}/>
 
    </SafeAreaView>
  )
}


styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'black',
  },
});

export default HomeScreen