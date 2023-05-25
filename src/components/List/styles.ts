import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: 10px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.lg}px;
  `}
`

export const ListItem = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 6px;
  padding: 0 16px;
`
export const ListItemTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md}px;
  `}
`

export const ListItemTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xs}px;
  `}
`

export const Separator = styled.View`
  height: 16px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.gray400};
  margin: 0 10px;
`

export const ListItemType = styled.View<{ isDiet: boolean }>`
  ${({ theme, isDiet }) => css`
    height: 14px;
    width: 14px;
    border-radius: 7px;
    background-color: ${isDiet ? theme.colors.greenMind : theme.colors.redMind};
  `}
  margin-left: auto;
`
