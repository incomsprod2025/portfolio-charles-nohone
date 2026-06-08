export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  skills: string[];
  features: string[];
  priceRange?: string;
}

export interface InfographyProject {
  id: string;
  title: string;
  category: "Social Media" | "Flyer / Brochure" | "Identité Visuelle" | "Campagne Pub";
  client: string;
  description: string;
  date: string;
  colorTheme: string;
  // SVG Mockup content details
  visualType: "social-post" | "delivery-card" | "flyer-celaf" | "corporate-logo" | "uber-card";
  imageUrl: string;
}

export interface VideoProject {
  id: string;
  title: string;
  category: "Reels / Shorts" | "Pub Vidéo" | "Événementiel" | "Montage Corporate";
  client: string;
  duration: string;
  description: string;
  date: string;
  aspectRatio: "9:16" | "16:9";
  colorTheme: string;
  // Details for our interactive video editor/timeline previewer
  scenes: {
    id: number;
    title: string;
    description: string;
    thumbnailColor: string;
    hasFilter: boolean;
  }[];
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  comment: string;
  email?: string;
  website?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}
