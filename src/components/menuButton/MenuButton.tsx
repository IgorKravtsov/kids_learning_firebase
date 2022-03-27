import React, { PropsWithChildren, useState } from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { ButtonBaseProps } from '@mui/material'

export interface ToggleButtonProps<T> extends ButtonBaseProps {
  options: T[]
  setCurrentOption: (str: T) => void
  onClick: () => void
}

function MenuButton<T>({
  options,
  onClick,
  setCurrentOption,
  style,
  children,
  className,
}: PropsWithChildren<ToggleButtonProps<T>>): React.ReactElement {
  // { options, onClick, setCurrentOption, style, children, className }
  const [open, setOpen] = useState(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleMenuItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, option: T, index: number) => {
    setSelectedIndex(index)
    setCurrentOption(option)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (e: Event) => {
    if (anchorRef.current && anchorRef.current.contains(e.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <ButtonGroup style={style} variant='contained' ref={anchorRef} aria-label='split button' className={className}>
        {/* <Button onClick={onClick}>примеры 2 класс ({options[selectedIndex]})</Button> */}
        <Button onClick={onClick}>{children}</Button>
        <Button
          size='small'
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='select type of exccercises'
          aria-haspopup='menu'
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu'>
                  {options.map((option, index) => (
                    <MenuItem key={index} selected={index === selectedIndex} onClick={e => handleMenuItemClick(e, option, index)}>
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default MenuButton
