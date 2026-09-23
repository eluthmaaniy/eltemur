export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  servicePath: string;
  serviceLabel: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "website-or-web-application",
    title: "Website or web application: what should the business build?",
    metaTitle: "Website or Web Application | Eltemur Zentra Studio",
    description:
      "How to tell whether a Nigerian business needs a public website or a web application, using the kind of work Eltemur Zentra Studio already ships.",
    published: "2026-09-23",
    updated: "2026-09-23",
    servicePath: "/services/web-application-development",
    serviceLabel: "Web application development",
    sections: [
      {
        heading: "Choose the website when people need to understand the offer",
        paragraphs: [
          "A website is the right build when a visitor needs to read what the business does, see evidence of the work, and enquire. Eltemur Zentra Studio has built that kind of site for independent specialists, including portfolio pages, service pages, and a contact path.",
          "Those sites are public. They are not where a customer completes a long task, keeps a private record, or pays for ongoing access.",
        ],
      },
      {
        heading: "Choose the web application when people need to complete a task",
        paragraphs: [
          "A web application is the right build when someone must do something and get a result. UIPrep and Passcarda are practice applications: a candidate chooses a paper, answers questions, and reviews a score. That is not a brochure.",
          "The same test applies to an internal tool. The Mayus Alaro site has an admin panel because someone needs to update content without editing code. If the business has that kind of repeated task, scope an application.",
        ],
      },
      {
        heading: "A product can need both",
        paragraphs: [
          "Scoutier and Shopidict are SaaS products, and each also needs a public explanation of what it does. The marketing pages and the product are different jobs. Build the page that explains the offer, and build the application that does the work.",
          "Payment does not, by itself, turn a website into an application. Paystack is used on products that charge for access or a report. A company site can still be a website if the only action is an enquiry.",
        ],
      },
      {
        heading: "A practical way to decide",
        paragraphs: ["Write down the one thing a visitor should be able to finish. Then use that sentence."],
        list: [
          "If they should understand the offer and make contact, start with a website.",
          "If they should create a record, get a score, or come back to saved work, start with a web application.",
          "If they should pay to keep using a workflow, scope a product with accounts and Paystack, not only a page.",
        ],
      },
    ],
  },
  {
    slug: "what-to-include-in-a-first-version",
    title: "What a first product version should include",
    metaTitle: "What to Include in a First Product Version | Eltemur Zentra Studio",
    description:
      "A practical way to choose the first version of a startup product, based on products Eltemur Zentra Studio has already shipped.",
    published: "2026-09-23",
    updated: "2026-09-23",
    servicePath: "/services/mvp-startup-development",
    serviceLabel: "MVP and startup development",
    sections: [
      {
        heading: "Include the task, and leave the rest out",
        paragraphs: [
          "The first version should let one kind of user finish one job. Scoutier’s job is personalised outreach from the person’s own mail app. Shopidict’s job is one store audit that returns a score, the revenue impact, and the main issue. GradeNG’s job is an offline CGPA record.",
          "Features that do not serve that job can wait. A first version that tries to include every later idea takes longer and teaches less.",
        ],
      },
      {
        heading: "Add accounts only when the person must return",
        paragraphs: [
          "If the product stores a list, a score history, or a paid plan, it needs an account. Scoutier, Shopidict, UIPrep, and Passcarda use accounts. A simple public website does not need one.",
          "Supabase is the database used on those web products. It is a fit when the product needs users and saved data, not a default for every page.",
        ],
      },
      {
        heading: "Add payment when the test includes getting paid",
        paragraphs: [
          "If the question is whether people will pay, the first version should be able to take payment. The products that charge use Paystack. This site does not publish a standard price, because the amount depends on the product.",
          "If the first question is only whether people understand the offer, a website and an enquiry path are enough. Do not add billing to answer that question.",
        ],
      },
      {
        heading: "Keep an admin path small",
        paragraphs: [
          "Someone on the business side may need to update content or see a record. The Mayus Alaro site has an admin panel for that. Put it in the first version only when launching without it would block the product.",
        ],
        list: [
          "Write the user and the job in one sentence.",
          "List the screens that job needs.",
          "Add accounts, payment, or admin only if the job fails without them.",
          "Ship that version, then decide the next slice from real use.",
        ],
      },
    ],
  },
  {
    slug: "what-to-prepare-before-a-project",
    title: "What to prepare before a software project starts",
    metaTitle: "What to Prepare Before a Software Project | Eltemur Zentra Studio",
    description:
      "The information to gather before hiring Eltemur Zentra Studio for a website, web application, mobile app, or first product version.",
    published: "2026-09-23",
    updated: "2026-09-23",
    servicePath: "/contact",
    serviceLabel: "Start a project",
    sections: [
      {
        heading: "Name the person and the job",
        paragraphs: [
          "Write who will use the product and what they need to finish. “A candidate practises University of Ibadan Post-UTME questions” is a job. “We need an app” is not. Eltemur Zentra Studio starts from that job, then chooses a website, web application, mobile app, or first product version.",
        ],
      },
      {
        heading: "Bring examples, not a full specification",
        paragraphs: [
          "A few reference products are useful if you can say what you want to copy and what you do not. A long list of screens is less useful than the path from the first screen to the result.",
          "If you already have a name, a logo, or text you want used, include it. If you do not, the project can still start from the workflow.",
        ],
      },
      {
        heading: "Say whether anyone must pay, sign in, or work offline",
        paragraphs: [
          "These three answers change the build. Paid products we have shipped use Paystack. Products with accounts use a database such as Supabase. GradeNG is offline because students need the record without a connection. Say which of those apply, even if you are unsure of the technical approach.",
        ],
      },
      {
        heading: "Decide what the first release must prove",
        paragraphs: [
          "State the outcome that would make the first release worth putting in front of someone. It might be an enquiry, a completed audit, a practice score, or a saved CGPA. Work that does not serve that outcome can be listed as later work.",
          "You can send this in the project form, by email, or on WhatsApp. The contact page has all three.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
