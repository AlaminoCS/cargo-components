import { JSX } from "react";

// src/02-domain/interfaces/IHeaderProps.ts
export interface IContactLink {
  text: string; // Texto do link
  href: string; // URL do link
  icon: JSX.Element; // Ícone do link
}

export interface IMainLink {
  text: string; // Texto do link
  href: string; // URL do link
}

export interface IBanner {
  imageUrl: string; // URL da imagem do banner
  title: string; // Título do banner
  description: string; // Descrição do banner
}

export interface IHeaderProps {
  contactLinks: IContactLink[]; // Links de contato
  mainLinks: IMainLink[]; // Links principais
  logoSrc: string; // URL do logo
  banners: IBanner[]; // Dados dos banners
}