import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

import { AntDesign } from '@expo/vector-icons'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`

export const Header = styled.View`
  flex-direction: row;
  height: 80px;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`
export const HeaderButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`
export const HeaderButtonIcon = styled(AntDesign).attrs({
  name: 'arrowleft',
  size: 28
})``

export const Content = styled.View`
  padding: 20px 24px 10px;
  gap: 30px;
  flex: 1;
`

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

interface ButtonMealProps {
  active?: boolean
  type?: 'diet' | 'free'
}

export const ButtonMeal = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})<ButtonMealProps>`
  min-width: 48%;
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray200};
  border-width: 1px;
  border-color: transparent;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;

  ${({ active, type, theme }) =>
    active &&
    type === 'diet' &&
    css`
      background-color: ${theme.colors.greenLight};
      border-color: ${theme.colors.greenDark};
    `}

  ${({ active, type, theme }) =>
    active &&
    type === 'free' &&
    css`
      background-color: ${theme.colors.redLight};
      border-color: ${theme.colors.redDark};
    `}
`

export const ButtonMealDot = styled.View<{ type: 'diet' | 'free' }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ type, theme }) =>
    type === 'diet' &&
    css`
      background-color: ${theme.colors.greenDark};
    `}
  ${({ type, theme }) =>
    type === 'free' &&
    css`
      background-color: ${theme.colors.redDark};
    `}
`

export const ButtonMealText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const MealModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`

interface Mealmodal {
  type?: 'diet' | 'free'
}
export const MealModalText = styled.Text<Mealmodal>`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ type, theme }) =>
    type === 'diet' ? theme.colors.greenDark : theme.colors.redDark};
`
export const MealModalDescription = styled.Text``
