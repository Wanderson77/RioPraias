import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const LEVEL = 2;

const Home = ({ route }) => {
  const [error, setError] = useState();
  const { item } = route.params;

  useEffect(() => {
    console.log('Mounting component');
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Home Delivery address: </Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070707',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FD0139',
    paddingBottom: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff'
  }
});

export default Home;
