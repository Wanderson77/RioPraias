import {
  useState,
  useEffect
} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  } from 'react-native';
import { styles } from './styles';

const SignIn: React.FC = () =>
  const [data, setData] = useState('');

  async function fetchAPI(){
    try {

    } catch (error) {
      console.log(error);
    }
    finally {
      Alert.alert('Success')
    }
  }

  if (loading) {
    return <View>Loading</View>
  }
  <SafeAreaView>
    <View>
      <TouchableOpacity></TouchableOpacity>
      <Image/>
    </View>
  <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Image
          source={require('./src/assets/logo.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
    </SafeAreaView>

export default SignIn;

