import {View, SafeAreaView, TextInput, StyleSheet, Button} from 'react-native';
import {FC, useState} from 'react';
import {useNavigation} from '@react-navigation/native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    borderColor: '#841584',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: 300,
    marginBottom: 20
  },
  button: {
    color: '#841584'
  },
  error: {
    fontSize: 16,
    color: 'red'
  }
})

export const AuthComponent: FC = () => {
  const navigation = useNavigation<any>();
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const onSubmitHandle = async () => {
    try {
      const res = await fetch('https://api.airtable.com/v0/appJs3sVnFEByXJzh/users', {
        headers: {
          Authorization: 'Bearer keyrFPAFyMMhteO3o'
        }
      })

      const resData = await res.json()

      const userFound = resData.records.filter((record: any) => (
        record.fields.Login === login && record.fields.Password === password)
      )

      if (userFound.length) {
        navigation.navigate('WebView')
        setPassword('')
        setLogin('')
        if (isError) {
          setIsError(false)
        }
      } else {
        setIsError(true)
      }
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder={'Логин'}
          onChangeText={setLogin}
          style={styles.textInput}
          autoCapitalize={'none'}
          value={login}
        />
        <TextInput
          placeholder={'Пароль'}
          onChangeText={setPassword}
          style={styles.textInput}
          autoCapitalize={'none'}
          value={password}
        />
        {
          isError
          &&
          (
            <TextInput style={styles.error}>Неправильный логин или пароль</TextInput>
          )
        }
        <Button
          onPress={onSubmitHandle}
          color={styles.button.color}
          title="Войти"
          accessibilityLabel="Войти"
        />
      </View>
    </SafeAreaView>
  )
}
