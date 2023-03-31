import Home from 'src/assets/icons/home.svg'
import Settings from 'src/assets/icons/settings.svg'

const color = (focused: boolean) => (focused ? '#5C22FF' : '#E0E0E0')

export const HomeIcon = (focused: boolean) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Home width={25} height={27} fill={color(focused)} />
)

export const SettingsIcon = (focused: boolean) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Settings width={25} height={27} fill={color(focused)} />
)
