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

## Firebase

- Set up a new Firebase application.
- Replace the keys in `./lib/firebase.js`.
- Turn on Google authentication in the Firebase specification.
- Add the name of your project as the default in the .firebaserc file. This is the name you gave it in firebase, plus the string of characters that firebase appended, e.g. "shoot-the-breeze-aa5d9" 
