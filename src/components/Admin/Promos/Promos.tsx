import { useContext } from 'react';

import Accordion from 'react-bootstrap/Accordion';

import { AdminContext } from 'store/admin';

import Promo from 'components/Admin/Promo';

const Promos = () => {
  const context = useContext(AdminContext);

  return (
    <Accordion>
      {(context?.promos)?.map((promo, index) => (
        <Promo key={index} promo={promo} eventKey={index} />
      ))}
    </Accordion>
  )
};

export default Promos;
