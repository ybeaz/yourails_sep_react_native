import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_AUTH_FACEBOOK = (event: any, data: any): void => {
  dispatch(actionSync.SET_OAUTH_STAGE('signInWithFacebook'))

  const data2 = [
    {
      childName: 'AuthUser',
      isActive: true,
      childProps: { scenario: { branch: 'signInWithFacebook', step: '' } },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
