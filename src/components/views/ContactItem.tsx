import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { useTheme } from 'src/hooks/useTheme'
import { Contact } from 'src/utils/shared-types'

import Text from './Text'

type Props = {
  index: number
  data: Contact
  onPress: () => void
}

const ContactItem: React.FC<Props> = ({ data, index, onPress }) => {
  const { colors } = useTheme()

  const colorList = [
    colors.primary,
    colors.lightGray,
    colors.secondary,
    colors.accent,
    colors.success,
  ]

  const styles = StyleSheet.create({
    container: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    imageContainer: {
      width: 48,
      height: 48,
      borderRadius: 28,
      backgroundColor: colorList[index % colorList.length],
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagePlaceholderText: {
      fontWeight: '700',
      color: colors.white,
    },
    contact_info_container: {
      flex: 1,
      marginStart: 8,
    },
    contact_item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      color: colors.black,
    },
    number: {
      color: colors.subheading,
      fontSize: 14,
    },
    description: {
      fontSize: 10,
      color: colors.caption,
    },
  })

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholderText}>{`${data.firstName
          .charAt(0)
          .toUpperCase()}${data.lastName.charAt(0).toUpperCase()}`}</Text>
      </View>
      <View style={styles.contact_info_container}>
        <View style={styles.contact_item}>
          <Text style={styles.name}>{`${data.firstName} ${data.lastName}`}</Text>
          <Text style={styles.description}> {'-'}</Text>
        </View>
        <View style={styles.contact_item}>
          <Text style={styles.number}>{data.phoneNumbers[0]}</Text>
          <Text style={styles.description}>{'mobile number'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ContactItem
