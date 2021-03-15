import Base from '../layouts/Base';
import NotFound from '../../components/NotFound/NotFound';

export interface Error404Props {

}

const Error404: React.FC<Error404Props> = () => {
  return (
    <Base>
      <NotFound />
    </Base>
  );
}

export default Error404;