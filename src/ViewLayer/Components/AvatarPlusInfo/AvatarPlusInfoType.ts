import { ReactElement } from 'react'
import { ProfileType } from '../../../@types/ProfileType'

export interface AvatarPlusInfoPropsType {
  styleProps?: {
    AvatarPlusInfo?: any
    viewStyle?: any
  }
  onPress: () => any
  profile: ProfileType
  children: ReactElement
}

/**
 * @import import { AvatarPlusInfoType } from './AvatarPlusInfoType'
 */
export interface AvatarPlusInfoType
  extends React.FunctionComponent<AvatarPlusInfoPropsType> {
  (props: AvatarPlusInfoPropsType): React.ReactElement
}
