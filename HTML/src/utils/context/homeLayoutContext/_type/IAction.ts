import {type ILocalizationSecondKeys} from '@/locale/translations/en_US'

export enum EHomeLayoutAction {
  AddSection = 'Add',
  UpdateScrollPos = 'Update',
  RemoveSection = 'Remove',
  Check = 'Check',
  UnCheck = 'Uncheck',
}

interface IHomeLayoutActionAddSection {
  type: EHomeLayoutAction.AddSection
  name: ILocalizationSecondKeys<'sections'>
  scroll: number
}

interface IHomeLayoutActionUpdateScrollPos {
  type: EHomeLayoutAction.UpdateScrollPos
  name: ILocalizationSecondKeys<'sections'>
  scroll: number
}

interface IHomeLayoutActionRemoveSection {
  type: EHomeLayoutAction.RemoveSection
  name: ILocalizationSecondKeys<'sections'>
}

interface IHomeLayoutActionCheck {
  type: EHomeLayoutAction.Check
  name: ILocalizationSecondKeys<'sections'>
}

interface IHomeLayoutActionUnCheck {
  type: EHomeLayoutAction.UnCheck
  name: ILocalizationSecondKeys<'sections'>
}

type IHomeLayoutAction =
  | IHomeLayoutActionAddSection
  | IHomeLayoutActionUpdateScrollPos
  | IHomeLayoutActionRemoveSection
  | IHomeLayoutActionCheck
  | IHomeLayoutActionUnCheck

export default IHomeLayoutAction
