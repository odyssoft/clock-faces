import Input from 'components/input'
import React from 'react'

const Settings = () => {
  return (
    <>
      <Input label={'Line Height'} type={'number'} max={10} min={0} />
      <Input label={'Inner Margin'} type={'number'} />
      <Input label={'Outer Margin'} type={'number'} />
      <Input label={'Font Size'} type={'number'} />
      <Input label={'Active Font Size'} type={'number'} />
      <Input label={'Font Weight'} type={'number'} />
    </>
  )
}

export default Settings
