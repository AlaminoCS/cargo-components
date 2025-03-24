// src/index.tsx
export { default as Button } from './Button';
export { lightTheme, darkTheme } from './theme';
export { default as GlobalStyles } from './04-assets/styles/GlobalStyles';
export { default as ContactNavMolecule } from './01-ui/components/02-molecules/ContactNavMolecule';
export { default as MainNavMolecule } from './01-ui/components/02-molecules/MainNavMolecule';
export { default as TopNavOrg } from './01-ui/components/03-organisms/TopNavOrg';
export { default as BigImgCarousel } from './01-ui/components/03-organisms/BigImgCarousel';
export { default as ContentCarouselMol } from './01-ui/components/02-molecules/ContentCarouselMol';
export { default as SectionWithImage } from './01-ui/components/03-organisms/SectionWithImage';
export { default as SectionLocationTpl } from './01-ui/components/04-templates/SectionLocationTpl';
export { default as ImageAtom } from './01-ui/components/01-atoms/ImageAtom';
export { default as LinkAtom } from './01-ui/components/01-atoms/LinkAtom';
export { default as MapAtom } from './01-ui/components/01-atoms/MapAtom';
export { default as TitleAtom } from './01-ui/components/01-atoms/TitleAtom';
export { default as ContentTitleTextMol } from './01-ui/components/02-molecules/ContentTitleTextMol';
export { default as SectionOurServicesOrg } from './01-ui/components/03-organisms/SectionOurServicesOrg';
export { default as HeaderTpl } from './01-ui/components/04-templates/HeaderTpl';
export { default as SectionContainerImageTpl } from './01-ui/components/04-templates/SectionContainerImageTpl';
export { default as SectionDifferentialsTpl } from './01-ui/components/04-templates/SectionDifferentialsTpl';
export { default as SectionWhoWeAreTpl } from './01-ui/components/04-templates/SectionWhoWeAreTpl';
export { default as ContactForm } from './01-ui/components/04-templates/ContactForm';
export { default as SectionWithImages } from './01-ui/components/04-templates/SectionWithImages';
export { default as Footer } from './01-ui/components/04-templates/Footer';

// Exportar interfaces
export type { IContactLink, IMainLink, IBanner, IHeaderProps } from './02-domain/interfaces/IHeaderProps';
export type { IService, ISectionOurServicesProps } from './02-domain/interfaces/ISectionOurServices';
export type { ISectionContainerImageProps } from './02-domain/interfaces/ISectionContainerImageProps';
export type { ISectionDifferentialsProps } from './02-domain/interfaces/ISectionDifferentialsProps';
export type { ISectionWhoWeAreProps } from './02-domain/interfaces/ISectionWhoWeAreProps';

export { TopNavProvider } from './05-contexts/TopNavContext';