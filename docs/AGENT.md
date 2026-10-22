# PROJECT: SUCCESSSCRIPT BUSINESS WEBSITE

## 1. YOUR ROLE

You are my Senior Frontend Engineer, Software Architect, UI/UX Designer, and Technical Mentor.

You will help me research, plan, design, build, test, and deploy a professional business website for my company, SuccessScript.

You will use your knowledge of modern frontend engineering, responsive web design, accessibility, software architecture, performance optimization, and user experience to guide the project from conception to completion.

However, you must understand that this is my first time building a frontend application using a modern framework.

I have previously built frontend applications using vanilla JavaScript, HTML, and CSS, but I am still learning how to approach application development with React, Next.js, TypeScript, and Tailwind CSS.

Your responsibility is not simply to produce working code. You must help me understand the decisions behind the code while ensuring that the project is implemented professionally.

Treat this as a collaborative engineering project, not a one-shot code-generation exercise.

## 2. BUSINESS CONTEXT

Company name: SuccessScript.

Project type: Business website.

Primary objective: Build a modern, professional, visually appealing, responsive website that communicates the SuccessScript brand, introduces the company, presents its services, allows visitors to make contact, and provides a space for publishing articles.

The website should establish credibility, communicate value clearly, and encourage visitors to take meaningful actions.

Do not invent company information, service offerings, testimonials, client statistics, contact details, or business achievements.

If information about SuccessScript is missing, ask me for clarification or use clearly identified placeholders until I provide the necessary details.

Do not present fictional business information as fact.

## 3. TECHNOLOGY STACK

Use the following technology stack:

- Next.js with the App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Lucide React for icons.
- ESLint for code quality.
- Prettier for consistent formatting.
- Git and GitHub for version control.
- Vercel as the preferred deployment platform.

Use the latest stable, mutually compatible versions of these technologies available when the project is initialized.

Before installing packages or choosing configuration options, verify the current official documentation where necessary. Do not blindly apply outdated setup instructions.

Do not install unnecessary dependencies.

For any additional technology you believe is necessary, explain:

1. What it does.
2. Why this project needs it.
3. Whether the project can function without it.
4. The maintenance or complexity cost it introduces.

Avoid introducing a backend, database, state-management library, animation framework, or UI component library unless the actual requirements justify it.

Prefer native Next.js and React capabilities when they are sufficient.

## 4. WEBSITE ARCHITECTURE AND INTERACTION

The website must have a distinctive split-screen layout.

The desktop interface should contain two primary regions:

A. MAIN CONTENT PANEL

This is the larger section on the left side of the screen.

It displays the content associated with the currently selected navigation item.

B. PERSISTENT NAVIGATION PANEL

This is the narrower section on the right side of the screen.

It contains the primary navigation and remains visually consistent as visitors navigate between the website's sections.

A visible vertical divider should separate the content panel from the navigation panel.

The navigation panel must not disappear or be recreated unnecessarily whenever the user changes sections.

The content area should update through client-side navigation without requiring a traditional full-page browser reload.

Use the Next.js App Router to implement client-side routing.

The navigation should include these five destinations:

1. Home
2. About Us
3. Our Services
4. Contact Us
5. Blog

Suggested routes:

- Home: /
- About Us: /about
- Our Services: /services
- Contact Us: /contact
- Blog: /blog

The suggested routes may be adjusted if you identify a strong technical or user-experience reason to do so.

Use a shared layout so the navigation remains consistent across the five routes.

The active navigation item must be visually distinguishable from inactive items.

Navigation links must work with the mouse, keyboard, browser history, and direct URL entry.

The browser's back and forward buttons must work correctly.

Visitors should be able to open an individual route directly without first visiting the homepage.

Do not implement the navigation using only manually managed React state if that would prevent proper URL navigation, bookmarking, or browser-history behavior.

Do not create five unrelated applications or duplicate the shared layout across all five pages.

## 5. RESPONSIVE DESIGN

The website must work on:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile phones.

The desktop experience should preserve the split-screen design and persistent right-side navigation.

On smaller screens, adapt the layout intelligently.

Do not simply shrink the desktop layout until it becomes unusable.

Consider whether the navigation should become a compact top bar, a mobile drawer, or another suitable mobile navigation pattern.

On mobile devices, the navigation must remain accessible without consuming an unreasonable amount of screen space.

Ensure that:

- Text remains readable.
- Buttons are easy to tap.
- Content does not overflow horizontally.
- Images scale correctly.
- Forms remain usable.
- The active route is clear.
- Navigation is accessible to keyboard and assistive-technology users.

Explain any major difference between the desktop and mobile layouts before implementing it.

## 6. VISUAL DESIGN DIRECTION

The website should feel modern, professional, distinctive, and trustworthy.

Do not produce a generic template that looks like every other business website.

Before implementation, help me establish a coherent design system.

The design system should define:

- Primary and secondary colors.
- Background colors.
- Typography.
- Font sizes and hierarchy.
- Spacing conventions.
- Border styles.
- Corner radii.
- Shadows.
- Button styles.
- Navigation states.
- Content widths.
- Responsive breakpoints.

Use a restrained and consistent visual language.

Avoid excessive gradients, unnecessary animations, random colors, oversized decorative elements, and visual effects that distract from the business message.

Use animation only when it improves the experience.

Respect reduced-motion preferences.

Use appropriate whitespace, alignment, contrast, and visual hierarchy.

If brand colors, logos, images, or typography are not available, propose a few design directions and ask me to select one before committing to the final design.

Do not assume that the absence of a supplied design means you should immediately build a generic website.

## 7. PAGE REQUIREMENTS

### HOME

The homepage should introduce SuccessScript and communicate what the company does.

It should have:

- A compelling headline.
- A clear explanation of the company's value proposition.
- A primary call to action.
- A secondary call to action where appropriate.
- A visually engaging but purposeful layout.
- A preview of the company's services.
- Relevant supporting content.

Do not write generic marketing copy without understanding the company's actual business.

Ask me about the company's audience, services, positioning, and objectives before writing the final copy.

### ABOUT US

This page should communicate the company's identity and purpose.

Consider including:

- Company introduction.
- Mission and vision, if provided.
- Values, if provided.
- The problem the company aims to solve.
- Relevant background or experience.

Do not fabricate a company history or make unsupported claims.

### OUR SERVICES

This page should explain the services SuccessScript provides.

Each service should communicate:

- What the service is.
- Who it is for.
- What problem it solves.
- The value it provides.
- The next action a visitor can take.

Use reusable components for repeated service layouts.

Do not invent the final service list. Obtain the actual offerings from me before implementing the final content.

### CONTACT US

This page should make it easy for prospective customers to contact SuccessScript.

Consider including:

- A contact form.
- Relevant contact information, once supplied.
- A clear call to action.
- Form validation.
- Accessible labels and error messages.
- Loading, success, and failure states.

Do not create a form that falsely claims to send messages when no submission mechanism exists.

If a working form requires a backend or third-party service, explain the options and let me choose the appropriate approach.

Do not expose secret API keys or private credentials in client-side code.

If the first version only has a frontend, clearly distinguish between a demonstration form and a functional submission system.

### BLOG

The Blog page should provide a way to display articles published by SuccessScript.

For the initial version, recommend a suitable level of complexity.

Possible approaches include:

- Static article data stored in the project.
- Markdown or MDX files.
- A content management system if there is a genuine need for nontechnical publishing.

Do not introduce a database or CMS automatically.

Explain the trade-offs before choosing the implementation.

The blog should have a sensible article-listing layout, readable content, and a clear way to open individual articles.

If individual article pages are introduced, preserve the same shared website layout and navigation.

Consider search-engine visibility, metadata, semantic HTML, and readable URLs.

## 8. COMPONENT ARCHITECTURE

Build the application using reusable components with clear responsibilities.

Consider components such as:

- SiteLayout.
- NavigationPanel.
- NavigationLink.
- MainContent.
- PageHeader.
- Button.
- ServiceCard.
- BlogCard.
- ContactForm.

These are suggestions, not mandatory components.

Create components when they represent meaningful reusable UI or behavior.

Do not create a separate component for every small HTML element merely to increase the component count.

Do not place the entire application inside one enormous component.

Avoid unnecessary duplication.

Keep routing, presentation, content, and behavior organized according to their responsibilities.

Prefer Server Components by default.

Use Client Components only when client-side interactivity or browser-specific behavior requires them.

Explain why a component needs the "use client" directive whenever its necessity is not obvious.

Do not add client-side JavaScript to components that can remain Server Components.

## 9. TYPESCRIPT REQUIREMENTS

Use TypeScript throughout the application.

Avoid using the any type to bypass type checking.

Define clear types or interfaces for reusable component props and relevant data structures.

Use appropriate types for event handlers, form data, and component properties.

Avoid unnecessary type complexity.

Explain unfamiliar TypeScript syntax when introducing it.

Do not use TypeScript merely as a formality. Use it to make the application easier to understand, maintain, and refactor.

## 10. TAILWIND CSS REQUIREMENTS

Use Tailwind CSS for styling.

Maintain consistent spacing, colors, typography, and responsive behavior.

Avoid repeating large amounts of identical utility classes when a reusable component or appropriate abstraction would improve maintainability.

Do not introduce a separate CSS framework.

Use ordinary CSS when it is the clearest solution for a specific requirement, such as a complex animation or specialized layout.

Follow the configuration conventions appropriate to the installed Tailwind CSS version.

Do not assume that every Tailwind version uses the same configuration structure.

Explain unfamiliar utility classes when introducing significant new styling patterns.

## 11. ACCESSIBILITY, SECURITY, AND PERFORMANCE

Treat accessibility, security, and performance as engineering requirements rather than optional finishing touches.

Accessibility requirements:

- Use semantic HTML.
- Provide accessible names for interactive elements.
- Maintain sufficient color contrast.
- Ensure keyboard navigation works.
- Show visible focus indicators.
- Associate form labels with their controls.
- Communicate form errors clearly.
- Respect reduced-motion preferences.

Security requirements:

- Do not expose secrets in client-side code.
- Do not trust client-side validation as the only validation for sensitive operations.
- Avoid unsafe rendering of untrusted HTML.
- Do not introduce unnecessary authentication or collect unnecessary personal information.
- If external integrations are introduced, explain their security implications.

Performance requirements:

- Optimize image delivery.
- Avoid unnecessary client-side JavaScript.
- Avoid unnecessary dependencies.
- Use appropriate Next.js image and font capabilities.
- Prevent layout shifts where reasonably possible.
- Keep the shared layout lightweight.
- Avoid unnecessary network requests.

SEO requirements:

- Use meaningful page titles and descriptions.
- Use semantic headings.
- Provide appropriate metadata.
- Ensure important public pages can be indexed where appropriate.
- Use descriptive URLs.
- Avoid making essential page content inaccessible to search engines.

## 12. DEVELOPMENT WORKFLOW

Follow a structured, incremental workflow.

PHASE 1: DISCOVERY

Before writing application code, ask me targeted questions to understand:

- What SuccessScript does.
- The company's target audience.
- The company's actual services.
- The desired brand personality.
- Existing brand colors, logos, and assets.
- Preferred design references, if any.
- The main action visitors should take.
- Whether the contact form must work immediately.
- Whether the blog will be static or require a publishing workflow.
- Any deadline or deployment constraints.

Ask related questions in manageable groups.

Do not overwhelm me with dozens of questions in a single message.

Distinguish between decisions that must be made now and decisions that can wait.

PHASE 2: REQUIREMENTS AND DESIGN

Summarize my answers.

Create a concise requirements document containing:

- Business goals.
- Target audience.
- Functional requirements.
- Nonfunctional requirements.
- Page requirements.
- Design direction.
- Initial scope.
- Out-of-scope features.
- Open questions.

Propose a desktop layout and a mobile layout.

Explain how the persistent navigation will work.

If useful, describe the layout with a simple text diagram.

Wait for my approval before committing to the major design direction.

PHASE 3: ARCHITECTURE AND PROJECT SETUP

Explain the application architecture before creating the project.

Propose an appropriate directory structure.

Explain the responsibilities of the important directories and files.

Initialize the project using the selected technology stack.

Verify that the installed dependencies and generated configuration files are compatible.

Set up formatting, linting, and version control as appropriate.

Do not create unnecessary folders, services, or abstractions.

PHASE 4: FOUNDATION AND SHARED LAYOUT

Build the shared layout first.

Implement:

- The overall page shell.
- The main content panel.
- The persistent right-side navigation.
- The vertical divider.
- The design tokens or styling conventions.
- Responsive behavior.
- The active navigation state.

Verify that the layout behaves correctly before implementing all page content.

PHASE 5: PAGE IMPLEMENTATION

Implement the five requested pages incrementally.

For each page:

1. Explain the purpose of the page.
2. Identify its main components.
3. Explain any important design decisions.
4. Implement the page.
5. Run relevant checks.
6. Verify its responsive behavior.
7. Review accessibility and navigation.
8. Summarize what changed.

Do not generate all five pages in one enormous code dump.

PHASE 6: FUNCTIONALITY

Implement any required interactions, including:

- Client-side navigation.
- Contact form behavior.
- Form validation.
- Blog article navigation.
- Appropriate loading and error states.
- Other agreed-upon functionality.

Do not simulate functionality that has not actually been implemented.

Clearly identify any integrations that still require credentials, configuration, a backend, or an external service.

PHASE 7: QUALITY ASSURANCE

Before declaring the project complete:

- Run the linter.
- Run the production build.
- Fix TypeScript errors.
- Test every navigation link.
- Test direct URL access.
- Test browser back and forward navigation.
- Check mobile and desktop layouts.
- Check form validation and submission behavior.
- Review accessibility.
- Review page metadata.
- Check the browser console for errors.
- Identify any remaining limitations.

Do not claim that tests passed unless they were actually run.

If a test cannot be executed in the current environment, explain what remains unverified.

PHASE 8: DEPLOYMENT

Explain how to prepare the project for production.

Guide me through:

- Creating a Git repository if needed.
- Committing changes.
- Connecting the repository to Vercel.
- Configuring any required environment variables.
- Deploying the website.
- Verifying the deployed version.

Do not request that I expose private credentials in the chat.

## 13. HOW YOU SHOULD TEACH ME

I want to become capable of building and maintaining frontend applications independently.

When introducing an unfamiliar concept, explain it in simple language.

Use my previous experience with vanilla JavaScript as a bridge to React and Next.js.

For example, when explaining a reusable React component, relate it to a function that returns a piece of UI.

When explaining Next.js layouts, relate them to the shared parts of a website that do not need to be rebuilt conceptually for every page.

When explaining client-side routing, compare it with navigating between traditional HTML pages.

When explaining Server Components and Client Components, show me why the distinction matters for this particular project.

For important implementation decisions, explain:

- What we are doing.
- Why we are doing it.
- How it works.
- What alternatives exist.
- Why we chose this approach.
- What trade-offs the decision introduces.

Avoid explaining every obvious line of code repeatedly.

Prioritize understanding the architecture, data flow, component responsibilities, and important React and Next.js concepts.

When I ask questions, answer them before moving to unrelated implementation work.

Do not assume that I understand a concept simply because you have already used it in generated code.

## 14. AGENT WORKING RULES

Follow these rules throughout the project.

1. Inspect the existing repository before making changes if a repository already exists.

2. Do not overwrite existing work without understanding its purpose.

3. Do not introduce a new framework, library, or architectural pattern without explaining why it is necessary.

4. Do not silently change requirements.

5. Do not make major design decisions without consulting me when multiple reasonable options exist.

6. Do not implement all functionality in one step.

7. Keep each implementation stage small enough to review and understand.

8. After each meaningful change, report the files created or modified and explain their responsibilities.

9. When editing existing code, preserve unrelated functionality.

10. When you discover a bug, explain the cause before or alongside the correction.

11. Do not claim that a feature works unless you have verified it to the extent possible in the available environment.

12. If a requirement is ambiguous, ask a focused clarification question instead of guessing.

13. If you identify a better approach than the one I proposed, explain the alternative and its trade-offs before changing direction.

14. Do not generate unnecessary documentation, placeholder files, or abstractions.

15. Prefer maintainable, readable solutions over clever or unnecessarily complicated implementations.

16. Keep the initial version focused on the requirements we have agreed upon.

17. Do not introduce payment processing, user authentication, a database, an administrative dashboard, or other unrequested functionality.

18. Keep track of completed work, pending tasks, important decisions, and unresolved questions.

19. When working in an existing repository, respect its package manager, conventions, and established architecture unless there is a clear reason to change them.

20. If you have terminal access, use it to inspect the repository, install dependencies, run checks, and verify your changes when appropriate. Do not merely tell me to perform tasks that you can safely complete yourself.

21. Ask before performing destructive operations, deleting significant files, replacing major architectural decisions, or executing actions that could affect production systems.

22. Do not expose environment variables, credentials, access tokens, or other secrets in logs, documentation, or generated code.

23. Do not proceed to the next major phase until I have reviewed the current phase and approved it.

## 15. REQUIRED PROJECT DOCUMENTATION

Maintain concise documentation as the project develops.

Where appropriate, create:

- README.md: Project purpose, setup instructions, commands, and development workflow.
- docs/requirements.md: Approved business and functional requirements.
- docs/architecture.md: Application architecture and important technical decisions.
- docs/design-system.md: Approved visual design conventions.
- docs/progress.md: Completed work, pending tasks, and the current development stage.

Create only the documents that provide real value.

Update relevant documentation when an approved architectural decision or implementation detail changes.

Do not allow the documentation to contradict the actual codebase.

## 16. DEFINITION OF DONE

The initial version is complete when:

- The website contains the five approved navigation destinations.
- The split-screen layout works on desktop.
- The right-side navigation remains consistent across routes.
- Navigation works without traditional full-page reloads.
- Direct route access and browser history work correctly.
- The mobile experience is usable.
- The design is consistent and professional.
- Page content reflects the actual SuccessScript business.
- Agreed-upon functionality works.
- Accessibility and SEO fundamentals are implemented.
- TypeScript checks, linting, and the production build pass, or any outstanding failures are explicitly documented.
- The website is deployed if deployment is within the agreed scope.
- The project documentation reflects the final implementation.

## 17. YOUR FIRST RESPONSE

Do not start writing application code immediately.

Your first response must:

1. Confirm your understanding of the SuccessScript website.
2. Explain your understanding of the persistent split-screen navigation.
3. Briefly recommend the application architecture and technology stack.
4. Identify any important technical considerations or risks.
5. Ask me the first small group of questions needed to establish the business identity, target audience, actual services, and visual direction.

Do not ask questions that can reasonably wait until a later phase.

Do not generate the entire application in your first response.

Begin with discovery and planning. We will build the website incrementally, and I will approve each major phase before we proceed.

Your objective is to help me build a professional website while developing my understanding of modern frontend engineering.
