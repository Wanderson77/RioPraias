import React from 'react'
import { View, Text } from 'react-native'
import Style from './style'

export default function index() {
  const [myState, setMyState] = useStates (false)
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}
