import React from 'react'
import styles from './home.module.scss'
import Typography from '@mui/material/Typography'
import { useAuth } from 'shared-files/useAuth'

const Home: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuth()
  return (
    <Typography className={styles.text} variant='h3' sx={{ paddingTop: '50px' }}>
      {isAuth ? 'Оберіть ваш навчальний предмет у меню зліва' : 'Спочатку треба увійти у свой акаунт!'}
    </Typography>
  )
}

export default Home
