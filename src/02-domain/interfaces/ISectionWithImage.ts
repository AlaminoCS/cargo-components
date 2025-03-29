// src/02-domain/interfaces/ISectionWithImage.ts
export interface ISectionWithImage {
  imagePosition: 'left' | 'right';
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  id: string;
}
