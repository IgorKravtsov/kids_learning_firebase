import MathIcon from '@mui/icons-material/FunctionsTwoTone'
import RussianIcon from '@mui/icons-material/TextDecreaseTwoTone'
import UkrainianIcon from '@mui/icons-material/AbcTwoTone'
import ArtIcon from '@mui/icons-material/PhotoAlbum'
import BookIcon from '@mui/icons-material/Book'
import SumsIcon from '@mui/icons-material/Calculate'
import { BookRoutes, MathRoutes, RouteNames } from './routes'

export type MenuItem = {
  id: string
  name: string
  icon: React.ReactElement
  link: string
  items?: MenuItem[]
}

export const subjects: MenuItem[] = [
  {
    id: Math.random().toString(36).substring(2, 7),
    name: 'Математика',
    icon: <MathIcon />,
    link: RouteNames.MATH,
    items: [
      { id: Math.random().toString(36).substring(2, 7), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.MATH },
      { id: Math.random().toString(36).substring(2, 7), name: 'Примеры', icon: <SumsIcon />, link: MathRoutes.SUMS },
    ],
  },
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: 'Українська мова',
    icon: <UkrainianIcon />,
    link: RouteNames.UKRAINIAN,
    items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.UKRAINIAN }],
  },
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: 'Російська мова',
    icon: <RussianIcon />,
    link: RouteNames.RUSSIAN,
    items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.RUSSIAN }],
  },
  {
    id: Math.random().toString(36).substring(2, 7).toString(),
    name: 'Малювання',
    icon: <ArtIcon />,
    link: RouteNames.ART,
    items: [{ id: Math.random().toString(36).substring(2, 7).toString(), name: 'Учебники', icon: <BookIcon />, link: BookRoutes.ART }],
  },
]
