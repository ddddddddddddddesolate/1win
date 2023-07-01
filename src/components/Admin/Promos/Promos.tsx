import { useContext } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import { AdminContext } from 'store/admin';

import Promo from 'components/Admin/Promo';

const Promos = () => {
  const promos = useContext(AdminContext);

  return (
    <Accordion>
      {promos?.map((promo, index) => (
        <Promo key={index} promo={promo} eventKey={index} />
      ))}
    </Accordion>
  )
};

export default Promos;
