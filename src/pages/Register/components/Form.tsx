import React from 'react'
import { useStyles } from '../register.styles'

import { UseFormReturn } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'

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

  watch(['email', 'password', 'confirmPass'])

  return (
    <FormProvider {...formFeatures}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormInput name='email' control={control} errors={errors} label='Пошта' placeholder='Уведіть пошту...' />
        <FormInput
          name='password'
          control={control}
          errors={errors}
          label='Пароль'
          placeholder='Уведіть пароль...'
          className={classes.passwordField}
          type={'password'}
        />
        <FormInput
          name='confirmPass'
          control={control}
          errors={errors}
          label='Повторіть пароль'
          placeholder='Підтвердіть пароль...'
          className={classes.passwordField}
          type={'password'}
        />

        {/* <FormCheckbox control={control} label={'Запомнить меня'} /> */}

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
          Зареєструватися
        </LoadingButton>
      </form>
    </FormProvider>
  )
}

export default Form
