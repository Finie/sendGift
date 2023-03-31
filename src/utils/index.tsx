import { Alert } from 'react-native'

import { Contact, Merchant, SearchType } from './shared-types'

const searchNameContact = (contactList: Contact[], query: string): Contact[] => {
  const lowerCaseQuery = query.toLowerCase().trim()
  return contactList.filter(
    item =>
      item?.firstName.toLowerCase().includes(lowerCaseQuery) ||
      item?.lastName.toLowerCase().includes(lowerCaseQuery) ||
      `${item?.firstName.toLowerCase()}${item?.lastName.toLowerCase()}`.includes(
        lowerCaseQuery
      )
  )
}

const searchNumberInContact = (contactList: Contact[], query: string): Contact[] => {
  const lowerCaseQuery = query.toLowerCase()
  return contactList.filter(item =>
    item?.phoneNumbers[0].toLowerCase().includes(lowerCaseQuery)
  )
}

const checkStringType = (str: string): SearchType => {
  const hasNumbers = /\d/.test(str)
  const hasLetters = /[a-zA-Z]/.test(str)

  if (hasNumbers && !hasLetters) {
    return 'numbers'
  } else if (!hasNumbers && hasLetters) {
    return 'letters'
  } else {
    return 'mixed'
  }
}

const searchForMerchants = (contactList: Merchant[], query: string): Merchant[] => {
  const lowerCaseQuery = query.toLowerCase()
  return contactList.filter(item =>
    item?.lookup_values_1.toLowerCase().includes(lowerCaseQuery)
  )
}

const isEmpty = (obj: any): boolean => {
  if (Array.isArray(obj)) {
    return obj.length === 0
  } else if (typeof obj === 'object') {
    return Object.keys(obj).length === 0
  } else {
    Alert.alert('Invalid argument', 'expected an object or array.')
    return false
  }
}

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  searchNameContact,
  searchNumberInContact,
  searchForMerchants,
  checkStringType,
  isEmpty,
  delay,
}
