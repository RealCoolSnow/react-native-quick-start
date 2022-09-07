import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

interface ColorsInterface {
  [key: string]: string
}

type StylesType = ViewStyle | TextStyle | ImageStyle

interface StyleSheetInterface {
  [key: string]: StylesType
}

interface ThemesInterface {
  COLORS: ColorsInterface
  CONTAINERS: StyleSheetInterface
}

export type { ColorsInterface, ThemesInterface, StyleSheetInterface }
