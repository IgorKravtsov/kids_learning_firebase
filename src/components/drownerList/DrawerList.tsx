import React, { useEffect } from 'react'
import styles from './drowlerList.module.scss'

import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

import { MenuItem, subjects } from '../../subjects'

export interface DrownerListProps {
  toggleFunc: (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => void
}

const DrawerList: React.FC<DrownerListProps> = ({ toggleFunc }): React.ReactElement => {
  return (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      // onClick={e => toggleFunc(false, e)}
      // onKeyDown={e => toggleFunc(false, e)}
    >
      <List>
        {subjects.map(({ name, icon, link, items, id }: MenuItem) => (
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDownIcon />} sx={{ border: 'none' }}>
              <ListItem button component={'li'} key={id}>
                <Link to={link} className={styles.link}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </Link>
              </ListItem>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                {items?.map(({ name, icon, link, id }: MenuItem) => (
                  <ListItem button component={'li'} key={id} onClick={() => toggleFunc(false)}>
                    <Link to={link} className={styles.link}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </Box>
  )
}

export default DrawerList
