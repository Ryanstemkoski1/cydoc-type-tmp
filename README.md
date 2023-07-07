# Types Repo for Cydoc Ecosystme

We'll store our shared types for the Cydoc ecosystem here.

# Development

Install dependencies with `npm install`

All code written in Typescript, types in `index.js` will be published

# Usage

These types are *private* so you'll need a valid github access token for the types repo in your environment (NPM_TOKEN)

see: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

If you have access to the repo, follow instructions to put an access token in your environment.
I added mine to my `.zshrc` but your setup may be different.

# Deployment

New versions are automatically `published` when changes are pushed to `main`

# Personal Access Token

The .npmrc will need to be updated with your personal access token in order to publish the library