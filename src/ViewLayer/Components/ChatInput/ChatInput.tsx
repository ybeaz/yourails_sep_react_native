import React from 'react'
import { View } from 'react-native'
import { Text as TextRrneui } from '@rneui/themed'

import {
  ButtonYrl,
  IconYrl,
  withStoreStateYrl,
  InputTextYrl,
  withPropsYrl,
  mediaParamsDefault,
  withParamsMediaYrl,
  TooltipYrl,
} from '../../../YrlNativeViewLibrary'
import {
  ChatInputType,
  ChatInputPropsOutM1Type,
  ChatInputPropsOutType,
} from './ChatInputType'
import { PromptExamples } from '../PromptExamples/PromptExamples'
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

  const propsOutM1: ChatInputPropsOutM1Type = {
    tooltipTitleWrapperProps: {
      style: [style.tooltipTitleWrapper],
      testID: 'tooltipTitleWrapper',
    },
    tooltipPopoverIconProps: {
      library: 'Ionicons',
      name: 'pencil-outline',
      styleProps: {
        IconYrl: {
          cursor: 'pointer',
          paddingRight: '0.25rem',
        },
      },
      size: 16,
      color: themes['themeA'].colors02.color,
      testID: 'tooltip_IconYrl',
    },
    promptExamplesProps: {
      styleProps: {},
      promptExamples: profileActive?.promptExamples,
    },
  }

  const tooltipTitlePromptExamples = profileActive?.promptExamples?.length ? (
    <View {...propsOutM1.tooltipTitleWrapperProps}>
      <IconYrl {...propsOutM1.tooltipPopoverIconProps} />
      <TextRrneui
        style={[style.titleText, { color: themes['themeA'].colors08.color }]}
        testID='tooltipTitle'
      >
        Prompt Examples
      </TextRrneui>
    </View>
  ) : null

  const propsOut: ChatInputPropsOutType = {
    // const propsOut: Record<string, any> = {
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
      testID: 'chatInput_IconYrl_search',
    },
    tooltipPromptExamples: {
      backgroundColor: themes['themeA'].colors09.backgroundColor,
      children: <PromptExamples {...propsOutM1.promptExamplesProps} />,
      styleProps: {
        TooltipYrl: style.tooltip_TooltipYrl,
        iconTextWrapper: style.tooltip_iconTextWrapper,
        titleText: [
          style.tooltip_titleText,
          { color: themes['themeA'].colors08.color },
        ],
        containerStyle: style.tooltip_container,
        TooltipPopoverYrl: style.tooltip_tooltipPopover,
      },
      testID: `tooltipPromptExample`,
      titleText: tooltipTitlePromptExamples,
    },
  }

  return (
    <View style={[style.ChatInput]} testID='ChatInput'>
      <View style={[style.tooltipsWrapper]} testID='tooltipsWrapper'>
        <TooltipYrl {...propsOut.tooltipPromptExamples} />
      </View>
      <View style={[style.inputButton]} testID='inputButton'>
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
