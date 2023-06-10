import { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native'

const ProfileScreen = () => {
  const [error, setError] = useState({});

  useEffect(() => {
    alert('MOUNT COMPONENT')
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default index
