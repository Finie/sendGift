import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

import GiftIcon from 'src/assets/icons/gift.svg'
import { useTheme } from 'src/hooks/useTheme'

type FabActionButtonProps = {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const FabActionButton: React.FC<FabActionButtonProps> = ({ onPress, style }) => {
  const { colors } = useTheme()
  const styles = StyleSheet.create({
    primary: {
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      width: 56,
      borderRadius: 28,
      backgroundColor: colors.primary,
      marginVertical: 8,
      zIndex: 10,
      shadowColor: colors.blackText,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginTop: -90,
    },
  })
  return (
    <TouchableOpacity onPress={onPress} style={[styles.primary, style]}>
      <GiftIcon width={30} height={30} />
    </TouchableOpacity>
  )
}

export default FabActionButton
