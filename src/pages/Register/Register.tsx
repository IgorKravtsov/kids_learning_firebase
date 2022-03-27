import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useNavigate } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { RouteNames } from '../../routes'
import { useStyles } from './register.styles'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { register } from 'redux/slices/userSlice'
import Form from './components/Form'

const Register: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = yup.object({
    email: yup.string().email('Це не є правильною поштою').required('Це поле має бути заповнено'),
    password: yup.string().min(6, 'Мінімальне кол-во символів - 6').required('Це поле має бути заповнено'),
    confirmPass: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Це поле має співпадати з полем паролю')
      .required('Це поле є обов`язковим'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onError = (e: any) => {
    console.log('===ERROR===', e)
  }

  const onSubmit = async (data: SubmitData) => {
    const { email, password } = data

    setIsLoading(true)
    const response = await dispatch(register({ email, password }))
    setIsLoading(false)

    if (response?.meta.requestStatus !== 'rejected') {
      navigate(RouteNames.HOME)
    }
  }

  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' className={classes.title}>
            Реєстрація
          </Typography>
        </Grid>
        <Form formFeatures={formFeatures} onSubmit={onSubmit} onError={onError} isLoading={isLoading} />
        {/* <form onSubmit={handleSubmit}>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label='Почта'
            placeholder='Введите почту...'
            fullWidth
            required
            className={classes.emailField}
          />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            label='Пароль'
            placeholder='Введите пароль...'
            type='password'
            fullWidth
            required
            className={classes.passwordField}
          />
          <TextField
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
            label='Подтверждение пароля'
            placeholder='Повторите пароль...'
            type='password'
            fullWidth
            required
            className={classes.passwordField}
          />
          <Button type='submit' color='primary' variant='contained' className={classes.btn} fullWidth>
            Зарегистрироваться
          </Button>
        </form> */}
        {/* <Typography variant='body2' className={classes.forgotPassLabel}>
          <Link to='#'>Забыли пароль?</Link>
        </Typography>
        <Typography variant='body2'>
          {' '}
          Уже есть аккаунт?<Link to={RouteNames.LOGIN}>Войти</Link>
        </Typography> */}
      </Paper>
    </Grid>
  )
}

export default Register
