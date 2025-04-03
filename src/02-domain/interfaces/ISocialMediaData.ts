export interface ISocialMediaItem {
  name: string;
  url: string;
  iconName: 'Facebook' | 'Instagram' | 'LinkedIn' | 'YouTube';
}

export type ISocialMediaData = ISocialMediaItem[];
