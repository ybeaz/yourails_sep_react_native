import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const ONCHANGE_PASSWORD_AUTH = (event: any, data: any): void => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_PASSWORD_AUTH(value))
}
