import React, { useState } from 'react'
import { Keyboard, StyleSheet, TextInput } from 'react-native'

import { useTheme } from 'src/hooks/useTheme'

type InputFieldProps = {
  onBlur: () => void
  onChangeText: (text: string) => void
  placeholder: string
}

const InputField: React.FC<InputFieldProps> = ({
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
      height: 56,
      borderRadius: 6,
      paddingHorizontal: 10,
      backgroundColor: colors.lightGray,
      marginVertical: 16,
      fontSize: 18,
      lineHeight: 24,
    },
  })

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TextInput
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={onChangeText}
      style={[styles.input, shadowStyle]}
      placeholder={placeholder}
      returnKeyType={'done'}
      onSubmitEditing={() => dismissKeyboard()}
      {...otherProps}
    />
  )
}

export default InputField
