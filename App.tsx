import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from './src/routes'
import theme from './src/theme'

import { Loading } from './src/components/Loading'

export default function App() {
  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
