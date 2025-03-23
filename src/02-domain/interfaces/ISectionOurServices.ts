// src/02-domain/interfaces/ISectionOurServices.ts
export interface IService {
  image: string; // URL da imagem
  title: string; // Título do serviço
  description: string; // Descrição do serviço  
}

export interface ISectionOurServicesProps {
  sectionTitle?: string;
  services: IService[];
  id: string;
}