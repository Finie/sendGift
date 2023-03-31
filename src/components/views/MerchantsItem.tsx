import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Fuel from 'src/assets/icons/fuel.svg'
import Shops from 'src/assets/icons/shops.svg'
import SuperMerket from 'src/assets/icons/supermarket.svg'
import { useTheme } from 'src/hooks/useTheme'
import { Merchant } from 'src/utils/shared-types'

import Text from './Text'

type Props = {
  data: Merchant
  index: number
  onPress: () => void
}

const MerchantsItem: React.FC<Props> = ({ data, index, onPress }) => {
  const { colors } = useTheme()

  const colorList = [
    colors.primary,
    colors.gray,
    colors.secondary,
    colors.accent,
    colors.success,
  ]

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      backgroundColor: colors.white,
      width: 160,
      height: 150,
      borderRadius: 8,
      marginHorizontal: 8,
    },
    container_left: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      backgroundColor: colors.white,
      width: 160,
      height: 150,
      borderRadius: 8,
      marginTop: 16,
    },
    store_name: {
      marginVertical: 4,
      color: colors.black,
    },
    store_type: {
      backgroundColor: colorList[index % colorList.length],
      borderRadius: 8,
      overflow: 'hidden',
      fontSize: 10,
      lineHeight: 14,
      padding: 3,
      color: colors.white,
      fontWeight: '700',
    },
  })
  return (
    <TouchableOpacity
      onPress={onPress}
      style={index % 2 === 1 ? styles.container_left : styles.container}
    >
      {data.lookup_values_3.toLowerCase() === 'fuel' ? (
        <Fuel width={80} height={80} />
      ) : data.lookup_values_3.toLowerCase() === 'supermarkets' ? (
        <SuperMerket width={80} height={80} />
      ) : (
        <Shops width={80} height={80} />
      )}
      <Text numberOfLines={1} type={'caption'} style={styles.store_name}>
        {data.lookup_values_1}
      </Text>
      <Text numberOfLines={1} type={'caption'} style={styles.store_type}>
        {data.lookup_values_3}
      </Text>
    </TouchableOpacity>
  )
}

export default MerchantsItem
