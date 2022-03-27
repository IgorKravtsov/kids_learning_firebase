import React from 'react'

import FormControlLabel from '@mui/material/FormControlLabel'
import { Control, Controller, FieldValues } from 'react-hook-form'

import { CheckboxProps } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

export interface FormCheckboxProps extends Partial<CheckboxProps> {
  control: Control<FieldValues, any>
  label?: string
  name: string
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ control, label = '', name }): React.ReactElement => {
  return (
    <FormControlLabel
      control={<Controller control={control} name={name} render={({ field }) => <Checkbox {...field} color='primary' />} />}
      label={label}
    />
  )
}

export default FormCheckbox
