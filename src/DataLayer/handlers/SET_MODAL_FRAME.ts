import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_MODAL_FRAME: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_MODAL_FRAME(data))
}
