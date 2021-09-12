import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_AUTH_SIGN_IN_UP_BACK = (event: any, data: any): void => {
  dispatch(actionSync.SET_OAUTH_STAGE('signInManually'))

  const data2 = [
    {
      childName: 'AuthUser',
      isActive: true,
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
