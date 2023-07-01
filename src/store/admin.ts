import { createContext } from 'react';
import { PromoType } from 'app/types';

export const AdminContext = createContext<PromoType[]>([]);
