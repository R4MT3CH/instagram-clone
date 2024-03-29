import { View, Text, ScrollView, StyleSheet,Image } from 'react-native'
import React from 'react'
import {USERS} from '../../data/users'

const Stories = () => {
  return (

    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
         USERS.map( (story,index) =>(
            <View key={index} style={{ alignItems: 'center'}}>
            <Image source={{uri: story.image}} style={styles.story} />
            <Text style={{color: 'white'}}>
            { story.user.length > 7 ? story.user.slice(0, 7).toLowerCase() + '...'
             : story.user.toLowerCase() } 
             </Text>
            </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

styles = StyleSheet.create({
    container: {
        marginBottom: 10, 
        borderTopColor: 'white',
        borderTopWidth: 
        StyleSheet.hairlineWidth,
    },
    story:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 9,
        borderWidth: 3,
        marginTop: 6,
        borderColor: '#ff8501'
    }
})

export default Stories