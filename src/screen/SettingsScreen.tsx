import React, { useContext } from 'react'
import { StyleSheet, Switch, View } from 'react-native'

import Screen from 'src/components/screen/Screen'
import Button from 'src/components/views/Button'
import Text from 'src/components/views/Text'

import EncryptedStorage from 'src/cache/EncryptedStorage'
import AppContextProvider from 'src/context/ApplicationContext'
import { useTheme } from 'src/hooks/useTheme'

const SettingsScreen = () => {
  const { colors, isDark, setScheme } = useTheme()

  const { setGifts } = useContext(AppContextProvider)

  const styles = StyleSheet.create({
    container: {
      marginTop: 8,
    },
    switch: {
      height: 24,
    },
    text: {
      fontSize: 16,
      marginStart: 6,
    },
    containerinner: {
      backgroundColor: colors.white,
      padding: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttontext: {
      fontSize: 10,
      padding: 0,
      backgroundColor: colors.primary,
      borderRadius: 4,
      overflow: 'hidden',
      paddingHorizontal: 8,
      color: colors.white,
    },
    button: { height: 20, padding: 0, backgroundColor: colors.white },
  })

  const handleDarkModeToggle = () => {
    isDark ? setScheme('light') : setScheme('dark')
  }

  const handleClearCache = () => {
    EncryptedStorage.clearAllGifts()
    setGifts([])
  }

  return (
    <Screen title={'Settings'} isBackVisible={false}>
      <View style={styles.container}>
        <Text style={styles.text} type={'subheading'}>
          Clear data
        </Text>
        <View style={styles.containerinner}>
          <Text type={'caption'}>Clear all data</Text>
          <Button
            type={'primary'}
            onPress={handleClearCache}
            title="Clear"
            style={styles.button}
            textStyle={styles.buttontext}
          />
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.text} type={'subheading'}>
          Dark mode
        </Text>
        <View style={styles.containerinner}>
          <Text type={'caption'}>Switch between dark and light mode</Text>
          <Switch
            style={styles.switch}
            value={isDark}
            onValueChange={handleDarkModeToggle}
          />
        </View>
      </View>
    </Screen>
  )
}

export default SettingsScreen
