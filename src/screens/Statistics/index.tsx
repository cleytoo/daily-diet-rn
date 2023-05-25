import { Text, TouchableOpacity, View } from 'react-native'
import {
  BackButton,
  BackIcon,
  Container,
  Content,
  Header,
  ResumeText,
  ResumeValues,
  Title
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { Card } from '../../components/Card'

export const Statistics = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigate('home')}>
          <BackIcon />
        </BackButton>
        <ResumeValues>90,86%</ResumeValues>
        <ResumeText>das refeições dentro da dieta</ResumeText>
      </Header>
      <Content>
        <Title>Estatísticas gerais</Title>
        <Card
          amount={22}
          description="melhor sequência de pratos dentro da dieta"
        />
        <Card amount={109} description="refeições registradas" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Card
            amount={99}
            description="refeições dentro da dieta"
            type="positive"
            brokenLine
            // style={{ width: '45%' }}
          />
          <Card
            amount={10}
            description="refeições fora da dieta"
            type="negative"
            brokenLine
            // style={{ width: '45%' }}
          />
        </View>
      </Content>
    </Container>
  )
}
