import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/ProfileType'

export interface TopBarMainColumnPropsType {
  profile: ProfileType
  mediaParams?: UseMediaQueryResYrlOutType
}

/**
 * @import import { TopBarMainColumnType } from './TopBarMainColumnType'
 */
export interface TopBarMainColumnType
  extends React.FunctionComponent<TopBarMainColumnPropsType> {
  (props: TopBarMainColumnPropsType): React.ReactElement
}
