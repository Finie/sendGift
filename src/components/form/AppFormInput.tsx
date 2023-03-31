import { useFormikContext } from 'formik'
import React from 'react'

import InputField from '../InputField'
import TextInputError from '../TextInputError'

type AppFormInputProps = {
  name: string
  placeholder: string
  ispassword?: boolean
}

const AppFormInput: React.FC<AppFormInputProps> = ({
  name,
  placeholder,
  ...otherProps
}) => {
  const { setFieldTouched, touched, handleChange, errors } = useFormikContext()
  return (
    <>
      <InputField
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        placeholder={placeholder}
        {...otherProps}
      />

      <TextInputError isVisible={touched[name]} error={errors[name]} />
    </>
  )
}

export default AppFormInput
