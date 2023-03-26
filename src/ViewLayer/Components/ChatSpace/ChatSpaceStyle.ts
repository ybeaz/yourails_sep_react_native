import { StyleSheet } from 'react-native'
import { styleGlobal } from '../../Styles/styleGlobal'

export const ChatSpaceStyle = StyleSheet.create({
  ChatSpace: {
    ...styleGlobal.typography,
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  date: {
    alignItems: 'center',
    padding: '1rem',
  },
  dateText: {
    width: 'fit-content',
  },
  messages: {
    padding: '1rem',
  },
  chatInput: {},
})
