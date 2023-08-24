import { StyleSheet } from 'react-native'

export const stylesDefault = StyleSheet.create({
  ChatInput: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '1rem',
    border: '1px solid blue',
  },
  inputButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  InputTextYrl: {},
  inputText: {
    width: '80vw',
    borderRadius: 10,
    paddingRight: '2rem',
  },
  inputTextResize: {
    maxWidth: '80vw',
    maxHeight: '75vh',
    resize: 'both',
  },
  ButtonYrl: {
    position: 'absolute',
    margin: 0,
    padding: '10px',
    right: 20,
  },
  ButtonTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  iconYrlWrapper: {
    position: 'absolute',
    paddingRight: '1rem',
    right: 0,
    top: '0.5rem',
  },
  tooltipsWrapper: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    color: 'red',
  },
  tooltipTitleWrapper: {
    flexDirection: 'row',
    paddingBottom: '0.3rem',
  },
  tooltip_TooltipYrl: {},
  tooltip_container: {
    width: 'auto',
    height: 'auto',
    border: '1px solid red',
    // top: 0,
    // right: 20,
  },
  tooltip_iconTextWrapper: {
    maxHeight: 350,
  },
  tooltip_titleText: {
    marginHorizontal: 20,
  },
  tooltip_tooltipPopover: {
    width: '100%;',
  },
})

const xsDevice = StyleSheet.create({
  ...stylesDefault,
})

const smDevice = StyleSheet.create({
  ...stylesDefault,
})

const mdDevice = StyleSheet.create({
  ...stylesDefault,
})

const lgDevice = StyleSheet.create({
  ...stylesDefault,
  inputText: {
    width: '50vw',
  },
  inputTextResize: {
    maxWidth: '50vw',
    maxHeight: '75vh',
    resize: 'both',
  },
})

const xlDevice = StyleSheet.create({
  ...stylesDefault,
  ...lgDevice,
})

/**
 * @import import { styles } from './PageChatsWholeScreenStyles'
 */
export const styles: Record<string, any> = {
  xsDevice: xsDevice,
  smDevice: smDevice,
  mdDevice: mdDevice,
  lgDevice: lgDevice,
  xlDevice: xlDevice,
}
