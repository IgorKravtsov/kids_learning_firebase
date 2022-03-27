import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { RouteNames } from '../../routes'
import { useStyles } from './register.styles'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { register } from 'redux/slices/userSlice'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectUser } from 'redux/slices/userSlice'
import { useEffect } from 'react'

const Register: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { user } = useAppSelector(selectUser)

  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('superletsplay7@gmail.com')
  const [password, setPassword] = useState('111111')
  const [confirmPass, setConfirmPass] = useState('111111')
  const [visible, setVisible] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPass) return

    setVisible(true)
    const response = await dispatch(register({ email, password }))
    console.log(response)
    setVisible(false)
  }

  useEffect(() => {
    console.log('===user===', user)
  }, [user])

  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>Зарегистрироваться</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            label='Почта'
            placeholder='Введите почту...'
            fullWidth
            required
            className={classes.emailField}
            // style={{ marginTop: '10px' }}
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
        </form>
        <Typography variant='body2' className={classes.forgotPassLabel}>
          <Link to='#'>Забыли пароль?</Link>
        </Typography>
        <Typography variant='body2'>
          {' '}
          Уже есть аккаунт?<Link to={RouteNames.LOGIN}>Войти</Link>
        </Typography>
      </Paper>
      {visible && <h1>Пошла загрузка...</h1>}
    </Grid>
  )
}

export default Register
