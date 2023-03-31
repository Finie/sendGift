import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import EncryptedStorage from './cache/EncryptedStorage'
import AppContextProvider from './context/ApplicationContext'
import { ThemeProvider } from './context/ThemeContextProvider'
import MainNavigation from './routes/MainNavigation'
import { Gift } from './utils/shared-types'

function App(): JSX.Element {
  const [gifts, setGifts] = useState<Gift[]>([])
  useEffect(() => {
    const retriveGifts = async () => {
      const result = await EncryptedStorage.retrieveGifts()
      setGifts(result.gift)
    }
    retriveGifts()
  }, [])

  return (
    <AppContextProvider.Provider value={{ gifts, setGifts }}>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppContextProvider.Provider>
  )
}

export default App
