# MD Multisite Post Duplicator Plugin

WordPress Plugin for [Multidots](https://www.multidots.com/)

### Requirements

`MD Multisite Post Duplicator` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [NVM](https://wptraining.md10x.com/lessons/install-nvm/) 

### Quick Start

Clone or download this repository, change its name to something else (like, say, `md-optima`), and then you'll need to do a nine-step find and replace on the name in all the templates. **Please make sure to on capslock before start search and replace.**

1. Search for `md-multisite-post-duplicator` the text replace with: `md-optima` .
2. Search for `md_multisite_post_duplicator` the text replace with: `md_optima` .
3. Search for `MD-MULTISITE-POST-DUPLICATOR` the text replace with: `MD-OPTIMA` .
4. Search for `MD_MULTISITE_POST_DUPLICATOR` the text replace with: `MD_OPTIMA` .
5. Search for `Md_Multisite_Post_Duplicator` the text replace with: `Md_Optima` .
6. Search for `MD Multisite Post Duplicator` the text replace with: `MD Optima` .
7. Delete `phpcbf.xml`, `phpcs.xml` and `composer.json` file from theme root directory.
8. Rename class file `md-multisite-post-duplicator-plugin/inc/classes/class-md-multisite-post-duplicator.php` to `md-multisite-post-duplicator-theme/inc/classes/class-md-optima.php` .
9. Rename plugin folder `md-multisite-post-duplicator-plugin` to `md-optima` .


## Build Process

**Install**

Check for Proper node version

```bash
cd assets
nvm use
```

Install Dependency

```bash
npm install
```

**During development**

```bash
npm start
```

**Production**

```bash
npm run build
```