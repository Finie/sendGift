import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, NativeModules, StyleSheet, View } from 'react-native'
import utils from 'src/utils'

import InputField from 'src/components/InputField'
import Screen from 'src/components/screen/Screen'
import ContactItem from 'src/components/views/ContactItem'
import Text from 'src/components/views/Text'

import { MainStackParamList } from 'src/routes/navigation.types'
import { Contact } from 'src/utils/shared-types'

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'Contacts'>

const ConatactScreen: React.FC<ScreenProps> = ({ navigation }) => {
  const [contactList, setContactList] = useState<Contact[]>([])
  const [filterdContact, setFilterdContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchContacts = () => {
      setIsLoading(true)
      NativeModules.ContactsManager.readphonecontact(
        (
          error: any,
          contacts: {
            firstName: string
            lastName: ''
            phoneNumbers: [string]
          }[]
        ) => {
          if (error) {
            if (error === 'Access Denied') {
              setIsLoading(false)
              return Alert.alert(error, 'Contact permission is required!')
            }
            return Alert.alert(error, 'Device not supported')
          } else {
            setIsLoading(false)
            setContactList(contacts)
          }
        }
      )
    }

    fetchContacts()
  }, [])

  const searchForContact = (searchString: string) => {
    if (utils.checkStringType(searchString) === 'numbers') {
      const result = utils.searchNumberInContact(contactList, searchString)
      setFilterdContacts(result)
      return
    }

    const result = utils.searchNameContact(contactList, searchString)
    setFilterdContacts(result)
  }

  const styles = StyleSheet.create({
    flatlist: {
      padding: 16,
    },
    conatct_placeholder: {
      fontSize: 22,
    },
  })

  return (
    <Screen
      title={'Contacts'}
      isLoading={isLoading}
      isNotificationVisible={true}
      isBackVisible={true}
      onBackPressed={() => navigation.goBack()}
    >
      {utils.isEmpty(filterdContact) ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatlist}
          ListHeaderComponent={
            <View>
              <Text style={styles.conatct_placeholder}>Send voucher to</Text>
              <InputField
                onBlur={() => {}}
                onChangeText={searchForContact}
                placeholder={'Search'}
              />
            </View>
          }
          data={contactList}
          keyExtractor={(item, index) => item.phoneNumbers[0] + index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ContactItem
                data={item}
                index={index}
                onPress={() =>
                  navigation.navigate('Merchants', {
                    data: {
                      firstName: item.firstName,
                      lastName: item.lastName,
                      phoneNumber: item.phoneNumbers[0],
                    },
                  })
                }
              />
            )
          }}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatlist}
          ListHeaderComponent={
            <View>
              <Text style={styles.conatct_placeholder}>Send voucher to</Text>
              <InputField
                onBlur={() => {}}
                onChangeText={searchForContact}
                placeholder={'Search'}
              />
            </View>
          }
          data={filterdContact}
          keyExtractor={(item, index) => item.phoneNumbers[0] + index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ContactItem
                data={item}
                index={index}
                onPress={() =>
                  navigation.navigate('Merchants', {
                    data: {
                      firstName: item.firstName,
                      lastName: item.lastName,
                      phoneNumber: item.phoneNumbers[0],
                    },
                  })
                }
              />
            )
          }}
        />
      )}
    </Screen>
  )
}

export default ConatactScreen
