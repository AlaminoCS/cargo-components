import { ISocialMediaData } from './ISocialMediaData';

export interface IFooterContact {
  address: string;
  phone: string;
  email: string;
  businessHours: string[];
}

export interface IFooterLink {
  text: string;
  href: string;
}

export interface IFooterColumn {
  title: string;
  links: IFooterLink[];
}

export interface IFooterLegal {
  privacyPolicy: string;
  termsOfService: string;
  cookiePolicy: string;
}

export interface IFooterProps {
  // Informações da empresa
  companyName: string;
  companyDescription: string;

  // Contato
  contact: IFooterContact;

  // Links do site organizados em colunas
  columns: IFooterColumn[];

  // Redes sociais
  socialMedia: ISocialMediaData;

  // Informações legais
  legal: IFooterLegal;

  // Créditos
  developerInfo: {
    name: string;
    website: string;
  };

  // Newsletter (opcional)
  newsletter?: {
    title: string;
    description: string;
    buttonText: string;
  };
}
