import { PromoType, UnmappedPromoType } from 'app/types';


export class PromoMapper {
  public static map(unmappedPromo: UnmappedPromoType): PromoType {
    return {
      id: unmappedPromo._id,
      gif: unmappedPromo.gif,
      video: unmappedPromo.video,
      header: unmappedPromo.header,
      footer: unmappedPromo.footer,
      leftButton: unmappedPromo.left_button,
      rightButton: unmappedPromo.right_button,
    };
  }
}
