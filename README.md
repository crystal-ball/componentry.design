<div align="right">
  <img height=75 src="./docs/assets/componentry.png" alt="Componentry">
</div>

---

<div align="center">
<!-- prettier-ignore-start -->
  <a href="https://travis-ci.com/crystal-ball/componentry" target="_blank" rel="noopener noreferrer">
    <img src="https://travis-ci.com/crystal-ball/componentry.svg?branch=master" alt="build status" />
  </a>
  <!-- <a href="https://dashboard.cypress.io/#/projects/v3cpt4/runs">
    <img src="https://img.shields.io/badge/cypress-dashboard-brightgreen.svg" alt="Cypress Dashboard">
  </a> -->
  <!-- <a href="https://codeclimate.com/github/crystal-ball/componentry/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/3b4b227366911cc055e0/maintainability" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/componentry/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/3b4b227366911cc055e0/test_coverage" />
  </a> -->
  <a href="https://renovatebot.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="dependencies managed by Renovate" />
  </a>
  <a href="https://github.com/crystal-ball/componentry#zenhub" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Shipping_faster_with-ZenHub-5e60ba.svg?style=flat-square" alt="ZenHub" />
  </a>
  <br />
  <a href="https://github.com/crystal-ball" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg" alt="Contains magic" />
  </a>
  <a href="https://github.com/crystal-ball/componentry" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg" alt="Full of love" />
  </a>
<!-- prettier-ignore-end -->
</div>

<p align="center">
  <em>Prototypical React application for Crystal Ball Projects</em>
</p>

## ⚙️ Setup

```
npm install
npm start
```

## Testing workflows

The project includes 3 types of testing: static linting, unit testing and
acceptance testing.

- _Static linting_ uses ESLint with the `eslint-config-eloquence` ruleset.
  - `npm run test:lint`
- _Unit testing_ uses Jest with `@testing-library/react` and is configured in
  `jest.config.js`
  - `npm run test:unit`
  - `npm run test:watch`
- _Acceptance testing_ uses Cypress inside of a Docker Compose environment
  - `npm run test:acceptance`

## Development workflows

Start the webpack development server

```
npm start
```

## Formatting

All JS, JSON, SCSS and markdown files are required to be formatted by Prettier
and can be formatted using the `format` npm command.
