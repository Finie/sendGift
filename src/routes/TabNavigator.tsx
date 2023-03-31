import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { HomeIcon, SettingsIcon } from 'src/components/views/Icon'
import Label from 'src/components/views/Label'

import HomeScreen from 'src/screen/HomeScreen'
import SettingsScreen from 'src/screen/SettingsScreen'

import { MainStackParamList, TabStackParamList } from './navigation.types'

const Tab = createBottomTabNavigator<TabStackParamList>()

const TabBar = (props: BottomTabBarProps) => {
  return <BottomTabBar {...props} />
}

type ScreenProps = CompositeScreenProps<
  NativeStackScreenProps<TabStackParamList, 'HomeScreen'>,
  NativeStackScreenProps<MainStackParamList, 'Contacts'>
>

const TabNavigator: React.FC<ScreenProps> = () => {
  const { bottom } = useSafeAreaInsets()

  //   const { navigation } = props

  const styles = StyleSheet.create({
    container: {
      borderTopWidth: 0,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: {
        height: 3,
        width: 0,
      },
      height: 62,
      shadowRadius: 20,
      paddingBottom: 8,
    },
  })
  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarStyle: [
          styles.container,
          {
            height: styles.container.height + bottom,
            paddingBottom: Math.max(styles.container.paddingBottom, bottom),
          },
        ],
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => HomeIcon(focused),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: ({ focused }) => <Label focused={focused} label="Home" />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => SettingsIcon(focused),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: ({ focused }) => <Label focused={focused} label="Settings" />,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
