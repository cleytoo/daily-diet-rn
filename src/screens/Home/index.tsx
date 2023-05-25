import { AntDesign } from '@expo/vector-icons'

import { Container } from './styles'
import { Header } from '../../components/Header'
import { CardStatistic } from '../../components/CardStatistic'
import { Button } from '../../components/Button'
import { List } from '../../components/List'
import { useNavigation } from '@react-navigation/native'

export const Home = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Header />
      <CardStatistic onPress={() => navigate('statistics')} />
      <Button
        style={{ marginTop: 30, marginBottom: 30 }}
        icon={<AntDesign name="plus" size={18} color="#fff" />}
        activeOpacity={0.6}
        onPress={() => navigate('createMeal')}
      >
        Nova Refeição
      </Button>

      <List />
    </Container>
  )
}
