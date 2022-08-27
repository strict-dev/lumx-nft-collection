import CardWrapper from 'components/CardWrapper'
import Container from 'components/Container'
import { GridLoader } from 'react-spinners'

export const ChartLoader = () => (
  <Container>
    <CardWrapper className="flex flex-col items-center justify-center h-64 gap-5 mb-2 bg-ne">
      <GridLoader color="#6e7191" />
    </CardWrapper>
  </Container>
)
