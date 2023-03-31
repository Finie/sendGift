import React, { ReactNode } from 'react'
import {
  Text as ReactNativeText,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native'

import { useTheme } from 'src/hooks/useTheme'

type Props = {
  children: ReactNode
  style?: StyleProp<TextStyle>
  type?: 'heading' | 'normal' | 'subheading' | 'caption'
}

// This component overrides the default Text component from react-native.
// It renders a text component with the correct styles. It accepts a type prop
// to determine which styles to apply. You can also pass in your own styles.

const Text: React.FC<Props> = ({ type = 'normal', style, children, ...rest }) => {
  const { colors } = useTheme()
  const textStyles = () => {
    switch (type) {
      case 'heading':
        return styles.heading
      case 'subheading':
        return styles.subheading
      case 'caption':
        return styles.caption
      default:
        return styles.body
    }
  }

  const styles = StyleSheet.create({
    heading: {
      color: colors.headings,
      fontSize: 34,
      lineHeight: 44,
      marginLeft: -3,
    },
    subheading: {
      color: colors.subheading,
      fontSize: 22,
      lineHeight: 30,
    },
    body: {
      color: colors.bodyText,
      fontSize: 16,
      lineHeight: 24,
    },
    caption: {
      color: colors.caption,
      fontSize: 14,
      lineHeight: 22,
    },
    bodyini: {
      color: colors.blackText,
      fontSize: 18,
      lineHeight: 26,
    },
  })
  return (
    <ReactNativeText {...rest} style={[textStyles(), style]}>
      {children}
    </ReactNativeText>
  )
}

export default Text
