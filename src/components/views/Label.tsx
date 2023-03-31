import React from 'react'
import { StyleSheet } from 'react-native'

import { useTheme } from 'src/hooks/useTheme'

import Text from './Text'

type LabelProps = {
  focused: boolean
  label: string
}

const Label: React.FC<LabelProps> = ({ focused, label }) => {
  const { colors } = useTheme()
  const styles = StyleSheet.create({
    activeText: { fontSize: 12, color: colors.secondary },
    in_activeText: { fontSize: 12, color: colors.lightGray },
  })
  return (
    <Text style={focused ? styles.activeText : styles.in_activeText}>{label}</Text>
  )
}
export default Label
