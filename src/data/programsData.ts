
export interface FlagshipProgram {
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  link: string;
}

export interface Program {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const flagshipPrograms: FlagshipProgram[] = [
  {
    title: "SDG Ambassadors Program",
    description: "Training young leaders to become effective advocates for sustainable development in their communities.",
    icon: "/lovable-uploads/5834fedb-aa6c-421b-91b8-d17a45eb3374.png",
    image: "/lovable-uploads/38d71279-24da-43e3-a208-757cc8ea7eb0.png",
    features: [
      "Comprehensive SDG training",
      "Leadership development",
      "Project management skills",
      "Global networking opportunities"
    ],
    link: "/programs/sdg-ambassadors"
  },
  {
    title: "Youth Innovation Hub",
    description: "A platform for young innovators to develop and implement solutions for sustainable development challenges.",
    icon: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png",
    image: "/lovable-uploads/24b0ae3b-a291-4b67-8d6d-4af0b0930366.png",
    features: [
      "Innovation workshops",
      "Mentorship support",
      "Funding opportunities",
      "Technology resources"
    ],
    link: "/programs/innovation-hub"
  }
];

export const educationPrograms: Program[] = [
  {
    title: "SDG Learning Series",
    description: "Interactive workshops and courses on sustainable development goals.",
    icon: "/lovable-uploads/5834fedb-aa6c-421b-91b8-d17a45eb3374.png",
    link: "/programs/sdg-learning"
  },
  {
    title: "Digital Skills Academy",
    description: "Training youth in essential digital skills for the future.",
    icon: "/lovable-uploads/38d71279-24da-43e3-a208-757cc8ea7eb0.png",
    link: "/programs/digital-skills"
  },
  {
    title: "Leadership Development",
    description: "Comprehensive leadership training for young change-makers.",
    icon: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png",
    link: "/programs/leadership"
  }
];

export const actionPrograms: Program[] = [
  {
    title: "Community Impact Projects",
    description: "Youth-led initiatives addressing local sustainability challenges.",
    icon: "/lovable-uploads/5834fedb-aa6c-421b-91b8-d17a45eb3374.png",
    link: "/programs/community-impact"
  },
  {
    title: "Environmental Campaigns",
    description: "Coordinated actions for environmental protection and awareness.",
    icon: "/lovable-uploads/38d71279-24da-43e3-a208-757cc8ea7eb0.png",
    link: "/programs/environmental"
  },
  {
    title: "Social Innovation Labs",
    description: "Collaborative spaces for developing solutions to social challenges.",
    icon: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png",
    link: "/programs/innovation-labs"
  }
];

export const capacityPrograms: Program[] = [
  {
    title: "Train the Trainer",
    description: "Preparing youth leaders to train others in SDG implementation.",
    icon: "/lovable-uploads/5834fedb-aa6c-421b-91b8-d17a45eb3374.png",
    link: "/programs/train-trainer"
  },
  {
    title: "Partnership Building",
    description: "Developing skills for effective collaboration and partnerships.",
    icon: "/lovable-uploads/38d71279-24da-43e3-a208-757cc8ea7eb0.png",
    link: "/programs/partnerships"
  },
  {
    title: "Project Management",
    description: "Essential skills for managing sustainable development projects.",
    icon: "/lovable-uploads/46b55093-0f47-444f-9e15-c55c8afd3197.png",
    link: "/programs/project-management"
  }
];
