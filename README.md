This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Summary

## Project Assets

- [Production deploy](???)
- [Staging deploy](???)
- [Deployment Dashboard](https://vercel.com/seak/???)
- [Design Doc](#TODO:@Mo)
- [Lo-Fi Design Spec](#TODO:@Mo)
- [Hi-Fi Design Spec](#TODO:@Mo)
- [API Docs](https://dummyjson.com/docs)
- [API URL](https://dummyjson.com/)
- [Analytics dashboard (PostHog)](#TODO:@Mo)
- [Payment integration](#TODO:@Mo)
- [Remote repo](https://github.com/S3ak/nextjs-ts-dummyjson-example-2025)

<details>
  <summary>Terminal Instructions</summary>
  
    Open project in IDE/ Code editor (VSCode base).

    1 Install all the dependencies:

    ```bash
    npm install
    ```

    2 Checkout from staging to a new branch:

    ```bash
    git checkout -b feature/your-name-feature
    ```

    3 run the development server:

    ```bash
    npm run dev
    ```

    4 Open up cypress to see that you have not broken anything:

    ```bash
    npm run test:e2e:open
    ```

    5 Open up storybook to start developing your component:

    ```bash
    npm run storybook
    ```

    6. Obtain .env.local file from Mo.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

</details>

### QuickStart

- open using Cursor/WindSurf
- press _F1_ and type `git:clone`
- press _F1_ and type `run task` and hit enter.
- type `npm` and hit enter.
- type `install` and hit enter.
- press _F5_
- then run: `npm run test:e2e:open` in terminal
- Create new branch: `git checkout -b feature/your-name-feature`
- Obtain .env.development file from Mo.

You will need a .env.development file in the root of the project.

## Tech Stack

- [Next.js](https://nextjs.org/) - React Metaframework for Server Side Rendering & Client Side Rendering a Hybrid Web application.
- [TypeScript](https://www.typescriptlang.org/) - Type safe Javascript
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Storybook](https://storybook.js.org/) - Design System Components
- [Cypress](https://www.cypress.io/) - e2e testing framework.
- [Luxon](https://moment.github.io/luxon/#/) - Time Utility library.
- [React Hook Form](https://react-hook-form.com/) - Dope UX for forms.
- [Zod](https://zod.dev/) - Create schemas for validation with React Hook Form
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [Aceternity UI](https://ui.aceternity.com/) - UI Components
- [AutoAnimate](https://auto-animate.formkit.com/) - Animated Transitions
- [Zustand](https://zustand-demo.pmnd.rs/) - Client Side state management
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code

## Resources

- [Typescript cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)

## Project leads

- Monde Sineke

## Environments

There are two environments;

### production

Production is the environment the end-user experience. This is the final product that will be deployed to the public. This environment is hosted on netlify.

### staging

Staging is the environment where the team can test the latest features and bug fixes. This environment is hosted on Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
