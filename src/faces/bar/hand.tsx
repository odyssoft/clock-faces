import { max, numbers } from '../../constants'
import { Moment } from 'moment'
import React, { useEffect, useState } from 'react'
import Bar from './bar'

import { HandProps } from './types'

const Hand = ({ className, hook, unit }: HandProps) => {
  const moment: Moment = hook()

  const [activeLeft, setActiveLeft] = useState<number>(0)
  const [activeRight, setActiveRight] = useState<number>(0)

  const options = (
    n = `${typeof max[unit] === 'function' ? max[unit]() : max[unit]}`
  ) => ({
    left: numbers.slice(0, parseInt(n[0]) + 1),
    right: numbers,
  })

  useEffect(() => {
    const updated = moment.get(unit)
    setActiveLeft(updated > 9 ? parseInt(`${updated}`.charAt(0)) : 0)
    setActiveRight(parseInt(`${updated}`.charAt(updated > 9 ? 1 : 0)))
  }, [moment, setActiveLeft, setActiveRight])

  return (
    <div className={className}>
      <Bar options={options().left} activeIndex={activeLeft} />
      <Bar options={options().right} activeIndex={activeRight} />
    </div>
  )
}

export default Hand
