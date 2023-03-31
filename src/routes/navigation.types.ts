// import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Gift } from 'src/utils/shared-types'

export type TabStackParamList = {
  HomeScreen: undefined
  Settings: undefined
}

export type MainStackParamList = {
  Home: undefined
  Contacts: undefined
  Merchants: { data: { firstName: string; lastName: string; phoneNumber: string } }
  Voucher: {
    voucherData: {
      firstName: string
      lastName: string
      phoneNumber: string
      store: string
      store_type: string
    }
  }
  Success: { voucher: Gift }
}

export type RootParamList = {
  TabNavigator: undefined
  GiftVoucher: undefined
}
