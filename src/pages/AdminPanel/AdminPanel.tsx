import React, { useState } from 'react'
import { useStyles } from './adminPanel.styles'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Form from './components/Form'
import { registerAdmin } from 'api/user/user'
import { useAuth } from 'shared-files/useAuth'

const AdminPanel: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuth()

  // const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = yup.object({
    email: yup.string().email('Це не є правильною поштою').required('Це поле має бути заповнено'),
    password: yup.string().min(6, 'Мінімальне кол-во символів - 6').required('Це поле має бути заповнено'),
    confirmPass: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Це поле має співпадати з полем паролю')
      .required('Це поле є обов`язковим'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onError = (e: any) => {
    console.log('===ERROR===', e)
  }

  const onSubmit = async (data: SubmitData) => {
    const { email, password } = data
    console.log('НЕ ПРАЦЮЄ ЩЕ!!!')

    if (!user) return

    setIsLoading(true)
    // const response = await registerAdmin(email, password, user)
    setIsLoading(false)

    // if (response?.meta.requestStatus !== 'rejected') {
    //   navigate(RouteNames.HOME)
    // }
  }

  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' className={classes.title}>
            Реєстрація адміна
          </Typography>
        </Grid>
        <Form formFeatures={formFeatures} onSubmit={onSubmit} onError={onError} isLoading={isLoading} />
      </Paper>
    </Grid>
  )
}

export default AdminPanel
