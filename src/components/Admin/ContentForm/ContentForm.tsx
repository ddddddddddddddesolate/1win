import Form from 'react-bootstrap/Form';

import { ContentType } from 'app/types';

type Props = {
  content: ContentType;
};

const ContentForm = ({ content }: Props) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="contentForm.text">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" name="text" placeholder="Text" defaultValue={content.text} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contentForm.money">
        <Form.Label>Money</Form.Label>
        <Form.Control type="text" name="money" placeholder="Money" defaultValue={content.money} />
      </Form.Group>
    </>
  );
};

export default ContentForm;
