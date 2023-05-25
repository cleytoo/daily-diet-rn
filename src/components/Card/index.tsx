import { ViewProps } from 'react-native'
import { Amount, Container, Description, CardTypes } from './styles'

interface CardProps extends ViewProps {
  amount: number
  description: string
  type?: CardTypes
  brokenLine?: boolean
}

export const Card = ({
  amount,
  description,
  type = 'neutral',
  brokenLine = false,
  ...props
}: CardProps) => {
  return (
    <Container type={type} {...props}>
      <Amount>{amount}</Amount>
      <Description brokenLine={brokenLine}>{description}</Description>
    </Container>
  )
}
