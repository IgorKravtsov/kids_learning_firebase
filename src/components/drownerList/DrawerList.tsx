import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'

import { MenuItem, subjects, unLoggedUserMenuList, adminAdditionalMenuItems } from '../../menuItems'
import DrawerListItem from './DrawerListItem'
import { useAuth } from 'shared-files/useAuth'

export interface DrownerListProps {
  toggleFunc: (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => void
}

const DrawerList: React.FC<DrownerListProps> = ({ toggleFunc }): React.ReactElement => {
  const { isAuth, isAdmin, user } = useAuth()

  console.log('=user=', user)

  return (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        {isAuth
          ? subjects.map((item: MenuItem) => <DrawerListItem key={item.id} toggleFunc={toggleFunc} item={item} />)
          : unLoggedUserMenuList.map((item: MenuItem) => <DrawerListItem key={item.id} toggleFunc={toggleFunc} item={item} />)}
        {isAdmin && (
          <>
            <Divider />
            {adminAdditionalMenuItems.map(item => (
              <DrawerListItem key={item.id} toggleFunc={toggleFunc} item={item} />
            ))}
          </>
        )}
      </List>
    </Box>
  )
}

export default DrawerList
