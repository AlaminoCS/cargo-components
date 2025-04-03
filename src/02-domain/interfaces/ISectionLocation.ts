<<<<<<< HEAD
// src/02-domain/interfaces/ISectionLocation.ts
=======
>>>>>>> feature/lgpd-policies
export interface ILocation {
  title: string;
  text: string;
  map: {
    title: string;
    src: string;
  };
}

export interface ISectionLocation {
  title: string;
  locations: ILocation[];
  id: string;
}
