import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function index() {
  const [myState, setMyState] = useState (false);
  const [error, setError] = useState (true);

  useEffect(() => {
    console.log('RN', error);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Marketing</Text>
    </View>
  )
}
