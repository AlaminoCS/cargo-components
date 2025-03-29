import React, { createContext, useContext } from 'react';

import { IContactLink } from '../02-domain/interfaces/IHeaderProps';

// Tipagem dos dados
interface TopNavContextType {
  contactLinks: IContactLink[];
  mainLinks: {
    text: string;
    href: string;
  }[];
  logoSrc: string;
}

// Criação do contexto
const TopNavContext = createContext<TopNavContextType | undefined>(undefined);

// Hook personalizado para acessar o contexto
export const useTopNavContext = () => {
  const context = useContext(TopNavContext);
  if (!context) {
    throw new Error('useTopNavContext deve ser usado dentro de um TopNavProvider');
  }
  return context;
};

// Provider para envolver os componentes
export const TopNavProvider: React.FC<{ value: TopNavContextType; children: React.ReactNode }> = ({
  value,
  children,
}) => {
  return <TopNavContext.Provider value={value}>{children}</TopNavContext.Provider>;
};
