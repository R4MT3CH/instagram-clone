import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements'

const BottomTabs = ({ icons, navigation }) => {
  const [activeTab, setActiveTab] = useState('ProfileScreen')
  

  const Icon = ({ icon, navigation }) => (
    <TouchableOpacity onPress={() => {setActiveTab(icon.name), navigation.push(icon.name)}}>
      <Image
        source={{
          uri: activeTab === icon.name ? icon.active : icon.inactive,
        }}
        style={[
          styles.icon,
          icon.name === 'Profile' ? styles.profilePic : null,
        ]}
      />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
    <Divider width={1} orientation='vertical' />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} navigation={navigation} />
        ))}
      </View>
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  wrapper: {
    position: 'sticky',
    width: '100%',
    bottom: 0,
    backgroundColor: '#000',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
})