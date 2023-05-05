import { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native'
import styles from './styles'

export default function index() {
  const [myState, setMyState] = useState (false);
  const [error, setError] = useState (true);
  const [feed, setFeed] = useState ([]);
  const [page, setPage] = useState (1);

  const greeting = 'Hello FB';

  function handleActionUser() {
    if (airbnbStyle === undefined) {
      console.log(data);
    } else if {
      console.log(result);
    }
  }

  useEffect(() => {
    console.log('RN', error);
  },[])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Mobile Marketing</Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={handleActionUser}
        >
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
