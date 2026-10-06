# Prabhunath Electricals

## 1\. Project Overview

This repository contains the web application for **Prabhunath Electricals**. It is a modern, responsive frontend application built to showcase products/services and provide information to customers.

## 2\. Architecture & Tech Stack

The project is built on a modern JavaScript/TypeScript stack, optimized for performance and developer experience.

### Core Technologies

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router paradigm)
*   **UI Library:** [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) for static type checking

## 3\. Project Structure

The repository follows a standard Next.js App Router structure:

```
/
├── app/              # Next.js App Router (pages, layouts, API routes)
├── components/       # Reusable React components
├── config/           # Application configuration files
├── content/          # Static content or markdown data
├── lib/              # Utility functions and shared logic
├── public/           # Static assets (images, fonts, etc.)
├── scripts/          # Utility scripts (e.g., generate-assets.js)
├── package.json      # Dependencies and NPM scripts
└── next.config.ts    # Next.js configuration
```

## 4\. Prerequisites

Before setting up the project locally, ensure you have the following installed:

*   **Node.js** (v20+ recommended)
*   **npm** (comes with Node.js)

## 5\. Getting Started (Commands)

Follow these steps to run the project locally.

### Installation

Clone the repository and install the required dependencies:

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit files in the `app/` directory.

### Production Build

To create an optimized production build:

```bash
npm run build
```

### Start Production Server

After building, you can start the production server to test the built app:

```bash
npm run start
```

### Linting

To run the ESLint checker:

```bash
npm run lint
```

## 6\. Development Workflow

*   **Pages:** Create or modify pages inside the `app/` directory (e.g., `app/page.tsx`).
*   **Components:** Add isolated UI elements in the `components/` directory.
*   **Styling:** Use Tailwind CSS utility classes directly within your JSX/TSX files. Global styles are managed via PostCSS.