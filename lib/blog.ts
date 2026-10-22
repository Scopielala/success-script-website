export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  description: string;
  publishedAt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "software-engineering-from-idea-to-maintainable-product",
    title: "Software engineering: from idea to maintainable product",
    category: "Software engineering",
    description:
      "A practical look at the decisions that turn a software idea into a product people can use and a team can continue to maintain.",
    publishedAt: "2026-10-16",
    sections: [
      {
        heading: "Start with the problem",
        paragraphs: [
          "Software engineering is often associated with writing code, but a successful project begins before implementation. First, a team needs to understand who the software is for, what those people are trying to do, and which problem the product should address.",
          "That understanding gives the team a way to make choices. It helps distinguish essential capabilities from ideas that can wait, and it gives design and engineering a shared direction. Without it, a project can accumulate features while still missing the need that brought it into existence.",
        ],
      },
      {
        heading: "Turn goals into decisions",
        paragraphs: [
          "Once the need is clear, the work becomes a series of connected decisions: what the first version includes, how people move through it, what information it must handle, and how its parts fit together. These decisions do not need to predict every future requirement. They should give the first useful version a coherent shape while leaving room to learn.",
          "Small, reviewable steps make those choices easier to revisit. A team can share a design, implement a focused capability, and gather feedback before expanding the scope. This keeps assumptions visible and gives everyone a chance to notice gaps early.",
        ],
      },
      {
        heading: "Quality continues after launch",
        paragraphs: [
          "A product is not finished simply because its first version runs. People will encounter it in real situations, requirements may change, and the software may need fixes or new capabilities. Clear structure, readable code, useful documentation, and careful testing help a team understand and change the product over time.",
          "Good engineering is therefore a balance: solve the current problem with care, keep the system understandable, and make deliberate choices about what can wait. The result is not just software that works today, but software a team can continue to improve.",
        ],
      },
    ],
  },
  {
    slug: "frontend-engineering-building-the-experience-people-use",
    title: "Frontend engineering: building the experience people use",
    category: "Frontend engineering",
    description:
      "Frontend engineering brings interface design, browser behavior, and application data together in the experience people interact with.",
    publishedAt: "2026-10-16",
    sections: [
      {
        heading: "The interface is part of the product",
        paragraphs: [
          "The frontend is the part of an application people see and use. It includes the page structure, visual hierarchy, controls, navigation, and the feedback an interface gives when someone takes an action. These details shape whether a product feels understandable and whether people can complete the task they came to do.",
          "A clear interface starts with the user's goal. Each page should make its purpose apparent, present information in a useful order, and make the next action easy to find. Visual style matters, but it works best when it supports understanding rather than competing with it.",
        ],
      },
      {
        heading: "Build for different people and devices",
        paragraphs: [
          "People use websites with different screen sizes, input methods, and assistive technologies. Responsive layouts help content adapt to available space. Semantic HTML gives controls and page regions meaning, while keyboard support and visible focus states help people navigate without a mouse.",
          "Accessibility is easier to include as part of the design and implementation than to treat as a final visual check. Descriptive labels, sensible heading order, sufficient contrast, and clear error messages are examples of decisions that improve the experience for many visitors.",
        ],
      },
      {
        heading: "Connect the interface to the application",
        paragraphs: [
          "A frontend also communicates with the rest of an application. It may request information, display the result, and let someone update or submit data. The interface needs to account for different states: information loading, a successful action, an empty result, or a problem that needs attention.",
          "When design, frontend, and backend work together, those states can be planned rather than improvised. The result is an experience that feels consistent from the first screen through the underlying action, and is easier to maintain as the product grows.",
        ],
      },
    ],
  },
  {
    slug: "backend-engineering-the-systems-behind-an-application",
    title: "Backend engineering: the systems behind an application",
    category: "Backend engineering",
    description:
      "Explore how backend services handle application rules, information, and communication between a product's parts.",
    publishedAt: "2026-10-16",
    sections: [
      {
        heading: "What happens behind the interface?",
        paragraphs: [
          "When someone signs in, requests information, or submits a form, the visible interface often relies on backend software to handle the work. A backend can apply application rules, communicate with a database, and return a response the frontend can present.",
          "This separation gives each part a clearer responsibility. The frontend focuses on helping people use the product, while backend services handle operations and information that should be managed centrally. The exact design depends on the product's needs and should not be more complicated than those needs require.",
        ],
      },
      {
        heading: "Make communication predictable",
        paragraphs: [
          "An API defines how one part of software can ask another part to do something or provide information. Useful API design makes those exchanges clear: what information is expected, what comes back, and how the application should understand an unsuccessful request.",
          "Predictable responses help frontend and backend work proceed together. They also make it easier to change a system carefully, because teams can understand which parts of the application rely on a given interface.",
        ],
      },
      {
        heading: "Treat data and security as core concerns",
        paragraphs: [
          "Backend code often works with information that should be handled carefully. A service should validate incoming data, enforce the rules that apply to an action, and avoid exposing information to people who should not receive it. These responsibilities belong in the system that controls the operation, not only in the visible interface.",
          "A maintainable backend also benefits from clear boundaries, understandable error handling, and useful operational records. Those foundations help a team investigate problems and make changes with a better understanding of the system's behavior.",
        ],
      },
    ],
  },
  {
    slug: "database-engineering-organizing-information-for-software",
    title: "Database engineering: organizing information for software",
    category: "Database engineering",
    description:
      "A foundation for thinking about how an application's information is structured, related, and kept useful as needs evolve.",
    publishedAt: "2026-10-16",
    sections: [
      {
        heading: "Model the information the product needs",
        paragraphs: [
          "Applications depend on information: people, products, appointments, messages, or other records that matter to the product. Database design starts by identifying that information and the relationships between it. A useful model reflects the real concepts the application needs to work with.",
          "This is not only a technical exercise. Product rules influence what information is stored and how it relates. Talking through examples with the people shaping the product can uncover details that are easy to miss when a data structure is designed in isolation.",
        ],
      },
      {
        heading: "Keep the structure understandable",
        paragraphs: [
          "A clear database structure helps software store and retrieve information consistently. Names should communicate what a field or record represents, relationships should match the product's rules, and constraints can help prevent invalid combinations of data.",
          "Different applications have different patterns and workloads, so there is no single structure that fits every project. The right choices follow from the kinds of information involved, how the product uses it, and how the team expects those needs to change.",
        ],
      },
      {
        heading: "Plan for change",
        paragraphs: [
          "Products evolve, and their information models may need to evolve with them. Changes to a database should be considered alongside the code that reads and writes its data. A deliberate migration plan helps a team understand what changes, when the application needs to adapt, and how the transition will be checked.",
          "Database engineering also includes thinking about access, recovery, and the consequences of losing or exposing information. These concerns are part of designing a dependable data foundation, not optional details to consider only after a problem appears.",
        ],
      },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
