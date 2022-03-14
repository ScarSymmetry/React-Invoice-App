# Frontend Mentor - Invoice app solution

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

- with-redux:[https://github.com/ScarSymmetry/React-Invoice-App/tree/with-redux] with-redux branch using Redux Toolkit
- master:[https://github.com/ScarSymmetry/React-Invoice-App/tree/master] master branch is built using useReducer and useContext. The UI and filters persist state aswell which is not really optimal for the UX. 
### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./preview.jpg)



### Links

- Solution URL: [Solution on FEM](https://www.frontendmentor.io/solutions/invoiceapp-using-react-reduxtoolkitreacthookformand-scss-modules-dHexU4QmJ)
- Live Site URL: [Vercel](https://react-invoice-app-lyart.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- SCSS-modules.
- [react-hook-form](https://react-hook-form.com)
- [redux-toolkit](https://redux-toolkit.js.org)
- [framer motion](https://www.framer.com/motion/)
- redux-persist



### What I learned

Tried the new way of writing redux logic with immer under the hood. I cant say i`ve learned framer-motion as i didnt really focus on it , but its a fantastic tool that eliminates all the "unmount" pain.

### Continued development

Haven`t finished mount/unmount animations with framer-motion yet. Also there is a small problem with the date and Yup not validating properly. Flashing theme on reload is annoying.Accessibility is bad as i didnt focus on it.



## Author

- Github - [ScarSymmetry](https://github.com/ScarSymmetry)
- Frontend Mentor - [ScarSymmetry](https://www.frontendmentor.io/profile/ScarSymmetry)




## Acknowledgments

Big thanks to Mark Erikson himself for helping me out with the setValue bug, thanks to the whole Reactiflux and frontend horse community.
