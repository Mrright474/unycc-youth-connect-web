
import { BookOpen, Users, Globe, Award, Lightbulb, Calendar } from "lucide-react";

export interface FlagshipProgram {
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
  link: string;
}

export interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const flagshipPrograms: FlagshipProgram[] = [
  {
    title: "Youth Leadership Academy",
    description: "A comprehensive leadership development program that equips young people with the skills, knowledge, and networks to lead sustainable development initiatives.",
    icon: "/images/logo1.png",
    features: [
      "Six-month structured curriculum",
      "Mentorship from experienced leaders",
      "Practical project implementation",
      "Global networking opportunities"
    ],
    image: "/images/logo4.png",
    link: "/programs/leadership-academy"
  },
  {
    title: "SDG Innovation Challenge",
    description: "An annual competition that challenges youth to develop innovative solutions for specific Sustainable Development Goals in their communities.",
    icon: "/images/logo2.png",
    features: [
      "Seed funding for winning projects",
      "Technical support and mentorship",
      "Prototype development assistance",
      "Scaling opportunities for successful initiatives"
    ],
    image: "/images/logo5.png",
    link: "/programs/innovation-challenge"
  },
  {
    title: "Global Youth Forum",
    description: "An annual gathering bringing together youth leaders from across the UNYCC network to share experiences, learn from each other, and develop collaborative initiatives.",
    icon: "/images/logo3.png",
    features: [
      "High-level speakers and workshops",
      "Cross-cultural collaboration opportunities",
      "Policy development sessions",
      "Showcasing of successful local projects"
    ],
    image: "/images/logo6.png",
    link: "/programs/global-forum"
  }
];

export const educationPrograms: Program[] = [
  {
    title: "SDG Academy",
    description: "Online courses and resources focused on building understanding of the SDGs and sustainable development principles.",
    icon: <BookOpen className="h-8 w-8 text-unblue" />
  },
  {
    title: "Peer Education Program",
    description: "Training youth to educate their peers on important sustainable development topics.",
    icon: <Users className="h-8 w-8 text-unblue" />
  },
  {
    title: "Sustainability in Schools",
    description: "Integrating sustainability into school curricula and campus operations.",
    icon: <BookOpen className="h-8 w-8 text-unblue" />
  }
];

export const actionPrograms: Program[] = [
  {
    title: "Community Action Projects",
    description: "Local initiatives addressing specific community needs aligned with the SDGs.",
    icon: <Users className="h-8 w-8 text-unblue" />
  },
  {
    title: "Climate Action Program",
    description: "Youth-led initiatives focused specifically on climate change mitigation and adaptation.",
    icon: <Globe className="h-8 w-8 text-unblue" />
  },
  {
    title: "SDG Advocacy Campaign",
    description: "Awareness-raising and policy advocacy efforts led by youth at local and national levels.",
    icon: <Award className="h-8 w-8 text-unblue" />
  }
];

export const capacityPrograms: Program[] = [
  {
    title: "Club Leadership Training",
    description: "Building the capacity of club leaders to effectively manage and grow their local clubs.",
    icon: <Award className="h-8 w-8 text-unblue" />
  },
  {
    title: "Project Management Bootcamp",
    description: "Practical training on planning, implementing, and evaluating SDG-focused projects.",
    icon: <Calendar className="h-8 w-8 text-unblue" />
  },
  {
    title: "Facilitator Development",
    description: "Training youth to facilitate workshops and educational activities within their communities.",
    icon: <Users className="h-8 w-8 text-unblue" />
  }
];
