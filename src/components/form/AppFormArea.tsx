import { useFormikContext } from 'formik'
import React from 'react'

import InputArea from '../InputArea'
import TextInputError from '../TextInputError'

type AppFormAreaProps = {
  name: string
  placeholder: string
  ispassword?: boolean
}

const AppFormArea: React.FC<AppFormAreaProps> = ({
  name,
  placeholder,
  ...otherProps
}) => {
  const { setFieldTouched, touched, handleChange, errors } = useFormikContext()
  return (
    <>
      <InputArea
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        placeholder={placeholder}
        {...otherProps}
      />

      <TextInputError isVisible={touched[name]} error={errors[name]} />
    </>
  )
}

export default AppFormArea
