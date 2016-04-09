# Taxi Fee

Code in this folder is the practice of https://github.com/thoughtworks-academy/dojo/tree/master/taxi-fee. It is a TDD code dojo practice. View the code history to see the whole TDD process. Due to repo restructure reason, commit history for this folder is in repo root.

## Run the code
Code is written in JavaScript, [NodeJS](https://nodejs.org/en/), [NPM](https://www.npmjs.com/) and [Mocha](http://mochajs.org/) are required to run the code
```
npm install
mocha
```
Example output:
```
  taxiFee#charge
    ✓ should charge 6 RMB within 2 kilometers without waiting time
    ✓ should charge 0.25 RMB per waiting minute
    ✓ should charge 0.8 RMB per kilometer within 8 kilometers
    ✓ should charge 1.2 RMB per kilometer for distances over 8 kilometers
    ✓ should throw error when given an invalid distance
    ✓ should throw error when given an invalid waiting time


  6 passing (19ms)
```

To run test in watch mode:
```
mocha watch
```
