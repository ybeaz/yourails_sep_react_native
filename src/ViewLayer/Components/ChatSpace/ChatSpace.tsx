import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

import { LOCALE, DATE_FORMAT } from '../../../Constants/locale.const'
import { ChatSpaceType } from './ChatSpaceType'
import { ChatSpaceStyle as style } from './ChatSpaceStyle'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { Message } from '../../Components/Message/Message'
import { ModalFrameYrl } from '../../../ViewLibrary/ModalFrameYrl/ModalFrameYrl'
import { themes } from '../../Styles/themes'
import { messages } from '../../../Constants/messagesMock'
import { users } from '../../../Constants/usersMock'

/**
 * @import import { ChatSpace } from '../Components/ChatSpace/ChatSpace'
 */
const ChatSpaceComponent: ChatSpaceType = props => {
  const { styleProps = { ChatSpace: {} }, users, messages } = props

  const userFound = users.find(user => user.id === messages[0].idUser)
  const user = userFound ? userFound : users[0]

  const propsOut = {
    messageProps: {
      ...messages[0],
      user,
      isMessageTailed: true,
    },
    ChatCardProps: {
      user: users[0],
    },
    modalFrameYrl: {
      styleProps: {
        ModalFrameYrl: {
          backgroundColor: themes['themeA'].colors03.backgroundColor,
        },
        content: {},
      },
      isShow: false,
      testID: 'PageChatsWholeScreen_modalFrameYrl',
    },
  }

  const createdAt = messages[0].createdAt
  const dateString = dayjs(createdAt).locale(LOCALE).format(DATE_FORMAT)

  return (
    <View
      style={[style.ChatSpace, themes['themeA'].colors03]}
      testID='chatSpace'
    >
      <View style={style.date} testID='date'>
        <Text style={style.dateText} testID='dateText'>
          {dateString}
        </Text>
      </View>
      <View style={style.messages} testID='messages'>
        <Message {...propsOut.messageProps} />
        <Message {...propsOut.messageProps} />
      </View>
      <View style={style.chatInput} testID='chatInput'>
        <ChatInput />
      </View>
      <ModalFrameYrl {...propsOut.modalFrameYrl} />
    </View>
  )
}

export const ChatSpace = React.memo(ChatSpaceComponent)
