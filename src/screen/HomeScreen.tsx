import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import AnimatedLottieView from 'lottie-react-native'
import React, { useContext } from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'

import Screen from 'src/components/screen/Screen'
import FabActionButton from 'src/components/views/FabActionButton'
import RecentGiftsItem from 'src/components/views/RecentGiftsItem'
import Text from 'src/components/views/Text'

import ProfileIllustration from 'src/assets/icons/profile.svg'
import AppContextProvider from 'src/context/ApplicationContext'
import { useTheme } from 'src/hooks/useTheme'
import { MainStackParamList, TabStackParamList } from 'src/routes/navigation.types'

type ScreesProps = CompositeScreenProps<
  NativeStackScreenProps<TabStackParamList, 'HomeScreen'>,
  NativeStackScreenProps<MainStackParamList, 'Contacts'>
>

const HomeScreen: React.FC<ScreesProps> = ({ navigation }) => {
  const { gifts } = useContext(AppContextProvider)

  const { colors } = useTheme()

  const styles = StyleSheet.create({
    backgroundStyle: {
      flex: 1,
    },
    scrollview: {
      flexGrow: 1,
    },
    sectionContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingHorizontal: 16,
    },
    fab_container: {
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 5,
      marginBottom: 16,
    },
    recent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom_layout: {
      flexDirection: 'row',
    },
    flatlist: {
      paddingHorizontal: 16,
      width: '100%',
    },

    user_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      flex: 1,
      // backgroundColor: colors.white,
      alignItems: 'center',
      marginTop: -16,
    },
    lottie: {
      height: 300,
      width: '100%',
      marginTop: -16,
    },
    welcome_text: {
      fontSize: 20,
      marginStart: 16,
    },
    describe: {
      color: colors.black,
    },
    recent_activity: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      height: 180,
    },
  })

  return (
    <Screen title={''} isBackVisible={false} isNotificationVisible>
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.backgroundStyle}
          contentContainerStyle={styles.scrollview}
        >
          <View>
            <Text style={styles.welcome_text} type={'heading'}>
              Welcome back,
            </Text>
            <AnimatedLottieView
              source={require('src/assets/animations/illustration.json')}
              style={styles.lottie}
              autoPlay
              loop={false}
            />
          </View>
          <View style={styles.user_container}>
            <View>
              <Text type={'subheading'}>John Doe</Text>
              <Text type={'caption'}>John Doe sent you 3 🎁</Text>
            </View>
            <View>
              <ProfileIllustration width={40} height={40} />
            </View>
          </View>

          <View style={styles.recent}>
            <Text>Recent Activities</Text>
            {gifts === undefined ? (
              <View style={styles.recent_activity}>
                <Text>No Recent Activities</Text>
              </View>
            ) : (
              <FlatList
                data={gifts}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flatlist}
                keyExtractor={(item, index) => item.id + index.toString()}
                renderItem={({ item, index }) => (
                  <RecentGiftsItem index={index} data={item} />
                )}
              />
            )}
          </View>
        </ScrollView>

        <View style={styles.fab_container}>
          <FabActionButton
            onPress={() => {
              navigation.navigate('Contacts')
            }}
          />
        </View>
      </>
    </Screen>
  )
}

export default HomeScreen
