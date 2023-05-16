import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
  mediaParamsDefault,
  withStoreStateYrl,
} from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/ProfileType'
import { ChatCardsType } from './ChatCardsTypes'
import { styles } from './ChatCardsStyles'
import { ChatCard } from '../../Components/ChatCard/ChatCard'

/**
 * @import import { ChatCards } from '../Components/ChatCards/ChatCards'
 */
const ChatCardsComponent: ChatCardsType = props => {
  const {
    styleProps = { ChatCards: {} },
    mediaParams = mediaParamsDefault,
    idProfileActive,
    profiles,
    urlParam1,
    urlParam2,
    query,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const getChatCards = (profilesIn: ProfileType[]): ReactElement[] => {
    return profilesIn.map((profile: ProfileType, index: number) => {
      const propsOut: Record<string, any> = {
        chatCardProps: {
          key: `chatCard-${index}`,
          profile,
          isActive: profile.idProfile === idProfileActive,
          urlParam1,
          urlParam2,
          query,
        },
      }
      return <ChatCard {...propsOut.chatCardProps} />
    })
  }

  const propsOut: Record<string, any> = {}

  return (
    <View style={[style.ChatCards, styleProps.ChatCards]} testID='ChatCards'>
      {getChatCards(profiles)}
    </View>
  )
}

export const ChatCards = React.memo(withStoreStateYrl(ChatCardsComponent))
