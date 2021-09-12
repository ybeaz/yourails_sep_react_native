import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_SIGN_UP = (event: any, data: any): void => {
  const data2 = [
    {
      childName: 'AuthUser',
      isActive: true,
      childProps: { scenario: { branch: 'signUpManually', step: '' } },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
