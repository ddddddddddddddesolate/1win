import Form from 'react-bootstrap/Form';
import { ChangeEvent } from 'react';

type Props = {
  onChangeVideo: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeGif: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MediaForm = ({ onChangeVideo, onChangeGif }: Props) => (
  <>
    <Form.Group controlId="video" className="mb-3">
      <Form.Label>Video</Form.Label>
      <Form.Control onChange={onChangeVideo} name="video" type="file" accept="video/*" />
    </Form.Group>

    <Form.Group controlId="gif" className="mb-3">
      <Form.Label>Gif</Form.Label>
      <Form.Control onChange={onChangeGif} name="gif" type="file" accept="image/gif" />
    </Form.Group>
  </>
);

export default MediaForm;
