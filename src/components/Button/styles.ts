import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonVariants = 'primary' | 'secondary'

interface ButtonStyleProps {
  variant: ButtonVariants
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  gap: 10px;

  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.gray600 : theme.colors.white};
`

export const Label = styled.Text<ButtonStyleProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.md}px;
    color: ${variant === 'primary' ? theme.colors.white : theme.colors.gray700};
  `}
`
