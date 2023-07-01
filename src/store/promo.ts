import { createContext } from 'react';
import { PromoType } from 'app/types';

export const PromoContext = createContext<PromoType | null>(null);
