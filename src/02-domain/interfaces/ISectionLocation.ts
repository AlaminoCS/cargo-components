// src/02-domain/interfaces/ISectionLocation.ts
export interface ISectionLocation {
  title: string; // Título da seção
  text: string; // Texto descritivo
  map: {
    title: string; // Título do iframe do mapa
    src: string; // URL do iframe do Google Maps
  };
}