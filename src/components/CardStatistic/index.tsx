import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

export const CardStatistic = (props: TouchableOpacityProps) => {
  return (
    <S.Container activeOpacity={0.4} {...props}>
      <S.ResumeValues>90,86%</S.ResumeValues>
      <S.ResumeText>das refeições dentro da dieta</S.ResumeText>

      <S.Icon />
    </S.Container>
  )
}
