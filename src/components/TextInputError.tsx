import React from 'react'
import { StyleSheet } from 'react-native'

import Text from './views/Text'
import { useTheme } from 'src/hooks/useTheme'

type props = {
  isVisible: boolean
  error: string
}

const TextInputError: React.FC<props> = ({ isVisible, error }) => {
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    error: {
      color: colors.error,
      fontSize: 14,
      lineHeight: 20,
      marginStart: 8,
    },
  })

  if (!isVisible || !error) {
    return null
  }

  return <Text style={styles.error}>{error}</Text>
}

export default TextInputError
