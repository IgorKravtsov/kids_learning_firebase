import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'

import { MenuItem, subjects, unLoggedUserMenuList } from '../../menuItems'
import DrawerListItem from './DrawerListItem'
import { useAuth } from 'shared-files/useAuth'

export interface DrownerListProps {
  toggleFunc: (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => void
}

const DrawerList: React.FC<DrownerListProps> = ({ toggleFunc }): React.ReactElement => {
  const { isAuth } = useAuth()

  return (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      // onClick={e => toggleFunc(false, e)}
      // onKeyDown={e => toggleFunc(false, e)}
    >
      <List>
        {isAuth
          ? subjects.map((item: MenuItem) => <DrawerListItem key={item.id} toggleFunc={toggleFunc} item={item} />)
          : unLoggedUserMenuList.map((item: MenuItem) => <DrawerListItem key={item.id} toggleFunc={toggleFunc} item={item} />)}
      </List>
    </Box>
  )
}

export default DrawerList
