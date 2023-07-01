import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { PromoType } from 'app/types';
import { PromoFields, PromoOptions, PromoRoutes } from 'app/enums';

import ContentForm from 'components/Admin/ContentForm';
import ButtonContentForm from 'components/Admin/ButtonContentForm';

import { updateContent } from 'api/api';

type Props = {
  promo: PromoType;
};

const PromoForm = ({ promo }: Props) => {
  const [selectedOption, setSelectedOption] = useState<PromoOptions>(PromoOptions.HEADER);

  const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as PromoOptions);
  };

  const handleSubmit = useCallback(async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      switch (selectedOption) {
        case PromoOptions.HEADER: {
          const target = event.target as typeof event.target & {
            text: { value: string };
            money: { value: string };
          };

          const text = target.text.value;
          const money = target.money.value;

          if (text !== promo.header.text) {
            await updateContent(PromoRoutes.HEADER, promo.id, PromoFields.TEXT, text);
          }

          if (money !== promo.header.money) {
            await updateContent(PromoRoutes.HEADER, promo.id, PromoFields.MONEY, money);
          }

          break;
        }
        case PromoOptions.FOOTER: {
          const target = event.target as typeof event.target & {
            text: { value: string };
            money: { value: string };
          };

          const text = target.text.value;
          const money = target.money.value;

          if (text !== promo.footer.text) {
            await updateContent(PromoRoutes.FOOTER, promo.id, PromoFields.TEXT, text);
          }

          if (money !== promo.footer.money) {
            await updateContent(PromoRoutes.FOOTER, promo.id, PromoFields.MONEY, money);
          }

          break;
        }
        case PromoOptions.LEFT_BUTTON: {
          const target = event.target as typeof event.target & {
            link: { value: string };
            text: { value: string };
          };

          const link = target.link.value;
          const text = target.text.value;

          if (link !== promo.leftButton.link) {
            await updateContent(PromoRoutes.LEFT_BUTTON, promo.id, PromoFields.LINK, link);
          }

          if (text !== promo.leftButton.text) {
            await updateContent(PromoRoutes.LEFT_BUTTON, promo.id, PromoFields.TEXT, text);
          }

          break;
        }
        case PromoOptions.RIGHT_BUTTON: {
          const target = event.target as typeof event.target & {
            link: { value: string };
            text: { value: string };
          };

          const link = target.link.value;
          const text = target.text.value;

          if (link !== promo.rightButton.link) {
            await updateContent(PromoRoutes.RIGHT_BUTTON, promo.id, PromoFields.LINK, link);
          }

          if (text !== promo.rightButton.text) {
            await updateContent(PromoRoutes.RIGHT_BUTTON, promo.id, PromoFields.TEXT, text);
          }

          break;
        }
        default:
          break;
      }
    } catch (e) {
      console.error(e);
    }
  }, [selectedOption, promo]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Select onChange={handleChangeOption} className="mb-3">
        <option value={PromoOptions.HEADER}>Header</option>
        <option value={PromoOptions.FOOTER}>Footer</option>
        <option value={PromoOptions.LEFT_BUTTON}>Left Button</option>
        <option value={PromoOptions.RIGHT_BUTTON}>Right Button</option>
      </Form.Select>

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

      <Button className="mt-3" variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default PromoForm;
