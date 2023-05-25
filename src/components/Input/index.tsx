import { TextInputProps } from 'react-native'
import { Container, Label, TextInput } from './styles'

interface InputProps extends TextInputProps {
  label: string
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput {...props} />
    </Container>
  )
}
