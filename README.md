# [Emergence](https://ainsleyrutterford.github.io/emergence)

![Website](https://img.shields.io/website?label=Website&url=https%3A%2F%2Fainsleyrutterford.github.io%2Femergence)
![code quality](https://img.shields.io/codefactor/grade/github/ainsleyrutterford/emergence?label=Code%20quality)
![typescript](https://img.shields.io/github/languages/top/ainsleyrutterford/emergence?label=TypeScript)
![license](https://img.shields.io/github/license/ainsleyrutterford/emergence?label=License)

## Development

First, clone the repo and install any dependencies:

```
git clone git@github.com:ainsleyrutterford/emergence.git
npm ci
```

All `npm` dependencies should now be installed. A development server can now be run using:

```
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) with a browser to see a local version of the site.

## Linting

If you are using VSCode and have the ESLint plugin installed, the code should automatically be linted and fixed when any `.ts`, `.tsx`, or `.js` files are saved. If you would like to lint the code manually, run:

```bash
npm run lint # only finds errors
npm run lint -- --fix # finds and fixes any errors that it can
```

The Prettier plugin for ESLint is also used to lint the code. To lint the code manually run:

```bash
npm run prettier # only finds errors
npm run prettier -- -w # finds and fixes any errors that it can
```

There is also a GitHub action ([`.github/workflows/lint.yml`](.github/workflows/lint.yml)) which lints the code when a pull request to main is opened (this action only finds linting errors, it does not fix them). Both the `npm run lint` and `npm run prettier` commands should not return any errors or warnings in order for this action to pass.

## Deployment

The site should automatically be deployed to [https://ainsleyrutterford.github.io/emergence](https://ainsleyrutterford.github.io/emergence) by a GitHub action ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that is triggered when any code is pushed to the [`main`](https://github.com/ainsleyrutterford/emergence/tree/main) branch.

The action uses `next build` and `next export` to generate HTML, CSS, and JS files which can be served statically. Once these files are generated, the [`github-pages-deploy-action`](https://github.com/JamesIves/github-pages-deploy-action) is used to push the generated files to the [`gh-pages`](https://github.com/ainsleyrutterford/emergence/tree/gh-pages) branch which is used by GitHub pages to serve the files.

## Acknowledgements

- [LaTeX.CSS](https://github.com/vincentdoerig/latex-css) &mdash; used to replicate LaTeX styling
- [GitHub Markdown CSS generation](https://github.com/hyrious/generate-github-markdown-css) &mdash; used to replicate GitHub's Markdown styling (specifically [hyrious' fork](https://github.com/hyrious) which includes darkmode)
