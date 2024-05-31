# MD Fiery Addon Plugin

WordPress Plugin for [Multidots](https://www.multidots.com/)

### Requirements

`MD Fiery Addon` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [NVM](https://wptraining.md10x.com/lessons/install-nvm/) 

### Quick Start

Clone or download this repository, change its name to something else (like, say, `md-optima`), and then you'll need to do a nine-step find and replace on the name in all the templates. **Please make sure to on capslock before start search and replace.**

1. Search for `md-fiery-addon` the text replace with: `md-optima` .
2. Search for `md_fiery_addon` the text replace with: `md_optima` .
3. Search for `MD-FIERY ADDON` the text replace with: `MD-OPTIMA` .
4. Search for `MD_FIERY_ADDON` the text replace with: `MD_OPTIMA` .
5. Search for `Md_Fiery_Addon` the text replace with: `Md_Optima` .
6. Search for `MD Fiery Addon` the text replace with: `MD Optima` .
7. Delete `phpcbf.xml`, `phpcs.xml` and `composer.json` file from theme root directory.
8. Rename class file `md-fiery-addon-plugin/inc/classes/class-md-fiery-addon.php` to `md-fiery-addon-theme/inc/classes/class-md-optima.php` .
9. Rename plugin folder `md-fiery-addon-plugin` to `md-optima` .


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