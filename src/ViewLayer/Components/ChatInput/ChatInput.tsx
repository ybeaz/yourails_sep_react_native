import React from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  IconYrl,
  withStoreStateYrl,
  InputTextYrl,
  withPropsYrl,
  mediaParamsDefault,
  withParamsMediaYrl,
} from '../../../YrlNativeViewLibrary'
import { ChatInputType } from './ChatInputType'
import { styles } from './ChatInputStyle'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'

const ChatInputComponent: ChatInputType = props => {
  const { handleEvents, store, mediaParams = mediaParamsDefault } = props

  const {
    profiles,
    globalVars: { idProfileActive },
    forms: { inputChat },
  } = store

  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const profileActive = getProfileByIdProfile(profiles, idProfileActive)

  const propsOut: Record<string, any> = {
    inputTextYrlProps: {
      onChangeText: (text: string) =>
        handleEvents.ON_CHANGE_INPUT_CHAT({}, { idProfileActive, text }),
      onSubmitEditing: () =>
        handleEvents.CLICK_ON_SEND_MESSAGE({}, { profileActive }),
      styleProps: {
        InputTextYrl: style.InputTextYrl,
        inputText: {
          ...style.inputText,
          ...themes.themeA.colors01,
          border: 0,
          outlineWidth: 0,
        },
        inputTextResize: style.inputTextResize,
      },
      testID: 'ChatInput_InputTextYrl',
      multiline: true,
      numberOfLines: 3,
      placeholder: 'Message',
      placeholderTextColor: '#a2acb4',
      value: (idProfileActive && inputChat[idProfileActive]) || '',
    },
    sendButtonYrlProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => handleEvents.CLICK_ON_SEND_MESSAGE({}, { profileActive }),
    },
    sendIconYrlProps: {
      library: 'Ionicons',
      name: 'send',
      styleProps: { IconYrl: { cursor: 'pointer' } },
      size: 24,
      color: themes['themeA'].colors02.color,
      testID: 'TopBarChatCardsComponent_IconYrl_search',
    },
  }

  return (
    <View style={[style.ChatInput]} testID='ChatInput'>
      <View style={[style.inputButton]} testID='ChatInput_inputButton'>
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <View style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
          <ButtonYrl {...propsOut.sendButtonYrlProps}>
            <IconYrl {...propsOut.sendIconYrlProps} />
          </ButtonYrl>
        </View>
      </View>
    </View>
  )
}

export const ChatInput = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(ChatInputComponent))
  )
)
