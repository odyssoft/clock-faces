import moment from 'moment'

import { useDay, useHour, useMinute, useSecond } from 'hooks/useMoment'

export interface HandProps {
  className: string
  hook: typeof useDay | typeof useHour | typeof useMinute | typeof useSecond
  unit: moment.unitOfTime.All
}
