import { Alert } from 'react-native'
import EncryptionStore from 'react-native-encrypted-storage'

import Constants from 'src/utils/Constants'
import { Gift } from 'src/utils/shared-types'

const encryptionkey = Constants.ENCRYPTION_KEY

const storeGift = async (gift: Gift) => {
  try {
    await EncryptionStore.setItem(
      encryptionkey,
      JSON.stringify({
        gift,
      })
    )
  } catch (error) {
    Alert.alert('Request failed', 'Unable to send gift')
  }
}

const retrieveGifts = async () => {
  try {
    const gift = await EncryptionStore.getItem(encryptionkey)

    if (gift !== null || gift !== undefined) {
      return JSON.parse(!gift ? '[]' : gift)
    }
  } catch (error) {
    // There was an error on the native side
    Alert.alert('Failed', 'Failed to fetch gifts')
  }
}

const clearAllGifts = async () => {
  try {
    await EncryptionStore.clear()
    Alert.alert('Success', 'Items cleared successfully')
  } catch (error) {
    Alert.alert('Request failed', 'Sorry we were unable to remove items')
  }
}

export default {
  storeGift,
  retrieveGifts,
  clearAllGifts,
}
