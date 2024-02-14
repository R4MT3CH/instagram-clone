import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICONS } from '../../data/icons'
import {
  getAuth,
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from '../../firebase'

const User = ({user}) => {
  const auth = getAuth()
  const db = getFirestore()


  return (
    <View style={{ marginBottom: 30 }}>
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <UserHeader user={user} />
      </View>
    </View>
  )
}

const UserHeader = ({user}) => {

  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image source={{ uri: user.pic }} style={styles.story} />
        <Text style={styles.userName}>{user.username}</Text>
      </View>
      <UserConnect/>
      
    </View>
  )
}

const UserConnect = () => {
  const auth = getAuth()
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}
    >
      <View style={styles.leftFooterIconContainer}>
        <Icon imgStyle={styles.footerIcon} imgUrl={ICONS[0].imageUrl}/>
        <Icon imgStyle={styles.footerIcon} imgUrl={ICONS[1].imageUrl} />
      </View>
    </View>
  )
}

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
)

export default User

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 1,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ff4441',
    borderRadius: 5,
  },
  story: {
    width: 135,
    height: 135,
    resizeMode: 'contain',
    borderWidth: 1.5,
    borderColor: '#ff4444',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
  },
  footerIcon: {
    height: 33,
    width: 33,
    marginRight:10,
    marginBottom: 15
  },
  leftFooterIconContainer: {
    // flexDirection: 'row',
    width: '5%',
    marginRight:20,
    justifyContent: 'space-between',
  },
})