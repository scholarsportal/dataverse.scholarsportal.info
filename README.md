# dataverse.scholarsportal.info

The website for Scholars Portal Dataverse, available at [dataverse.scholarsportal.info](https://dataverse.scholarsportal.info). This site is built with the [Hugo static site generator](https://gohugo.io/), and uses [the Agency theme](http://themes.gohugo.io/agency/).

## Local Setup

To set up this site locally:

1. [Install Hugo](https://gohugo.io/getting-started/installing/)
2. Clone the repository:

`git clone git@gitlab.scholarsportal.info:Static-Web/dataverse-public.git`

3. Get the theme files, which have been added as a submodule:

`git submodule update --init --recursive`

4. Run the Hugo site locally:

`hugo server`

This will output a URL to see your local version of the site, usually available at http://localhost:1313/. Any changes you make will automatically appear here.
