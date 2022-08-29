import CardWrapper from 'components/CardWrapper'
import { GridLoader } from 'react-spinners'

type LoaderProps = {
  size: string
}

export const Loader: React.FC<LoaderProps> = ({ size }) => (
  <CardWrapper className={`flex flex-col items-center justify-center ${size} `}>
    <GridLoader color="#6e7191" />
  </CardWrapper>
)
