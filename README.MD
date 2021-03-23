# Web UI end-to-end tests with WebDriverIO (v7)


Web UI end-to-end tests written in TypeScript using Page Components Pattern.

Page Components is oftentimes known by names Page Fragment, Page Elements, HTML Elements. Page Fragments extents the Page Objects concepts. The idea is to separate all kinds of page interactions a user can do with the page from the test. The difference is that Page Objects are encapsulating a specific page of an AUT, while Page Fragments are dealing with parts of the page, its fragments, essentially, components that are reusable across the whole test automation framework.

If you want to learn about this topic and happen to know Russian, I highly recommend watching this [talk](https://www.youtube.com/watch?v=aSmTwARoPJA) by Oleksandr Khotemskyi.

Features:
* WebdriverIO v.7
* TypeScript
* [Expect-WebdriverIO](https://github.com/webdriverio/expect-webdriverio)
* Page Fragment, Page Object Pattern
* EsLint
* AllureReport (in progress)
 
 ### :computer: Installation

Install the dependencies:

```bash
npm install
```
Compile TypeScript:
```bash
npm run build
```
Run e2e tests:

```bash
npm test
```