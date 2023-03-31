import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import utils from 'src/utils'

import AppForm from 'src/components/form/AppForm'
import AppFormArea from 'src/components/form/AppFormArea'
import AppFormInput from 'src/components/form/AppFormInput'
import SubmitButton from 'src/components/form/SubmitButton'
import Screen from 'src/components/screen/Screen'

import EncryptedStorage from 'src/cache/EncryptedStorage'
import AppContextProvider from 'src/context/ApplicationContext'
import { MainStackParamList } from 'src/routes/navigation.types'
import { Gift } from 'src/utils/shared-types'
import ValidationUtils from 'src/utils/ValidationUtils'

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'Voucher'>

const VoucherScreen: React.FC<ScreenProps> = ({ navigation, route }) => {
  const { voucherData } = route.params
  const { gifts, setGifts } = useContext(AppContextProvider)
  const [isLoading, setIsLoading] = useState(false)

  const handleOnSubmit = async (data: any) => {
    const id = gifts === undefined ? 0 : gifts.length + 1

    const request: Gift = {
      amout: data.amount,
      description: data?.description || 'No description',
      firstName: voucherData.firstName,
      lastName: voucherData.lastName,
      phoneNumber: voucherData.phoneNumber,
      store: voucherData.store,
      store_type: voucherData.store_type,
      id: id,
    }

    setIsLoading(true)
    await utils.delay(2000)
    setIsLoading(false)

    if (gifts === undefined) {
      EncryptedStorage.storeGift([request])
      setGifts([request])
      navigation.navigate('Success', {
        voucher: request,
      })
      return
    }

    gifts.push(request)
    // store the data added in string form
    EncryptedStorage.storeGift(gifts)
    navigation.navigate('Success', {
      voucher: request,
    })
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    button: {
      margin: 16,
    },
  })

  return (
    <Screen
      isLoading={isLoading}
      title={'Voucher Details'}
      onBackPressed={() => navigation.goBack()}
    >
      <AppForm
        initialValues={{
          amount: '',
          description: '',
        }}
        onSubmit={handleOnSubmit}
        validationSchema={ValidationUtils.validationSchema}
      >
        <View style={styles.container}>
          <AppFormInput
            name={'amount'}
            placeholder={'Voucher amount'}
            keyboardType={'numeric'}
          />
          <AppFormArea
            name={'description'}
            placeholder={'What is the voucher for?'}
          />
        </View>
        <View style={styles.button}>
          <SubmitButton title={'Submit voucher'} type={'primary'} />
        </View>
      </AppForm>
    </Screen>
  )
}

export default VoucherScreen
