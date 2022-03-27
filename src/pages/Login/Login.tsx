import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { RouteNames } from '../../routes'
import { useStyles } from './login.styles'
import { useState } from 'react'
import { login } from 'redux/slices/userSlice'
import { useAppDispatch } from 'redux/hooks/typedHooks'

const Login: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('superletsplay7@gmail.com')
  const [password, setPassword] = useState('111111')
  const [remmemberMe, setRemmemberMe] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await dispatch(login({ email, password }))
    if (res?.meta.requestStatus !== 'rejected') {
      navigate(RouteNames.HOME)
    }
  }

  return (
    <>
      <Paper elevation={10} className={classes.paper}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' className={classes.title}>
            Войти
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField value={email} onChange={e => setEmail(e.target.value)} label='Почта' placeholder='Введите почту...' fullWidth required />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            label='Пароль'
            placeholder='Введите пароль...'
            type='password'
            fullWidth
            required
            className={classes.password}
          />
          <FormControlLabel
            control={<Checkbox value={remmemberMe} onChange={e => setRemmemberMe(e.target.checked)} name='remmemberMe' color='primary' />}
            label='Запомнить меня'
          />
          <Button type='submit' color='primary' variant='contained' className={classes.btn} fullWidth>
            Войти
          </Button>
        </form>
        <Typography variant='body2' className={classes.forgotPass}>
          <Link to='#'>Забыли пароль?</Link>
        </Typography>
        <Typography variant='body2'>
          {' '}
          Еще нет аккаунта?<Link to={RouteNames.REGISTER}>Зарегистрироваться</Link>
        </Typography>
      </Paper>
    </>
  )
}

export default Login
