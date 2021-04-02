import { RootStore } from '../@types/RootStore'

const rootStoreDefault = {
  userName: 'Вася Пупкин',
  content: [],
  sideNavigationState: false,
  globalVars: {},
}

export const rootReducer: Function = (
  store: RootStore = rootStoreDefault,
  action: any
): any => {
  const { type } = action

  const output = {
    GET_CONTENT_DATA_SUCCESS: () => {
      const { data } = action
      const storeNext = { ...store, content: data }
      return storeNext
    },
    TOGGLE_SIDE_NAVIGATION: () => {
      const { sideNavigationState } = store
      // console.info('rootReducer [11]', { action })
      return { ...store, sideNavigationState: !sideNavigationState }
    },
    GET_GLOBAL_VARS_SUCCESS: () => {
      const { data } = action
      const storeNext = { ...store, globalVars: data }
      return storeNext
    },
  }

  return output[type] ? output[type]() : store
}
