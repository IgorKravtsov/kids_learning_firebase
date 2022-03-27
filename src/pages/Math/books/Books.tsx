import React from 'react'
import styles from './books.module.scss'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import math2Form from './img/math-2.jpg'

const MathBooks: React.FC = (): React.ReactElement => {
  return (
    <Stack spacing={2} className={styles.accordion}>
      <Grid item xs={6}>
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDownIcon />}>
            <Typography variant='h4'>2 класс</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Avatar sx={{ width: 300, height: 300 }} alt='математика 2 класс Скворцова, Оноприенко' src={math2Form} />
            {/* <p className={styles.img_container}>
              <img className={styles.img} src={math2Form} alt='математика 2 класс Скворцова, Оноприенко' />
            </p> */}
            <a href='https://uchebniki-online.net/1023-matematika-2-klass-skvorcova-onoprienko.html' target='_blank'>
              Математика 2 клас Скворцова, Оноприенко
            </a>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Stack>
  )
}

export default MathBooks
