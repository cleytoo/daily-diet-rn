import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 102px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.greenLight};
  position: relative;
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

export const Icon = styled(Feather).attrs(({ theme }) => ({
  name: 'arrow-up-right',
  color: theme.colors.greenDark,
  size: 32
}))`
  position: absolute;
  top: 8px;
  right: 16px;
`
