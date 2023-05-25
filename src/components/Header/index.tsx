import * as S from './styles'

import Logo from '../../../assets/logo.svg'
import { useTheme } from 'styled-components/native'

export const Header = () => {
  const { colors } = useTheme()

  return (
    <S.Container>
      <Logo />
      <S.Avatar
        style={{
          borderWidth: 2,
          borderColor: colors.gray600,
          borderRadius: 20
        }}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/38632474?v=4'
        }}
      />
    </S.Container>
  )
}
