# Restaurant Page

A simple restaurant website built with HTML, CSS, and JavaScript.  
The Home, Menu, and Contact pages are rendered dynamically using JavaScript modules and Webpack.

## Live Demo

https://rootadbc.github.io/HTML-CSS-JS-Project/

## Features

- Tabbed navigation without reloading the page
- Home, Menu, and Contact pages
- JavaScript DOM manipulation
- ES modules with `import` and `export`
- Webpack bundling
- CSS styling with a restaurant-inspired design
- Footer with social links

## Technologies Used

- HTML
- CSS
- JavaScript
- Webpack
- Webpack Dev Server
- HTML Webpack Plugin
- Git and GitHub Pages

## Project Structure

```text
Restaurant-Page/
├── src/
│   ├── index.js
│   ├── home.js
│   ├── menu.js
│   ├── contact.js
│   ├── styles.css
│   └── template.html
├── dist/
├── package.json
├── package-lock.json
├── webpack.config.js
└── .gitignore
```

## How to Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npx webpack serve
```

3. Open the browser at:

```text
http://localhost:8080
```

## How to Build for Production

```bash
npx webpack
```

This creates the production files inside the `dist` folder.

## How It Works

- `template.html` contains the header, navigation buttons, and an empty `#content` div.
- `home.js`, `menu.js`, and `contact.js` each create a `div` and append it to `#content`.
- `index.js` listens for clicks on the navigation buttons.
- When a button is clicked, `index.js` clears `#content` and calls the correct page module.
- Webpack bundles the JavaScript and CSS into the `dist` folder.

## Author

Created by [rootadbc](https://github.com/rootadbc)

- [GitHub](https://github.com/rootadbc)
- [LinkedIn](https://www.linkedin.com/in/rootadbc)
- [X](https://x.com/rootadbc)
- [Instagram](https://www.instagram.com/rootadbc)
