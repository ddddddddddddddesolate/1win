import Form from 'react-bootstrap/Form';

import { ButtonContentType } from 'app/types';

type Props = {
  content: ButtonContentType;
};

const ButtonContentForm = ({ content }: Props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="buttonContentForm.text">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" name="text" placeholder="Text" defaultValue={content.text} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="buttonContentForm.link">
        <Form.Label>Link</Form.Label>
        <Form.Control type="text" name="link" placeholder="Link" defaultValue={content.link} />
      </Form.Group>
    </>
  )
};

export default ButtonContentForm;
