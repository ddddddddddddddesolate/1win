import { ChangeEvent, SyntheticEvent, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { PromoType } from 'app/types';
import { PromoFields, PromoOptions, PromoRoutes } from 'app/enums';

import ContentForm from 'components/Admin/ContentForm';
import ButtonContentForm from 'components/Admin/ButtonContentForm';

import { updateContent, uploadMedia } from 'api/api';
import { AdminContext } from 'store/admin';
import MediaForm from 'components/Admin/MediaForm';

type Props = {
  promo: PromoType;
};

const PromoForm = ({ promo }: Props) => {
  const context = useContext(AdminContext);

  const [selectedOption, setSelectedOption] = useState<PromoOptions>(PromoOptions.HEADER);

  const [video, setVideo] = useState<File | null>(null);
  const [gif, setGif] = useState<File | null>(null);

  const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as PromoOptions);
  };

  const updatePromo = useCallback((option: string, key: string, value: string) => {
    if (context?.setPromos) {
      context.setPromos(previousPromos =>
        previousPromos.map(previousPromo => {
          if (previousPromo.id === promo.id) {
            return {
              ...previousPromo,
              [option]: {
                [key]: value,
              },
            };
          }

          return previousPromo;
        }),
      );
    }
  }, [promo, context]);

  const handleSubmit = useCallback(async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      text: { value: string };
      money: { value: string };
      link: { value: string };
    };

    try {
      if (video) {
        const formData = new FormData();

        formData.append("code", promo.id);
        formData.append("type", PromoFields.VIDEO);
        formData.append("file", video);

        await uploadMedia(formData);
      }

      if (gif) {
        const formData = new FormData();

        formData.append("code", promo.id);
        formData.append("type", PromoFields.GIF);
        formData.append("file", gif);

        await uploadMedia(formData);
      }

      switch (selectedOption) {
        case PromoOptions.HEADER: {
          const text = target.text.value;
          const money = target.money.value;

          if (text !== promo.header.text) {
            await updateContent(PromoRoutes.HEADER, promo.id, PromoFields.TEXT, text);

            updatePromo('header', 'text', text);
          }

          if (money !== promo.header.money) {
            await updateContent(PromoRoutes.HEADER, promo.id, PromoFields.MONEY, money);

            updatePromo('header', 'money', money);
          }

          break;
        }
        case PromoOptions.FOOTER: {
          const text = target.text.value;
          const money = target.money.value;

          if (text !== promo.footer.text) {
            await updateContent(PromoRoutes.FOOTER, promo.id, PromoFields.TEXT, text);

            updatePromo('footer', 'text', text);
          }

          if (money !== promo.footer.money) {
            await updateContent(PromoRoutes.FOOTER, promo.id, PromoFields.MONEY, money);

            updatePromo('footer', 'money', money);
          }

          break;
        }
        case PromoOptions.LEFT_BUTTON: {
          const link = target.link.value;
          const text = target.text.value;

          if (link !== promo.leftButton.link) {
            await updateContent(PromoRoutes.LEFT_BUTTON, promo.id, PromoFields.LINK, link);

            updatePromo('leftButton', 'link', link);
          }

          if (text !== promo.leftButton.text) {
            await updateContent(PromoRoutes.LEFT_BUTTON, promo.id, PromoFields.TEXT, text);

            updatePromo('leftButton', 'text', text);
          }

          break;
        }
        case PromoOptions.RIGHT_BUTTON: {
          const link = target.link.value;
          const text = target.text.value;

          if (link !== promo.rightButton.link) {
            await updateContent(PromoRoutes.RIGHT_BUTTON, promo.id, PromoFields.LINK, link);

            updatePromo('rightButton', 'link', link);
          }

          if (text !== promo.rightButton.text) {
            await updateContent(PromoRoutes.RIGHT_BUTTON, promo.id, PromoFields.TEXT, text);

            updatePromo('rightButton', 'text', text);
          }

          break;
        }
        default:
          break;
      }

      toast.success(`The promo code '${promo.id}' has been successfully updated.`);
    } catch (e) {
      console.error(e);

      toast.error('Something went wrong.');
    }
  }, [video, gif, updatePromo, selectedOption, promo]);

  return (
    <Form onSubmit={handleSubmit}>
      <MediaForm
        onChangeVideo={(event) => {
          if (event.target.files) {
            setVideo(event.target.files[0]);
          }
        }}
        onChangeGif={(event) => {
          if (event.target.files) {
            setGif(event.target.files[0]);
          }
        }}
      />

      <Form.Group className="mb-3" controlId="promoForm.option">
        <Form.Label>Content target</Form.Label>
        <Form.Select onChange={handleChangeOption}>
          <option value={PromoOptions.HEADER}>Header</option>
          <option value={PromoOptions.FOOTER}>Footer</option>
          <option value={PromoOptions.LEFT_BUTTON}>Left Button</option>
          <option value={PromoOptions.RIGHT_BUTTON}>Right Button</option>
        </Form.Select>
      </Form.Group>

      {selectedOption === PromoOptions.HEADER && (
        <ContentForm content={promo.header} />
      )}

      {selectedOption === PromoOptions.FOOTER && (
        <ContentForm content={promo.footer} />
      )}

      {selectedOption === PromoOptions.LEFT_BUTTON && (
        <ButtonContentForm content={promo.leftButton} />
      )}

      {selectedOption === PromoOptions.RIGHT_BUTTON && (
        <ButtonContentForm content={promo.rightButton} />
      )}

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default PromoForm;
