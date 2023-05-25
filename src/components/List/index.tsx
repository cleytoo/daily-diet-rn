import { FlatList } from 'react-native'
import {
  Container,
  Title,
  ListItem,
  ListItemTime,
  ListItemTitle,
  ListItemType,
  Separator
} from './styles'
import { Button } from '../button'

export const List = () => {
  return (
    <Container>
      <Title>12.08.22</Title>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <ListItem key={item} activeOpacity={0.4}>
            <ListItemTime>12:00</ListItemTime>
            <Separator />
            <ListItemTitle>Almoço</ListItemTitle>
            <ListItemType isDiet={item % 2 === 0} />
          </ListItem>
        )}
        contentContainerStyle={{ gap: 10, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
