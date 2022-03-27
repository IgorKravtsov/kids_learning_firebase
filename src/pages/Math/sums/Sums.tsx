import React, { useEffect, useState } from 'react'
import styles from './sums.module.scss'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import MenuButton from '../../../components/menuButton/MenuButton'
import { MathSums } from '../types/math.interface'
import { useSumsStyles } from './sums.styles'

import { createPlusExamples } from './utils/plus'
import { createMinusExamples } from './utils/minus'
import { createMultipleExamples } from './utils/multiple'
import { createDivideExamples } from './utils/divide'
import { LocalStorageKey } from '../../../localStorageKey'
import { ExampleType } from '../types/exampleTypes.enum'
import { shuffleArray } from './utils/common'

const mathOperations: ExampleType[] = [ExampleType.Plus, ExampleType.Minus, ExampleType.Multiple, ExampleType.Divide, ExampleType.All]
const mathOperations2Form: ExampleType[] = [ExampleType.Plus, ExampleType.Minus, ExampleType.All]
const exampleCount = 32

const Sums: React.FC = (): React.ReactElement => {
  const classes = useSumsStyles()
  const [sums, setSums] = useState<MathSums[]>([])

  const [currSumsType2Form, setCurrSumsType2Form] = useState<ExampleType>(ExampleType.All)
  const [currSumsType4Form, setCurrSumsType4Form] = useState<ExampleType>(ExampleType.All)

  const [depth2Form, setDepth2Form] = useState(2)
  const [depth4Form, setDepth4Form] = useState(2)

  const [nowFormDepth, setNowFormDepth] = useState<number>(0)
  const [isAnswersVisible, setIsAnswersVisible] = useState(false)

  const createExamplesByType = (depth = 2, maxNumber = 99, type = ExampleType.Plus): MathSums => {
    switch (type) {
      case ExampleType.Plus:
        return createPlusExamples(depth, maxNumber)

      case ExampleType.Minus:
        return createMinusExamples(depth, maxNumber)

      case ExampleType.Multiple:
        return createMultipleExamples(depth, maxNumber)

      case ExampleType.Divide:
        return createDivideExamples(depth, maxNumber)

      default:
        return '' as any
    }
  }

  const saveToLocalStorage = (sums: MathSums[], depth: number) => {
    localStorage.setItem(LocalStorageKey.SUMS, JSON.stringify(sums))
    localStorage.setItem(LocalStorageKey.DEPTH, depth.toString())
  }

  const createExamples = (depth = 2, maxNumber = 99, type = ExampleType.Plus, form: number) => {
    if (depth < 2) depth = 2
    else if (depth > 10) depth = 10

    const res: MathSums[] = []
    const operationsLength = form === 4 ? mathOperations.length : mathOperations2Form.length
    let nowExampleTypeIndex = 0

    for (let i = 0; i < exampleCount; i++) {
      if (type === ExampleType.All) {
        const tmpType = form === 4 ? mathOperations[nowExampleTypeIndex++] : mathOperations2Form[nowExampleTypeIndex++]
        res.push(createExamplesByType(depth, maxNumber, tmpType))
        if (nowExampleTypeIndex === operationsLength - 1) {
          nowExampleTypeIndex = 0
        }
      } else {
        res.push(createExamplesByType(depth, maxNumber, type))
      }
    }
    setSums(shuffleArray(res))
  }

  const showAnswers = () => {
    if (!isAnswersVisible) {
      const answer = prompt('Введите пароль...', '123')
      if (answer === 'qwerty123') {
        setIsAnswersVisible(prevState => !prevState)
      } else {
        alert('МЕНЯ НЕ ОБМАНЕШЬ! 🤬')
      }
    } else {
      setIsAnswersVisible(false)
    }
  }

  const passed = () => {
    if (prompt('Вы уверены', 'Да')?.toLowerCase() === 'да') {
      localStorage.removeItem(LocalStorageKey.SUMS)
    }
  }

  const handleClick2Form = () => {
    if (sums.length > 0) {
      if (prompt('Вы уверены, что хотите поменять примеры (Ответьте "да" или "нет")', 'Да')?.toLowerCase() !== 'да') {
        return
      }
    }
    setNowFormDepth(depth2Form)
    createExamples(depth2Form, 50, currSumsType2Form, 2)
    setIsAnswersVisible(false)
  }

  const handleClick4Form = () => {
    if (sums.length > 0) {
      if (prompt('Вы уверены, что хотите поменять примеры (Ответьте "да" или "нет")', 'Да')?.toLowerCase() !== 'да') {
        return
      }
    }
    setNowFormDepth(depth4Form)
    createExamples(depth4Form, 999, currSumsType4Form, 4)
    setIsAnswersVisible(false)
  }

  useEffect(() => {
    const sumsFromLocalStorage = localStorage.getItem(LocalStorageKey.SUMS)
    const parsedSums: MathSums[] = sumsFromLocalStorage && JSON.parse(sumsFromLocalStorage)
    parsedSums && setSums(parsedSums)

    const depth = localStorage.getItem(LocalStorageKey.DEPTH)
    depth && setNowFormDepth(+depth)
  }, [])

  useEffect(() => {
    saveToLocalStorage(sums, nowFormDepth)
  }, [sums, nowFormDepth])

  return (
    <Container>
      <Grid container alignItems='center' className={styles.btn_container}>
        <Grid item xs={6}>
          <MenuButton onClick={handleClick2Form} options={mathOperations2Form} setCurrentOption={setCurrSumsType2Form}>
            Примеры 2 класс ({currSumsType2Form})
          </MenuButton>

          <Grid item xs={8} className={classes.depthLevel}>
            <TextField
              id='outlined-number'
              label='Кол-во чисел'
              type='number'
              InputProps={{ inputProps: { min: 2, max: 10 } }}
              InputLabelProps={{
                shrink: true,
              }}
              variant='standard'
              value={depth2Form}
              onChange={e => setDepth2Form(+e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <MenuButton onClick={handleClick4Form} options={mathOperations} setCurrentOption={setCurrSumsType4Form} className={classes.menuButton}>
            Примеры 4 класс ({currSumsType4Form})
          </MenuButton>

          <Grid item xs={8} className={classes.depthLevel}>
            <TextField
              id='outlined-number'
              label='Кол-во чисел'
              type='number'
              InputProps={{ inputProps: { min: 2, max: 10 } }}
              InputLabelProps={{
                shrink: true,
              }}
              variant='standard'
              value={depth4Form}
              onChange={e => setDepth4Form(+e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container className={classes.sumsContainer}>
          {sums.map((sum, i) => (
            <Grid key={sum.example} item xs={(isAnswersVisible ? 5 : 3) + nowFormDepth}>
              <Typography key={sum.example} className={classes.sum}>
                {i + 1}) {sum.example}={isAnswersVisible && <span className={classes.answer}>{sum.answer}</span>}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {sums.length > 0 && (
          <div style={{ marginLeft: 'auto', marginBottom: '15px' }}>
            <Button color='warning' variant='contained' onClick={showAnswers} className={classes.showAnswersBtn}>
              {isAnswersVisible ? 'Скрыть ответы' : 'Показать ответы'}
            </Button>
            <Button color='success' variant='contained' onClick={passed} style={{ marginLeft: '10px' }} className={classes.showAnswersBtn}>
              {'Пройдено'}
            </Button>
          </div>
        )}
      </Grid>
    </Container>
  )
}

export default Sums
