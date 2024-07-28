# Open Web Advocacy Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ca86e2c-f78f-4dee-a51d-6699afe30e2c/deploy-status)](https://app.netlify.com/sites/cool-elf-8eb15a/deploys)

This repository contains the source code for and notes related to the Open Web Advocacy website.

The Open Web Advocacy website resides at [open-web-advocacy.org](https://open-web-advocacy.org).

This website is based on [hankchizljaw's](https://github.com/hankchizljaw) [11ty-base](https://github.com/hankchizljaw/11ty-base) project.

## Getting Started

This site is built using the [Eleventy](https://www.11ty.dev/) static site generator and the content of the site is primarily written in Markdown or HTML. Core page content can be found in the `src/pages` directory.

### Requirements

- [Node.js](https://nodejs.org/en/)
  - Used to run the static site generator to build the website.
  - `npm` is used to manage the required dependencies.
- [Git version control](https://git-scm.com/)
  - Used to clone down and contribute to the project.
- [Git Large File Storage (LFS)](https://git-lfs.github.com/)
  - Used for managing media content within the repository.

### Cloning the Website Files

The website can be fetched using Git like so:

    git clone https://github.com/OpenWebAdvocacy/website.git

If you're missing image files after cloning, this may be due to lacking Git LFS support on your system. Double check [Git LFS](https://git-lfs.github.com/) is installed. You can attempt a download of Git LFS files, for the current checked out branch, by running:

    git lfs pull

### Building the Site

To set up this project, first install the required dependencies:

    npm ci

Next, run the project locally using the below command. This will run a local webserver and provide you with a URL to access the site at. Any content changes will be automatically detected and rebuilt by Eleventy.

    npm start

To build the production version of this site, use the below command. This will generate out a complete set of files for a static site into the `dist/` directory.

    npm run production

## Contributing

This repository is open to contributions from all of those involved with the Open Web Advocacy initiative or who have suggestions on how to improve the website or help with translations. You can read more in the projects [contributing documentation](./.github/CONTRIBUTING.md)

For discussions on ideas and issues that you would like to document as part of this repository, please file a GitHub Issue.

Hosting for this site is managed by Netlify and can be accessed at [https://cool-elf-8eb15a.netlify.app/](https://cool-elf-8eb15a.netlify.app/) until DNS is changed.  Additionally, when submitting PRs, Netlify Deploy Previews will be run, with a preview link available within the _Checks_ section of the PR page.

### Join the Discord

If you would like to learn more about the work we do or get involved yourself, join the [Open Web Advocacy Discord community](https://discord.gg/x53hkqrRKx).
