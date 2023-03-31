import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useTheme } from 'src/hooks/useTheme'
import { Gift } from 'src/utils/shared-types'

import Text from './Text'

type Props = {
  index: number
  data: Gift
}

const RecentGiftsItem: React.FC<Props> = ({ data, index }) => {
  const { colors } = useTheme()

  const colorList = [
    colors.accent,
    colors.secondary,
    colors.primary,
    colors.secondary,
    colors.success,
  ]

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: 8,
      overflow: 'hidden',
      padding: 8,
      height: 180,
      marginVertical: 16,
      marginHorizontal: 8,
      width: 200,
    },
    image: {
      width: 30,
      height: 30,
      backgroundColor: colorList[index % colorList.length],
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text_container: {
      marginTop: 16,
    },
    initials: {
      fontSize: 12,
      color: colors.white,
    },
    name_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {},
    description_container: {},
    describe: {
      fontSize: 12,
      marginTop: 8,
      textDecorationLine: 'underline',
      fontWeight: '700',
    },
    content: {
      color: colors.gray,
    },
    description: {
      color: colors.gray,
    },
  })
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text style={styles.initials}>RG</Text>
      </View>
      <View style={styles.text_container}>
        <View style={styles.name_container}>
          <Text style={styles.name} type={'caption'}>
            Sent to -
          </Text>
          <Text
            type={'caption'}
            style={styles.content}
          >{`${data.firstName} ${data.lastName}`}</Text>
        </View>

        <View style={styles.name_container}>
          <Text style={styles.name} type={'caption'}>
            amount :
          </Text>
          <Text type={'caption'} style={styles.content}>{`KES ${data.amout}`}</Text>
        </View>

        <Text style={styles.describe} type={'caption'}>
          Description
        </Text>
        <Text numberOfLines={2} type={'caption'} style={styles.description}>
          {data.description}
        </Text>
      </View>
    </View>
  )
}

export default RecentGiftsItem
