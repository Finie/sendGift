import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Lottie from 'lottie-react-native'
import React from 'react'
import { BackHandler, StyleSheet, View } from 'react-native'

import Screen from 'src/components/screen/Screen'
import Button from 'src/components/views/Button'
import Text from 'src/components/views/Text'

import lottieAnimation from 'src/assets/animations/congratulations.json'
import { MainStackParamList } from 'src/routes/navigation.types'

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'Success'>

const SuccessScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const handleBackPress = () => {
    // Prevent default behavior
    return true
  }

  React.useEffect(() => {
    // Add event listener for back press
    BackHandler.addEventListener('hardwareBackPress', handleBackPress)

    // Remove event listener on unmount
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
  }, [])
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
    },
    lottie: {
      width: 200,
      height: 200,
    },
    button: {
      margin: 16,
    },
    text_container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    title: {
      fontSize: 24,
    },
  })
  return (
    <Screen isBackVisible={false} isWhiteBackground>
      <View style={styles.container}>
        <Lottie
          source={lottieAnimation}
          autoPlay
          loop={false}
          style={styles.lottie}
        />
        <View style={styles.text_container}>
          <Text type={'heading'} style={styles.title}>
            Congratulation
          </Text>
          <Text>Your gift has been sent successfully</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title={'Finish'}
          type={'outlined'}
          onPress={() => {
            navigation.navigate('Home')
          }}
        />
      </View>
    </Screen>
  )
}

export default SuccessScreen
