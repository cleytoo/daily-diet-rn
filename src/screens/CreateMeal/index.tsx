import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Modal
} from 'react-native'

import {
  ButtonMeal,
  ButtonMealDot,
  ButtonMealText,
  Container,
  Content,
  Header,
  HeaderButton,
  HeaderButtonIcon,
  HeaderTitle,
  MealModalContent,
  MealModalDescription,
  MealModalText,
  Row
} from './styles'

import { Input } from '../../components/Input'

import { useState } from 'react'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

type MealType = 'diet' | 'free'

export const CreateMeal = () => {
  const [type, setType] = useState<MealType>('diet')
  const [modalVisible, setModalVisible] = useState(false)

  const { navigate } = useNavigation()

  return (
    <>
      <Modal visible={modalVisible} animationType="slide">
        <MealModalContent>
          <MealModalText type={type}>Continue assim!</MealModalText>
          <MealModalDescription>
            Você continua dentro da dieta. Muito Bem!d
          </MealModalDescription>
          <Image source={require('../../../assets/Illustration.png')} />
        </MealModalContent>
      </Modal>
      <Container>
        <Header>
          <HeaderButton onPress={() => navigate('home')}>
            <HeaderButtonIcon />
          </HeaderButton>
          <HeaderTitle>Nova Refeição</HeaderTitle>
        </Header>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Content>
              <Input label="Nome" />
              <Input label="Descrição" />
              <Row>
                <Input label="Data" style={{ minWidth: '48%' }} />
                <Input label="Hora" style={{ minWidth: '48%' }} />
              </Row>
              <Row>
                <ButtonMeal
                  active={type === 'diet'}
                  type="diet"
                  onPress={() => setType('diet')}
                >
                  <ButtonMealDot type="diet" />
                  <ButtonMealText>Sim</ButtonMealText>
                </ButtonMeal>
                <ButtonMeal
                  active={type === 'free'}
                  type="free"
                  onPress={() => setType('free')}
                >
                  <ButtonMealDot type="free" />
                  <ButtonMealText>Não</ButtonMealText>
                </ButtonMeal>
              </Row>
              <Button
                style={{ marginTop: 'auto' }}
                onPress={() => setModalVisible(true)}
              >
                Cadastrar Refeição
              </Button>
            </Content>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    </>
  )
}
