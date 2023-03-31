import React, { ReactNode } from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import OverLayLoader from '../views/OverLayLoader'
import Text from '../views/Text'
import BackArrow from 'src/assets/icons/back.svg'
import NotificationIcon from 'src/assets/icons/notification.svg'
import { useTheme } from 'src/hooks/useTheme'

type ScreenProps = {
  title?: String
  isWhiteBackground?: boolean
  isBackVisible?: boolean
  isLoading?: boolean
  isNotificationVisible?: boolean
  onBackPressed?: () => void
  children: ReactNode
}

const Screen: React.FC<ScreenProps> = ({
  title = '',
  isBackVisible = true,
  isNotificationVisible = false,
  onBackPressed,
  isLoading = false,
  children,
  isWhiteBackground = false,
}) => {
  const { colors, isDark } = useTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      padding: 16,
      backgroundColor: isWhiteBackground ? colors.white : colors.background,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    header: {
      fontSize: 18,
      lineHeight: 24,
    },
    back: {
      padding: 8,
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.back}
          disabled={!isBackVisible}
          onPress={onBackPressed}
        >
          {isBackVisible && <BackArrow width={24} height={24} />}
        </TouchableOpacity>
        <Text type={'heading'} style={styles.header}>
          {title}
        </Text>
        <TouchableOpacity disabled={!isNotificationVisible}>
          {isNotificationVisible && <NotificationIcon width={24} height={24} />}
        </TouchableOpacity>
      </View>
      <>{children}</>

      <OverLayLoader isLoading={isLoading} />
    </SafeAreaView>
  )
}

export default Screen
