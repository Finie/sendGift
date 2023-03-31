import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, NativeModules, StyleSheet, View } from 'react-native'
import utils from 'src/utils'

import InputField from 'src/components/InputField'
import Screen from 'src/components/screen/Screen'
import MerchantsItem from 'src/components/views/MerchantsItem'
import Text from 'src/components/views/Text'

import { MainStackParamList } from 'src/routes/navigation.types'
import { Merchant } from 'src/utils/shared-types'

type ScreenProps = NativeStackScreenProps<MainStackParamList, 'Merchants'>

const MerchantScreen: React.FC<ScreenProps> = ({ navigation, route }) => {
  const [merchantList, setMerchantList] = useState<Merchant[]>([])
  const [filterdMerchantList, setFilterdMerchantList] = useState<Merchant[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { data } = route.params

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setIsLoading(true)
        const response = await NativeModules.MyHTTPModule.makeRequest(
          'https://run.mocky.io/v3/2598c0cf-5647-4ecc-ba4b-15cbc14a2124',
          null
        )
        setIsLoading(false)

        setMerchantList(response.result.message) // setData to response returned
      } catch (error) {
        Alert.alert('Request Failed', `${error}`)
      }
    }

    makeRequest()
  }, [])

  const searchForMerchants = (searchString: string) => {
    const result = utils.searchForMerchants(merchantList, searchString)
    setFilterdMerchantList(result)
  }

  const styles = StyleSheet.create({
    flatlist: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    conatct_placeholder: {
      fontSize: 18,
      lineHeight: 22,
    },
    header: {
      marginHorizontal: 16,
      marginTop: 16,
    },
  })
  return (
    <Screen
      isLoading={isLoading}
      onBackPressed={() => navigation.goBack()}
      isNotificationVisible
      title={'Merchants'}
    >
      {utils.isEmpty(filterdMerchantList) ? (
        <>
          <View style={styles.header}>
            <Text style={styles.conatct_placeholder}>Select merchant</Text>
            <InputField
              onBlur={() => {}}
              onChangeText={searchForMerchants}
              placeholder={'Search'}
            />
          </View>
          <FlatList
            data={merchantList}
            contentContainerStyle={styles.flatlist}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <MerchantsItem
                data={item}
                index={index}
                onPress={() =>
                  navigation.navigate('Voucher', {
                    voucherData: {
                      firstName: data.firstName,
                      lastName: data.lastName,
                      phoneNumber: data.phoneNumber,
                      store: item.lookup_values_1,
                      store_type: item.lookup_values_3,
                    },
                  })
                }
              />
            )}
          />
        </>
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.conatct_placeholder}>Send voucher to</Text>
            <InputField
              onBlur={() => {}}
              onChangeText={searchForMerchants}
              placeholder={'Search'}
            />
          </View>
          <FlatList
            data={filterdMerchantList}
            contentContainerStyle={styles.flatlist}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <MerchantsItem
                data={item}
                index={index}
                onPress={() =>
                  navigation.navigate('Voucher', {
                    voucherData: {
                      firstName: data.firstName,
                      lastName: data.lastName,
                      phoneNumber: data.phoneNumber,
                      store: item.lookup_values_1,
                      store_type: item.lookup_values_3,
                    },
                  })
                }
              />
            )}
          />
        </>
      )}
    </Screen>
  )
}

export default MerchantScreen
