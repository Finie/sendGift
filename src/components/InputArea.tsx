import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

import { useTheme } from 'src/hooks/useTheme'

type InputAreaProps = {
  onBlur: () => void
  onChangeText: (text: string) => void
  placeholder: string
}

const InputArea: React.FC<InputAreaProps> = ({
  onBlur,
  onChangeText,
  placeholder,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const { colors } = useTheme()

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    onBlur()
    setIsFocused(false)
  }

  const shadowStyle = isFocused
    ? {
        // shadowColor: 'black',
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 1,
        borderColor: colors.secondary,
        borderWidth: 2,
        backgroundColor: colors.background,
      }
    : null

  const styles = StyleSheet.create({
    input: {
      height: 100,
      borderRadius: 6,
      paddingHorizontal: 10,
      backgroundColor: colors.lightGray,
      marginVertical: 16,
      fontSize: 18,
      lineHeight: 24,
    },
  })

  return (
    <TextInput
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={onChangeText}
      style={[styles.input, shadowStyle]}
      placeholder={placeholder}
      // multiline={true}
      numberOfLines={3}
      underlineColorAndroid="transparent"
      {...otherProps}
    />
  )
}

export default InputArea
