import { useContext } from 'react'

import { ThemeContext } from 'src/context/ThemeContextProvider'

export const useTheme = () => useContext(ThemeContext)
