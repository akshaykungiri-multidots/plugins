# MD Prime Plugin

WordPress Plugin for [Multidots](https://www.multidots.com/)

### Requirements

`MD Prime` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [NVM](https://wptraining.md10x.com/lessons/install-nvm/) 

### Quick Start

Clone or download this repository, change its name to something else (like, say, `md-optima`), and then you'll need to do a nine-step find and replace on the name in all the templates. **Please make sure to on capslock before start search and replace.**

1. Search for `md-prime` the text replace with: `md-optima` .
2. Search for `md_prime` the text replace with: `md_optima` .
3. Search for `MD-PRIME` the text replace with: `MD-OPTIMA` .
4. Search for `MD_PRIME` the text replace with: `MD_OPTIMA` .
5. Search for `Md_Prime` the text replace with: `Md_Optima` .
6. Search for `MD Prime` the text replace with: `MD Optima` .
7. Delete `phpcbf.xml`, `phpcs.xml` and `composer.json` file from theme root directory.
8. Rename class file `md-prime-plugin/inc/classes/class-md-prime.php` to `md-prime-theme/inc/classes/class-md-optima.php` .
9. Rename plugin folder `md-prime-plugin` to `md-optima` .


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