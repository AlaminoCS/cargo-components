// src/02-domain/interfaces/ISectionWithImage.ts
export interface ISectionWithImage {
  imagePosition: 'left' | 'right'; // Posição da imagem
  title: string; // Título da seção
  description: string; // Descrição (pode ser HTML ou Markdown)
  image: {
    src: string; // URL ou caminho da imagem
    alt: string; // Texto alternativo da imagem
  };
}