# nibraaskhan.com

Personal site for Nibraas Khan. React + Tailwind, deployed to GitHub Pages.

## Develop

```bash
npm install
npm start
```

## Deploy

```bash
npm run deploy
```

Builds to `build/` and publishes it to the `gh-pages` branch. The custom domain
comes from `public/CNAME`.

## Layout

```
src/
  App.js              section order
  index.css           design tokens, type scale, shared classes
  components/
    Layout.js         header, nav, footer
    Section.js        section wrapper + heading
    Hero.js           name, title, summary, links
    Education.js      \
    Experience.js      | content lives in a plain array
    Publications.js    | at the top of each file
    Skills.js          |
    Service.js        /
    Contact.js        Formspree form
```

To update content, edit the array at the top of the relevant component.
