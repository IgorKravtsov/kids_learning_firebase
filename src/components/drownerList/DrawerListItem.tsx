import React from 'react'
import { Link } from 'react-router-dom'

import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import List from '@mui/material/List'

import { MenuItem } from 'menuItems'
import { useStyles } from './drawerList.styles'

export interface DrawerListItemProps {
  item: MenuItem
  toggleFunc: (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => void
}

const DrawerListItem: React.FC<DrawerListItemProps> = ({ item, toggleFunc }): React.ReactElement => {
  const { name, icon, link, items } = item
  const classes = useStyles()

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDownIcon />} sx={{ border: 'none' }}>
        <ListItem button component={'li'}>
          <Link to={link} className={classes.link}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </Link>
        </ListItem>
      </AccordionSummary>

      {items && items?.length > 0 && (
        <AccordionDetails>
          <List>
            {items?.map(({ name, icon, link, id }: MenuItem) => (
              <ListItem button component={'li'} key={id} onClick={() => toggleFunc(false)}>
                <Link to={link} className={classes.link}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </Link>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      )}
    </Accordion>
  )
}

export default DrawerListItem
