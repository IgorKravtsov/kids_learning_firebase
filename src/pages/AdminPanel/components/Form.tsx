import React, { useState } from 'react'
import { useStyles } from '../adminPanel.styles'

import { UseFormReturn } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import FormInput from 'components/formInput/FormInput'

export interface FormProps {
  formFeatures: UseFormReturn<any, any>

  onSubmit: (data: any) => void
  onError?: (error: any) => void

  isLoading?: boolean
}

const Form: React.FC<FormProps> = ({ formFeatures, onSubmit, onError, isLoading = false }): React.ReactElement => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = formFeatures

  const classes = useStyles()
  const [isShowPass, setIsShowPass] = useState(false)

  watch(['email', 'password', 'confirmPass'])

  return (
    <FormProvider {...formFeatures}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormInput name='email' control={control} errors={errors} label='Пошта адміна' placeholder='Уведіть пошту адміна...' />
        <FormInput
          name='password'
          control={control}
          errors={errors}
          label='Пароль адміна'
          placeholder='Уведіть пароль адміна...'
          className={classes.passwordField}
          type={!isShowPass ? 'password' : 'text'}
        />
        <FormInput
          name='confirmPass'
          control={control}
          errors={errors}
          label='Повторіть пароль адміна'
          placeholder='Підтвердіть пароль адміна...'
          className={classes.passwordField}
          type={!isShowPass ? 'password' : 'text'}
        />

        <FormControlLabel
          control={<Checkbox value={isShowPass} onChange={e => setIsShowPass(e.target.checked)} color='primary' />}
          label={'Показати пароль'}
        />

        <LoadingButton
          loading={isLoading}
          loadingPosition='start'
          type='submit'
          color='primary'
          variant='contained'
          className={classes.btn}
          fullWidth
          endIcon={<SendIcon />}
        >
          Зареєструвати адміна
        </LoadingButton>
      </form>
    </FormProvider>
  )
}

export default Form
