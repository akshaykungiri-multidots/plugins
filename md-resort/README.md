# MD-RESORT

---

WordPress Theme for [Multidots](https://www.multidots.com/).

The MD Resort has been crafted by keeping all our development and performance requirements into consideration while being minimalist at core. Therefore, we strongly advise to start using the MD Resort as a starter theme in upcoming projects.

Here are some of the coolest features of the MD Resort theme:

- Well commented OOP based code with WordPress and WordPress VIP coding standards
- Organized Files and Folder structure
- Minimal responsive styling with SASS framework
- All the necessary default template files like single.php, archive.php, page.php, search.php etc
- Sample implementation of a custom post type and custom taxonomy
- Basic theme components like Header, Footer, Menu, Sidebar/Widget, Comments etc
- Custom theme options page with fields such as Text, Textarea, File, Select, Radio Button, WYSIWYG editor, Color Picker etc
- A sample custom static and dynamic gutenberg block with necessary files and folder structure
- Pagination and restricted media file types for security
- Performance features like assets minification, critical css and assets lazy loading

### Requirements

---

`MD Resort` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [NVM](https://wptraining.md10x.com/lessons/install-nvm/)

### Quick Start

---

**Automatic**

Download theme without manuall process use this link: https://inhouse-md-resort-theme-clone.md-staging.com/

**Manually**

Clone or download this repository, change its name to something else (like, say, `md-bricks`), and then you'll need to do a nine-step find and replace on the name in all the templates. **Please make sure to on capslock before start search and replace.**

1. Search for `md-resort` the text replace with: `md-bricks` .
2. Search for `md_resort` the text replace with: `md_bricks` .
3. Search for `MD-RESORT` the text replace with: `MD-BRICKS` .
4. Search for `MD_RESORT` the text replace with: `MD_BRICKS` .
5. Search for `Md_Resort` the text replace with: `Md_Bricks` .
6. Search for `MD Resort` the text replace with: `MD Bricks` .
7. Delete `phpcbf.xml`, `phpcs.xml` and `composer.json` file from theme root directory.
8. Rename class file `md-resort-theme/includes/classes/class-md-resort.php` to `md-resort-theme/includes/classes/class-md-bricks.php` .
9. Rename theme folder `md-resort-theme` to `md-bricks` .

## Build Process

---

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
npm run start
```

**Production**

```bash
npm run build
```

**Scaffold a Block**

```bash
npm run scaffold
```

You will be asked a few questions and get the base files for a block.

Steps to follow:

1. Scaffold a new block with `npm run scaffold`
2. Supply block name, eg. `Prime Demo`
3. Supply a block slug. The slug will be the name slugified, eg. `prime-demo`
4. Supply an optional description.
5. Select or search for a dashicon from provided options. eg. `smiley`.
6. Look in assets/src/blocks/prime-demo/
