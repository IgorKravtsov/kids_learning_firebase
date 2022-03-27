import React from 'react'
import styles from './home.module.scss'
import Typography from '@mui/material/Typography'

const Home: React.FC = (): React.ReactElement => {
  return (
    <Typography className={styles.text} variant='h3' sx={{ paddingTop: '50px' }}>
      Выберите ваш предмет в меню слева
    </Typography>
  )
}

export default Home
