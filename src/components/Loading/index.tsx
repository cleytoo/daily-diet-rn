import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.greenMind
}))``

export const Loading = () => (
  <Container>
    <LoadIndicator size="large" />
  </Container>
)
