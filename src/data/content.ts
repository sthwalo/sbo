export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  email: string;
  address: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  images: GalleryImage[];
}

export const companyInfo = {
  name: "SboBlessed Consulting",
  tagline: "Empowering Skills. Transforming Futures.",
  description: "Professional Skills Development and Training consultancy specialising in design, facilitation, and implementation of skills development solutions."
};

export const aboutContent = {
  intro: "SboBlessed Consulting is a professional Skills Development and Training consultancy specialising in the design, facilitation, and implementation of skills development solutions for individuals, organisations, and communities across South Africa.",
  accreditation: "We are an accredited training provider, offering both credit-bearing and non-credit-bearing programmes, delivered through physical (in-person) and virtual training platforms. Our work is aligned with national skills development priorities and SETA requirements, ensuring compliance, impact, and measurable outcomes."
};

export const services: Service[] = [
  {
    id: "skills-development",
    title: "Skills Development Training",
    description: "High-quality, outcomes-driven training programmes tailored to organisational and sector needs.",
    details: [
      "Credit-bearing training programmes",
      "Non-credit-bearing short courses",
      "Customised workplace training",
      "Virtual and in-person training delivery"
    ]
  },
  {
    id: "accredited-training",
    title: "Accredited Training Provider",
    description: "As an accredited provider, we ensure all training meets the highest standards.",
    details: [
      "Meets SETA and QCTO requirements",
      "Facilitated by qualified and registered professionals",
      "Proper assessment and moderation processes",
      "Results in recognised credits where applicable"
    ]
  },
  {
    id: "sdf-services",
    title: "Skills Development Facilitation (SDF)",
    description: "End-to-end SDF services to maximise participation in national skills initiatives and SETA-funded programmes.",
    details: [
      "Workplace Skills Plan (WSP) development",
      "Annual Training Report (ATR) submission",
      "SETA compliance and liaison",
      "Skills development strategy implementation",
      "Monitoring and reporting on training outcomes"
    ]
  },
  {
    id: "seta-support",
    title: "SETA Programme Support",
    description: "Assist organisations to access and participate in various SETA-funded initiatives.",
    details: [
      "Bursaries",
      "Skills Development Programmes",
      "Accredited Training",
      "Learnerships",
      "Internships",
      "Work-Integrated Learning programmes"
    ]
  },
  {
    id: "assessment-moderation",
    title: "Assessment, Moderation & Facilitation",
    description: "Qualified and registered professionals ensuring credibility and compliance.",
    details: [
      "Assessors",
      "Moderators",
      "Facilitators"
    ]
  },
  {
    id: "disability-inclusion",
    title: "Disability Skills Development & Inclusion",
    description: "Committed to inclusive skills development with a database of over 500 individuals living with disabilities.",
    details: [
      "Skills development programmes for persons with disabilities",
      "Support for employment equity and skills development targets",
      "SETA-compliant disability-focused training interventions",
      "Dedicated SDF services to disability-focused initiatives"
    ]
  }
];

export const wellnessServices = {
  title: "Employee Wellness & Health Screening Services",
  intro: "We believe that a healthy workforce is the foundation of a productive, resilient, and successful organisation. Our Employee Wellness Services help companies proactively understand, support, and improve the overall wellbeing of their employees.",
  flyInProgram: {
    title: "Fly-In Health Screening Programmes",
    description: "On-site, fly-in health screening services, bringing a multidisciplinary team of qualified healthcare professionals directly to your workplace — wherever you are located."
  },
  professionals: [
    "Nurses and Primary Healthcare Practitioners",
    "Medical Doctors",
    "Occupational Health Practitioners",
    "Dietitians and Nutrition Specialists",
    "Mental Health Practitioners / Counsellors",
    "Fitness and Lifestyle Coaches"
  ],
  screenings: [
    "Blood pressure and cardiovascular risk screening",
    "Blood glucose and cholesterol testing",
    "Body mass index (BMI) and weight assessments",
    "Vision and hearing screening",
    "Mental wellness and stress assessments",
    "Lifestyle and chronic disease risk assessments"
  ],
  reportBenefits: [
    "Understand common health risks within your organisation",
    "Identify trends related to lifestyle, stress, and chronic conditions",
    "Make informed decisions on wellness interventions and benefits",
    "Plan targeted health programmes and preventative strategies"
  ],
  investmentBenefits: [
    "Improved employee health and morale",
    "Reduced absenteeism and presenteeism",
    "Early detection of health risks",
    "Increased productivity and engagement",
    "Demonstrated commitment to employee care"
  ]
};

export const whyChooseUs = [
  "Accredited and compliant training provider",
  "Experienced Skills Development Facilitators",
  "Flexible delivery: physical and virtual training",
  "Strong SETA and regulatory knowledge",
  "Proven capacity in inclusive skills development",
  "End-to-end support from planning to reporting"
];

export const ourApproach = [
  "Identify skills gaps",
  "Design targeted training solutions",
  "Ensure compliance and funding optimisation",
  "Deliver measurable impact"
];

export const whoWeServe = [
  "Corporate organisations",
  "SMEs",
  "Government and public sector",
  "NGOs and community-based organisations",
  "Learners, graduates, and professionals"
];

export const contactInfo: ContactInfo = {
  name: "Sylvia Maseko-Mhlanga",
  role: "Skills Development Facilitator",
  phone: "0824355370",
  email: "Sylvia@sboblessedconsulting.co.za",
  address: "Suite 1018, 6 Waxbills street, Nelspruit 1200"
};

export const galleryEvents: GalleryEvent[] = [
  {
    id: "skills-workshop-2023",
    title: "Skills Development Workshop",
    description: "Interactive workshop on modern skills development strategies for corporate clients.",
    date: "December 2025",
    images: [
      {
        src: "/gallery/sb 1.jpeg",
        alt: "Workshop participants engaging in group discussion",
        caption: "Team collaboration session"
      },
      {
        src: "/gallery/sb 2.jpeg",
        alt: "Trainer presenting skills development concepts",
        caption: "Expert facilitation"
      },
      {
        src: "/gallery/sb 3.jpeg",
        alt: "Certificate presentation ceremony",
        caption: "Achievement celebration"
      }
    ]
  },
  {
    id: "wellness-day-2024",
    title: "Employee Wellness Day",
    description: "Comprehensive health screening and wellness activities for a leading manufacturing company.",
    date: "March 2024",
    images: [
      {
        src: "/gallery/sb 4.jpeg",
        alt: "Health screening station with medical professionals",
        caption: "On-site medical screening"
      },
      {
        src: "/gallery/sb 5.jpeg",
        alt: "Employees participating in fitness activities",
        caption: "Active wellness sessions"
      },
      {
        src: "/gallery/sb 6.jpeg",
        alt: "Nutrition counseling session",
        caption: "Dietary guidance"
      }
    ]
  },
  {
    id: "disability-awareness-2024",
    title: "Disability Inclusion Training",
    description: "Specialized training program promoting inclusive workplace practices and disability awareness.",
    date: "June 2024",
    images: [
      {
        src: "/gallery/sb 7.jpeg",
        alt: "Inclusive training session with diverse participants",
        caption: "Diverse participation"
      },
      {
        src: "/gallery/sb 8.jpeg",
        alt: "Accessibility demonstration",
        caption: "Practical accessibility training"
      },
      {
        src: "/gallery/sb 9.jpeg",
        alt: "Group discussion on inclusion strategies",
        caption: "Collaborative learning"
      }
    ]
  },
  {
    id: "additional-events",
    title: "Additional Training Events",
    description: "More highlights from our skills development and training programs.",
    date: "Various Dates",
    images: [
      {
        src: "/gallery/sb 10.jpeg",
        alt: "Training session in progress",
        caption: "Ongoing training"
      },
      {
        src: "/gallery/sb 11.jpeg",
        alt: "Team building activity",
        caption: "Collaborative exercises"
      },
      {
        src: "/gallery/sb 12.jpeg",
        alt: "Graduation ceremony",
        caption: "Success celebration"
      },
      {
        src: "/gallery/sb 13.jpeg",
        alt: "Event highlights",
        caption: "More moments"
      },
      {
        src: "/gallery/sb 14.jpeg",
        alt: "Additional event image",
        caption: "Further highlights"
      }
    ]
  }
];
