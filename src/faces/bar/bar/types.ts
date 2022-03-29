import { Theme } from 'theme'

export interface BarProps {
  options: Array<number>
  activeIndex?: number
}

export interface BarTheme extends Theme {
  activeIndex: number
}
