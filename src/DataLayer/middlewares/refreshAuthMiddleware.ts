import { Middleware } from '@reduxjs/toolkit'
import { Platform } from 'react-native'

import { getDebouncedFunc } from '../..//Shared/getDebouncedFunc'
import { actionAsync } from '../../DataLayer/index.action'

/**
 * @description Function to run refreshAuthMiddleware
 * @import import { getRefreshedAuthAwsCongito } from './middlewares/getRefreshedAuthAwsCongito'
 */
const getRefreshedAuthAwsCongito = (...args: any) => {
  const store = args[0]
  const refresh_token = args[1]
  const { dispatch } = store
  dispatch(
    actionAsync.GET_REFRESHED_USER_AUTH_AWS_COGNITO_ASYNC.REQUEST({
      refresh_token,
    })
  )
}

const debouncedFunc = getDebouncedFunc(getRefreshedAuthAwsCongito, 6000)

/**
 * @description Middleware to refreshAuthMiddleware
 * @import import { refreshAuthMiddleware } from './middlewares/refreshAuthMiddleware'
 */
export const refreshAuthMiddleware: Middleware = store => next => action => {
  // TODO Implement localStorage for ios and android
  if (Platform.OS === 'web' || Platform.OS === 'windows') {
    const refresh_token = localStorage.getItem('refresh_token')
    if (refresh_token) debouncedFunc(store, refresh_token)
  }

  const result = next(action)
  return result
}
