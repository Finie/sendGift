import { useFormikContext } from 'formik'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native/types'

import Button from '../views/Button'

type props = {
  title: string
  type: 'primary' | 'outlined' | 'disabled'
  style?: StyleProp<ViewStyle>
}

const SubmitButton: React.FC<props> = ({ title, type, style }) => {
  const { handleSubmit } = useFormikContext()
  return <Button title={title} onPress={handleSubmit} type={type} style={style} />
}

export default SubmitButton
