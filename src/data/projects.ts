import { Project } from "../types/project";

export const projects: Project[] = [
  { 
    id: 1, 
    name: "Smart Water Conservation", 
    category: "Water Conservation", 
    description: "AI-driven water management system that reduces waste by 40%",
    longDescription: "Our Smart Water Conservation project integrates IoT sensors with AI algorithms to monitor, analyze, and optimize water usage in urban environments. The system identifies leaks, predicts consumption patterns, and automatically adjusts supply to minimize waste. Implementation in pilot cities has shown a 40% reduction in water waste and a 25% decrease in overall consumption, demonstrating the potential for significant environmental and economic benefits at scale.",
    investmentRequired: 50000, 
    roi: 12, 
    duration: "12 months", 
    location: "California, USA", 
    fundingProgress: 75, 
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1580845753633-a57de3ca7fbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    impact: {
      environmental: "40% reduction in water waste",
      social: "Improved water access for 50,000 people",
      economic: "$1.2M annual savings for municipalities"
    },
    milestones: [
      { date: "Q1 2023", title: "Pilot Launch", description: "Initial deployment in 3 cities" },
      { date: "Q2 2023", title: "Data Collection", description: "Analysis of water usage patterns" },
      { date: "Q3 2023", title: "System Optimization", description: "Algorithm refinement based on initial data" },
      { date: "Q4 2023", title: "Full Deployment", description: "Expansion to 15 additional municipalities" }
    ],
    team: [
      { name: "Dr. Sarah Chen", role: "Project Lead", imageUrl: "https://randomuser.me/api/portraits/women/23.jpg" },
      { name: "Mark Rivera", role: "Water Systems Engineer", imageUrl: "https://randomuser.me/api/portraits/men/41.jpg" },
      { name: "Priya Sharma", role: "AI Specialist", imageUrl: "https://randomuser.me/api/portraits/women/63.jpg" }
    ]
  },
  { 
    id: 2, 
    name: "AI-Based Irrigation", 
    category: "Irrigation", 
    description: "Smart irrigation system using machine learning to optimize water use",
    longDescription: "Our AI-Based Irrigation system combines soil moisture sensors, weather forecasting, and machine learning to deliver precisely the right amount of water to crops at exactly the right time. The technology adapts to changing conditions and learns from past patterns to continually improve efficiency. Farmers using our system report up to 30% water savings while maintaining or improving crop yields, making agriculture more sustainable and profitable.",
    investmentRequired: 30000, 
    roi: 10, 
    duration: "8 months", 
    location: "India", 
    fundingProgress: 60,
    imageUrl: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    impact: {
      environmental: "30% reduction in agricultural water use",
      social: "Supporting 200+ small-scale farmers",
      economic: "20% increase in crop yield efficiency"
    },
    milestones: [
      { date: "Month 1-2", title: "Sensor Network Setup", description: "Installation across test farms" },
      { date: "Month 3-4", title: "Algorithm Development", description: "Creation of ML models for water optimization" },
      { date: "Month 5-6", title: "Testing & Calibration", description: "Real-world testing and system refinement" },
      { date: "Month 7-8", title: "Farmer Training", description: "Knowledge transfer to local communities" }
    ],
    team: [
      { name: "Rajiv Patel", role: "Agricultural Engineer", imageUrl: "https://randomuser.me/api/portraits/men/32.jpg" },
      { name: "Emma Johnson", role: "ML Developer", imageUrl: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "Amir Khan", role: "Field Operations", imageUrl: "https://randomuser.me/api/portraits/men/57.jpg" }
    ]
  },
  { 
    id: 3, 
    name: "Renewable Energy for Water Plants", 
    category: "Renewable Energy", 
    description: "Solar-powered water treatment plants reducing carbon footprint by 80%",
    longDescription: "This project integrates cutting-edge solar power systems with advanced water treatment facilities to create energy-independent, environmentally friendly water infrastructure. By replacing traditional grid-dependent plants with our renewable solution, communities can ensure clean water access while dramatically reducing carbon emissions. The modular design allows for flexible implementation in various settings, from urban centers to remote rural communities, bringing sustainable water solutions to diverse populations.",
    investmentRequired: 80000, 
    roi: 15, 
    duration: "18 months", 
    location: "Germany", 
    fundingProgress: 40, 
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    impact: {
      environmental: "80% reduction in carbon emissions",
      social: "Clean water for 100,000+ people",
      economic: "60% reduction in operational costs long-term"
    },
    milestones: [
      { date: "Month 1-3", title: "Site Planning", description: "Selection and assessment of locations" },
      { date: "Month 4-9", title: "Solar Array Installation", description: "Deployment of renewable energy components" },
      { date: "Month 10-15", title: "Plant Integration", description: "Connecting solar systems to water facilities" },
      { date: "Month 16-18", title: "Optimization & Training", description: "System tuning and staff training" }
    ],
    team: [
      { name: "Dr. Klaus Mueller", role: "Energy Systems Expert", imageUrl: "https://randomuser.me/api/portraits/men/22.jpg" },
      { name: "Sofia Garcia", role: "Water Treatment Specialist", imageUrl: "https://randomuser.me/api/portraits/women/28.jpg" },
      { name: "Thomas Weber", role: "Project Manager", imageUrl: "https://randomuser.me/api/portraits/men/53.jpg" }
    ]
  },
  { 
    id: 4, 
    name: "Eco-Friendly Farming", 
    category: "Sustainable Agriculture", 
    description: "Regenerative agriculture practices enhancing soil health and biodiversity",
    longDescription: "Our Eco-Friendly Farming initiative promotes regenerative agricultural practices that restore soil health, enhance biodiversity, and sequester carbon. The program includes comprehensive training for farmers, provision of organic inputs, and innovative techniques for natural pest management. Participating farms have seen soil organic matter increase by up to 3% within two years, leading to improved water retention, reduced erosion, and enhanced crop resilience to extreme weather events.",
    investmentRequired: 25000, 
    roi: 9, 
    duration: "10 months", 
    location: "Australia", 
    fundingProgress: 50,
    imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    impact: {
      environmental: "200% increase in biodiversity, carbon sequestration",
      social: "Supporting 50 family farms",
      economic: "15% premium on sustainable produce"
    },
    milestones: [
      { date: "Month 1-2", title: "Farmer Recruitment", description: "Selection of participating farms" },
      { date: "Month 3-4", title: "Training Program", description: "Education on regenerative techniques" },
      { date: "Month 5-7", title: "Implementation", description: "Transition to sustainable practices" },
      { date: "Month 8-10", title: "Certification & Market Access", description: "Eco-certification and market connection" }
    ],
    team: [
      { name: "Lisa Chen", role: "Sustainable Agriculture Expert", imageUrl: "https://randomuser.me/api/portraits/women/66.jpg" },
      { name: "David Cooper", role: "Soil Scientist", imageUrl: "https://randomuser.me/api/portraits/men/39.jpg" },
      { name: "Emma Williams", role: "Farmer Liaison", imageUrl: "https://randomuser.me/api/portraits/women/50.jpg" }
    ]
  }
];

export const categories = ["All", "Water Conservation", "Irrigation", "Renewable Energy", "Sustainable Agriculture"];
export const sortOptions = ["Newest", "Highest ROI", "Most Funded"];
