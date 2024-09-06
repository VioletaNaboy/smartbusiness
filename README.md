# User Management Table with React, Redux, and TypeScript

## Overview

This repository contains a React application built with Redux (Redux Toolkit) and TypeScript. The application features a user management table that displays user information fetched from a mock API and includes advanced filtering functionality. Additional features include an animated marquee and a "Clear Filters" button for user convenience.

## Live Demo

You can view the live demo of the application at: [Live Demo](https://papaya-sorbet-b2b3e0.netlify.app/)

## Features

- **User Management Table:** Displays user information including name, username, email, and phone, fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **Advanced Filtering:** Filter the table by name, username, email, and phone with real-time updates.
- **State Management:** Managed using Redux (Redux Toolkit).
- **Type Safety:** Implemented using TypeScript for enforcing type safety and reducing runtime errors.
- **Animated Marquee:** Includes an animated scrolling text at the top of the page.
- **Clear Filters Button:** Allows users to easily clear all filters and return to the default view.
- **Persistent Filters:** Filters are saved in `persistent storage`, ensuring that users do not lose their filter settings when refreshing the page or returning to the application.
- **Responsive Design:** The application is designed to be responsive and displays correctly across various devices, including desktops, tablets, and mobile phones.


![Screenshot 1](/src/img/readme/image.png)



# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
