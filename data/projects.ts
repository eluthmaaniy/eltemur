export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectLogo = {
  src: string;
  fit: "contain" | "cover";
  focus?: "center" | "top";
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: string;
  platforms: string[];
  technologies: string[];
  links: ProjectLink[];
  group: "product" | "website";
  featured?: boolean;
  logo?: ProjectLogo;
  problem?: string;
  solution?: string;
  features?: string[];
};

export const projects: Project[] = [
  {
    slug: "scoutier",
    name: "Scoutier",
    summary:
      "Personalized email outreach for the web, Windows, and Android. People find public addresses, clean a list, personalize the message, and send it from their own mail app.",
    category: "SaaS product",
    platforms: ["Web", "Windows", "Android"],
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Capacitor", "Paystack"],
    links: [
      { label: "Website", href: "https://scoutier.com.ng" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.scoutier.app",
      },
    ],
    group: "product",
    featured: true,
    logo: { src: "/projects/scoutier.png", fit: "contain" },
    problem:
      "The product was built for people who need outreach at scale without an expensive, complicated tool, and with pricing that can be paid locally.",
    solution:
      "Scoutier lets someone scout public website pages or upload a list, personalize messages, and open each message in their own mail app. The same account works on the web, Windows, and Android. The product does not send mail from its own servers.",
    features: [
      "Website Scout for addresses published on public pages",
      "Paste or upload CSV, TXT, and Excel lists, then clean and deduplicate them",
      "Personalization for name, company, and website",
      "Templates and rotating message batches",
      "Sending through the person’s own mail app, including a Windows installer and an Android app",
      "Paystack billing",
    ],
  },
  {
    slug: "shopidict",
    name: "Shopidict",
    summary:
      "An online store audit tool. It reviews a store and shows a score, the revenue impact, and the most important issue.",
    category: "SaaS product",
    platforms: ["Web"],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Paystack"],
    links: [{ label: "Website", href: "https://shopidict.com" }],
    group: "product",
    featured: true,
    logo: { src: "/projects/shopidict.png", fit: "contain" },
    problem:
      "Store owners can lose conversions to issues in the customer journey that are hard to see from the storefront alone.",
    solution:
      "Shopidict audits an online store and presents the score, the revenue impact, and the highest-priority issue, with a free audit before a paid report.",
    features: [
      "Store analysis aimed at conversion issues",
      "A score, revenue impact, and the main issue",
      "Recommendations for what to fix",
      "One free audit per store, with an upgrade to send the report",
      "Paystack payments",
    ],
  },
  {
    slug: "uiprep",
    name: "UIPrep",
    summary:
      "A practice product for University of Ibadan Post-UTME past questions, including explanations, Roman Series questions, and mock exams.",
    category: "Web application",
    platforms: ["Web"],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Paystack"],
    links: [{ label: "Website", href: "https://uipostutme.com" }],
    group: "product",
    featured: true,
    logo: { src: "/projects/uiprep.png", fit: "cover" },
    problem:
      "Candidates preparing for the University of Ibadan Post-UTME need past questions in the formats that exam actually uses, including Roman Series items.",
    solution:
      "UIPrep is a web app for practising UI Post-UTME questions in Arts, Science, and Commercial, with explanations, mock exams, and paid access through Paystack.",
    features: [
      "University of Ibadan Post-UTME past questions",
      "Arts, Science, and Commercial papers",
      "Standard questions and Roman Series questions",
      "Explanations and mock exams",
      "Free and premium access through Paystack",
    ],
  },
  {
    slug: "gradeng",
    name: "GradeNG",
    summary:
      "An offline Android app for calculating CGPA under Nigerian university and polytechnic grading systems.",
    category: "Mobile application",
    platforms: ["Android"],
    technologies: ["Flutter", "Dart"],
    links: [],
    group: "product",
    featured: true,
    logo: { src: "/projects/gradeng.png", fit: "cover" },
    problem:
      "Students need a CGPA record they can update and check without depending on a connection or a school portal.",
    solution:
      "GradeNG is an offline Flutter app for tracking semesters and courses, viewing CGPA, predicting grades, and exporting a backup.",
    features: [
      "Semester and course tracking",
      "5-point NUC, 4-point, and polytechnic grading systems",
      "CGPA dashboard with trend charts",
      "Grade predictor and target CGPA simulator",
      "Report card capture, share, and gallery save",
      "JSON backup export and import",
      "Light, dark, and system themes",
    ],
  },
  {
    slug: "passcarda",
    name: "Passcarda",
    summary:
      "A web app for practising JAMB and post-UTME past questions, with explanations and timed mock exams.",
    category: "Web application",
    platforms: ["Web"],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Paystack"],
    links: [],
    group: "product",
    problem:
      "Candidates preparing for JAMB and post-UTME need past questions, explanations, and timed practice in one place.",
    solution:
      "Passcarda is a practice app where someone chooses JAMB subjects or a post-UTME school, answers past questions, and reviews the result.",
    features: [
      "JAMB subject practice and post-UTME school practice",
      "Past questions with explanations on the paid plans",
      "Timed mock exams",
      "Score history",
      "Paystack payments",
    ],
  },
  {
    slug: "eldev-digital",
    name: "Eldev Digital",
    summary:
      "Portfolio website for Eldev Digital, the Shopify practice of Uthman Eldev.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["TanStack Start", "React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [{ label: "Website", href: "https://eldev.digital" }],
    group: "website",
    solution:
      "A public portfolio that presents Shopify services, selected work, reviews, and a contact path.",
  },
  {
    slug: "mayus-alaro",
    name: "Mayus Alaro",
    summary:
      "Marketing site for Mayus Alaro, with a Supabase-backed content system and an admin panel.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [{ label: "Website", href: "https://mayusalaro.me" }],
    group: "website",
    featured: true,
    logo: { src: "/projects/mayus-alaro.jpg", fit: "cover" },
    solution:
      "A Next.js marketing site whose profile, skills, and related content can be updated from an admin panel instead of a code change.",
    features: [
      "Public marketing pages",
      "Supabase database with row-level security",
      "Admin panel for content updates",
      "Contact messages stored through an API route",
    ],
  },
  {
    slug: "beeba-expert",
    name: "Beeba Expert",
    summary:
      "Portfolio website for Beeba Expert, a Shopify and ecommerce specialist.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://beebaexpert.com" }],
    group: "website",
    featured: true,
    logo: { src: "/projects/beeba-expert.jpg", fit: "cover", focus: "top" },
    solution:
      "A multi-page portfolio covering the practice, client reviews, store showcases, and contact.",
  },
  {
    slug: "bofowo-agency",
    name: "Bofowo Agency",
    summary:
      "Portfolio website for Bofowo Agency, a Shopify and ecommerce specialist.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://bofowoagency.com" }],
    group: "website",
    solution:
      "A portfolio site for services, store work, reviews, and enquiries.",
  },
  {
    slug: "rasab-junior",
    name: "Rasab Junior",
    summary:
      "Portfolio website for Rasab Junior, a Shopify and digital marketing specialist.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://rasabjunior.pro" }],
    group: "website",
    solution:
      "A portfolio site presenting Shopify and marketing services, project work, reviews, and contact.",
  },
  {
    slug: "sumar-ecom-support",
    name: "Sumar Ecom Support",
    summary:
      "Portfolio website for Sumar Ecom Support, a Shopify specialist practice.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["TanStack Start", "React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [],
    group: "website",
    solution:
      "A portfolio site with services, project galleries, reviews, and a contact page.",
  },
  {
    slug: "adoltech",
    name: "Adoltech",
    summary:
      "Portfolio website for Adebisi Olamide (Adoltech), focused on Shopify store work.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["TanStack Start", "React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [],
    group: "website",
    solution:
      "A portfolio site covering Shopify services, selected projects, reviews, and contact.",
  },
  {
    slug: "rafad-expert",
    name: "Rafad Expert",
    summary:
      "Portfolio website for Rafad Expert, a Shopify and digital marketing specialist.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [],
    group: "website",
    solution:
      "A multi-page portfolio with home, services, portfolio, reviews, and contact routes.",
    features: [
      "Home, services, and contact pages",
      "Portfolio and full portfolio views",
      "Reviews with a load-more view",
    ],
  },
  {
    slug: "adex",
    name: "Adex",
    summary: "Portfolio website for Adex, a Shopify store expert.",
    category: "Website",
    platforms: ["Web"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Website", href: "https://adex.com.ng" }],
    group: "website",
    solution:
      "A personal portfolio covering Shopify services, storefront work, client reviews, and enquiries.",
  },
];

export const productProjects = projects.filter((project) => project.group === "product");
export const websiteProjects = projects.filter((project) => project.group === "website");
export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
