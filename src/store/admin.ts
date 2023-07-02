import { createContext, Dispatch, SetStateAction } from 'react';
import { PromoType } from 'app/types';

type StateType = {
  promos: PromoType[];
  setPromos: Dispatch<SetStateAction<PromoType[]>> | null;
};

export const AdminContext = createContext<StateType | null>({
  promos: [],
  setPromos: null,
});
