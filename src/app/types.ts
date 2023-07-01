export type ContentType = {
  text: string;
  money: string;
};

export type ButtonContentType = {
  link: string;
  text: string;
};

export type PromoType = {
  id: string;
  gif: string;
  video: string;
  header: ContentType;
  footer: ContentType;
  leftButton: ButtonContentType;
  rightButton: ButtonContentType;
};

export type UnmappedPromoType = {
  _id: PromoType['id'];
  gif: PromoType['gif'];
  video: PromoType['video'];
  header: PromoType['header'];
  footer: PromoType['footer'];
  left_button: PromoType['leftButton'];
  right_button: PromoType['rightButton'];
};
