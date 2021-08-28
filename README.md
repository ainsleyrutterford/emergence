# Emergence

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

There is also a GitHub action ([`.github/workflows/lint.yml`](.github/workflows/lint.yml)) which lints the code when a pull request to main is opened (this action only finds linting errors, it does not fix them).

## Deployment

The site should automatically be deployed to [https://ainsleyrutterford.github.io/emergence](https://ainsleyrutterford.github.io/emergence) by a GitHub action ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that is triggered when any code is pushed to the [`main`](https://github.com/ainsleyrutterford/emergence/tree/main) branch.

The action uses `next build` and `next export` to generate HTML, CSS, and JS files which can be served statically. Once these files are generated, the [`github-pages-deploy-action`](https://github.com/JamesIves/github-pages-deploy-action) is used to push the generated files to the [`gh-pages`](https://github.com/ainsleyrutterford/emergence/tree/gh-pages) branch which is used by GitHub pages to serve the files.