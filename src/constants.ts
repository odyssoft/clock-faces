import moment from 'moment'

export const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const max: {
  [key: string]: any
} = {
  seconds: 60,
  minutes: 60,
  hours: 24,
  twelveHours: 12,
  days: (): number => moment().daysInMonth(),
  weeks: 52,
  months: 12,
}
