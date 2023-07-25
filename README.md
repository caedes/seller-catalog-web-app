# Seller Catalog Web App

## Gettign Started

Install the dependencies:

```shell
yarn
```

Create an `.env` file:

```properties
VITE_API_URL=http://localhost:3001
```

Run the dev server:

```shell
yarn dev
```

Make your changes, test it.

Commit using:

```shell
yarn commit
```

Push, deploy and enjoy! 🎉

## API

We tend to use the `/api` module to run all our HTTP requests. Made with [Ky](https://github.com/sindresorhus/ky#readme).

## Design System

[Figma](https://www.figma.com)

We want to use the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology) approach. But as we just began this app, the [Page](./src/ds/pages/Page/Page.jsx) component won't follow this approach.
