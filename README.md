# Initial project setup
1) Create a new git repository
2) Initialize the git repository locally
`git clone https://github.com/Weping/planet-link`
3) Create a Next.js app
`npx create-next-app planet-link --use-npm`

# Best Practices
- Read this [article](https://www.datree.io/resources/github-best-practices)

## Subject line terminology for committing
First Word | Meaning
--- | --
Add | Create a capability e.g. feature, test, dependency.
Cut | Remove a capability e.g. feature, test, dependency.
Fix | Fix an issue e.g. bug, typo, accident, misstatement.
Bump | Increase the version of something e.g. dependency.
Make | Change the build process, or tooling, or infra.
Start | Begin doing something e.g. create a feature flag.
Stop | End doing something e.g. remove a feature flag.
Refactor | A code change that MUST be just a refactoring.
Reformat | Refactor of formatting e.g. omit whitespace.
Optimize | Refactor of performance e.g. speed up code.
Document | Refactor of documentation e.g. help files.

# To run in development do
- `npm install`
- `npm run dev`

# Packages
- `npm install gray-matter` for parsing metadata of markdown files
- `npm install remark remark-html` for rendering markdown content of markdown files
- `npm install date-fns` for formatting dates
- `npm install rss-parser` for parsing RSS feeds

## Module dependencies ordering
Keyword | Description
--- | --
Builtin | Standard libraries
External | Third party libraries
Internal | Own code imports
Specific | Imports specific to the module (e.g. css, png, etc.)
Test | Code only used for tests

# Parsers
- [RSS](https://andreaskeller.name/blog/nextjs-rss-reader)
