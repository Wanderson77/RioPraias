import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export default function index() {
  const [myState, setMyState] = useStates (false)
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}
