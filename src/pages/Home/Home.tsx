import React from 'react'
import styles from './home.module.scss'
import Typography from '@mui/material/Typography'
import { useAuth } from 'shared-files/useAuth'

const Home: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuth()
  return (
    <Typography className={styles.text} variant='h3' sx={{ paddingTop: '50px' }}>
      {isAuth ? 'Выберите ваш предмет в меню слева' : 'Сначала нужно войти в свой аккаунт!'}
    </Typography>
  )
}

export default Home
