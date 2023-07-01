import Accordion from 'react-bootstrap/Accordion';

import { PromoType } from 'app/types';
import PromoForm from 'components/Admin/PromoForm';

type Props = {
  promo: PromoType;
  eventKey: number;
};

const Promo = ({ promo, eventKey }: Props) => {
  return (
    <Accordion.Item eventKey={eventKey.toString()}>
      <Accordion.Header>Code - {promo.id}</Accordion.Header>

      <Accordion.Body>
        <PromoForm promo={promo} />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Promo;
