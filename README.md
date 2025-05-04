# Playwright Project

This repository contains a collection of end-to-end test scripts using [Playwright](https://playwright.dev/), a Node.js library for automating web browsers.

## Features

- **AI-powered Testing**: Leverages the `@zerostep/playwright` package for AI-driven test scenarios.
- **Page Object Model (POM)**: Implements a modular structure with reusable page objects for maintainable and scalable test scripts.
- **End-to-End Scenarios**: Covers common user flows such as signup, login, adding items to cart, and completing purchases.
- **Cross-Browser Testing**: Supports testing across Chromium, Firefox, and WebKit.

## Repository Structure

```plaintext
.
├── Pages/                   # Contains Page Object Model (POM) classes for test interactions
├── tests/                   # Contains test specifications
├── .github/workflows/       # GitHub Actions configuration for CI/CD
├── package.json             # Node.js dependencies and scripts
└── README.md                # Project documentation.
```

##  Key Files
- Pages/HomePage.js: Handles interactions with the homepage, such as navigation and login/signup.
- tests/AITest.spec.js: Demonstrates AI-driven test scenarios using @zerostep/playwright.
- tests/EndToEndScenario.spec.js: Covers a complete user journey from signup to purchase and logout.
- .github/workflows/playwright.yml: Configures CI/CD pipeline to run Playwright tests on pushes and pull requests.

## With CI/CD
The repository is configured to run Playwright tests on GitHub Actions. 
Any push or pull request to the main branch will trigger the workflow.

## Contact
If you have any questions or need support, feel free to contact [Hussien Aboelhagag](https://www.linkedin.com/in/hussien-el-ziat/).
