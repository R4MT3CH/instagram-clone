import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { getAuth, signOut } from '../../firebase'

const Header = ({navigation}) => {

  const auth = getAuth()
  const signOutUser = async () => {
    try {
      await signOut(auth)
      console.log('Signed out successfully')
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOutUser}>
      <Image style={styles.logo} 
      source={require('../../assets/mingoole-logo.png')}
      />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
       <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
       <Image style={styles.icon} 
        source={ require('../../assets/icons8-plus-64.png')}
       />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image style={styles.icon} 
        source={ require('../../assets/icons8-heart-100.png')}
       />
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
        </View>
       <Image style={styles.icon} 
        source={ require('../../assets/icons8-message-100.png')}
       />
      </TouchableOpacity>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal: 10,
        marginTop: 25
    },
    iconsContainer:{
        flexDirection: 'row',
    },
    logo:{
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    icon:{
        width:30,
        height:30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge:{
        backgroundColor: 'white',
        position: 'absolute',
        left:20,
        bottom:20,
        width:25,
        height:20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,

    },

    unreadBadgeText:{
        color: 'black',
        fontWeight: '500',

    }

})

export default Header