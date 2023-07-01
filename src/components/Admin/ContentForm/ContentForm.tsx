import Form from 'react-bootstrap/Form';

import { ContentType } from 'app/types';

type Props = {
  content: ContentType;
};

const ContentForm = ({ content }: Props) => {
  return (
    <>
      <Form.Control type="text" name="text" placeholder="Text" defaultValue={content.text} className="mb-2" />
      <Form.Control type="text" name="money" placeholder="Money" defaultValue={content.money} />
    </>
  );
};

export default ContentForm;
