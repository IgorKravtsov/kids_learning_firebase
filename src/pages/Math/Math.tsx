import React, { useMemo } from 'react'
import styles from './math.module.scss'

import { Link, Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import { MenuItem, subjects } from '../../subjects'

const Math: React.FC = (): React.ReactElement => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const mathMenuItems = useMemo(() => subjects.find((subject: MenuItem) => subject.name === 'Математика')?.items, [subjects])

  return (
    <Container>
      <Tabs value={value} onChange={handleChange} aria-label='math menu' className={styles.tabs}>
        {mathMenuItems &&
          mathMenuItems.map(({ name, icon, id, link }: MenuItem) => <Tab key={id} label={name} component={Link} to={link} icon={icon} />)}
      </Tabs>

      <Outlet />
    </Container>
  )
}

export default Math
