import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 0 24px;
`

export const Content = styled.View`
  background-color: aliceblue;
`
