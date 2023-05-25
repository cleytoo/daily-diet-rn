import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.greenLight};
`

export const Header = styled(SafeAreaView)`
  padding: 10px 24px;
  align-items: center;
  height: 22%;
`

export const Content = styled.View`
  height: 78%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 24px;
  margin-top: auto;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  gap: 16px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const ResumeValues = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxl}px;
    font-family: ${theme.fontFamily.bold};
    color: ${theme.colors.gray700};
  `}
`

export const ResumeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.gray600};
  `}
`

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
`

export const BackIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'arrow-left',
  color: theme.colors.greenDark,
  size: 32
}))``
