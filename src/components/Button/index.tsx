import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonVariants, Container, Label } from './styles'

import {} from '@expo/vector-icons'

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
  variant?: ButtonVariants
  icon?: ReactNode
}

export const Button = ({
  children,
  variant = 'primary',
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <Container variant={variant} {...rest}>
      {icon}
      <Label variant={variant}>{children}</Label>
    </Container>
  )
}
