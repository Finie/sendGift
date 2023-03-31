import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import ConatactScreen from 'src/screen/ConatactScreen'
import MerchantScreen from 'src/screen/MerchantScreen'
import SuccessScreen from 'src/screen/SuccessScreen'
import VoucherScreen from 'src/screen/VoucherScreen'

import { MainStackParamList } from './navigation.types'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator<MainStackParamList>()

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Home'} component={TabNavigator} />
      <Stack.Screen name={'Contacts'} component={ConatactScreen} />
      <Stack.Screen name={'Merchants'} component={MerchantScreen} />
      <Stack.Screen name={'Voucher'} component={VoucherScreen} />
      <Stack.Screen name={'Success'} component={SuccessScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigation
