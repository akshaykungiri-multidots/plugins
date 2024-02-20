# MD Sync Product Multisite Plugin

WordPress Plugin for [Multidots](https://www.multidots.com/)

### Requirements

`MD Sync Product Multisite` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [NVM](https://wptraining.md10x.com/lessons/install-nvm/) 

### Quick Start

Clone or download this repository, change its name to something else (like, say, `md-optima`), and then you'll need to do a nine-step find and replace on the name in all the templates. **Please make sure to on capslock before start search and replace.**

1. Search for `md-sync-product-multisite` the text replace with: `md-optima` .
2. Search for `md_sync_product_multisite` the text replace with: `md_optima` .
3. Search for `MD-SYNC-PRODUCT-MULTISITE` the text replace with: `MD-OPTIMA` .
4. Search for `MD_SYNC_PRODUCT_MULTISITE` the text replace with: `MD_OPTIMA` .
5. Search for `Md_Sync_Product_Multisite` the text replace with: `Md_Optima` .
6. Search for `MD Sync Product Multisite` the text replace with: `MD Optima` .
7. Delete `phpcbf.xml`, `phpcs.xml` and `composer.json` file from theme root directory.
8. Rename class file `md-sync-product-multisite-plugin/inc/classes/class-md-sync-product-multisite.php` to `md-sync-product-multisite-theme/inc/classes/class-md-optima.php` .
9. Rename plugin folder `md-sync-product-multisite-plugin` to `md-optima` .


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