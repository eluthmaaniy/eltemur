export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  serviceType: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  audience: string[];
  problems: { title: string; text: string }[];
  builds: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  technologies: string[];
  technologyNote: string;
  projectSlugs: string[];
  faqs: ServiceFaq[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "saas-development",
    serviceType: "SaaS product development",
    h1: "SaaS development for Nigerian businesses",
    metaTitle: "SaaS Development Company in Nigeria | Eltemur Zentra Studio",
    metaDescription:
      "Eltemur Zentra Studio designs and builds SaaS products in Nigeria, including accounts, billing, dashboards, and the core workflow customers use.",
    lede: "Eltemur Zentra Studio builds SaaS products: software a customer can sign up for, use in the browser, and pay for. The work is scoped around one core workflow, not a pile of unrelated screens.",
    audience: [
      "A founder who needs the first version of a subscription product.",
      "A business that wants to turn a repeated service into software people can use themselves.",
      "A team that already has customers and needs accounts, billing, and a clearer product workflow.",
    ],
    problems: [
      {
        title: "The offer only works if someone does it by hand",
        text: "If every customer needs a manual setup, the service is hard to repeat. A SaaS product gives each person an account and a path through the same workflow.",
      },
      {
        title: "Payments and access are disconnected",
        text: "People pay in one place and get access in another. Completed products from Eltemur Zentra Studio use Paystack so billing and access can sit in the same product.",
      },
      {
        title: "The first version tries to include every idea",
        text: "A SaaS launch needs the workflow a customer will actually use. Extra modules can wait until that path is working.",
      },
    ],
    builds: [
      "Subscription products with a defined plan and a way to pay.",
      "Customer dashboards that show the result of the workflow, such as a score, a list, or the next action.",
      "User accounts, so the same person can return to their data.",
      "Billing with Paystack, which is the payment provider used on Scoutier, Shopidict, UIPrep, and Passcarda.",
      "Admin tools when someone on the business side needs to update content or review records.",
      "Product areas such as usage records or notifications, when the workflow needs them and they are included in the agreed scope.",
    ],
    deliverables: [
      "A written scope for the first version: who it is for, the main workflow, and what is left out.",
      "The account and product screens required for that workflow.",
      "A payment path when the product charges customers.",
      "A deployed web application the business can put in front of users.",
      "A short handover covering how to operate what was launched.",
    ],
    process: [
      {
        title: "Discovery",
        text: "We name the customer, the job the product does for them, and the smallest workflow that proves the product is useful.",
      },
      {
        title: "Planning and design",
        text: "We map signup, the core task, and the payment or upgrade step before build starts.",
      },
      {
        title: "Development and testing",
        text: "We build the product and test the account, workflow, and payment path in the browsers it needs to support.",
      },
      {
        title: "Launch and support",
        text: "We help put the product live and stay available for fixes and the next slice of work.",
      },
    ],
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "Paystack"],
    technologyNote:
      "These are technologies used on shipped SaaS products such as Scoutier and Shopidict. A new product uses this set only when it fits the workflow.",
    projectSlugs: ["scoutier", "shopidict"],
    faqs: [
      {
        question: "Does Eltemur Zentra Studio build SaaS products?",
        answer:
          "Yes. Eltemur Zentra Studio builds SaaS products with accounts and a core workflow. Scoutier and Shopidict are two products built this way, and both take payment through Paystack.",
      },
      {
        question: "Can a SaaS product charge customers in Nigeria?",
        answer:
          "Yes. The shipped products that charge customers use Paystack. The plan names and prices are decided for that product. This site does not publish a standard SaaS price.",
      },
      {
        question: "What should the first version include?",
        answer:
          "An account, the main task the customer came to do, and a way to pay if the product is paid. Admin tools, extra reports, and notifications belong in the scope only when that first task needs them.",
      },
    ],
  },
  {
    slug: "website-development",
    serviceType: "Website development",
    h1: "Website development for Nigerian businesses",
    metaTitle: "Website Development Company in Nigeria | Eltemur Zentra Studio",
    metaDescription:
      "Eltemur Zentra Studio builds business, portfolio, and product websites in Nigeria, with a clear way for people to enquire.",
    lede: "Eltemur Zentra Studio builds websites that explain an offer, show the work, and give a person a direct way to enquire. A website in this sense is a public site, not a private tool for running the business.",
    audience: [
      "A specialist or agency that needs a public site for services, work, and contact.",
      "A business that needs a company site people can read on a phone.",
      "A product team that needs a landing page pointing to the product or an enquiry.",
    ],
    problems: [
      {
        title: "The business is hard to understand from the current site",
        text: "Visitors should be able to see what is offered, who it is for, and how to make contact without hunting through the page.",
      },
      {
        title: "The work is not shown",
        text: "Portfolio and company sites built by Eltemur Zentra Studio include selected work, so a visitor can see the practice before they enquire.",
      },
      {
        title: "Updates require a code change",
        text: "When the content will change often, the site can include a content system. The Mayus Alaro site uses Supabase and an admin panel for that reason.",
      },
    ],
    builds: [
      "Business and company websites.",
      "Portfolio websites for independent specialists.",
      "Product landing pages that explain the product and link to it.",
      "Payment-enabled pages when the site itself needs to take a fee, using a provider already used in our products, Paystack.",
      "Responsive pages for phones, tablets, and desktop screens.",
      "Search-friendly pages with a unique title, description, and readable text.",
    ],
    deliverables: [
      "A page structure covering the offer, the work, and contact.",
      "The designed and developed pages, readable on small and large screens.",
      "A contact path, such as a form, email link, or WhatsApp link.",
      "Basic metadata for each public page: title, description, and a share preview.",
      "Launch support for the public site.",
    ],
    process: [
      {
        title: "Discovery",
        text: "We confirm who the site is for, what they need to understand, and which pages are actually required.",
      },
      {
        title: "Planning and design",
        text: "We set the page list and the content each page must carry before the build.",
      },
      {
        title: "Development and testing",
        text: "We build the site and check it on phone and desktop widths, including the contact path.",
      },
      {
        title: "Launch and support",
        text: "We help publish the site and stay available for corrections after it is live.",
      },
    ],
    technologies: ["Next.js", "TanStack Start", "React", "TypeScript", "Tailwind CSS", "Vite", "Supabase"],
    technologyNote:
      "Portfolio and marketing sites already shipped use Next.js or TanStack Start, with React, TypeScript, and Tailwind CSS. Supabase is used where the site has an admin panel, as on the Mayus Alaro site.",
    projectSlugs: [
      "eldev-digital",
      "mayus-alaro",
      "beeba-expert",
      "bofowo-agency",
      "rasab-junior",
      "sumar-ecom-support",
      "adoltech",
      "rafad-expert",
    ],
    faqs: [
      {
        question: "What kinds of websites has Eltemur Zentra Studio built?",
        answer:
          "Public portfolio and marketing websites for independent specialists, including Eldev Digital, Mayus Alaro, Beeba Expert, Bofowo Agency, and Rasab Junior. Some of those practices focus on Shopify. The sites Eltemur Zentra Studio built are the public websites, not the stores themselves.",
      },
      {
        question: "Do you build online stores?",
        answer:
          "A website can include a payment step when the project needs one. Paystack is the payment provider used on products shipped by Eltemur Zentra Studio. A full store, with a catalogue and checkout, is a separate scope from a company or portfolio site.",
      },
      {
        question: "Will the website work on a phone?",
        answer:
          "Yes. Pages are built for phone, tablet, and desktop screens. The layout is checked at those sizes before launch.",
      },
    ],
  },
  {
    slug: "web-application-development",
    serviceType: "Web application development",
    h1: "Web application development in Nigeria",
    metaTitle: "Web Application Development in Nigeria | Eltemur Zentra Studio",
    metaDescription:
      "Eltemur Zentra Studio builds custom web applications in Nigeria, including practice tools, portals, dashboards, and payment flows.",
    lede: "A web application is software people use in the browser to complete a task: answer questions, manage records, or run a workflow. Eltemur Zentra Studio builds that kind of product when a public website cannot do the job.",
    audience: [
      "A business that needs customers or staff to complete a task online.",
      "A team that has outgrown spreadsheets for a specific workflow.",
      "An education or exam product that needs practice, results, and paid access.",
    ],
    problems: [
      {
        title: "A brochure site cannot hold the workflow",
        text: "If people need accounts, records, or a result at the end of a task, the product is a web application.",
      },
      {
        title: "The data has no single place to live",
        text: "Web applications shipped by Eltemur Zentra Studio use a database, including Supabase on UIPrep, Passcarda, and the Mayus Alaro admin.",
      },
      {
        title: "Payment is separate from the product",
        text: "UIPrep and Passcarda connect practice access to Paystack, so a paid plan is part of the application rather than a manual transfer.",
      },
    ],
    builds: [
      "Customer portals for a defined task.",
      "Internal tools and admin panels for updating content or reviewing records.",
      "Dashboards that summarise the work, such as a score or a history.",
      "Management screens for records the business has to keep.",
      "Data-driven applications, including exam practice products.",
      "Workflow tools with a start, a task, and a result.",
      "API-backed features where the product already uses a service such as Supabase or Paystack.",
    ],
    deliverables: [
      "A scoped workflow, including what a user can and cannot do.",
      "The application screens for that workflow.",
      "Accounts and data storage when the product needs them.",
      "A payment step when access or a report is paid.",
      "Deployment and a handover of how the application is operated.",
    ],
    process: [
      {
        title: "Discovery",
        text: "We write down the task, the person doing it, and the record or result the application must produce.",
      },
      {
        title: "Planning and design",
        text: "We map the screens and the states that matter, including empty, error, and paid states.",
      },
      {
        title: "Development and testing",
        text: "We build the application and test the main path, including sign-in and payment when those are in scope.",
      },
      {
        title: "Launch and support",
        text: "We deploy the application and stay available for fixes after people start using it.",
      },
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Paystack", "Next.js"],
    technologyNote:
      "UIPrep and Passcarda use React, TypeScript, Vite, Tailwind CSS, Supabase, and Paystack. The Mayus Alaro site adds a Next.js admin panel on Supabase. A new application uses these only when they fit.",
    projectSlugs: ["uiprep", "passcarda", "mayus-alaro"],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer:
          "A website explains an offer and gives people a way to enquire. A web application asks them to complete a task, such as practising questions, managing records, or viewing a result. Eltemur Zentra Studio builds both. The choice depends on the job.",
      },
      {
        question: "Can the application take payments?",
        answer:
          "Yes, when payment is part of the scope. UIPrep and Passcarda use Paystack for paid access. Prices are set per product and are not listed as a standard rate on this site.",
      },
      {
        question: "Do you build internal tools as well as public products?",
        answer:
          "Yes. The Mayus Alaro site includes an admin panel so content can be updated without a code change. An internal tool is scoped the same way as any other application: one workflow, then the screens it needs.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    serviceType: "Mobile application development",
    h1: "Mobile app development in Nigeria",
    metaTitle: "Mobile App Development Company in Nigeria | Eltemur Zentra Studio",
    metaDescription:
      "Eltemur Zentra Studio builds Android and cross-platform mobile apps in Nigeria, including offline tools and product companion apps.",
    lede: "Eltemur Zentra Studio builds mobile applications when the product belongs on a phone. Shipped work includes an offline Android app and an Android companion for a product that also runs on the web and Windows.",
    audience: [
      "A product that people will use away from a desk.",
      "A tool that must keep working without a connection.",
      "A SaaS product that needs a phone app beside the web version.",
    ],
    problems: [
      {
        title: "The task happens on a phone",
        text: "If the person is not at a computer, a mobile app is the practical place for the workflow. GradeNG is an Android app for checking CGPA on the phone.",
      },
      {
        title: "The work has to continue offline",
        text: "GradeNG stores semesters and courses on the device, so a student can update a record without a connection.",
      },
      {
        title: "The phone app and the web product are separate accounts",
        text: "Scoutier uses one account across web, Windows, and Android. The Android app is part of the same product, not a second database.",
      },
    ],
    builds: [
      "Android applications. GradeNG is a Flutter app, and Scoutier is on Google Play.",
      "Cross-platform applications where one product already covers web and Android, as Scoutier does with Capacitor.",
      "Companion apps for a product that also has a website.",
      "Business and education tools that belong on a phone.",
      "Deployment support for a Play listing when that is part of the scope. GradeNG does not have a public store link listed yet.",
    ],
    deliverables: [
      "A mobile scope: the task, the platform, and whether it must work offline.",
      "The app screens for that task.",
      "An installable Android build.",
      "Store listing support when a public Play release is in scope.",
      "A handover covering how the app is updated.",
    ],
    process: [
      {
        title: "Discovery",
        text: "We confirm the phone task, whether Android is the platform, and whether the app must work offline.",
      },
      {
        title: "Planning and design",
        text: "We map the screens at phone size, including the empty state and the record the person is trying to keep.",
      },
      {
        title: "Development and testing",
        text: "We build the app and test it on Android. Where the product also has a web or desktop version, we test that the account or data behaves as scoped.",
      },
      {
        title: "Launch and support",
        text: "We help ship the build and stay available for fixes after release.",
      },
    ],
    technologies: ["Flutter", "Dart", "Capacitor", "React", "TypeScript"],
    technologyNote:
      "GradeNG is built with Flutter and Dart. Scoutier’s Android app uses Capacitor with the React and TypeScript product. This site does not claim a shipped native iOS app.",
    projectSlugs: ["gradeng", "scoutier"],
    faqs: [
      {
        question: "Does Eltemur Zentra Studio build Android apps?",
        answer:
          "Yes. GradeNG is an offline Android app for CGPA calculation. Scoutier also has an Android app on Google Play, beside its web and Windows versions.",
      },
      {
        question: "Do you build iPhone apps?",
        answer:
          "No iOS app is listed in the completed work. The shipped mobile work is Android: Flutter for GradeNG, and Capacitor for Scoutier.",
      },
      {
        question: "Can the app work without internet?",
        answer:
          "Yes, when that is the point of the product. GradeNG is offline and can export a JSON backup. A connected product, such as Scoutier, uses the network for the account.",
      },
    ],
  },
  {
    slug: "mvp-startup-development",
    serviceType: "MVP and startup development",
    h1: "MVP and startup product development",
    metaTitle: "MVP and Startup Development in Nigeria | Eltemur Zentra Studio",
    metaDescription:
      "Eltemur Zentra Studio plans and builds a first working product version so a startup in Nigeria can launch and learn from real use.",
    lede: "An MVP is the first working version of a product, limited to the features needed to launch and learn. Eltemur Zentra Studio scopes that version, builds it, and stays available after it is in use.",
    audience: [
      "A founder with a clear problem and no working product yet.",
      "A startup that needs to test payment, signup, or the core task with real people.",
      "A team that wants a smaller first release instead of a long build.",
    ],
    problems: [
      {
        title: "The idea is larger than the first release",
        text: "The first version should prove one workflow. Scoutier launched around outreach from the user’s own mail app. Shopidict launched around one store audit.",
      },
      {
        title: "There is no way to learn from use",
        text: "A clickable picture is not enough when the question is whether people will sign up, pay, or finish the task. The first version has to be usable.",
      },
      {
        title: "Payment is left until later, then blocks the launch",
        text: "If the test includes a paid step, Paystack can be part of the first version. That is how Scoutier, Shopidict, UIPrep, and Passcarda charge.",
      },
    ],
    builds: [
      "Product discovery: the user, the problem, and the first workflow.",
      "Feature prioritisation so the first release stays small enough to ship.",
      "A prototype or first release people can actually use.",
      "Authentication when the product needs accounts.",
      "Payment integration with Paystack when the first version charges.",
      "A simple admin path when someone must update content or review records.",
      "Testing of the main path, then deployment.",
      "Post-launch fixes and the next agreed slice of work.",
    ],
    deliverables: [
      "A short scope that says what the first version includes and what it leaves out.",
      "The working product for that scope.",
      "Accounts and payment only when the test needs them.",
      "A deployed version a real user can open.",
      "A follow-up path for fixes after launch.",
    ],
    process: [
      {
        title: "Discovery",
        text: "We write the problem, the user, and the single outcome the first version must produce.",
      },
      {
        title: "Planning and design",
        text: "We cut the feature list to what that outcome needs, then map those screens.",
      },
      {
        title: "Development and testing",
        text: "We build the first version and test the path from arrival to the outcome, including payment if it is in scope.",
      },
      {
        title: "Launch and support",
        text: "We help put it in front of users and use what happens next to decide the following slice of work.",
      },
    ],
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Paystack", "Flutter", "Dart", "Tailwind CSS"],
    technologyNote:
      "First versions already shipped use this set where it matched the product: React and Supabase for web products, Paystack when they charge, and Flutter for the offline Android app GradeNG.",
    projectSlugs: ["scoutier", "shopidict", "uiprep", "gradeng", "passcarda"],
    faqs: [
      {
        question: "What does a first version usually include?",
        answer:
          "The task a user must complete, and only the accounts, payment, or admin tools that task requires. Eltemur Zentra Studio does not publish a fixed feature list or a fixed price for every startup.",
      },
      {
        question: "Can you launch a paid product in the first version?",
        answer:
          "Yes, when payment is part of the test. Scoutier, Shopidict, UIPrep, and Passcarda use Paystack. The amount charged is a decision for that product.",
      },
      {
        question: "Do you stay after launch?",
        answer:
          "Yes. Launch is followed by fixes and the next set of improvements that the use of the product justifies.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function servicesForProject(slug: string) {
  return servicePages.filter((page) => page.projectSlugs.includes(slug));
}
