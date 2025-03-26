export type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  investmentRequired: number;
  roi: number;
  duration: string;
  location: string;
  fundingProgress: number;
  featured?: boolean;
  imageUrl: string;
  impact: {
    environmental: string;
    social: string;
    economic: string;
  };
  milestones: {
    date: string;
    title: string;
    description: string;
  }[];
  team: {
    name: string;
    role: string;
    imageUrl: string;
  }[];
};
