import React from 'react'
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

import { useTheme } from 'src/hooks/useTheme'

import Text from './Text'

type props = {
  title: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
  type: 'primary' | 'outlined' | 'disabled'
  textStyle?: StyleProp<TextStyle>
}

const Button: React.FC<props> = ({
  title = 'Button',
  onPress,
  type,
  style,
  textStyle,
}) => {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    primary: {
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.primary,
      marginVertical: 8,
    },
    outlined: {
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      borderRadius: 28,
      borderColor: colors.primary,
      borderWidth: 2,
      marginVertical: 8,
      backgroundColor: colors.white,
    },
    disabled: {
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.lightGray,
      marginVertical: 8,
    },
    textPrimary: {
      fontSize: 18,
      lineHeight: 24,
      padding: 8,
      fontWeight: '700',
      color: colors.white,
    },
    textOutlined: {
      fontSize: 18,
      lineHeight: 24,
      padding: 8,
      fontWeight: '700',
      color: colors.primary,
    },
    textDisabled: {
      fontSize: 18,
      lineHeight: 24,
      padding: 8,
      color: colors.gray,
      fontWeight: '700',
    },
  })
  return (
    <TouchableOpacity
      disabled={type === 'disabled'}
      onPress={onPress}
      style={[
        type == 'primary'
          ? styles.primary
          : type === 'outlined'
          ? styles.outlined
          : styles.disabled,
        style,
      ]}
    >
      <Text
        type={'heading'}
        style={[
          type == 'primary'
            ? styles.textPrimary
            : type === 'outlined'
            ? styles.textOutlined
            : styles.textDisabled,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
