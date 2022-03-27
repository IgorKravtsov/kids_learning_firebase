import React from 'react'
import styles from './error.module.scss'

const Error: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <p className={styles.img_container}>
        <img className={styles.img} src={process.env.PUBLIC_URL + '/error.gif'} alt='error' />
      </p>
    </div>
  )
}

export default Error
