import styled, { css } from 'styled-components/native'

export type CardTypes = 'neutral' | 'positive' | 'negative'

interface CardStyleProps {
  type: CardTypes
}

export const Container = styled.View<CardStyleProps>`
  ${({ theme, type }) => css`
    background-color: ${type === 'neutral'
      ? theme.colors.gray200
      : type === 'positive'
      ? theme.colors.greenLight
      : theme.colors.redLight};
    border-radius: 8px;
    height: 100px;
    min-width: 48%;
    justify-content: center;
    align-items: center;
  `}
`

export const Amount = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.gray700};
`

interface DescriptionStyleProps {
  brokenLine?: boolean
}

export const Description = styled.Text<DescriptionStyleProps>`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.gray600};
  width: ${({ brokenLine }) => (brokenLine ? '80%' : '100%')};
  text-align: center;
`
