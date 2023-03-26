import React from "react"
import {WebView} from 'react-native-webview';
import {ActivityIndicator, SafeAreaView, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  button: {
    color: '#841584'
  }
})

const renderLoading = () => {
  return (
    <ActivityIndicator
      color='black'
      size='large'
      style={styles.flexContainer}
    />
  )
}

export const WebViewComponent = () => {
  const navigation = useNavigation<any>();

  const onLogoutHandle = () => navigation.navigate('Auth')

  return (
    <SafeAreaView style={styles.flexContainer}>
      <WebView
        source={{uri: 'https://google.com'}}
        startInLoadingState={true}
        renderLoading={renderLoading}
      />
      <Button
        onPress={onLogoutHandle}
        color={styles.button.color}
        title="Выйти"
        accessibilityLabel="Выйти"
      />
    </SafeAreaView>
  )
}
