import Form from 'react-bootstrap/Form';

import { ButtonContentType } from 'app/types';

type Props = {
  content: ButtonContentType;
};

const ButtonContentForm = ({ content }: Props) => {
  return (
    <>
      <Form.Control type="text" name="text" placeholder="Text" defaultValue={content.text} className="mb-2" />
      <Form.Control type="text" name="link" placeholder="Link" defaultValue={content.link} />
    </>
  )
};

export default ButtonContentForm;
