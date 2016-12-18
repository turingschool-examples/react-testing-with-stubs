# Testing the Hard to Test in React

## Set Up

- Clone this repository.
- `npm install`
- `npm start` or `npm test`.
- Visit http://localhost:8080/webpack-dev-server/public/index.html

## Debugging


You can use locus to debug from the terminal: https://github.com/alidavut/locus

- `npm install locus`
- Then paste the following code in your test where you want to pause time

```
require('locus')
eval(locus)
```
