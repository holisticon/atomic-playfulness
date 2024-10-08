# Contributing

This guide describes how you can successfully contribute to our design system
["Atomic Playfulness"](https://github.com/holisticon/atomic-playfulness).

## Preparing Your Workspace

- Ensure you have the latest version of Node.js and npm installed.
- If you use a Node.js version manager that supports .node-version files, you
  can install the specific Node.js version from the repository's .node-version
  file.
- Install all workspace dependencies and Git-hooks with: `npm i -ws`

## Git Workflow

Our workflow centers around feature branches. Every change to the project must
be done through a PR. Inside the PR branch, feel free to make as many commits as
necessary.

After the PR has been reviewed, we use the "Squash and Merge" strategy to
combine the PR into a single commit on our `main` branch, while preserving a
reference to PR in the commit message.

Futhermore, for commit messages, we follow the
[Conventional Commits](https://conventionalcommits.org/) naming convention.
Consider this a best practice for feature branches. For commits on `main` it is
a requirement.
