import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

import DrawerList from '../drownerList/DrawerList'
import { RouteNames } from '../../routes'
import { useStyles } from './header.styles'
import { useAuth } from '../../shared-files/useAuth'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { logout } from 'redux/slices/userSlice'

const Header: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const { isAuth } = useAuth()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isDrownerVisible, setIsDrownerVisible] = useState(location.pathname === RouteNames.HOME)

  const toggleDrawer = (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => {
    if (e && e.type === 'keydown' && ((e as React.KeyboardEvent).key === 'Tab' || (e as React.KeyboardEvent).key === 'Shift')) return

    setIsDrownerVisible(isOpen)
  }

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    await dispatch(logout())
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }} onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='h6' sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate(RouteNames.HOME)}>
            Навчання
          </Typography>
          {!isAuth ? (
            <ToggleButtonGroup className={classes.registerLoginSection} value={location.pathname} exclusive>
              <ToggleButton onClick={() => navigate(RouteNames.LOGIN)} value={RouteNames.LOGIN}>
                Увійти
              </ToggleButton>
              <ToggleButton onClick={() => navigate(RouteNames.REGISTER)} value={RouteNames.REGISTER}>
                Зареєструватися
              </ToggleButton>
            </ToggleButtonGroup>
          ) : (
            <>
              <div>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
              <Button onClick={handleLogout} color='inherit'>
                Выйти
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <SwipeableDrawer open={isDrownerVisible} onClose={() => toggleDrawer(false)} onOpen={() => toggleDrawer(true)}>
        <DrawerList toggleFunc={toggleDrawer} />
      </SwipeableDrawer>
    </>
  )
}

export default Header
