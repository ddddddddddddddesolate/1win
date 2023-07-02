import { SyntheticEvent, useContext } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { createPromo } from 'api/api';
import { AdminContext } from 'store/admin';
import { PromoMapper } from 'mappers/PromoMapper';
import { toast } from 'react-toastify';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreatePromoModal = ({ isOpen, onClose }: Props) => {
  const context = useContext(AdminContext);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      code: { value: string };
    };

    if (!target.code.value) {
      return;
    }

    try {
      const { data: { data: unmappedPromo } } = await createPromo(target.code.value);

      if (context?.setPromos && unmappedPromo) {
        context.setPromos(prevState => [
          ...prevState,
          PromoMapper.map(unmappedPromo),
        ]);

        toast.success(`The promo code '${target.code.value}' was successfully created.`);

        onClose();
      } else {
        toast.error(`The promo code '${target.code.value}' already exists.`)
      }
    } catch (e) {
      console.error(e);

      toast.error('Something went wrong.');
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add promo</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Control type="text" name="code" placeholder="Code" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" type="submit">Save changes</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CreatePromoModal;
