# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Social media dashboard with theme switcher solution](#frontend-mentor---social-media-dashboard-with-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

The "Social Media Dashboard with Theme Switcher" challenge from Frontend Mentor is about creating a responsive social media dashboard with a theme switcher. You'll build a layout that adapts to different screen sizes, implement a light and dark theme switch, display social media data, and add interactive elements. By completing this challenge, you'll enhance your frontend development skills and create a visually appealing and functional dashboard.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Solution URL: [Click Here](https://www.frontendmentor.io/solutions/social-media-dashboard-built-with-html-sass-mixins-and-functions-js-Q9Kl7z3zfg)
- Live Site URL: [Click Here](https://istealersn-dev.github.io/social-media-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- SaSS with mixins & functions
- Flexbox
- CSS Grid
- Mobile-first workflow
- Gulp workflow
- Javascript (toggling between dark vs light theme)

### What I learned

This was an interesting challenge, my goal was to attempt pixel perfect output and seems like I did achieve what I was looking for (share your comments at the Solution URL above). 

I learned BEM in much more detail, also learned you can define CSS custom variable inside .scss files (it was new to me!). Following were the notable things:
1. Created a mixin that set of font attributes from custom scss variable (possibly a map/tuple)
2. Understanding the base setup for dark vs light theme was something I learned
3. Setting up GULP workflow to automate compilation instead of VSCode extensions (Loved it!)

To see how you can add code snippets, see below:

```html
    <div class="toggle">
      <label for="toggle__switch">Dark Mode</label>
      <input type="checkbox" id="toggle__switch" class="toggle__input" aria-labelledby="toggle__switch">
    </div>
```
```scss
$lgNum: (
    font-weight: var(--bold),
    font-size: var(--lg-fsize),
    line-height: var(--lg-lheight)
);
```
```js
toggleSwitch.addEventListener('change', (event) => {
    const theme = event.target.checked ? 'dark' : 'light';
    toggleBg.style.background = event.target.checked ? 'var(--toggle-bg': '';

    toggleTheme(theme)
})
```

## Author

- Frontend Mentor - [@istealersn-dev](https://www.frontendmentor.io/profile/istealersn-dev)