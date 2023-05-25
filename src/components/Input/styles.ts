import styled from 'styled-components/native'

export const Container = styled.View`
  gap: 4px;
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.gray600};
`

export const TextInput = styled.TextInput`
  width: 100%;
  min-height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  padding: 0 14px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
`
